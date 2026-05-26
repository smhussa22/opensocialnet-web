import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace signaling. */
export namespace signaling {

    /**
     * Properties of an Envelope.
     * @deprecated Use signaling.Envelope.$Properties instead.
     */
    interface IEnvelope extends signaling.Envelope.$Properties {
    }

    /** Represents an Envelope. */
    class Envelope {

        /**
         * Constructs a new Envelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.Envelope.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Envelope seq. */
        seq: (number|Long);

        /** Envelope hello. */
        hello?: (signaling.Hello.$Properties|null);

        /** Envelope heartbeat. */
        heartbeat?: (signaling.Heartbeat.$Properties|null);

        /** Envelope sendMessage. */
        sendMessage?: (signaling.SendMessage.$Properties|null);

        /** Envelope fetchHistory. */
        fetchHistory?: (signaling.FetchHistory.$Properties|null);

        /** Envelope joinVoice. */
        joinVoice?: (signaling.JoinVoice.$Properties|null);

        /** Envelope leaveVoice. */
        leaveVoice?: (signaling.LeaveVoice.$Properties|null);

        /** Envelope ready. */
        ready?: (signaling.Ready.$Properties|null);

        /** Envelope heartbeatAck. */
        heartbeatAck?: (signaling.HeartbeatAck.$Properties|null);

        /** Envelope chatMessageEvent. */
        chatMessageEvent?: (signaling.ChatMessageEvent.$Properties|null);

        /** Envelope historyResponse. */
        historyResponse?: (signaling.HistoryResponse.$Properties|null);

        /** Envelope voicePeerJoined. */
        voicePeerJoined?: (signaling.VoicePeerJoined.$Properties|null);

        /** Envelope voicePeerLeft. */
        voicePeerLeft?: (signaling.VoicePeerLeft.$Properties|null);

        /** Envelope error. */
        error?: (signaling.ErrorEvent.$Properties|null);

        /** Envelope payload. */
        payload?: ("hello"|"heartbeat"|"sendMessage"|"fetchHistory"|"joinVoice"|"leaveVoice"|"ready"|"heartbeatAck"|"chatMessageEvent"|"historyResponse"|"voicePeerJoined"|"voicePeerLeft"|"error");

        /**
         * Creates a new Envelope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Envelope instance
         */
        static create(properties: signaling.Envelope.$Shape): signaling.Envelope & signaling.Envelope.$Shape;
        static create(properties?: signaling.Envelope.$Properties): signaling.Envelope;

        /**
         * Encodes the specified Envelope message. Does not implicitly {@link signaling.Envelope.verify|verify} messages.
         * @param message Envelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.Envelope.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Envelope message, length delimited. Does not implicitly {@link signaling.Envelope.verify|verify} messages.
         * @param message Envelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.Envelope.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Envelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.Envelope & signaling.Envelope.$Shape} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.Envelope & signaling.Envelope.$Shape;

        /**
         * Decodes an Envelope message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.Envelope & signaling.Envelope.$Shape} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.Envelope & signaling.Envelope.$Shape;

        /**
         * Verifies an Envelope message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Envelope
         */
        static fromObject(object: { [k: string]: any }): signaling.Envelope;

        /**
         * Creates a plain object from an Envelope message. Also converts values to other types if specified.
         * @param message Envelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Envelope to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Envelope
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Envelope {

        /** Properties of an Envelope. */
        interface $Properties {

            /** Envelope seq */
            seq?: (number|Long|null);

            /** Envelope hello */
            hello?: (signaling.Hello.$Properties|null);

            /** Envelope heartbeat */
            heartbeat?: (signaling.Heartbeat.$Properties|null);

            /** Envelope sendMessage */
            sendMessage?: (signaling.SendMessage.$Properties|null);

            /** Envelope fetchHistory */
            fetchHistory?: (signaling.FetchHistory.$Properties|null);

            /** Envelope joinVoice */
            joinVoice?: (signaling.JoinVoice.$Properties|null);

            /** Envelope leaveVoice */
            leaveVoice?: (signaling.LeaveVoice.$Properties|null);

            /** Envelope ready */
            ready?: (signaling.Ready.$Properties|null);

            /** Envelope heartbeatAck */
            heartbeatAck?: (signaling.HeartbeatAck.$Properties|null);

            /** Envelope chatMessageEvent */
            chatMessageEvent?: (signaling.ChatMessageEvent.$Properties|null);

