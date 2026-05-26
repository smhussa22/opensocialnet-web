// Standalone test: connect to the gateway as 'alice', send FetchHistory for
// 'general', print the response. Bypasses React entirely.
import WebSocket from "ws";
import { signaling } from "../lib/proto/signaling.js";

const URL = "ws://localhost:9001/gateway";
const USER = "alice";
const CHANNEL = "general";

const ws = new WebSocket(URL);
ws.binaryType = "arraybuffer";

function send(env) {
  const bytes = signaling.Envelope.encode(signaling.Envelope.create(env)).finish();
  ws.send(bytes);
}

ws.on("open", () => {
  console.log("[ws] open -> sending Hello");
  send({ seq: 1, hello: signaling.Hello.create({ userId: USER, authToken: "" }) });
});

ws.on("message", (data) => {
  const buf = data instanceof ArrayBuffer ? new Uint8Array(data) : new Uint8Array(data);
  const env = signaling.Envelope.decode(buf);
  console.log("[ws] frame payload=", env.payload);
  if (env.payload === "ready") {
    console.log("    ready.session_id=", env.ready.sessionId);
    console.log("    ready.channels=", env.ready.channelIds);
    console.log("[ws] sending FetchHistory for", CHANNEL);
    send({
      seq: 2,
      fetchHistory: signaling.FetchHistory.create({
        requestId: "test-1",
        channelId: CHANNEL,
        beforeMessageId: "",
        limit: 50,
      }),
    });
  } else if (env.payload === "historyResponse") {
    const msgs = env.historyResponse.msgs ?? [];
    console.log("    history.msgs.length=", msgs.length);
    for (const m of msgs.slice(0, 5)) {
      console.log("    -", m.senderId, ":", JSON.stringify(m.content), "@", m.messageId);
    }
    if (msgs.length > 5) console.log("    ... (+", msgs.length - 5, "more)");
    ws.close();
  } else if (env.payload === "error") {
    console.log("    error.code=", env.error.code, "msg=", env.error.message);
    ws.close();
  }
});

ws.on("close", (code) => {
  console.log("[ws] close code=", code);
  process.exit(0);
});

ws.on("error", (e) => {
  console.error("[ws] error", e);
  process.exit(1);
});
