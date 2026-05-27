"use client";

import { useState } from "react";
import { useGateway } from "@/lib/useGateway";

const styles = {
  page: {
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    maxWidth: 880,
    margin: "0 auto",
    padding: "24px 20px 48px",
    color: "#1a1a1a",
  } as const,
  h1: {
    fontSize: 22,
    fontWeight: 600,
    marginBottom: 16,
  } as const,
  card: {
    border: "1px solid #d0d0d0",
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    background: "#fafafa",
  } as const,
  row: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    flexWrap: "wrap",
  } as const,
  input: {
    padding: "6px 8px",
    border: "1px solid #b0b0b0",
    borderRadius: 4,
    fontSize: 14,
    minWidth: 180,
  } as const,
  button: {
    padding: "6px 12px",
    border: "1px solid #1f6feb",
    background: "#1f6feb",
    color: "#fff",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 14,
  } as const,
  buttonDisabled: {
    padding: "6px 12px",
    border: "1px solid #aaa",
    background: "#ccc",
    color: "#666",
    borderRadius: 4,
    cursor: "not-allowed",
    fontSize: 14,
  } as const,
  secondary: {
    padding: "6px 12px",
    border: "1px solid #888",
    background: "#fff",
    color: "#1a1a1a",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 14,
  } as const,
  label: { fontSize: 13, color: "#555", marginRight: 6 } as const,
  msg: {
    border: "1px solid #e0e0e0",
    borderRadius: 4,
    padding: "6px 10px",
    marginBottom: 4,
    background: "#fff",
    fontSize: 13,
  } as const,
  errorRow: {
    color: "#a40000",
    fontSize: 13,
    marginBottom: 4,
  } as const,
  mono: { fontFamily: "ui-monospace, Menlo, Consolas, monospace" } as const,
};

function formatTimestamp(ts: number | Long | null | undefined): string {
  if (ts == null) return "";
  // protobufjs returns int64 as Long when not configured otherwise; we
  // configured pbjs with `-w es6` (no force-number) so coerce to number.
  const ms =
    typeof ts === "number" ? ts : Number((ts as { toString(): string }).toString());
  if (!Number.isFinite(ms) || ms <= 0) return "";
  try {
    return new Date(ms).toISOString();
  } catch {
    return String(ms);
  }
}

// Minimal Long surface so we don't need @types/long here.
type Long = { toString(): string };