            /** Envelope historyResponse */
            historyResponse?: (signaling.HistoryResponse.$Properties|null);

            /** Envelope voicePeerJoined */
            voicePeerJoined?: (signaling.VoicePeerJoined.$Properties|null);

            /** Envelope voicePeerLeft */
            voicePeerLeft?: (signaling.VoicePeerLeft.$Properties|null);

            /** Envelope error */
            error?: (signaling.ErrorEvent.$Properties|null);

            /** Envelope payload */
            payload?: ("hello"|"heartbeat"|"sendMessage"|"fetchHistory"|"joinVoice"|"leaveVoice"|"ready"|"heartbeatAck"|"chatMessageEvent"|"historyResponse"|"voicePeerJoined"|"voicePeerLeft"|"error");

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Narrowed shape of an Envelope. */
        type $Shape = {
  seq?: number|Long|null;
  hello?: signaling.Hello.$Shape|null;
  heartbeat?: signaling.Heartbeat.$Shape|null;
  sendMessage?: signaling.SendMessage.$Shape|null;
  fetchHistory?: signaling.FetchHistory.$Shape|null;
  joinVoice?: signaling.JoinVoice.$Shape|null;
  leaveVoice?: signaling.LeaveVoice.$Shape|null;
  ready?: signaling.Ready.$Shape|null;
  heartbeatAck?: signaling.HeartbeatAck.$Shape|null;
  chatMessageEvent?: signaling.ChatMessageEvent.$Shape|null;
  historyResponse?: signaling.HistoryResponse.$Shape|null;
  voicePeerJoined?: signaling.VoicePeerJoined.$Shape|null;
  voicePeerLeft?: signaling.VoicePeerLeft.$Shape|null;
  error?: signaling.ErrorEvent.$Shape|null;
  $unknowns?: Uint8Array[];
} & (
  ({ payload?: undefined; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "hello"; hello: signaling.Hello.$Shape; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "heartbeat"; hello?: null; heartbeat: signaling.Heartbeat.$Shape; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "sendMessage"; hello?: null; heartbeat?: null; sendMessage: signaling.SendMessage.$Shape; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "fetchHistory"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory: signaling.FetchHistory.$Shape; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "joinVoice"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice: signaling.JoinVoice.$Shape; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "leaveVoice"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice: signaling.LeaveVoice.$Shape; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "ready"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready: signaling.Ready.$Shape; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "heartbeatAck"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck: signaling.HeartbeatAck.$Shape; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "chatMessageEvent"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent: signaling.ChatMessageEvent.$Shape; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "historyResponse"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse: signaling.HistoryResponse.$Shape; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "voicePeerJoined"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined: signaling.VoicePeerJoined.$Shape; voicePeerLeft?: null; error?: null }|{ payload?: "voicePeerLeft"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft: signaling.VoicePeerLeft.$Shape; error?: null }|{ payload?: "error"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error: signaling.ErrorEvent.$Shape })
);
    }

    /**
     * Properties of a Hello.
     * @deprecated Use signaling.Hello.$Properties instead.
     */
    interface IHello extends signaling.Hello.$Properties {
    }

    /** Represents a Hello. */
    class Hello {

        /**
         * Constructs a new Hello.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.Hello.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Hello userId. */
        userId: string;

        /** Hello authToken. */
        authToken: string;

        /**
         * Creates a new Hello instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hello instance
         */
        static create(properties: signaling.Hello.$Shape): signaling.Hello & signaling.Hello.$Shape;
        static create(properties?: signaling.Hello.$Properties): signaling.Hello;

        /**
         * Encodes the specified Hello message. Does not implicitly {@link signaling.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.Hello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hello message, length delimited. Does not implicitly {@link signaling.Hello.verify|verify} messages.
         * @param message Hello message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.Hello.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hello message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.Hello & signaling.Hello.$Shape} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.Hello & signaling.Hello.$Shape;

        /**
         * Decodes a Hello message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.Hello & signaling.Hello.$Shape} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.Hello & signaling.Hello.$Shape;

        /**
         * Verifies a Hello message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hello message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hello
         */
        static fromObject(object: { [k: string]: any }): signaling.Hello;

        /**
         * Creates a plain object from a Hello message. Also converts values to other types if specified.
         * @param message Hello
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.Hello, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hello to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Hello
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Hello {

        /** Properties of a Hello. */
        interface $Properties {

            /** Hello userId */
            userId?: (string|null);

