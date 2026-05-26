// Typed WebSocket client for the signaling gateway.
// Each WS frame is one binary protobuf `Envelope`.

import { signaling } from "@/lib/proto/signaling";

export type Ready = signaling.Ready.$Shape;
export type ChatMessageEvent = signaling.ChatMessageEvent.$Shape;
export type HistoryResponse = signaling.HistoryResponse.$Shape;
export type ErrorEvent = signaling.ErrorEvent.$Shape;
export type VoicePeerJoined = signaling.VoicePeerJoined.$Shape;
export type VoicePeerLeft = signaling.VoicePeerLeft.$Shape;

export type GatewayCallbacks = {
  onOpen?: () => void;
  onReady?: (ready: Ready) => void;
  onChatMessage?: (msg: ChatMessageEvent) => void;
  onHistoryResponse?: (resp: HistoryResponse) => void;
  onError?: (err: ErrorEvent) => void;
  onVoicePeerJoined?: (evt: VoicePeerJoined) => void;
  onVoicePeerLeft?: (evt: VoicePeerLeft) => void;
  onClose?: (ev: CloseEvent) => void;
  onSocketError?: (ev: Event) => void;
};

export type GatewayClientOptions = {
  url?: string;
  userId: string;
  authToken?: string;
  callbacks?: GatewayCallbacks;
};

const DEFAULT_URL = "ws://localhost:9001/gateway";

export class GatewayClient {
  private ws: WebSocket | null = null;
  private readonly url: string;
  private readonly userId: string;
  private readonly authToken: string;
  private readonly cb: GatewayCallbacks;
  private seq = 0;

  constructor(opts: GatewayClientOptions) {
    this.url = opts.url ?? DEFAULT_URL;
    this.userId = opts.userId;
    this.authToken = opts.authToken ?? "";
    this.cb = opts.callbacks ?? {};
  }

  connect(): void {
    if (this.ws) return;
    const ws = new WebSocket(this.url);
    ws.binaryType = "arraybuffer";
    this.ws = ws;

    ws.onopen = () => {
      this.cb.onOpen?.();
      // First frame must be Hello.
      this.sendEnvelope({
        hello: signaling.Hello.create({
          userId: this.userId,
          authToken: this.authToken,
        }),
      });
    };

    ws.onmessage = (ev: MessageEvent) => {
      const data = ev.data;
      if (!(data instanceof ArrayBuffer)) {
        // Server should only send binary frames; ignore anything else.
        return;
      }
      const bytes = new Uint8Array(data);
      let env: signaling.Envelope;
      try {
        env = signaling.Envelope.decode(bytes);
      } catch (e) {
        // Swallow malformed frames; surface as a synthetic error.
        this.cb.onError?.({
          code: 0,
          message: `Failed to decode envelope: ${(e as Error).message}`,
        });
        return;
      }
      this.dispatch(env);
    };

    ws.onerror = (ev) => {
      this.cb.onSocketError?.(ev);
    };

    ws.onclose = (ev) => {
      this.ws = null;
      this.cb.onClose?.(ev);
    };
  }

  private dispatch(env: signaling.Envelope): void {
    switch (env.payload) {
      case "ready":
        if (env.ready) this.cb.onReady?.(env.ready);
        return;
      case "chatMessageEvent":
        if (env.chatMessageEvent) this.cb.onChatMessage?.(env.chatMessageEvent);
        return;
      case "historyResponse":
        if (env.historyResponse)
          this.cb.onHistoryResponse?.(env.historyResponse);
        return;
      case "error":
        if (env.error) this.cb.onError?.(env.error);
        return;
      case "voicePeerJoined":
        if (env.voicePeerJoined)
          this.cb.onVoicePeerJoined?.(env.voicePeerJoined);
        return;
      case "voicePeerLeft":
        if (env.voicePeerLeft) this.cb.onVoicePeerLeft?.(env.voicePeerLeft);
        return;
      case "heartbeatAck":
        // No-op for now.
        return;
      default:
        return;
    }
  }

  sendMessage(channelId: string, content: string): string {
    const clientNonce =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    this.sendEnvelope({
      sendMessage: signaling.SendMessage.create({
        clientNonce,
        channelId,
        content,
      }),
    });
    return clientNonce;
  }

  fetchHistory(
    channelId: string,
    beforeMessageId?: string,
    limit?: number,
  ): string {
    const requestId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    this.sendEnvelope({
      fetchHistory: signaling.FetchHistory.create({
        requestId,
        channelId,
        beforeMessageId: beforeMessageId ?? "",
        limit: limit ?? 0,
      }),
    });
    return requestId;
  }

  joinVoice(channelId: string): void {
    this.sendEnvelope({
      joinVoice: signaling.JoinVoice.create({ channelId }),
    });
  }

  leaveVoice(channelId: string): void {
    this.sendEnvelope({
      leaveVoice: signaling.LeaveVoice.create({ channelId }),
    });
  }

  close(): void {
    const ws = this.ws;
    this.ws = null;
    if (ws && ws.readyState <= WebSocket.OPEN) {
      // Detach handlers so we don't fire onClose after explicit close.
      ws.onopen = null;
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
      try {
        ws.close();
      } catch {
        // ignore
      }
    }
  }

  private sendEnvelope(payload: signaling.Envelope.$Shape): void {
    const ws = this.ws;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    const env = signaling.Envelope.create({
      seq: ++this.seq,
      ...payload,
    });
    const bytes = signaling.Envelope.encode(env).finish();
    // .finish() returns a Uint8Array; .buffer may be larger than .byteLength
    // when the writer pre-allocates, so slice the exact window.
    const view = bytes.buffer.slice(
      bytes.byteOffset,
      bytes.byteOffset + bytes.byteLength,
    );
    ws.send(view);
  }
}
