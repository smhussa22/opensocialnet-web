"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  GatewayClient,
  type ChatMessageEvent,
  type ErrorEvent as GatewayErrorEvent,
  type HistoryResponse,
  type Ready,
} from "@/lib/gateway";

export type GatewayStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "closed"
  | "error";

export type UseGateway = {
  status: GatewayStatus;
  ready: Ready | null;
  messages: ChatMessageEvent[];
  errors: string[];
  lastHistoryCount: number | null;
  connect: (userId: string, authToken?: string) => void;
  disconnect: () => void;
  sendMessage: (channelId: string, content: string) => void;
  fetchHistory: (
    channelId: string,
    beforeMessageId?: string,
    limit?: number,
  ) => void;
};

export function useGateway(url?: string): UseGateway {
  const clientRef = useRef<GatewayClient | null>(null);
  const [status, setStatus] = useState<GatewayStatus>("idle");
  const [ready, setReady] = useState<Ready | null>(null);
  const [messages, setMessages] = useState<ChatMessageEvent[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [lastHistoryCount, setLastHistoryCount] = useState<number | null>(null);

  const teardown = useCallback(() => {
    const client = clientRef.current;
    clientRef.current = null;
    if (client) client.close();
  }, []);

  const connect = useCallback(
    (userId: string, authToken?: string) => {
      if (clientRef.current) return;
      setStatus("connecting");
      setReady(null);
      setMessages([]);
      setErrors([]);
      setLastHistoryCount(null);

      const client = new GatewayClient({
        url,
        userId,
        authToken,
        callbacks: {
          onOpen: () => setStatus("connecting"),
          onReady: (r) => {
            setReady(r);
            setStatus("connected");
          },
          onChatMessage: (m) => {
            setMessages((prev) => [...prev, m]);
          },
          onHistoryResponse: (resp) => {
            const msgs = resp.msgs ?? [];
            setLastHistoryCount(msgs.length);
            if (msgs.length === 0) return;
            // Prepend older messages (history is older-than-cursor).
            setMessages((prev) => [...msgs, ...prev]);
          },
          onError: (e: GatewayErrorEvent) => {
            setErrors((prev) => [
              ...prev,
              `[${e.code ?? 0}] ${e.message ?? "unknown error"}`,
            ]);
          },
          onSocketError: () => {
            setStatus("error");
          },
          onClose: () => {
            clientRef.current = null;
            setStatus("closed");
          },
        },
      });
      clientRef.current = client;
      client.connect();
    },
    [url],
  );

  const disconnect = useCallback(() => {
    teardown();
    setStatus("closed");
  }, [teardown]);

  const sendMessage = useCallback((channelId: string, content: string) => {
    clientRef.current?.sendMessage(channelId, content);
  }, []);

  const fetchHistory = useCallback(
    (channelId: string, beforeMessageId?: string, limit?: number) => {
      clientRef.current?.fetchHistory(channelId, beforeMessageId, limit);
    },
    [],
  );

  // Clean up on unmount.
  useEffect(() => {
    return () => {
      teardown();
    };
  }, [teardown]);

  return {
    status,
    ready,
    messages,
    errors,
    lastHistoryCount,
    connect,
    disconnect,
    sendMessage,
    fetchHistory,
  };
}