            /** Hello authToken */
            authToken?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Hello. */
        type $Shape = signaling.Hello.$Properties;
    }

    /**
     * Properties of a Ready.
     * @deprecated Use signaling.Ready.$Properties instead.
     */
    interface IReady extends signaling.Ready.$Properties {
    }

    /** Represents a Ready. */
    class Ready {

        /**
         * Constructs a new Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.Ready.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Ready sessionId. */
        sessionId: string;

        /** Ready channelIds. */
        channelIds: string[];

        /**
         * Creates a new Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ready instance
         */
        static create(properties: signaling.Ready.$Shape): signaling.Ready & signaling.Ready.$Shape;
        static create(properties?: signaling.Ready.$Properties): signaling.Ready;

        /**
         * Encodes the specified Ready message. Does not implicitly {@link signaling.Ready.verify|verify} messages.
         * @param message Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.Ready.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link signaling.Ready.verify|verify} messages.
         * @param message Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.Ready.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.Ready & signaling.Ready.$Shape} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.Ready & signaling.Ready.$Shape;

        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.Ready & signaling.Ready.$Shape} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.Ready & signaling.Ready.$Shape;

        /**
         * Verifies a Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ready message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ready
         */
        static fromObject(object: { [k: string]: any }): signaling.Ready;

        /**
         * Creates a plain object from a Ready message. Also converts values to other types if specified.
         * @param message Ready
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.Ready, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ready to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Ready
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Ready {

        /** Properties of a Ready. */
        interface $Properties {

            /** Ready sessionId */
            sessionId?: (string|null);

            /** Ready channelIds */
            channelIds?: (string[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Ready. */
        type $Shape = signaling.Ready.$Properties;
    }

    /**
     * Properties of a Heartbeat.
     * @deprecated Use signaling.Heartbeat.$Properties instead.
     */
    interface IHeartbeat extends signaling.Heartbeat.$Properties {
    }

    /** Represents a Heartbeat. */
    class Heartbeat {

        /**
         * Constructs a new Heartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.Heartbeat.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** Heartbeat nonce. */
        nonce: (number|Long);

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heartbeat instance
         */
        static create(properties: signaling.Heartbeat.$Shape): signaling.Heartbeat & signaling.Heartbeat.$Shape;
        static create(properties?: signaling.Heartbeat.$Properties): signaling.Heartbeat;

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link signaling.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.Heartbeat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link signaling.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.Heartbeat.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.Heartbeat & signaling.Heartbeat.$Shape} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.Heartbeat & signaling.Heartbeat.$Shape;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.Heartbeat & signaling.Heartbeat.$Shape} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.Heartbeat & signaling.Heartbeat.$Shape;

        /**
         * Verifies a Heartbeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Heartbeat
         */
        static fromObject(object: { [k: string]: any }): signaling.Heartbeat;

        /**
         * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
         * @param message Heartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.Heartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Heartbeat to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for Heartbeat
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace Heartbeat {

        /** Properties of a Heartbeat. */
        interface $Properties {

            /** Heartbeat nonce */
            nonce?: (number|Long|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a Heartbeat. */
        type $Shape = signaling.Heartbeat.$Properties;
    }

    /**
     * Properties of a HeartbeatAck.
     * @deprecated Use signaling.HeartbeatAck.$Properties instead.
     */
    interface IHeartbeatAck extends signaling.HeartbeatAck.$Properties {
    }

    /** Represents a HeartbeatAck. */
    class HeartbeatAck {

        /**
         * Constructs a new HeartbeatAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.HeartbeatAck.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** HeartbeatAck nonce. */
        nonce: (number|Long);

        /**
         * Creates a new HeartbeatAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatAck instance
         */
        static create(properties: signaling.HeartbeatAck.$Shape): signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape;
        static create(properties?: signaling.HeartbeatAck.$Properties): signaling.HeartbeatAck;

        /**
         * Encodes the specified HeartbeatAck message. Does not implicitly {@link signaling.HeartbeatAck.verify|verify} messages.
         * @param message HeartbeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.HeartbeatAck.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatAck message, length delimited. Does not implicitly {@link signaling.HeartbeatAck.verify|verify} messages.
         * @param message HeartbeatAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.HeartbeatAck.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape;

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape;

        /**
         * Verifies a HeartbeatAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatAck
         */
        static fromObject(object: { [k: string]: any }): signaling.HeartbeatAck;