export default function Home() {
  const gw = useGateway();
  const [userId, setUserId] = useState("alice");
  const [authToken, setAuthToken] = useState("");
  const [channelId, setChannelId] = useState("general");
  const [draft, setDraft] = useState("");

  const isConnected = gw.status === "connected";
  const isConnecting = gw.status === "connecting";
  const canConnect = !isConnected && !isConnecting && userId.trim().length > 0 && authToken.trim().length > 0;

  const handleConnect = () => {
    if (!canConnect) return;
    gw.connect(userId.trim(), authToken.trim());
  };

  const handleSend = () => {
    if (!isConnected) return;
    const ch = channelId.trim();
    const content = draft.trim();
    if (!ch || !content) return;
    gw.sendMessage(ch, content);
    setDraft("");
  };

  const handleFetchHistory = () => {
    if (!isConnected) return;
    const ch = channelId.trim();
    if (!ch) return;
    gw.fetchHistory(ch, undefined, 50);
  };

  // Find the lexicographically smallest messageId across all loaded messages.
  // TimeUUIDs are time-sortable as strings, so the min string == the oldest.
  // We scan the full array (rather than reading messages[0]) because history
  // is prepended while live messages are appended, so order is not guaranteed.
  const oldestMessageId = (() => {
    let oldest: string | undefined;
    for (const m of gw.messages) {
      const id = m.messageId ?? undefined;
      if (!id) continue;
      if (oldest === undefined || id < oldest) oldest = id;
    }
    return oldest;
  })();

  const canLoadOlder = isConnected && oldestMessageId !== undefined;

  const handleLoadOlder = () => {
    if (!canLoadOlder) return;
    const ch = channelId.trim();
    if (!ch) return;
    gw.fetchHistory(ch, oldestMessageId, 50);
  };

  const lastHistoryCount = (gw as { lastHistoryCount?: number | null })
    .lastHistoryCount ?? null;

  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>OpenSocialNet — Gateway Test Client</h1>

      <section style={styles.card}>
        <div style={styles.row}>
          <span style={styles.label}>user_id</span>
          <input
            style={styles.input}
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            disabled={isConnected || isConnecting}
            placeholder="user id"
          />
          <span style={styles.label}>auth_token</span>
          <input
            style={{ ...styles.input, ...styles.mono, minWidth: 360 }}
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
            disabled={isConnected || isConnecting}
            placeholder="hmac-sha256(secret, user_id) hex"
          />
          <button
            style={canConnect ? styles.button : styles.buttonDisabled}
            onClick={handleConnect}
            disabled={!canConnect}
          >
            Connect
          </button>
          {isConnected || isConnecting ? (
            <button style={styles.secondary} onClick={gw.disconnect}>
              Disconnect
            </button>
          ) : null}
          <span style={styles.label}>status:</span>
          <span style={styles.mono}>{gw.status}</span>
        </div>
      </section>

      {gw.ready ? (
        <section style={styles.card}>
          <div>
            <strong>Session:</strong>{" "}
            <span style={styles.mono}>{gw.ready.sessionId ?? ""}</span>
          </div>
          <div style={{ marginTop: 6 }}>
            <strong>Channels:</strong>{" "}
            {(gw.ready.channelIds ?? []).length > 0 ? (
              <span style={styles.mono}>
                {(gw.ready.channelIds ?? []).join(", ")}
              </span>
            ) : (
              <em>(none)</em>
            )}
          </div>
        </section>
      ) : null}

      <section style={styles.card}>
        <div style={styles.row}>
          <span style={styles.label}>channel_id</span>
          <input
            style={styles.input}
            value={channelId}
            onChange={(e) => setChannelId(e.target.value)}
            placeholder="channel id"
          />
          <button
            style={isConnected ? styles.secondary : styles.buttonDisabled}
            disabled={!isConnected}
            onClick={handleFetchHistory}
          >
            Fetch History
          </button>
          <button
            style={canLoadOlder ? styles.secondary : styles.buttonDisabled}
            disabled={!canLoadOlder}
            onClick={handleLoadOlder}
          >
            Load Older
          </button>
        </div>
        {lastHistoryCount !== null ? (
          <div style={{ ...styles.label, marginTop: 6 }}>
            Last fetch: {lastHistoryCount} messages
          </div>
        ) : null}
        <div style={{ ...styles.row, marginTop: 8 }}>
          <input
            style={{ ...styles.input, flex: 1, minWidth: 260 }}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="message..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={!isConnected}
          />
          <button
            style={
              isConnected && draft.trim() && channelId.trim()
                ? styles.button
                : styles.buttonDisabled
            }
            disabled={!isConnected || !draft.trim() || !channelId.trim()}
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </section>

      <section style={styles.card}>
        <div style={{ marginBottom: 8, fontWeight: 600 }}>
          Messages ({gw.messages.length})
        </div>
        {gw.messages.length === 0 ? (
          <em style={{ color: "#888" }}>No messages yet.</em>
        ) : (
          gw.messages.map((m, i) => (
            <div key={`${m.messageId ?? ""}-${i}`} style={styles.msg}>
              <div>
                <span style={styles.mono}>{m.senderId ?? ""}</span>
                <span style={{ color: "#888" }}>
                  {" "}
                  in <span style={styles.mono}>{m.channelId ?? ""}</span>
                </span>
                <span style={{ color: "#888", marginLeft: 8 }}>
                  {formatTimestamp(m.timestampMs as number | Long | null)}
                </span>
              </div>
              <div>{m.content ?? ""}</div>
            </div>
          ))
        )}
      </section>

      {gw.errors.length > 0 ? (
        <section style={styles.card}>
          <div style={{ marginBottom: 8, fontWeight: 600 }}>Errors</div>
          {gw.errors.map((e, i) => (
            <div key={i} style={styles.errorRow}>
              {e}
            </div>
          ))}
        </section>
      ) : null}
    </div>
  );
}