        /**
         * Creates a plain object from a HeartbeatAck message. Also converts values to other types if specified.
         * @param message HeartbeatAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.HeartbeatAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatAck to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HeartbeatAck
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HeartbeatAck {

        /** Properties of a HeartbeatAck. */
        interface $Properties {

            /** HeartbeatAck nonce */
            nonce?: (number|Long|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HeartbeatAck. */
        type $Shape = signaling.HeartbeatAck.$Properties;
    }

    /**
     * Properties of a SendMessage.
     * @deprecated Use signaling.SendMessage.$Properties instead.
     */
    interface ISendMessage extends signaling.SendMessage.$Properties {
    }

    /** Represents a SendMessage. */
    class SendMessage {

        /**
         * Constructs a new SendMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.SendMessage.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** SendMessage clientNonce. */
        clientNonce: string;

        /** SendMessage channelId. */
        channelId: string;

        /** SendMessage content. */
        content: string;

        /**
         * Creates a new SendMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMessage instance
         */
        static create(properties: signaling.SendMessage.$Shape): signaling.SendMessage & signaling.SendMessage.$Shape;
        static create(properties?: signaling.SendMessage.$Properties): signaling.SendMessage;

        /**
         * Encodes the specified SendMessage message. Does not implicitly {@link signaling.SendMessage.verify|verify} messages.
         * @param message SendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.SendMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMessage message, length delimited. Does not implicitly {@link signaling.SendMessage.verify|verify} messages.
         * @param message SendMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.SendMessage.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.SendMessage & signaling.SendMessage.$Shape} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.SendMessage & signaling.SendMessage.$Shape;

        /**
         * Decodes a SendMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.SendMessage & signaling.SendMessage.$Shape} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.SendMessage & signaling.SendMessage.$Shape;

        /**
         * Verifies a SendMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMessage
         */
        static fromObject(object: { [k: string]: any }): signaling.SendMessage;

        /**
         * Creates a plain object from a SendMessage message. Also converts values to other types if specified.
         * @param message SendMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.SendMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMessage to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for SendMessage
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace SendMessage {

        /** Properties of a SendMessage. */
        interface $Properties {

            /** SendMessage clientNonce */
            clientNonce?: (string|null);

            /** SendMessage channelId */
            channelId?: (string|null);

            /** SendMessage content */
            content?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a SendMessage. */
        type $Shape = signaling.SendMessage.$Properties;
    }

    /**
     * Properties of a ChatMessageEvent.
     * @deprecated Use signaling.ChatMessageEvent.$Properties instead.
     */
    interface IChatMessageEvent extends signaling.ChatMessageEvent.$Properties {
    }

    /** Represents a ChatMessageEvent. */
    class ChatMessageEvent {

        /**
         * Constructs a new ChatMessageEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.ChatMessageEvent.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ChatMessageEvent messageId. */
        messageId: string;

        /** ChatMessageEvent clientNonce. */
        clientNonce: string;

        /** ChatMessageEvent channelId. */
        channelId: string;

        /** ChatMessageEvent senderId. */
        senderId: string;

        /** ChatMessageEvent content. */
        content: string;

        /** ChatMessageEvent timestampMs. */
        timestampMs: (number|Long);

        /**
         * Creates a new ChatMessageEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessageEvent instance
         */
        static create(properties: signaling.ChatMessageEvent.$Shape): signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape;
        static create(properties?: signaling.ChatMessageEvent.$Properties): signaling.ChatMessageEvent;

        /**
         * Encodes the specified ChatMessageEvent message. Does not implicitly {@link signaling.ChatMessageEvent.verify|verify} messages.
         * @param message ChatMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.ChatMessageEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessageEvent message, length delimited. Does not implicitly {@link signaling.ChatMessageEvent.verify|verify} messages.
         * @param message ChatMessageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.ChatMessageEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessageEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape} ChatMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape;

        /**
         * Decodes a ChatMessageEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape} ChatMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape;

        /**
         * Verifies a ChatMessageEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessageEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessageEvent
         */
        static fromObject(object: { [k: string]: any }): signaling.ChatMessageEvent;

        /**
         * Creates a plain object from a ChatMessageEvent message. Also converts values to other types if specified.
         * @param message ChatMessageEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.ChatMessageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessageEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ChatMessageEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ChatMessageEvent {

        /** Properties of a ChatMessageEvent. */
        interface $Properties {

            /** ChatMessageEvent messageId */
            messageId?: (string|null);

            /** ChatMessageEvent clientNonce */
            clientNonce?: (string|null);

            /** ChatMessageEvent channelId */
            channelId?: (string|null);

            /** ChatMessageEvent senderId */
            senderId?: (string|null);

            /** ChatMessageEvent content */
            content?: (string|null);

            /** ChatMessageEvent timestampMs */
            timestampMs?: (number|Long|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ChatMessageEvent. */
        type $Shape = signaling.ChatMessageEvent.$Properties;
    }

    /**
     * Properties of a FetchHistory.
     * @deprecated Use signaling.FetchHistory.$Properties instead.
     */
    interface IFetchHistory extends signaling.FetchHistory.$Properties {
    }

    /** Represents a FetchHistory. */
    class FetchHistory {

        /**
         * Constructs a new FetchHistory.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.FetchHistory.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** FetchHistory requestId. */
        requestId: string;

        /** FetchHistory channelId. */
        channelId: string;

        /** FetchHistory beforeMessageId. */
        beforeMessageId: string;

        /** FetchHistory limit. */
        limit: number;

        /**
         * Creates a new FetchHistory instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchHistory instance
         */
        static create(properties: signaling.FetchHistory.$Shape): signaling.FetchHistory & signaling.FetchHistory.$Shape;
        static create(properties?: signaling.FetchHistory.$Properties): signaling.FetchHistory;

        /**
         * Encodes the specified FetchHistory message. Does not implicitly {@link signaling.FetchHistory.verify|verify} messages.
         * @param message FetchHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.FetchHistory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchHistory message, length delimited. Does not implicitly {@link signaling.FetchHistory.verify|verify} messages.
         * @param message FetchHistory message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.FetchHistory.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchHistory message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.FetchHistory & signaling.FetchHistory.$Shape} FetchHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.FetchHistory & signaling.FetchHistory.$Shape;

        /**
         * Decodes a FetchHistory message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.FetchHistory & signaling.FetchHistory.$Shape} FetchHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.FetchHistory & signaling.FetchHistory.$Shape;

        /**
         * Verifies a FetchHistory message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchHistory message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchHistory
         */
        static fromObject(object: { [k: string]: any }): signaling.FetchHistory;

        /**
         * Creates a plain object from a FetchHistory message. Also converts values to other types if specified.
         * @param message FetchHistory
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.FetchHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchHistory to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for FetchHistory
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace FetchHistory {

        /** Properties of a FetchHistory. */
        interface $Properties {

            /** FetchHistory requestId */
            requestId?: (string|null);

            /** FetchHistory channelId */
            channelId?: (string|null);

            /** FetchHistory beforeMessageId */
            beforeMessageId?: (string|null);

            /** FetchHistory limit */
            limit?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a FetchHistory. */
        type $Shape = signaling.FetchHistory.$Properties;
    }

    /**
     * Properties of a HistoryResponse.
     * @deprecated Use signaling.HistoryResponse.$Properties instead.
     */
    interface IHistoryResponse extends signaling.HistoryResponse.$Properties {
    }

    /** Represents a HistoryResponse. */
    class HistoryResponse {

        /**
         * Constructs a new HistoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.HistoryResponse.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** HistoryResponse requestId. */
        requestId: string;

        /** HistoryResponse msgs. */
        msgs: signaling.ChatMessageEvent.$Properties[];

        /**
         * Creates a new HistoryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryResponse instance
         */
        static create(properties: signaling.HistoryResponse.$Shape): signaling.HistoryResponse & signaling.HistoryResponse.$Shape;
        static create(properties?: signaling.HistoryResponse.$Properties): signaling.HistoryResponse;

        /**
         * Encodes the specified HistoryResponse message. Does not implicitly {@link signaling.HistoryResponse.verify|verify} messages.
         * @param message HistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.HistoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryResponse message, length delimited. Does not implicitly {@link signaling.HistoryResponse.verify|verify} messages.
         * @param message HistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.HistoryResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.HistoryResponse & signaling.HistoryResponse.$Shape} HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.HistoryResponse & signaling.HistoryResponse.$Shape;

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.HistoryResponse & signaling.HistoryResponse.$Shape} HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.HistoryResponse & signaling.HistoryResponse.$Shape;

        /**
         * Verifies a HistoryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryResponse
         */
        static fromObject(object: { [k: string]: any }): signaling.HistoryResponse;

        /**
         * Creates a plain object from a HistoryResponse message. Also converts values to other types if specified.
         * @param message HistoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.HistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for HistoryResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace HistoryResponse {

        /** Properties of a HistoryResponse. */
        interface $Properties {

            /** HistoryResponse requestId */
            requestId?: (string|null);

            /** HistoryResponse msgs */
            msgs?: (signaling.ChatMessageEvent.$Properties[]|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a HistoryResponse. */
        type $Shape = signaling.HistoryResponse.$Properties;
    }

    /**
     * Properties of a JoinVoice.
     * @deprecated Use signaling.JoinVoice.$Properties instead.
     */
    interface IJoinVoice extends signaling.JoinVoice.$Properties {
    }

    /** Represents a JoinVoice. */
    class JoinVoice {

        /**
         * Constructs a new JoinVoice.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.JoinVoice.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** JoinVoice channelId. */
        channelId: string;

        /**
         * Creates a new JoinVoice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinVoice instance
         */
        static create(properties: signaling.JoinVoice.$Shape): signaling.JoinVoice & signaling.JoinVoice.$Shape;
        static create(properties?: signaling.JoinVoice.$Properties): signaling.JoinVoice;

        /**
         * Encodes the specified JoinVoice message. Does not implicitly {@link signaling.JoinVoice.verify|verify} messages.
         * @param message JoinVoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.JoinVoice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinVoice message, length delimited. Does not implicitly {@link signaling.JoinVoice.verify|verify} messages.
         * @param message JoinVoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.JoinVoice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinVoice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.JoinVoice & signaling.JoinVoice.$Shape} JoinVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.JoinVoice & signaling.JoinVoice.$Shape;

        /**
         * Decodes a JoinVoice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.JoinVoice & signaling.JoinVoice.$Shape} JoinVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.JoinVoice & signaling.JoinVoice.$Shape;

        /**
         * Verifies a JoinVoice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinVoice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinVoice
         */
        static fromObject(object: { [k: string]: any }): signaling.JoinVoice;

        /**
         * Creates a plain object from a JoinVoice message. Also converts values to other types if specified.
         * @param message JoinVoice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.JoinVoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinVoice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for JoinVoice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace JoinVoice {

        /** Properties of a JoinVoice. */
        interface $Properties {

            /** JoinVoice channelId */
            channelId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a JoinVoice. */
        type $Shape = signaling.JoinVoice.$Properties;
    }

    /**
     * Properties of a LeaveVoice.
     * @deprecated Use signaling.LeaveVoice.$Properties instead.
     */
    interface ILeaveVoice extends signaling.LeaveVoice.$Properties {
    }

    /** Represents a LeaveVoice. */
    class LeaveVoice {

        /**
         * Constructs a new LeaveVoice.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.LeaveVoice.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** LeaveVoice channelId. */
        channelId: string;

        /**
         * Creates a new LeaveVoice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveVoice instance
         */
        static create(properties: signaling.LeaveVoice.$Shape): signaling.LeaveVoice & signaling.LeaveVoice.$Shape;
        static create(properties?: signaling.LeaveVoice.$Properties): signaling.LeaveVoice;

        /**
         * Encodes the specified LeaveVoice message. Does not implicitly {@link signaling.LeaveVoice.verify|verify} messages.
         * @param message LeaveVoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.LeaveVoice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LeaveVoice message, length delimited. Does not implicitly {@link signaling.LeaveVoice.verify|verify} messages.
         * @param message LeaveVoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.LeaveVoice.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LeaveVoice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.LeaveVoice & signaling.LeaveVoice.$Shape} LeaveVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.LeaveVoice & signaling.LeaveVoice.$Shape;

        /**
         * Decodes a LeaveVoice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.LeaveVoice & signaling.LeaveVoice.$Shape} LeaveVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.LeaveVoice & signaling.LeaveVoice.$Shape;

        /**
         * Verifies a LeaveVoice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LeaveVoice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LeaveVoice
         */
        static fromObject(object: { [k: string]: any }): signaling.LeaveVoice;

        /**
         * Creates a plain object from a LeaveVoice message. Also converts values to other types if specified.
         * @param message LeaveVoice
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.LeaveVoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LeaveVoice to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for LeaveVoice
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace LeaveVoice {

        /** Properties of a LeaveVoice. */
        interface $Properties {

            /** LeaveVoice channelId */
            channelId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a LeaveVoice. */
        type $Shape = signaling.LeaveVoice.$Properties;
    }

    /**
     * Properties of a VoicePeer.
     * @deprecated Use signaling.VoicePeer.$Properties instead.
     */
    interface IVoicePeer extends signaling.VoicePeer.$Properties {
    }

    /** Represents a VoicePeer. */
    class VoicePeer {

        /**
         * Constructs a new VoicePeer.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.VoicePeer.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoicePeer userId. */
        userId: string;

        /** VoicePeer ip. */
        ip: string;

        /** VoicePeer port. */
        port: number;

        /** VoicePeer ssrc. */
        ssrc: number;

        /**
         * Creates a new VoicePeer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoicePeer instance
         */
        static create(properties: signaling.VoicePeer.$Shape): signaling.VoicePeer & signaling.VoicePeer.$Shape;
        static create(properties?: signaling.VoicePeer.$Properties): signaling.VoicePeer;

        /**
         * Encodes the specified VoicePeer message. Does not implicitly {@link signaling.VoicePeer.verify|verify} messages.
         * @param message VoicePeer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.VoicePeer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoicePeer message, length delimited. Does not implicitly {@link signaling.VoicePeer.verify|verify} messages.
         * @param message VoicePeer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.VoicePeer.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoicePeer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.VoicePeer & signaling.VoicePeer.$Shape} VoicePeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.VoicePeer & signaling.VoicePeer.$Shape;

        /**
         * Decodes a VoicePeer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.VoicePeer & signaling.VoicePeer.$Shape} VoicePeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.VoicePeer & signaling.VoicePeer.$Shape;

        /**
         * Verifies a VoicePeer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoicePeer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoicePeer
         */
        static fromObject(object: { [k: string]: any }): signaling.VoicePeer;

        /**
         * Creates a plain object from a VoicePeer message. Also converts values to other types if specified.
         * @param message VoicePeer
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.VoicePeer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoicePeer to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoicePeer
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoicePeer {

        /** Properties of a VoicePeer. */
        interface $Properties {

            /** VoicePeer userId */
            userId?: (string|null);

            /** VoicePeer ip */
            ip?: (string|null);

            /** VoicePeer port */
            port?: (number|null);

            /** VoicePeer ssrc */
            ssrc?: (number|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoicePeer. */
        type $Shape = signaling.VoicePeer.$Properties;
    }

    /**
     * Properties of a VoicePeerJoined.
     * @deprecated Use signaling.VoicePeerJoined.$Properties instead.
     */
    interface IVoicePeerJoined extends signaling.VoicePeerJoined.$Properties {
    }

    /** Represents a VoicePeerJoined. */
    class VoicePeerJoined {

        /**
         * Constructs a new VoicePeerJoined.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.VoicePeerJoined.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoicePeerJoined channelId. */
        channelId: string;

        /** VoicePeerJoined peer. */
        peer?: (signaling.VoicePeer.$Properties|null);

        /**
         * Creates a new VoicePeerJoined instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoicePeerJoined instance
         */
        static create(properties: signaling.VoicePeerJoined.$Shape): signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape;
        static create(properties?: signaling.VoicePeerJoined.$Properties): signaling.VoicePeerJoined;

        /**
         * Encodes the specified VoicePeerJoined message. Does not implicitly {@link signaling.VoicePeerJoined.verify|verify} messages.
         * @param message VoicePeerJoined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.VoicePeerJoined.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoicePeerJoined message, length delimited. Does not implicitly {@link signaling.VoicePeerJoined.verify|verify} messages.
         * @param message VoicePeerJoined message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.VoicePeerJoined.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoicePeerJoined message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape} VoicePeerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape;

        /**
         * Decodes a VoicePeerJoined message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape} VoicePeerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape;

        /**
         * Verifies a VoicePeerJoined message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoicePeerJoined message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoicePeerJoined
         */
        static fromObject(object: { [k: string]: any }): signaling.VoicePeerJoined;

        /**
         * Creates a plain object from a VoicePeerJoined message. Also converts values to other types if specified.
         * @param message VoicePeerJoined
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.VoicePeerJoined, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoicePeerJoined to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoicePeerJoined
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoicePeerJoined {

        /** Properties of a VoicePeerJoined. */
        interface $Properties {

            /** VoicePeerJoined channelId */
            channelId?: (string|null);

            /** VoicePeerJoined peer */
            peer?: (signaling.VoicePeer.$Properties|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoicePeerJoined. */
        type $Shape = signaling.VoicePeerJoined.$Properties;
    }

    /**
     * Properties of a VoicePeerLeft.
     * @deprecated Use signaling.VoicePeerLeft.$Properties instead.
     */
    interface IVoicePeerLeft extends signaling.VoicePeerLeft.$Properties {
    }

    /** Represents a VoicePeerLeft. */
    class VoicePeerLeft {

        /**
         * Constructs a new VoicePeerLeft.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.VoicePeerLeft.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** VoicePeerLeft channelId. */
        channelId: string;

        /** VoicePeerLeft userId. */
        userId: string;

        /**
         * Creates a new VoicePeerLeft instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoicePeerLeft instance
         */
        static create(properties: signaling.VoicePeerLeft.$Shape): signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape;
        static create(properties?: signaling.VoicePeerLeft.$Properties): signaling.VoicePeerLeft;

        /**
         * Encodes the specified VoicePeerLeft message. Does not implicitly {@link signaling.VoicePeerLeft.verify|verify} messages.
         * @param message VoicePeerLeft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.VoicePeerLeft.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoicePeerLeft message, length delimited. Does not implicitly {@link signaling.VoicePeerLeft.verify|verify} messages.
         * @param message VoicePeerLeft message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.VoicePeerLeft.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoicePeerLeft message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape} VoicePeerLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape;

        /**
         * Decodes a VoicePeerLeft message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape} VoicePeerLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape;

        /**
         * Verifies a VoicePeerLeft message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoicePeerLeft message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoicePeerLeft
         */
        static fromObject(object: { [k: string]: any }): signaling.VoicePeerLeft;

        /**
         * Creates a plain object from a VoicePeerLeft message. Also converts values to other types if specified.
         * @param message VoicePeerLeft
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.VoicePeerLeft, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoicePeerLeft to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for VoicePeerLeft
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace VoicePeerLeft {

        /** Properties of a VoicePeerLeft. */
        interface $Properties {

            /** VoicePeerLeft channelId */
            channelId?: (string|null);

            /** VoicePeerLeft userId */
            userId?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a VoicePeerLeft. */
        type $Shape = signaling.VoicePeerLeft.$Properties;
    }

    /**
     * Properties of an ErrorEvent.
     * @deprecated Use signaling.ErrorEvent.$Properties instead.
     */
    interface IErrorEvent extends signaling.ErrorEvent.$Properties {
    }

    /** Represents an ErrorEvent. */
    class ErrorEvent {

        /**
         * Constructs a new ErrorEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: signaling.ErrorEvent.$Properties);

        /** Unknown fields preserved while decoding */
        $unknowns?: Uint8Array[];

        /** ErrorEvent code. */
        code: number;

        /** ErrorEvent message. */
        message: string;

        /**
         * Creates a new ErrorEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorEvent instance
         */
        static create(properties: signaling.ErrorEvent.$Shape): signaling.ErrorEvent & signaling.ErrorEvent.$Shape;
        static create(properties?: signaling.ErrorEvent.$Properties): signaling.ErrorEvent;

        /**
         * Encodes the specified ErrorEvent message. Does not implicitly {@link signaling.ErrorEvent.verify|verify} messages.
         * @param message ErrorEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: signaling.ErrorEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ErrorEvent message, length delimited. Does not implicitly {@link signaling.ErrorEvent.verify|verify} messages.
         * @param message ErrorEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: signaling.ErrorEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ErrorEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {signaling.ErrorEvent & signaling.ErrorEvent.$Shape} ErrorEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): signaling.ErrorEvent & signaling.ErrorEvent.$Shape;

        /**
         * Decodes an ErrorEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {signaling.ErrorEvent & signaling.ErrorEvent.$Shape} ErrorEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): signaling.ErrorEvent & signaling.ErrorEvent.$Shape;

        /**
         * Verifies an ErrorEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ErrorEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ErrorEvent
         */
        static fromObject(object: { [k: string]: any }): signaling.ErrorEvent;

        /**
         * Creates a plain object from an ErrorEvent message. Also converts values to other types if specified.
         * @param message ErrorEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: signaling.ErrorEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ErrorEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ErrorEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ErrorEvent {

        /** Properties of an ErrorEvent. */
        interface $Properties {

            /** ErrorEvent code */
            code?: (number|null);

            /** ErrorEvent message */
            message?: (string|null);

            /** Unknown fields preserved while decoding */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an ErrorEvent. */
        type $Shape = signaling.ErrorEvent.$Properties;
    }
}
