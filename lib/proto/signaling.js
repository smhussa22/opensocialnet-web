/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const signaling = $root.signaling = (() => {

    /**
     * Namespace signaling.
     * @exports signaling
     * @namespace
     */
    const signaling = {};

    signaling.Envelope = (function() {

        /**
         * Properties of an Envelope.
         * @typedef {Object} signaling.Envelope.$Properties
         * @property {number|Long|null} [seq] Envelope seq
         * @property {signaling.Hello.$Properties|null} [hello] Envelope hello
         * @property {signaling.Heartbeat.$Properties|null} [heartbeat] Envelope heartbeat
         * @property {signaling.SendMessage.$Properties|null} [sendMessage] Envelope sendMessage
         * @property {signaling.FetchHistory.$Properties|null} [fetchHistory] Envelope fetchHistory
         * @property {signaling.JoinVoice.$Properties|null} [joinVoice] Envelope joinVoice
         * @property {signaling.LeaveVoice.$Properties|null} [leaveVoice] Envelope leaveVoice
         * @property {signaling.Ready.$Properties|null} [ready] Envelope ready
         * @property {signaling.HeartbeatAck.$Properties|null} [heartbeatAck] Envelope heartbeatAck
         * @property {signaling.ChatMessageEvent.$Properties|null} [chatMessageEvent] Envelope chatMessageEvent
         * @property {signaling.HistoryResponse.$Properties|null} [historyResponse] Envelope historyResponse
         * @property {signaling.VoicePeerJoined.$Properties|null} [voicePeerJoined] Envelope voicePeerJoined
         * @property {signaling.VoicePeerLeft.$Properties|null} [voicePeerLeft] Envelope voicePeerLeft
         * @property {signaling.ErrorEvent.$Properties|null} [error] Envelope error
         * @property {"hello"|"heartbeat"|"sendMessage"|"fetchHistory"|"joinVoice"|"leaveVoice"|"ready"|"heartbeatAck"|"chatMessageEvent"|"historyResponse"|"voicePeerJoined"|"voicePeerLeft"|"error"} [payload] Envelope payload
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an Envelope.
         * @memberof signaling
         * @interface IEnvelope
         * @augments signaling.Envelope.$Properties
         * @deprecated Use signaling.Envelope.$Properties instead.
         */

        /**
         * Narrowed shape of an Envelope.
         * @typedef {{
         *   seq?: number|Long|null;
         *   hello?: signaling.Hello.$Shape|null;
         *   heartbeat?: signaling.Heartbeat.$Shape|null;
         *   sendMessage?: signaling.SendMessage.$Shape|null;
         *   fetchHistory?: signaling.FetchHistory.$Shape|null;
         *   joinVoice?: signaling.JoinVoice.$Shape|null;
         *   leaveVoice?: signaling.LeaveVoice.$Shape|null;
         *   ready?: signaling.Ready.$Shape|null;
         *   heartbeatAck?: signaling.HeartbeatAck.$Shape|null;
         *   chatMessageEvent?: signaling.ChatMessageEvent.$Shape|null;
         *   historyResponse?: signaling.HistoryResponse.$Shape|null;
         *   voicePeerJoined?: signaling.VoicePeerJoined.$Shape|null;
         *   voicePeerLeft?: signaling.VoicePeerLeft.$Shape|null;
         *   error?: signaling.ErrorEvent.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ payload?: undefined; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "hello"; hello: signaling.Hello.$Shape; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "heartbeat"; hello?: null; heartbeat: signaling.Heartbeat.$Shape; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "sendMessage"; hello?: null; heartbeat?: null; sendMessage: signaling.SendMessage.$Shape; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "fetchHistory"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory: signaling.FetchHistory.$Shape; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "joinVoice"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice: signaling.JoinVoice.$Shape; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "leaveVoice"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice: signaling.LeaveVoice.$Shape; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "ready"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready: signaling.Ready.$Shape; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "heartbeatAck"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck: signaling.HeartbeatAck.$Shape; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "chatMessageEvent"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent: signaling.ChatMessageEvent.$Shape; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "historyResponse"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse: signaling.HistoryResponse.$Shape; voicePeerJoined?: null; voicePeerLeft?: null; error?: null }|{ payload?: "voicePeerJoined"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined: signaling.VoicePeerJoined.$Shape; voicePeerLeft?: null; error?: null }|{ payload?: "voicePeerLeft"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft: signaling.VoicePeerLeft.$Shape; error?: null }|{ payload?: "error"; hello?: null; heartbeat?: null; sendMessage?: null; fetchHistory?: null; joinVoice?: null; leaveVoice?: null; ready?: null; heartbeatAck?: null; chatMessageEvent?: null; historyResponse?: null; voicePeerJoined?: null; voicePeerLeft?: null; error: signaling.ErrorEvent.$Shape })
         * )} signaling.Envelope.$Shape
         */

        /**
         * Constructs a new Envelope.
         * @memberof signaling
         * @classdesc Represents an Envelope.
         * @constructor
         * @param {signaling.Envelope.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Envelope(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Envelope seq.
         * @member {number|Long} seq
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Envelope hello.
         * @member {signaling.Hello.$Properties|null|undefined} hello
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.hello = null;

        /**
         * Envelope heartbeat.
         * @member {signaling.Heartbeat.$Properties|null|undefined} heartbeat
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.heartbeat = null;

        /**
         * Envelope sendMessage.
         * @member {signaling.SendMessage.$Properties|null|undefined} sendMessage
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.sendMessage = null;

        /**
         * Envelope fetchHistory.
         * @member {signaling.FetchHistory.$Properties|null|undefined} fetchHistory
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.fetchHistory = null;

        /**
         * Envelope joinVoice.
         * @member {signaling.JoinVoice.$Properties|null|undefined} joinVoice
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.joinVoice = null;

        /**
         * Envelope leaveVoice.
         * @member {signaling.LeaveVoice.$Properties|null|undefined} leaveVoice
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.leaveVoice = null;

        /**
         * Envelope ready.
         * @member {signaling.Ready.$Properties|null|undefined} ready
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.ready = null;

        /**
         * Envelope heartbeatAck.
         * @member {signaling.HeartbeatAck.$Properties|null|undefined} heartbeatAck
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.heartbeatAck = null;

        /**
         * Envelope chatMessageEvent.
         * @member {signaling.ChatMessageEvent.$Properties|null|undefined} chatMessageEvent
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.chatMessageEvent = null;

        /**
         * Envelope historyResponse.
         * @member {signaling.HistoryResponse.$Properties|null|undefined} historyResponse
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.historyResponse = null;

        /**
         * Envelope voicePeerJoined.
         * @member {signaling.VoicePeerJoined.$Properties|null|undefined} voicePeerJoined
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.voicePeerJoined = null;

        /**
         * Envelope voicePeerLeft.
         * @member {signaling.VoicePeerLeft.$Properties|null|undefined} voicePeerLeft
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.voicePeerLeft = null;

        /**
         * Envelope error.
         * @member {signaling.ErrorEvent.$Properties|null|undefined} error
         * @memberof signaling.Envelope
         * @instance
         */
        Envelope.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Envelope payload.
         * @member {"hello"|"heartbeat"|"sendMessage"|"fetchHistory"|"joinVoice"|"leaveVoice"|"ready"|"heartbeatAck"|"chatMessageEvent"|"historyResponse"|"voicePeerJoined"|"voicePeerLeft"|"error"|undefined} payload
         * @memberof signaling.Envelope
         * @instance
         */
        Object.defineProperty(Envelope.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["hello", "heartbeat", "sendMessage", "fetchHistory", "joinVoice", "leaveVoice", "ready", "heartbeatAck", "chatMessageEvent", "historyResponse", "voicePeerJoined", "voicePeerLeft", "error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Envelope instance using the specified properties.
         * @function create
         * @memberof signaling.Envelope
         * @static
         * @param {signaling.Envelope.$Properties=} [properties] Properties to set
         * @returns {signaling.Envelope} Envelope instance
         * @type {{
         *   (properties: signaling.Envelope.$Shape): signaling.Envelope & signaling.Envelope.$Shape;
         *   (properties?: signaling.Envelope.$Properties): signaling.Envelope;
         * }}
         */
        Envelope.create = function create(properties) {
            return new Envelope(properties);
        };

        /**
         * Encodes the specified Envelope message. Does not implicitly {@link signaling.Envelope.verify|verify} messages.
         * @function encode
         * @memberof signaling.Envelope
         * @static
         * @param {signaling.Envelope.$Properties} message Envelope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Envelope.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.seq);
            if (message.hello != null && Object.hasOwnProperty.call(message, "hello"))
                $root.signaling.Hello.encode(message.hello, writer.uint32(/* id 10, wireType 2 =*/82).fork(), _depth + 1).ldelim();
            if (message.heartbeat != null && Object.hasOwnProperty.call(message, "heartbeat"))
                $root.signaling.Heartbeat.encode(message.heartbeat, writer.uint32(/* id 11, wireType 2 =*/90).fork(), _depth + 1).ldelim();
            if (message.sendMessage != null && Object.hasOwnProperty.call(message, "sendMessage"))
                $root.signaling.SendMessage.encode(message.sendMessage, writer.uint32(/* id 12, wireType 2 =*/98).fork(), _depth + 1).ldelim();
            if (message.fetchHistory != null && Object.hasOwnProperty.call(message, "fetchHistory"))
                $root.signaling.FetchHistory.encode(message.fetchHistory, writer.uint32(/* id 13, wireType 2 =*/106).fork(), _depth + 1).ldelim();
            if (message.joinVoice != null && Object.hasOwnProperty.call(message, "joinVoice"))
                $root.signaling.JoinVoice.encode(message.joinVoice, writer.uint32(/* id 14, wireType 2 =*/114).fork(), _depth + 1).ldelim();
            if (message.leaveVoice != null && Object.hasOwnProperty.call(message, "leaveVoice"))
                $root.signaling.LeaveVoice.encode(message.leaveVoice, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
            if (message.ready != null && Object.hasOwnProperty.call(message, "ready"))
                $root.signaling.Ready.encode(message.ready, writer.uint32(/* id 30, wireType 2 =*/242).fork(), _depth + 1).ldelim();
            if (message.heartbeatAck != null && Object.hasOwnProperty.call(message, "heartbeatAck"))
                $root.signaling.HeartbeatAck.encode(message.heartbeatAck, writer.uint32(/* id 31, wireType 2 =*/250).fork(), _depth + 1).ldelim();
            if (message.chatMessageEvent != null && Object.hasOwnProperty.call(message, "chatMessageEvent"))
                $root.signaling.ChatMessageEvent.encode(message.chatMessageEvent, writer.uint32(/* id 32, wireType 2 =*/258).fork(), _depth + 1).ldelim();
            if (message.historyResponse != null && Object.hasOwnProperty.call(message, "historyResponse"))
                $root.signaling.HistoryResponse.encode(message.historyResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork(), _depth + 1).ldelim();
            if (message.voicePeerJoined != null && Object.hasOwnProperty.call(message, "voicePeerJoined"))
                $root.signaling.VoicePeerJoined.encode(message.voicePeerJoined, writer.uint32(/* id 34, wireType 2 =*/274).fork(), _depth + 1).ldelim();
            if (message.voicePeerLeft != null && Object.hasOwnProperty.call(message, "voicePeerLeft"))
                $root.signaling.VoicePeerLeft.encode(message.voicePeerLeft, writer.uint32(/* id 35, wireType 2 =*/282).fork(), _depth + 1).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.signaling.ErrorEvent.encode(message.error, writer.uint32(/* id 36, wireType 2 =*/290).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Envelope message, length delimited. Does not implicitly {@link signaling.Envelope.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.Envelope
         * @static
         * @param {signaling.Envelope.$Properties} message Envelope message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Envelope.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an Envelope message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Envelope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Envelope & signaling.Envelope.$Shape} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Envelope.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.Envelope(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.seq = value;
                        else
                            delete message.seq;
                        continue;
                    }
                case 10: {
                        if (wireType !== 2)
                            break;
                        message.hello = $root.signaling.Hello.decode(reader, reader.uint32(), undefined, _depth + 1, message.hello);
                        message.payload = "hello";
                        continue;
                    }
                case 11: {
                        if (wireType !== 2)
                            break;
                        message.heartbeat = $root.signaling.Heartbeat.decode(reader, reader.uint32(), undefined, _depth + 1, message.heartbeat);
                        message.payload = "heartbeat";
                        continue;
                    }
                case 12: {
                        if (wireType !== 2)
                            break;
                        message.sendMessage = $root.signaling.SendMessage.decode(reader, reader.uint32(), undefined, _depth + 1, message.sendMessage);
                        message.payload = "sendMessage";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.fetchHistory = $root.signaling.FetchHistory.decode(reader, reader.uint32(), undefined, _depth + 1, message.fetchHistory);
                        message.payload = "fetchHistory";
                        continue;
                    }
                case 14: {
                        if (wireType !== 2)
                            break;
                        message.joinVoice = $root.signaling.JoinVoice.decode(reader, reader.uint32(), undefined, _depth + 1, message.joinVoice);
                        message.payload = "joinVoice";
                        continue;
                    }
                case 15: {
                        if (wireType !== 2)
                            break;
                        message.leaveVoice = $root.signaling.LeaveVoice.decode(reader, reader.uint32(), undefined, _depth + 1, message.leaveVoice);
                        message.payload = "leaveVoice";
                        continue;
                    }
                case 30: {
                        if (wireType !== 2)
                            break;
                        message.ready = $root.signaling.Ready.decode(reader, reader.uint32(), undefined, _depth + 1, message.ready);
                        message.payload = "ready";
                        continue;
                    }
                case 31: {
                        if (wireType !== 2)
                            break;
                        message.heartbeatAck = $root.signaling.HeartbeatAck.decode(reader, reader.uint32(), undefined, _depth + 1, message.heartbeatAck);
                        message.payload = "heartbeatAck";
                        continue;
                    }
                case 32: {
                        if (wireType !== 2)
                            break;
                        message.chatMessageEvent = $root.signaling.ChatMessageEvent.decode(reader, reader.uint32(), undefined, _depth + 1, message.chatMessageEvent);
                        message.payload = "chatMessageEvent";
                        continue;
                    }
                case 33: {
                        if (wireType !== 2)
                            break;
                        message.historyResponse = $root.signaling.HistoryResponse.decode(reader, reader.uint32(), undefined, _depth + 1, message.historyResponse);
                        message.payload = "historyResponse";
                        continue;
                    }
                case 34: {
                        if (wireType !== 2)
                            break;
                        message.voicePeerJoined = $root.signaling.VoicePeerJoined.decode(reader, reader.uint32(), undefined, _depth + 1, message.voicePeerJoined);
                        message.payload = "voicePeerJoined";
                        continue;
                    }
                case 35: {
                        if (wireType !== 2)
                            break;
                        message.voicePeerLeft = $root.signaling.VoicePeerLeft.decode(reader, reader.uint32(), undefined, _depth + 1, message.voicePeerLeft);
                        message.payload = "voicePeerLeft";
                        continue;
                    }
                case 36: {
                        if (wireType !== 2)
                            break;
                        message.error = $root.signaling.ErrorEvent.decode(reader, reader.uint32(), undefined, _depth + 1, message.error);
                        message.payload = "error";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes an Envelope message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.Envelope
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.Envelope & signaling.Envelope.$Shape} Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Envelope.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Envelope message.
         * @function verify
         * @memberof signaling.Envelope
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Envelope.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            let properties = {};
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.hello != null && message.hasOwnProperty("hello")) {
                properties.payload = 1;
                {
                    let error = $root.signaling.Hello.verify(message.hello, _depth + 1);
                    if (error)
                        return "hello." + error;
                }
            }
            if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.Heartbeat.verify(message.heartbeat, _depth + 1);
                    if (error)
                        return "heartbeat." + error;
                }
            }
            if (message.sendMessage != null && message.hasOwnProperty("sendMessage")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.SendMessage.verify(message.sendMessage, _depth + 1);
                    if (error)
                        return "sendMessage." + error;
                }
            }
            if (message.fetchHistory != null && message.hasOwnProperty("fetchHistory")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.FetchHistory.verify(message.fetchHistory, _depth + 1);
                    if (error)
                        return "fetchHistory." + error;
                }
            }
            if (message.joinVoice != null && message.hasOwnProperty("joinVoice")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.JoinVoice.verify(message.joinVoice, _depth + 1);
                    if (error)
                        return "joinVoice." + error;
                }
            }
            if (message.leaveVoice != null && message.hasOwnProperty("leaveVoice")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.LeaveVoice.verify(message.leaveVoice, _depth + 1);
                    if (error)
                        return "leaveVoice." + error;
                }
            }
            if (message.ready != null && message.hasOwnProperty("ready")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.Ready.verify(message.ready, _depth + 1);
                    if (error)
                        return "ready." + error;
                }
            }
            if (message.heartbeatAck != null && message.hasOwnProperty("heartbeatAck")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.HeartbeatAck.verify(message.heartbeatAck, _depth + 1);
                    if (error)
                        return "heartbeatAck." + error;
                }
            }
            if (message.chatMessageEvent != null && message.hasOwnProperty("chatMessageEvent")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.ChatMessageEvent.verify(message.chatMessageEvent, _depth + 1);
                    if (error)
                        return "chatMessageEvent." + error;
                }
            }
            if (message.historyResponse != null && message.hasOwnProperty("historyResponse")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.HistoryResponse.verify(message.historyResponse, _depth + 1);
                    if (error)
                        return "historyResponse." + error;
                }
            }
            if (message.voicePeerJoined != null && message.hasOwnProperty("voicePeerJoined")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.VoicePeerJoined.verify(message.voicePeerJoined, _depth + 1);
                    if (error)
                        return "voicePeerJoined." + error;
                }
            }
            if (message.voicePeerLeft != null && message.hasOwnProperty("voicePeerLeft")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.VoicePeerLeft.verify(message.voicePeerLeft, _depth + 1);
                    if (error)
                        return "voicePeerLeft." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    let error = $root.signaling.ErrorEvent.verify(message.error, _depth + 1);
                    if (error)
                        return "error." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.Envelope
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.Envelope} Envelope
         */
        Envelope.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.Envelope)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.Envelope();
            if (object.seq != null)
                if (typeof object.seq === "object" ? object.seq.low || object.seq.high : Number(object.seq) !== 0)
                    if ($util.Long)
                        message.seq = $util.Long.fromValue(object.seq, true);
                    else if (typeof object.seq === "string")
                        message.seq = parseInt(object.seq, 10);
                    else if (typeof object.seq === "number")
                        message.seq = object.seq;
                    else if (typeof object.seq === "object")
                        message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
            if (object.hello != null) {
                if (typeof object.hello !== "object")
                    throw TypeError(".signaling.Envelope.hello: object expected");
                message.hello = $root.signaling.Hello.fromObject(object.hello, _depth + 1);
            }
            if (object.heartbeat != null) {
                if (typeof object.heartbeat !== "object")
                    throw TypeError(".signaling.Envelope.heartbeat: object expected");
                message.heartbeat = $root.signaling.Heartbeat.fromObject(object.heartbeat, _depth + 1);
            }
            if (object.sendMessage != null) {
                if (typeof object.sendMessage !== "object")
                    throw TypeError(".signaling.Envelope.sendMessage: object expected");
                message.sendMessage = $root.signaling.SendMessage.fromObject(object.sendMessage, _depth + 1);
            }
            if (object.fetchHistory != null) {
                if (typeof object.fetchHistory !== "object")
                    throw TypeError(".signaling.Envelope.fetchHistory: object expected");
                message.fetchHistory = $root.signaling.FetchHistory.fromObject(object.fetchHistory, _depth + 1);
            }
            if (object.joinVoice != null) {
                if (typeof object.joinVoice !== "object")
                    throw TypeError(".signaling.Envelope.joinVoice: object expected");
                message.joinVoice = $root.signaling.JoinVoice.fromObject(object.joinVoice, _depth + 1);
            }
            if (object.leaveVoice != null) {
                if (typeof object.leaveVoice !== "object")
                    throw TypeError(".signaling.Envelope.leaveVoice: object expected");
                message.leaveVoice = $root.signaling.LeaveVoice.fromObject(object.leaveVoice, _depth + 1);
            }
            if (object.ready != null) {
                if (typeof object.ready !== "object")
                    throw TypeError(".signaling.Envelope.ready: object expected");
                message.ready = $root.signaling.Ready.fromObject(object.ready, _depth + 1);
            }
            if (object.heartbeatAck != null) {
                if (typeof object.heartbeatAck !== "object")
                    throw TypeError(".signaling.Envelope.heartbeatAck: object expected");
                message.heartbeatAck = $root.signaling.HeartbeatAck.fromObject(object.heartbeatAck, _depth + 1);
            }
            if (object.chatMessageEvent != null) {
                if (typeof object.chatMessageEvent !== "object")
                    throw TypeError(".signaling.Envelope.chatMessageEvent: object expected");
                message.chatMessageEvent = $root.signaling.ChatMessageEvent.fromObject(object.chatMessageEvent, _depth + 1);
            }
            if (object.historyResponse != null) {
                if (typeof object.historyResponse !== "object")
                    throw TypeError(".signaling.Envelope.historyResponse: object expected");
                message.historyResponse = $root.signaling.HistoryResponse.fromObject(object.historyResponse, _depth + 1);
            }
            if (object.voicePeerJoined != null) {
                if (typeof object.voicePeerJoined !== "object")
                    throw TypeError(".signaling.Envelope.voicePeerJoined: object expected");
                message.voicePeerJoined = $root.signaling.VoicePeerJoined.fromObject(object.voicePeerJoined, _depth + 1);
            }
            if (object.voicePeerLeft != null) {
                if (typeof object.voicePeerLeft !== "object")
                    throw TypeError(".signaling.Envelope.voicePeerLeft: object expected");
                message.voicePeerLeft = $root.signaling.VoicePeerLeft.fromObject(object.voicePeerLeft, _depth + 1);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".signaling.Envelope.error: object expected");
                message.error = $root.signaling.ErrorEvent.fromObject(object.error, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from an Envelope message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.Envelope
         * @static
         * @param {signaling.Envelope} message Envelope
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Envelope.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.seq = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.seq = typeof message.seq === "number" ? BigInt(message.seq) : $util.Long.fromBits(message.seq.low >>> 0, message.seq.high >>> 0, true).toBigInt();
                else if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
            if (message.hello != null && message.hasOwnProperty("hello")) {
                object.hello = $root.signaling.Hello.toObject(message.hello, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "hello";
            }
            if (message.heartbeat != null && message.hasOwnProperty("heartbeat")) {
                object.heartbeat = $root.signaling.Heartbeat.toObject(message.heartbeat, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "heartbeat";
            }
            if (message.sendMessage != null && message.hasOwnProperty("sendMessage")) {
                object.sendMessage = $root.signaling.SendMessage.toObject(message.sendMessage, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "sendMessage";
            }
            if (message.fetchHistory != null && message.hasOwnProperty("fetchHistory")) {
                object.fetchHistory = $root.signaling.FetchHistory.toObject(message.fetchHistory, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "fetchHistory";
            }
            if (message.joinVoice != null && message.hasOwnProperty("joinVoice")) {
                object.joinVoice = $root.signaling.JoinVoice.toObject(message.joinVoice, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "joinVoice";
            }
            if (message.leaveVoice != null && message.hasOwnProperty("leaveVoice")) {
                object.leaveVoice = $root.signaling.LeaveVoice.toObject(message.leaveVoice, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "leaveVoice";
            }
            if (message.ready != null && message.hasOwnProperty("ready")) {
                object.ready = $root.signaling.Ready.toObject(message.ready, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "ready";
            }
            if (message.heartbeatAck != null && message.hasOwnProperty("heartbeatAck")) {
                object.heartbeatAck = $root.signaling.HeartbeatAck.toObject(message.heartbeatAck, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "heartbeatAck";
            }
            if (message.chatMessageEvent != null && message.hasOwnProperty("chatMessageEvent")) {
                object.chatMessageEvent = $root.signaling.ChatMessageEvent.toObject(message.chatMessageEvent, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "chatMessageEvent";
            }
            if (message.historyResponse != null && message.hasOwnProperty("historyResponse")) {
                object.historyResponse = $root.signaling.HistoryResponse.toObject(message.historyResponse, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "historyResponse";
            }
            if (message.voicePeerJoined != null && message.hasOwnProperty("voicePeerJoined")) {
                object.voicePeerJoined = $root.signaling.VoicePeerJoined.toObject(message.voicePeerJoined, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "voicePeerJoined";
            }
            if (message.voicePeerLeft != null && message.hasOwnProperty("voicePeerLeft")) {
                object.voicePeerLeft = $root.signaling.VoicePeerLeft.toObject(message.voicePeerLeft, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "voicePeerLeft";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.signaling.ErrorEvent.toObject(message.error, options, _depth + 1);
                if (options.oneofs)
                    object.payload = "error";
            }
            return object;
        };

        /**
         * Converts this Envelope to JSON.
         * @function toJSON
         * @memberof signaling.Envelope
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Envelope.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Envelope
         * @function getTypeUrl
         * @memberof signaling.Envelope
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Envelope.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.Envelope";
        };

        return Envelope;
    })();

    signaling.Hello = (function() {

        /**
         * Properties of a Hello.
         * @typedef {Object} signaling.Hello.$Properties
         * @property {string|null} [userId] Hello userId
         * @property {string|null} [authToken] Hello authToken
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Hello.
         * @memberof signaling
         * @interface IHello
         * @augments signaling.Hello.$Properties
         * @deprecated Use signaling.Hello.$Properties instead.
         */

        /**
         * Shape of a Hello.
         * @typedef {signaling.Hello.$Properties} signaling.Hello.$Shape
         */

        /**
         * Constructs a new Hello.
         * @memberof signaling
         * @classdesc Represents a Hello.
         * @constructor
         * @param {signaling.Hello.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Hello(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hello userId.
         * @member {string} userId
         * @memberof signaling.Hello
         * @instance
         */
        Hello.prototype.userId = "";

        /**
         * Hello authToken.
         * @member {string} authToken
         * @memberof signaling.Hello
         * @instance
         */
        Hello.prototype.authToken = "";

        /**
         * Creates a new Hello instance using the specified properties.
         * @function create
         * @memberof signaling.Hello
         * @static
         * @param {signaling.Hello.$Properties=} [properties] Properties to set
         * @returns {signaling.Hello} Hello instance
         * @type {{
         *   (properties: signaling.Hello.$Shape): signaling.Hello & signaling.Hello.$Shape;
         *   (properties?: signaling.Hello.$Properties): signaling.Hello;
         * }}
         */
        Hello.create = function create(properties) {
            return new Hello(properties);
        };

        /**
         * Encodes the specified Hello message. Does not implicitly {@link signaling.Hello.verify|verify} messages.
         * @function encode
         * @memberof signaling.Hello
         * @static
         * @param {signaling.Hello.$Properties} message Hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hello.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.authToken != null && Object.hasOwnProperty.call(message, "authToken"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.authToken);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Hello message, length delimited. Does not implicitly {@link signaling.Hello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.Hello
         * @static
         * @param {signaling.Hello.$Properties} message Hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Hello message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Hello & signaling.Hello.$Shape} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hello.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.Hello(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.authToken = value;
                        else
                            delete message.authToken;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a Hello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.Hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.Hello & signaling.Hello.$Shape} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hello message.
         * @function verify
         * @memberof signaling.Hello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hello.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.authToken != null && message.hasOwnProperty("authToken"))
                if (!$util.isString(message.authToken))
                    return "authToken: string expected";
            return null;
        };

        /**
         * Creates a Hello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.Hello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.Hello} Hello
         */
        Hello.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.Hello)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.Hello();
            if (object.userId != null)
                if (typeof object.userId !== "string" || object.userId.length)
                    message.userId = String(object.userId);
            if (object.authToken != null)
                if (typeof object.authToken !== "string" || object.authToken.length)
                    message.authToken = String(object.authToken);
            return message;
        };

        /**
         * Creates a plain object from a Hello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.Hello
         * @static
         * @param {signaling.Hello} message Hello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hello.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.authToken = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.authToken != null && message.hasOwnProperty("authToken"))
                object.authToken = message.authToken;
            return object;
        };

        /**
         * Converts this Hello to JSON.
         * @function toJSON
         * @memberof signaling.Hello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Hello
         * @function getTypeUrl
         * @memberof signaling.Hello
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Hello.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.Hello";
        };

        return Hello;
    })();

    signaling.Ready = (function() {

        /**
         * Properties of a Ready.
         * @typedef {Object} signaling.Ready.$Properties
         * @property {string|null} [sessionId] Ready sessionId
         * @property {Array.<string>|null} [channelIds] Ready channelIds
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Ready.
         * @memberof signaling
         * @interface IReady
         * @augments signaling.Ready.$Properties
         * @deprecated Use signaling.Ready.$Properties instead.
         */

        /**
         * Shape of a Ready.
         * @typedef {signaling.Ready.$Properties} signaling.Ready.$Shape
         */

        /**
         * Constructs a new Ready.
         * @memberof signaling
         * @classdesc Represents a Ready.
         * @constructor
         * @param {signaling.Ready.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Ready(properties) {
            this.channelIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ready sessionId.
         * @member {string} sessionId
         * @memberof signaling.Ready
         * @instance
         */
        Ready.prototype.sessionId = "";

        /**
         * Ready channelIds.
         * @member {Array.<string>} channelIds
         * @memberof signaling.Ready
         * @instance
         */
        Ready.prototype.channelIds = $util.emptyArray;

        /**
         * Creates a new Ready instance using the specified properties.
         * @function create
         * @memberof signaling.Ready
         * @static
         * @param {signaling.Ready.$Properties=} [properties] Properties to set
         * @returns {signaling.Ready} Ready instance
         * @type {{
         *   (properties: signaling.Ready.$Shape): signaling.Ready & signaling.Ready.$Shape;
         *   (properties?: signaling.Ready.$Properties): signaling.Ready;
         * }}
         */
        Ready.create = function create(properties) {
            return new Ready(properties);
        };

        /**
         * Encodes the specified Ready message. Does not implicitly {@link signaling.Ready.verify|verify} messages.
         * @function encode
         * @memberof signaling.Ready
         * @static
         * @param {signaling.Ready.$Properties} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.channelIds != null && message.channelIds.length)
                for (let i = 0; i < message.channelIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelIds[i]);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link signaling.Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.Ready
         * @static
         * @param {signaling.Ready.$Properties} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Ready & signaling.Ready.$Shape} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.Ready(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.sessionId = value;
                        else
                            delete message.sessionId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.channelIds && message.channelIds.length))
                            message.channelIds = [];
                        message.channelIds.push(reader.string());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.Ready & signaling.Ready.$Shape} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ready message.
         * @function verify
         * @memberof signaling.Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ready.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.channelIds != null && message.hasOwnProperty("channelIds")) {
                if (!Array.isArray(message.channelIds))
                    return "channelIds: array expected";
                for (let i = 0; i < message.channelIds.length; ++i)
                    if (!$util.isString(message.channelIds[i]))
                        return "channelIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Ready message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.Ready
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.Ready} Ready
         */
        Ready.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.Ready)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.Ready();
            if (object.sessionId != null)
                if (typeof object.sessionId !== "string" || object.sessionId.length)
                    message.sessionId = String(object.sessionId);
            if (object.channelIds) {
                if (!Array.isArray(object.channelIds))
                    throw TypeError(".signaling.Ready.channelIds: array expected");
                message.channelIds = Array(object.channelIds.length);
                for (let i = 0; i < object.channelIds.length; ++i)
                    message.channelIds[i] = String(object.channelIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Ready message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.Ready
         * @static
         * @param {signaling.Ready} message Ready
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ready.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.channelIds = [];
            if (options.defaults)
                object.sessionId = "";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.channelIds && message.channelIds.length) {
                object.channelIds = Array(message.channelIds.length);
                for (let j = 0; j < message.channelIds.length; ++j)
                    object.channelIds[j] = message.channelIds[j];
            }
            return object;
        };

        /**
         * Converts this Ready to JSON.
         * @function toJSON
         * @memberof signaling.Ready
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ready.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Ready
         * @function getTypeUrl
         * @memberof signaling.Ready
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Ready.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.Ready";
        };

        return Ready;
    })();

    signaling.Heartbeat = (function() {

        /**
         * Properties of a Heartbeat.
         * @typedef {Object} signaling.Heartbeat.$Properties
         * @property {number|Long|null} [nonce] Heartbeat nonce
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a Heartbeat.
         * @memberof signaling
         * @interface IHeartbeat
         * @augments signaling.Heartbeat.$Properties
         * @deprecated Use signaling.Heartbeat.$Properties instead.
         */

        /**
         * Shape of a Heartbeat.
         * @typedef {signaling.Heartbeat.$Properties} signaling.Heartbeat.$Shape
         */

        /**
         * Constructs a new Heartbeat.
         * @memberof signaling
         * @classdesc Represents a Heartbeat.
         * @constructor
         * @param {signaling.Heartbeat.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function Heartbeat(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Heartbeat nonce.
         * @member {number|Long} nonce
         * @memberof signaling.Heartbeat
         * @instance
         */
        Heartbeat.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @function create
         * @memberof signaling.Heartbeat
         * @static
         * @param {signaling.Heartbeat.$Properties=} [properties] Properties to set
         * @returns {signaling.Heartbeat} Heartbeat instance
         * @type {{
         *   (properties: signaling.Heartbeat.$Shape): signaling.Heartbeat & signaling.Heartbeat.$Shape;
         *   (properties?: signaling.Heartbeat.$Properties): signaling.Heartbeat;
         * }}
         */
        Heartbeat.create = function create(properties) {
            return new Heartbeat(properties);
        };

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link signaling.Heartbeat.verify|verify} messages.
         * @function encode
         * @memberof signaling.Heartbeat
         * @static
         * @param {signaling.Heartbeat.$Properties} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nonce);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified Heartbeat message, length delimited. Does not implicitly {@link signaling.Heartbeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.Heartbeat
         * @static
         * @param {signaling.Heartbeat.$Properties} message Heartbeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Heartbeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.Heartbeat & signaling.Heartbeat.$Shape} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.Heartbeat(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.nonce = value;
                        else
                            delete message.nonce;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a Heartbeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.Heartbeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.Heartbeat & signaling.Heartbeat.$Shape} Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Heartbeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Heartbeat message.
         * @function verify
         * @memberof signaling.Heartbeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Heartbeat.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            return null;
        };

        /**
         * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.Heartbeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.Heartbeat} Heartbeat
         */
        Heartbeat.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.Heartbeat)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.Heartbeat();
            if (object.nonce != null)
                if (typeof object.nonce === "object" ? object.nonce.low || object.nonce.high : Number(object.nonce) !== 0)
                    if ($util.Long)
                        message.nonce = $util.Long.fromValue(object.nonce, true);
                    else if (typeof object.nonce === "string")
                        message.nonce = parseInt(object.nonce, 10);
                    else if (typeof object.nonce === "number")
                        message.nonce = object.nonce;
                    else if (typeof object.nonce === "object")
                        message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.Heartbeat
         * @static
         * @param {signaling.Heartbeat} message Heartbeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Heartbeat.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.nonce = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.nonce = typeof message.nonce === "number" ? BigInt(message.nonce) : $util.Long.fromBits(message.nonce.low >>> 0, message.nonce.high >>> 0, true).toBigInt();
                else if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
            return object;
        };

        /**
         * Converts this Heartbeat to JSON.
         * @function toJSON
         * @memberof signaling.Heartbeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Heartbeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for Heartbeat
         * @function getTypeUrl
         * @memberof signaling.Heartbeat
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Heartbeat.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.Heartbeat";
        };

        return Heartbeat;
    })();

    signaling.HeartbeatAck = (function() {

        /**
         * Properties of a HeartbeatAck.
         * @typedef {Object} signaling.HeartbeatAck.$Properties
         * @property {number|Long|null} [nonce] HeartbeatAck nonce
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a HeartbeatAck.
         * @memberof signaling
         * @interface IHeartbeatAck
         * @augments signaling.HeartbeatAck.$Properties
         * @deprecated Use signaling.HeartbeatAck.$Properties instead.
         */

        /**
         * Shape of a HeartbeatAck.
         * @typedef {signaling.HeartbeatAck.$Properties} signaling.HeartbeatAck.$Shape
         */

        /**
         * Constructs a new HeartbeatAck.
         * @memberof signaling
         * @classdesc Represents a HeartbeatAck.
         * @constructor
         * @param {signaling.HeartbeatAck.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function HeartbeatAck(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatAck nonce.
         * @member {number|Long} nonce
         * @memberof signaling.HeartbeatAck
         * @instance
         */
        HeartbeatAck.prototype.nonce = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new HeartbeatAck instance using the specified properties.
         * @function create
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {signaling.HeartbeatAck.$Properties=} [properties] Properties to set
         * @returns {signaling.HeartbeatAck} HeartbeatAck instance
         * @type {{
         *   (properties: signaling.HeartbeatAck.$Shape): signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape;
         *   (properties?: signaling.HeartbeatAck.$Properties): signaling.HeartbeatAck;
         * }}
         */
        HeartbeatAck.create = function create(properties) {
            return new HeartbeatAck(properties);
        };

        /**
         * Encodes the specified HeartbeatAck message. Does not implicitly {@link signaling.HeartbeatAck.verify|verify} messages.
         * @function encode
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {signaling.HeartbeatAck.$Properties} message HeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatAck.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.nonce);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified HeartbeatAck message, length delimited. Does not implicitly {@link signaling.HeartbeatAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {signaling.HeartbeatAck.$Properties} message HeartbeatAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatAck.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.HeartbeatAck(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.uint64()) === "object" ? value.low || value.high : value !== 0)
                            message.nonce = value;
                        else
                            delete message.nonce;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a HeartbeatAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.HeartbeatAck & signaling.HeartbeatAck.$Shape} HeartbeatAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatAck message.
         * @function verify
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatAck.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high)))
                    return "nonce: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartbeatAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.HeartbeatAck} HeartbeatAck
         */
        HeartbeatAck.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.HeartbeatAck)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.HeartbeatAck();
            if (object.nonce != null)
                if (typeof object.nonce === "object" ? object.nonce.low || object.nonce.high : Number(object.nonce) !== 0)
                    if ($util.Long)
                        message.nonce = $util.Long.fromValue(object.nonce, true);
                    else if (typeof object.nonce === "string")
                        message.nonce = parseInt(object.nonce, 10);
                    else if (typeof object.nonce === "number")
                        message.nonce = object.nonce;
                    else if (typeof object.nonce === "object")
                        message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {signaling.HeartbeatAck} message HeartbeatAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatAck.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.nonce = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.nonce = typeof message.nonce === "number" ? BigInt(message.nonce) : $util.Long.fromBits(message.nonce.low >>> 0, message.nonce.high >>> 0, true).toBigInt();
                else if (typeof message.nonce === "number")
                    object.nonce = options.longs === String ? String(message.nonce) : message.nonce;
                else
                    object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber(true) : message.nonce;
            return object;
        };

        /**
         * Converts this HeartbeatAck to JSON.
         * @function toJSON
         * @memberof signaling.HeartbeatAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for HeartbeatAck
         * @function getTypeUrl
         * @memberof signaling.HeartbeatAck
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        HeartbeatAck.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.HeartbeatAck";
        };

        return HeartbeatAck;
    })();

    signaling.SendMessage = (function() {

        /**
         * Properties of a SendMessage.
         * @typedef {Object} signaling.SendMessage.$Properties
         * @property {string|null} [clientNonce] SendMessage clientNonce
         * @property {string|null} [channelId] SendMessage channelId
         * @property {string|null} [content] SendMessage content
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a SendMessage.
         * @memberof signaling
         * @interface ISendMessage
         * @augments signaling.SendMessage.$Properties
         * @deprecated Use signaling.SendMessage.$Properties instead.
         */

        /**
         * Shape of a SendMessage.
         * @typedef {signaling.SendMessage.$Properties} signaling.SendMessage.$Shape
         */

        /**
         * Constructs a new SendMessage.
         * @memberof signaling
         * @classdesc Represents a SendMessage.
         * @constructor
         * @param {signaling.SendMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function SendMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessage clientNonce.
         * @member {string} clientNonce
         * @memberof signaling.SendMessage
         * @instance
         */
        SendMessage.prototype.clientNonce = "";

        /**
         * SendMessage channelId.
         * @member {string} channelId
         * @memberof signaling.SendMessage
         * @instance
         */
        SendMessage.prototype.channelId = "";

        /**
         * SendMessage content.
         * @member {string} content
         * @memberof signaling.SendMessage
         * @instance
         */
        SendMessage.prototype.content = "";

        /**
         * Creates a new SendMessage instance using the specified properties.
         * @function create
         * @memberof signaling.SendMessage
         * @static
         * @param {signaling.SendMessage.$Properties=} [properties] Properties to set
         * @returns {signaling.SendMessage} SendMessage instance
         * @type {{
         *   (properties: signaling.SendMessage.$Shape): signaling.SendMessage & signaling.SendMessage.$Shape;
         *   (properties?: signaling.SendMessage.$Properties): signaling.SendMessage;
         * }}
         */
        SendMessage.create = function create(properties) {
            return new SendMessage(properties);
        };

        /**
         * Encodes the specified SendMessage message. Does not implicitly {@link signaling.SendMessage.verify|verify} messages.
         * @function encode
         * @memberof signaling.SendMessage
         * @static
         * @param {signaling.SendMessage.$Properties} message SendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessage.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.clientNonce != null && Object.hasOwnProperty.call(message, "clientNonce"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientNonce);
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SendMessage message, length delimited. Does not implicitly {@link signaling.SendMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.SendMessage
         * @static
         * @param {signaling.SendMessage.$Properties} message SendMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a SendMessage message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.SendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.SendMessage & signaling.SendMessage.$Shape} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessage.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.SendMessage(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.clientNonce = value;
                        else
                            delete message.clientNonce;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.content = value;
                        else
                            delete message.content;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a SendMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.SendMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.SendMessage & signaling.SendMessage.$Shape} SendMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessage message.
         * @function verify
         * @memberof signaling.SendMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessage.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.clientNonce != null && message.hasOwnProperty("clientNonce"))
                if (!$util.isString(message.clientNonce))
                    return "clientNonce: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a SendMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.SendMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.SendMessage} SendMessage
         */
        SendMessage.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.SendMessage)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.SendMessage();
            if (object.clientNonce != null)
                if (typeof object.clientNonce !== "string" || object.clientNonce.length)
                    message.clientNonce = String(object.clientNonce);
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            if (object.content != null)
                if (typeof object.content !== "string" || object.content.length)
                    message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a SendMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.SendMessage
         * @static
         * @param {signaling.SendMessage} message SendMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessage.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.clientNonce = "";
                object.channelId = "";
                object.content = "";
            }
            if (message.clientNonce != null && message.hasOwnProperty("clientNonce"))
                object.clientNonce = message.clientNonce;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this SendMessage to JSON.
         * @function toJSON
         * @memberof signaling.SendMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SendMessage
         * @function getTypeUrl
         * @memberof signaling.SendMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SendMessage.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.SendMessage";
        };

        return SendMessage;
    })();

    signaling.ChatMessageEvent = (function() {

        /**
         * Properties of a ChatMessageEvent.
         * @typedef {Object} signaling.ChatMessageEvent.$Properties
         * @property {string|null} [messageId] ChatMessageEvent messageId
         * @property {string|null} [clientNonce] ChatMessageEvent clientNonce
         * @property {string|null} [channelId] ChatMessageEvent channelId
         * @property {string|null} [senderId] ChatMessageEvent senderId
         * @property {string|null} [content] ChatMessageEvent content
         * @property {number|Long|null} [timestampMs] ChatMessageEvent timestampMs
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ChatMessageEvent.
         * @memberof signaling
         * @interface IChatMessageEvent
         * @augments signaling.ChatMessageEvent.$Properties
         * @deprecated Use signaling.ChatMessageEvent.$Properties instead.
         */

        /**
         * Shape of a ChatMessageEvent.
         * @typedef {signaling.ChatMessageEvent.$Properties} signaling.ChatMessageEvent.$Shape
         */

        /**
         * Constructs a new ChatMessageEvent.
         * @memberof signaling
         * @classdesc Represents a ChatMessageEvent.
         * @constructor
         * @param {signaling.ChatMessageEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ChatMessageEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMessageEvent messageId.
         * @member {string} messageId
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.messageId = "";

        /**
         * ChatMessageEvent clientNonce.
         * @member {string} clientNonce
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.clientNonce = "";

        /**
         * ChatMessageEvent channelId.
         * @member {string} channelId
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.channelId = "";

        /**
         * ChatMessageEvent senderId.
         * @member {string} senderId
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.senderId = "";

        /**
         * ChatMessageEvent content.
         * @member {string} content
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.content = "";

        /**
         * ChatMessageEvent timestampMs.
         * @member {number|Long} timestampMs
         * @memberof signaling.ChatMessageEvent
         * @instance
         */
        ChatMessageEvent.prototype.timestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ChatMessageEvent instance using the specified properties.
         * @function create
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {signaling.ChatMessageEvent.$Properties=} [properties] Properties to set
         * @returns {signaling.ChatMessageEvent} ChatMessageEvent instance
         * @type {{
         *   (properties: signaling.ChatMessageEvent.$Shape): signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape;
         *   (properties?: signaling.ChatMessageEvent.$Properties): signaling.ChatMessageEvent;
         * }}
         */
        ChatMessageEvent.create = function create(properties) {
            return new ChatMessageEvent(properties);
        };

        /**
         * Encodes the specified ChatMessageEvent message. Does not implicitly {@link signaling.ChatMessageEvent.verify|verify} messages.
         * @function encode
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {signaling.ChatMessageEvent.$Properties} message ChatMessageEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageEvent.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
            if (message.clientNonce != null && Object.hasOwnProperty.call(message, "clientNonce"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clientNonce);
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.channelId);
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.senderId);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.timestampMs != null && Object.hasOwnProperty.call(message, "timestampMs"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.timestampMs);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ChatMessageEvent message, length delimited. Does not implicitly {@link signaling.ChatMessageEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {signaling.ChatMessageEvent.$Properties} message ChatMessageEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMessageEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ChatMessageEvent message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape} ChatMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageEvent.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.ChatMessageEvent(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.messageId = value;
                        else
                            delete message.messageId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.clientNonce = value;
                        else
                            delete message.clientNonce;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.senderId = value;
                        else
                            delete message.senderId;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.content = value;
                        else
                            delete message.content;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.timestampMs = value;
                        else
                            delete message.timestampMs;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a ChatMessageEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.ChatMessageEvent & signaling.ChatMessageEvent.$Shape} ChatMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMessageEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMessageEvent message.
         * @function verify
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMessageEvent.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isString(message.messageId))
                    return "messageId: string expected";
            if (message.clientNonce != null && message.hasOwnProperty("clientNonce"))
                if (!$util.isString(message.clientNonce))
                    return "clientNonce: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.timestampMs != null && message.hasOwnProperty("timestampMs"))
                if (!$util.isInteger(message.timestampMs) && !(message.timestampMs && $util.isInteger(message.timestampMs.low) && $util.isInteger(message.timestampMs.high)))
                    return "timestampMs: integer|Long expected";
            return null;
        };

        /**
         * Creates a ChatMessageEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.ChatMessageEvent} ChatMessageEvent
         */
        ChatMessageEvent.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.ChatMessageEvent)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.ChatMessageEvent();
            if (object.messageId != null)
                if (typeof object.messageId !== "string" || object.messageId.length)
                    message.messageId = String(object.messageId);
            if (object.clientNonce != null)
                if (typeof object.clientNonce !== "string" || object.clientNonce.length)
                    message.clientNonce = String(object.clientNonce);
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            if (object.senderId != null)
                if (typeof object.senderId !== "string" || object.senderId.length)
                    message.senderId = String(object.senderId);
            if (object.content != null)
                if (typeof object.content !== "string" || object.content.length)
                    message.content = String(object.content);
            if (object.timestampMs != null)
                if (typeof object.timestampMs === "object" ? object.timestampMs.low || object.timestampMs.high : Number(object.timestampMs) !== 0)
                    if ($util.Long)
                        message.timestampMs = $util.Long.fromValue(object.timestampMs, false);
                    else if (typeof object.timestampMs === "string")
                        message.timestampMs = parseInt(object.timestampMs, 10);
                    else if (typeof object.timestampMs === "number")
                        message.timestampMs = object.timestampMs;
                    else if (typeof object.timestampMs === "object")
                        message.timestampMs = new $util.LongBits(object.timestampMs.low >>> 0, object.timestampMs.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ChatMessageEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {signaling.ChatMessageEvent} message ChatMessageEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatMessageEvent.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.messageId = "";
                object.clientNonce = "";
                object.channelId = "";
                object.senderId = "";
                object.content = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestampMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : typeof BigInt !== "undefined" && options.longs === BigInt ? long.toBigInt() : long;
                } else
                    object.timestampMs = options.longs === String ? "0" : typeof BigInt !== "undefined" && options.longs === BigInt ? BigInt("0") : 0;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                object.messageId = message.messageId;
            if (message.clientNonce != null && message.hasOwnProperty("clientNonce"))
                object.clientNonce = message.clientNonce;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.timestampMs != null && message.hasOwnProperty("timestampMs"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.timestampMs = typeof message.timestampMs === "number" ? BigInt(message.timestampMs) : $util.Long.fromBits(message.timestampMs.low >>> 0, message.timestampMs.high >>> 0, false).toBigInt();
                else if (typeof message.timestampMs === "number")
                    object.timestampMs = options.longs === String ? String(message.timestampMs) : message.timestampMs;
                else
                    object.timestampMs = options.longs === String ? $util.Long.prototype.toString.call(message.timestampMs) : options.longs === Number ? new $util.LongBits(message.timestampMs.low >>> 0, message.timestampMs.high >>> 0).toNumber() : message.timestampMs;
            return object;
        };

        /**
         * Converts this ChatMessageEvent to JSON.
         * @function toJSON
         * @memberof signaling.ChatMessageEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatMessageEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ChatMessageEvent
         * @function getTypeUrl
         * @memberof signaling.ChatMessageEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ChatMessageEvent.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.ChatMessageEvent";
        };

        return ChatMessageEvent;
    })();

    signaling.FetchHistory = (function() {

        /**
         * Properties of a FetchHistory.
         * @typedef {Object} signaling.FetchHistory.$Properties
         * @property {string|null} [requestId] FetchHistory requestId
         * @property {string|null} [channelId] FetchHistory channelId
         * @property {string|null} [beforeMessageId] FetchHistory beforeMessageId
         * @property {number|null} [limit] FetchHistory limit
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a FetchHistory.
         * @memberof signaling
         * @interface IFetchHistory
         * @augments signaling.FetchHistory.$Properties
         * @deprecated Use signaling.FetchHistory.$Properties instead.
         */

        /**
         * Shape of a FetchHistory.
         * @typedef {signaling.FetchHistory.$Properties} signaling.FetchHistory.$Shape
         */

        /**
         * Constructs a new FetchHistory.
         * @memberof signaling
         * @classdesc Represents a FetchHistory.
         * @constructor
         * @param {signaling.FetchHistory.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function FetchHistory(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchHistory requestId.
         * @member {string} requestId
         * @memberof signaling.FetchHistory
         * @instance
         */
        FetchHistory.prototype.requestId = "";

        /**
         * FetchHistory channelId.
         * @member {string} channelId
         * @memberof signaling.FetchHistory
         * @instance
         */
        FetchHistory.prototype.channelId = "";

        /**
         * FetchHistory beforeMessageId.
         * @member {string} beforeMessageId
         * @memberof signaling.FetchHistory
         * @instance
         */
        FetchHistory.prototype.beforeMessageId = "";

        /**
         * FetchHistory limit.
         * @member {number} limit
         * @memberof signaling.FetchHistory
         * @instance
         */
        FetchHistory.prototype.limit = 0;

        /**
         * Creates a new FetchHistory instance using the specified properties.
         * @function create
         * @memberof signaling.FetchHistory
         * @static
         * @param {signaling.FetchHistory.$Properties=} [properties] Properties to set
         * @returns {signaling.FetchHistory} FetchHistory instance
         * @type {{
         *   (properties: signaling.FetchHistory.$Shape): signaling.FetchHistory & signaling.FetchHistory.$Shape;
         *   (properties?: signaling.FetchHistory.$Properties): signaling.FetchHistory;
         * }}
         */
        FetchHistory.create = function create(properties) {
            return new FetchHistory(properties);
        };

        /**
         * Encodes the specified FetchHistory message. Does not implicitly {@link signaling.FetchHistory.verify|verify} messages.
         * @function encode
         * @memberof signaling.FetchHistory
         * @static
         * @param {signaling.FetchHistory.$Properties} message FetchHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchHistory.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelId);
            if (message.beforeMessageId != null && Object.hasOwnProperty.call(message, "beforeMessageId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.beforeMessageId);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.limit);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified FetchHistory message, length delimited. Does not implicitly {@link signaling.FetchHistory.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.FetchHistory
         * @static
         * @param {signaling.FetchHistory.$Properties} message FetchHistory message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchHistory.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a FetchHistory message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.FetchHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.FetchHistory & signaling.FetchHistory.$Shape} FetchHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchHistory.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.FetchHistory(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.requestId = value;
                        else
                            delete message.requestId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.beforeMessageId = value;
                        else
                            delete message.beforeMessageId;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.limit = value;
                        else
                            delete message.limit;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a FetchHistory message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.FetchHistory
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.FetchHistory & signaling.FetchHistory.$Shape} FetchHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchHistory.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchHistory message.
         * @function verify
         * @memberof signaling.FetchHistory
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchHistory.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.beforeMessageId != null && message.hasOwnProperty("beforeMessageId"))
                if (!$util.isString(message.beforeMessageId))
                    return "beforeMessageId: string expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a FetchHistory message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.FetchHistory
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.FetchHistory} FetchHistory
         */
        FetchHistory.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.FetchHistory)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.FetchHistory();
            if (object.requestId != null)
                if (typeof object.requestId !== "string" || object.requestId.length)
                    message.requestId = String(object.requestId);
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            if (object.beforeMessageId != null)
                if (typeof object.beforeMessageId !== "string" || object.beforeMessageId.length)
                    message.beforeMessageId = String(object.beforeMessageId);
            if (object.limit != null)
                if (Number(object.limit) !== 0)
                    message.limit = object.limit >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a FetchHistory message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.FetchHistory
         * @static
         * @param {signaling.FetchHistory} message FetchHistory
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchHistory.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.requestId = "";
                object.channelId = "";
                object.beforeMessageId = "";
                object.limit = 0;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.beforeMessageId != null && message.hasOwnProperty("beforeMessageId"))
                object.beforeMessageId = message.beforeMessageId;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this FetchHistory to JSON.
         * @function toJSON
         * @memberof signaling.FetchHistory
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchHistory.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for FetchHistory
         * @function getTypeUrl
         * @memberof signaling.FetchHistory
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        FetchHistory.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.FetchHistory";
        };

        return FetchHistory;
    })();

    signaling.HistoryResponse = (function() {

        /**
         * Properties of a HistoryResponse.
         * @typedef {Object} signaling.HistoryResponse.$Properties
         * @property {string|null} [requestId] HistoryResponse requestId
         * @property {Array.<signaling.ChatMessageEvent.$Properties>|null} [msgs] HistoryResponse msgs
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a HistoryResponse.
         * @memberof signaling
         * @interface IHistoryResponse
         * @augments signaling.HistoryResponse.$Properties
         * @deprecated Use signaling.HistoryResponse.$Properties instead.
         */

        /**
         * Shape of a HistoryResponse.
         * @typedef {signaling.HistoryResponse.$Properties} signaling.HistoryResponse.$Shape
         */

        /**
         * Constructs a new HistoryResponse.
         * @memberof signaling
         * @classdesc Represents a HistoryResponse.
         * @constructor
         * @param {signaling.HistoryResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function HistoryResponse(properties) {
            this.msgs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HistoryResponse requestId.
         * @member {string} requestId
         * @memberof signaling.HistoryResponse
         * @instance
         */
        HistoryResponse.prototype.requestId = "";

        /**
         * HistoryResponse msgs.
         * @member {Array.<signaling.ChatMessageEvent.$Properties>} msgs
         * @memberof signaling.HistoryResponse
         * @instance
         */
        HistoryResponse.prototype.msgs = $util.emptyArray;

        /**
         * Creates a new HistoryResponse instance using the specified properties.
         * @function create
         * @memberof signaling.HistoryResponse
         * @static
         * @param {signaling.HistoryResponse.$Properties=} [properties] Properties to set
         * @returns {signaling.HistoryResponse} HistoryResponse instance
         * @type {{
         *   (properties: signaling.HistoryResponse.$Shape): signaling.HistoryResponse & signaling.HistoryResponse.$Shape;
         *   (properties?: signaling.HistoryResponse.$Properties): signaling.HistoryResponse;
         * }}
         */
        HistoryResponse.create = function create(properties) {
            return new HistoryResponse(properties);
        };

        /**
         * Encodes the specified HistoryResponse message. Does not implicitly {@link signaling.HistoryResponse.verify|verify} messages.
         * @function encode
         * @memberof signaling.HistoryResponse
         * @static
         * @param {signaling.HistoryResponse.$Properties} message HistoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryResponse.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
            if (message.msgs != null && message.msgs.length)
                for (let i = 0; i < message.msgs.length; ++i)
                    $root.signaling.ChatMessageEvent.encode(message.msgs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified HistoryResponse message, length delimited. Does not implicitly {@link signaling.HistoryResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.HistoryResponse
         * @static
         * @param {signaling.HistoryResponse.$Properties} message HistoryResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HistoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.HistoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.HistoryResponse & signaling.HistoryResponse.$Shape} HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryResponse.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.HistoryResponse(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.requestId = value;
                        else
                            delete message.requestId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.msgs && message.msgs.length))
                            message.msgs = [];
                        message.msgs.push($root.signaling.ChatMessageEvent.decode(reader, reader.uint32(), undefined, _depth + 1));
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.HistoryResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.HistoryResponse & signaling.HistoryResponse.$Shape} HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HistoryResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HistoryResponse message.
         * @function verify
         * @memberof signaling.HistoryResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HistoryResponse.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isString(message.requestId))
                    return "requestId: string expected";
            if (message.msgs != null && message.hasOwnProperty("msgs")) {
                if (!Array.isArray(message.msgs))
                    return "msgs: array expected";
                for (let i = 0; i < message.msgs.length; ++i) {
                    let error = $root.signaling.ChatMessageEvent.verify(message.msgs[i], _depth + 1);
                    if (error)
                        return "msgs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.HistoryResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.HistoryResponse} HistoryResponse
         */
        HistoryResponse.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.HistoryResponse)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.HistoryResponse();
            if (object.requestId != null)
                if (typeof object.requestId !== "string" || object.requestId.length)
                    message.requestId = String(object.requestId);
            if (object.msgs) {
                if (!Array.isArray(object.msgs))
                    throw TypeError(".signaling.HistoryResponse.msgs: array expected");
                message.msgs = Array(object.msgs.length);
                for (let i = 0; i < object.msgs.length; ++i) {
                    if (typeof object.msgs[i] !== "object")
                        throw TypeError(".signaling.HistoryResponse.msgs: object expected");
                    message.msgs[i] = $root.signaling.ChatMessageEvent.fromObject(object.msgs[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HistoryResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.HistoryResponse
         * @static
         * @param {signaling.HistoryResponse} message HistoryResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HistoryResponse.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.arrays || options.defaults)
                object.msgs = [];
            if (options.defaults)
                object.requestId = "";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.msgs && message.msgs.length) {
                object.msgs = Array(message.msgs.length);
                for (let j = 0; j < message.msgs.length; ++j)
                    object.msgs[j] = $root.signaling.ChatMessageEvent.toObject(message.msgs[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this HistoryResponse to JSON.
         * @function toJSON
         * @memberof signaling.HistoryResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HistoryResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for HistoryResponse
         * @function getTypeUrl
         * @memberof signaling.HistoryResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        HistoryResponse.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.HistoryResponse";
        };

        return HistoryResponse;
    })();

    signaling.JoinVoice = (function() {

        /**
         * Properties of a JoinVoice.
         * @typedef {Object} signaling.JoinVoice.$Properties
         * @property {string|null} [channelId] JoinVoice channelId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a JoinVoice.
         * @memberof signaling
         * @interface IJoinVoice
         * @augments signaling.JoinVoice.$Properties
         * @deprecated Use signaling.JoinVoice.$Properties instead.
         */

        /**
         * Shape of a JoinVoice.
         * @typedef {signaling.JoinVoice.$Properties} signaling.JoinVoice.$Shape
         */

        /**
         * Constructs a new JoinVoice.
         * @memberof signaling
         * @classdesc Represents a JoinVoice.
         * @constructor
         * @param {signaling.JoinVoice.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function JoinVoice(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinVoice channelId.
         * @member {string} channelId
         * @memberof signaling.JoinVoice
         * @instance
         */
        JoinVoice.prototype.channelId = "";

        /**
         * Creates a new JoinVoice instance using the specified properties.
         * @function create
         * @memberof signaling.JoinVoice
         * @static
         * @param {signaling.JoinVoice.$Properties=} [properties] Properties to set
         * @returns {signaling.JoinVoice} JoinVoice instance
         * @type {{
         *   (properties: signaling.JoinVoice.$Shape): signaling.JoinVoice & signaling.JoinVoice.$Shape;
         *   (properties?: signaling.JoinVoice.$Properties): signaling.JoinVoice;
         * }}
         */
        JoinVoice.create = function create(properties) {
            return new JoinVoice(properties);
        };

        /**
         * Encodes the specified JoinVoice message. Does not implicitly {@link signaling.JoinVoice.verify|verify} messages.
         * @function encode
         * @memberof signaling.JoinVoice
         * @static
         * @param {signaling.JoinVoice.$Properties} message JoinVoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinVoice.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified JoinVoice message, length delimited. Does not implicitly {@link signaling.JoinVoice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.JoinVoice
         * @static
         * @param {signaling.JoinVoice.$Properties} message JoinVoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinVoice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a JoinVoice message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.JoinVoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.JoinVoice & signaling.JoinVoice.$Shape} JoinVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinVoice.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.JoinVoice(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a JoinVoice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.JoinVoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.JoinVoice & signaling.JoinVoice.$Shape} JoinVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinVoice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinVoice message.
         * @function verify
         * @memberof signaling.JoinVoice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinVoice.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            return null;
        };

        /**
         * Creates a JoinVoice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.JoinVoice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.JoinVoice} JoinVoice
         */
        JoinVoice.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.JoinVoice)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.JoinVoice();
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            return message;
        };

        /**
         * Creates a plain object from a JoinVoice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.JoinVoice
         * @static
         * @param {signaling.JoinVoice} message JoinVoice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinVoice.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.channelId = "";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this JoinVoice to JSON.
         * @function toJSON
         * @memberof signaling.JoinVoice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinVoice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for JoinVoice
         * @function getTypeUrl
         * @memberof signaling.JoinVoice
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        JoinVoice.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.JoinVoice";
        };

        return JoinVoice;
    })();

    signaling.LeaveVoice = (function() {

        /**
         * Properties of a LeaveVoice.
         * @typedef {Object} signaling.LeaveVoice.$Properties
         * @property {string|null} [channelId] LeaveVoice channelId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a LeaveVoice.
         * @memberof signaling
         * @interface ILeaveVoice
         * @augments signaling.LeaveVoice.$Properties
         * @deprecated Use signaling.LeaveVoice.$Properties instead.
         */

        /**
         * Shape of a LeaveVoice.
         * @typedef {signaling.LeaveVoice.$Properties} signaling.LeaveVoice.$Shape
         */

        /**
         * Constructs a new LeaveVoice.
         * @memberof signaling
         * @classdesc Represents a LeaveVoice.
         * @constructor
         * @param {signaling.LeaveVoice.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function LeaveVoice(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveVoice channelId.
         * @member {string} channelId
         * @memberof signaling.LeaveVoice
         * @instance
         */
        LeaveVoice.prototype.channelId = "";

        /**
         * Creates a new LeaveVoice instance using the specified properties.
         * @function create
         * @memberof signaling.LeaveVoice
         * @static
         * @param {signaling.LeaveVoice.$Properties=} [properties] Properties to set
         * @returns {signaling.LeaveVoice} LeaveVoice instance
         * @type {{
         *   (properties: signaling.LeaveVoice.$Shape): signaling.LeaveVoice & signaling.LeaveVoice.$Shape;
         *   (properties?: signaling.LeaveVoice.$Properties): signaling.LeaveVoice;
         * }}
         */
        LeaveVoice.create = function create(properties) {
            return new LeaveVoice(properties);
        };

        /**
         * Encodes the specified LeaveVoice message. Does not implicitly {@link signaling.LeaveVoice.verify|verify} messages.
         * @function encode
         * @memberof signaling.LeaveVoice
         * @static
         * @param {signaling.LeaveVoice.$Properties} message LeaveVoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveVoice.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LeaveVoice message, length delimited. Does not implicitly {@link signaling.LeaveVoice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.LeaveVoice
         * @static
         * @param {signaling.LeaveVoice.$Properties} message LeaveVoice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveVoice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LeaveVoice message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.LeaveVoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.LeaveVoice & signaling.LeaveVoice.$Shape} LeaveVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveVoice.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.LeaveVoice(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a LeaveVoice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.LeaveVoice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.LeaveVoice & signaling.LeaveVoice.$Shape} LeaveVoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveVoice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveVoice message.
         * @function verify
         * @memberof signaling.LeaveVoice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveVoice.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            return null;
        };

        /**
         * Creates a LeaveVoice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.LeaveVoice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.LeaveVoice} LeaveVoice
         */
        LeaveVoice.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.LeaveVoice)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.LeaveVoice();
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            return message;
        };

        /**
         * Creates a plain object from a LeaveVoice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.LeaveVoice
         * @static
         * @param {signaling.LeaveVoice} message LeaveVoice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveVoice.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults)
                object.channelId = "";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            return object;
        };

        /**
         * Converts this LeaveVoice to JSON.
         * @function toJSON
         * @memberof signaling.LeaveVoice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveVoice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LeaveVoice
         * @function getTypeUrl
         * @memberof signaling.LeaveVoice
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LeaveVoice.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.LeaveVoice";
        };

        return LeaveVoice;
    })();

    signaling.VoicePeer = (function() {

        /**
         * Properties of a VoicePeer.
         * @typedef {Object} signaling.VoicePeer.$Properties
         * @property {string|null} [userId] VoicePeer userId
         * @property {string|null} [ip] VoicePeer ip
         * @property {number|null} [port] VoicePeer port
         * @property {number|null} [ssrc] VoicePeer ssrc
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoicePeer.
         * @memberof signaling
         * @interface IVoicePeer
         * @augments signaling.VoicePeer.$Properties
         * @deprecated Use signaling.VoicePeer.$Properties instead.
         */

        /**
         * Shape of a VoicePeer.
         * @typedef {signaling.VoicePeer.$Properties} signaling.VoicePeer.$Shape
         */

        /**
         * Constructs a new VoicePeer.
         * @memberof signaling
         * @classdesc Represents a VoicePeer.
         * @constructor
         * @param {signaling.VoicePeer.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoicePeer(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoicePeer userId.
         * @member {string} userId
         * @memberof signaling.VoicePeer
         * @instance
         */
        VoicePeer.prototype.userId = "";

        /**
         * VoicePeer ip.
         * @member {string} ip
         * @memberof signaling.VoicePeer
         * @instance
         */
        VoicePeer.prototype.ip = "";

        /**
         * VoicePeer port.
         * @member {number} port
         * @memberof signaling.VoicePeer
         * @instance
         */
        VoicePeer.prototype.port = 0;

        /**
         * VoicePeer ssrc.
         * @member {number} ssrc
         * @memberof signaling.VoicePeer
         * @instance
         */
        VoicePeer.prototype.ssrc = 0;

        /**
         * Creates a new VoicePeer instance using the specified properties.
         * @function create
         * @memberof signaling.VoicePeer
         * @static
         * @param {signaling.VoicePeer.$Properties=} [properties] Properties to set
         * @returns {signaling.VoicePeer} VoicePeer instance
         * @type {{
         *   (properties: signaling.VoicePeer.$Shape): signaling.VoicePeer & signaling.VoicePeer.$Shape;
         *   (properties?: signaling.VoicePeer.$Properties): signaling.VoicePeer;
         * }}
         */
        VoicePeer.create = function create(properties) {
            return new VoicePeer(properties);
        };

        /**
         * Encodes the specified VoicePeer message. Does not implicitly {@link signaling.VoicePeer.verify|verify} messages.
         * @function encode
         * @memberof signaling.VoicePeer
         * @static
         * @param {signaling.VoicePeer.$Properties} message VoicePeer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeer.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ip);
            if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.port);
            if (message.ssrc != null && Object.hasOwnProperty.call(message, "ssrc"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ssrc);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified VoicePeer message, length delimited. Does not implicitly {@link signaling.VoicePeer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.VoicePeer
         * @static
         * @param {signaling.VoicePeer.$Properties} message VoicePeer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoicePeer message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.VoicePeer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.VoicePeer & signaling.VoicePeer.$Shape} VoicePeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeer.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.VoicePeer(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.ip = value;
                        else
                            delete message.ip;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.port = value;
                        else
                            delete message.port;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.ssrc = value;
                        else
                            delete message.ssrc;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a VoicePeer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.VoicePeer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.VoicePeer & signaling.VoicePeer.$Shape} VoicePeer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoicePeer message.
         * @function verify
         * @memberof signaling.VoicePeer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoicePeer.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.ssrc != null && message.hasOwnProperty("ssrc"))
                if (!$util.isInteger(message.ssrc))
                    return "ssrc: integer expected";
            return null;
        };

        /**
         * Creates a VoicePeer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.VoicePeer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.VoicePeer} VoicePeer
         */
        VoicePeer.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.VoicePeer)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.VoicePeer();
            if (object.userId != null)
                if (typeof object.userId !== "string" || object.userId.length)
                    message.userId = String(object.userId);
            if (object.ip != null)
                if (typeof object.ip !== "string" || object.ip.length)
                    message.ip = String(object.ip);
            if (object.port != null)
                if (Number(object.port) !== 0)
                    message.port = object.port >>> 0;
            if (object.ssrc != null)
                if (Number(object.ssrc) !== 0)
                    message.ssrc = object.ssrc >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a VoicePeer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.VoicePeer
         * @static
         * @param {signaling.VoicePeer} message VoicePeer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoicePeer.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.userId = "";
                object.ip = "";
                object.port = 0;
                object.ssrc = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.ssrc != null && message.hasOwnProperty("ssrc"))
                object.ssrc = message.ssrc;
            return object;
        };

        /**
         * Converts this VoicePeer to JSON.
         * @function toJSON
         * @memberof signaling.VoicePeer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoicePeer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoicePeer
         * @function getTypeUrl
         * @memberof signaling.VoicePeer
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoicePeer.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.VoicePeer";
        };

        return VoicePeer;
    })();

    signaling.VoicePeerJoined = (function() {

        /**
         * Properties of a VoicePeerJoined.
         * @typedef {Object} signaling.VoicePeerJoined.$Properties
         * @property {string|null} [channelId] VoicePeerJoined channelId
         * @property {signaling.VoicePeer.$Properties|null} [peer] VoicePeerJoined peer
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoicePeerJoined.
         * @memberof signaling
         * @interface IVoicePeerJoined
         * @augments signaling.VoicePeerJoined.$Properties
         * @deprecated Use signaling.VoicePeerJoined.$Properties instead.
         */

        /**
         * Shape of a VoicePeerJoined.
         * @typedef {signaling.VoicePeerJoined.$Properties} signaling.VoicePeerJoined.$Shape
         */

        /**
         * Constructs a new VoicePeerJoined.
         * @memberof signaling
         * @classdesc Represents a VoicePeerJoined.
         * @constructor
         * @param {signaling.VoicePeerJoined.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoicePeerJoined(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoicePeerJoined channelId.
         * @member {string} channelId
         * @memberof signaling.VoicePeerJoined
         * @instance
         */
        VoicePeerJoined.prototype.channelId = "";

        /**
         * VoicePeerJoined peer.
         * @member {signaling.VoicePeer.$Properties|null|undefined} peer
         * @memberof signaling.VoicePeerJoined
         * @instance
         */
        VoicePeerJoined.prototype.peer = null;

        /**
         * Creates a new VoicePeerJoined instance using the specified properties.
         * @function create
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {signaling.VoicePeerJoined.$Properties=} [properties] Properties to set
         * @returns {signaling.VoicePeerJoined} VoicePeerJoined instance
         * @type {{
         *   (properties: signaling.VoicePeerJoined.$Shape): signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape;
         *   (properties?: signaling.VoicePeerJoined.$Properties): signaling.VoicePeerJoined;
         * }}
         */
        VoicePeerJoined.create = function create(properties) {
            return new VoicePeerJoined(properties);
        };

        /**
         * Encodes the specified VoicePeerJoined message. Does not implicitly {@link signaling.VoicePeerJoined.verify|verify} messages.
         * @function encode
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {signaling.VoicePeerJoined.$Properties} message VoicePeerJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeerJoined.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.peer != null && Object.hasOwnProperty.call(message, "peer"))
                $root.signaling.VoicePeer.encode(message.peer, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified VoicePeerJoined message, length delimited. Does not implicitly {@link signaling.VoicePeerJoined.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {signaling.VoicePeerJoined.$Properties} message VoicePeerJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeerJoined.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoicePeerJoined message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape} VoicePeerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeerJoined.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.VoicePeerJoined(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.peer = $root.signaling.VoicePeer.decode(reader, reader.uint32(), undefined, _depth + 1, message.peer);
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a VoicePeerJoined message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.VoicePeerJoined & signaling.VoicePeerJoined.$Shape} VoicePeerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeerJoined.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoicePeerJoined message.
         * @function verify
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoicePeerJoined.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.peer != null && message.hasOwnProperty("peer")) {
                let error = $root.signaling.VoicePeer.verify(message.peer, _depth + 1);
                if (error)
                    return "peer." + error;
            }
            return null;
        };

        /**
         * Creates a VoicePeerJoined message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.VoicePeerJoined} VoicePeerJoined
         */
        VoicePeerJoined.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.VoicePeerJoined)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.VoicePeerJoined();
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            if (object.peer != null) {
                if (typeof object.peer !== "object")
                    throw TypeError(".signaling.VoicePeerJoined.peer: object expected");
                message.peer = $root.signaling.VoicePeer.fromObject(object.peer, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a VoicePeerJoined message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {signaling.VoicePeerJoined} message VoicePeerJoined
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoicePeerJoined.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.peer = null;
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.peer != null && message.hasOwnProperty("peer"))
                object.peer = $root.signaling.VoicePeer.toObject(message.peer, options, _depth + 1);
            return object;
        };

        /**
         * Converts this VoicePeerJoined to JSON.
         * @function toJSON
         * @memberof signaling.VoicePeerJoined
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoicePeerJoined.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoicePeerJoined
         * @function getTypeUrl
         * @memberof signaling.VoicePeerJoined
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoicePeerJoined.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.VoicePeerJoined";
        };

        return VoicePeerJoined;
    })();

    signaling.VoicePeerLeft = (function() {

        /**
         * Properties of a VoicePeerLeft.
         * @typedef {Object} signaling.VoicePeerLeft.$Properties
         * @property {string|null} [channelId] VoicePeerLeft channelId
         * @property {string|null} [userId] VoicePeerLeft userId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a VoicePeerLeft.
         * @memberof signaling
         * @interface IVoicePeerLeft
         * @augments signaling.VoicePeerLeft.$Properties
         * @deprecated Use signaling.VoicePeerLeft.$Properties instead.
         */

        /**
         * Shape of a VoicePeerLeft.
         * @typedef {signaling.VoicePeerLeft.$Properties} signaling.VoicePeerLeft.$Shape
         */

        /**
         * Constructs a new VoicePeerLeft.
         * @memberof signaling
         * @classdesc Represents a VoicePeerLeft.
         * @constructor
         * @param {signaling.VoicePeerLeft.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function VoicePeerLeft(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VoicePeerLeft channelId.
         * @member {string} channelId
         * @memberof signaling.VoicePeerLeft
         * @instance
         */
        VoicePeerLeft.prototype.channelId = "";

        /**
         * VoicePeerLeft userId.
         * @member {string} userId
         * @memberof signaling.VoicePeerLeft
         * @instance
         */
        VoicePeerLeft.prototype.userId = "";

        /**
         * Creates a new VoicePeerLeft instance using the specified properties.
         * @function create
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {signaling.VoicePeerLeft.$Properties=} [properties] Properties to set
         * @returns {signaling.VoicePeerLeft} VoicePeerLeft instance
         * @type {{
         *   (properties: signaling.VoicePeerLeft.$Shape): signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape;
         *   (properties?: signaling.VoicePeerLeft.$Properties): signaling.VoicePeerLeft;
         * }}
         */
        VoicePeerLeft.create = function create(properties) {
            return new VoicePeerLeft(properties);
        };

        /**
         * Encodes the specified VoicePeerLeft message. Does not implicitly {@link signaling.VoicePeerLeft.verify|verify} messages.
         * @function encode
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {signaling.VoicePeerLeft.$Properties} message VoicePeerLeft message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeerLeft.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.channelId != null && Object.hasOwnProperty.call(message, "channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified VoicePeerLeft message, length delimited. Does not implicitly {@link signaling.VoicePeerLeft.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {signaling.VoicePeerLeft.$Properties} message VoicePeerLeft message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VoicePeerLeft.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VoicePeerLeft message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape} VoicePeerLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeerLeft.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.VoicePeerLeft(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.channelId = value;
                        else
                            delete message.channelId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a VoicePeerLeft message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.VoicePeerLeft & signaling.VoicePeerLeft.$Shape} VoicePeerLeft
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VoicePeerLeft.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VoicePeerLeft message.
         * @function verify
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VoicePeerLeft.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a VoicePeerLeft message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.VoicePeerLeft} VoicePeerLeft
         */
        VoicePeerLeft.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.VoicePeerLeft)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.VoicePeerLeft();
            if (object.channelId != null)
                if (typeof object.channelId !== "string" || object.channelId.length)
                    message.channelId = String(object.channelId);
            if (object.userId != null)
                if (typeof object.userId !== "string" || object.userId.length)
                    message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a VoicePeerLeft message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {signaling.VoicePeerLeft} message VoicePeerLeft
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VoicePeerLeft.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.userId = "";
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this VoicePeerLeft to JSON.
         * @function toJSON
         * @memberof signaling.VoicePeerLeft
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VoicePeerLeft.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VoicePeerLeft
         * @function getTypeUrl
         * @memberof signaling.VoicePeerLeft
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VoicePeerLeft.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.VoicePeerLeft";
        };

        return VoicePeerLeft;
    })();

    signaling.ErrorEvent = (function() {

        /**
         * Properties of an ErrorEvent.
         * @typedef {Object} signaling.ErrorEvent.$Properties
         * @property {number|null} [code] ErrorEvent code
         * @property {string|null} [message] ErrorEvent message
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an ErrorEvent.
         * @memberof signaling
         * @interface IErrorEvent
         * @augments signaling.ErrorEvent.$Properties
         * @deprecated Use signaling.ErrorEvent.$Properties instead.
         */

        /**
         * Shape of an ErrorEvent.
         * @typedef {signaling.ErrorEvent.$Properties} signaling.ErrorEvent.$Shape
         */

        /**
         * Constructs a new ErrorEvent.
         * @memberof signaling
         * @classdesc Represents an ErrorEvent.
         * @constructor
         * @param {signaling.ErrorEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ErrorEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorEvent code.
         * @member {number} code
         * @memberof signaling.ErrorEvent
         * @instance
         */
        ErrorEvent.prototype.code = 0;

        /**
         * ErrorEvent message.
         * @member {string} message
         * @memberof signaling.ErrorEvent
         * @instance
         */
        ErrorEvent.prototype.message = "";

        /**
         * Creates a new ErrorEvent instance using the specified properties.
         * @function create
         * @memberof signaling.ErrorEvent
         * @static
         * @param {signaling.ErrorEvent.$Properties=} [properties] Properties to set
         * @returns {signaling.ErrorEvent} ErrorEvent instance
         * @type {{
         *   (properties: signaling.ErrorEvent.$Shape): signaling.ErrorEvent & signaling.ErrorEvent.$Shape;
         *   (properties?: signaling.ErrorEvent.$Properties): signaling.ErrorEvent;
         * }}
         */
        ErrorEvent.create = function create(properties) {
            return new ErrorEvent(properties);
        };

        /**
         * Encodes the specified ErrorEvent message. Does not implicitly {@link signaling.ErrorEvent.verify|verify} messages.
         * @function encode
         * @memberof signaling.ErrorEvent
         * @static
         * @param {signaling.ErrorEvent.$Properties} message ErrorEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorEvent.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (let i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ErrorEvent message, length delimited. Does not implicitly {@link signaling.ErrorEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof signaling.ErrorEvent
         * @static
         * @param {signaling.ErrorEvent.$Properties} message ErrorEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an ErrorEvent message from the specified reader or buffer.
         * @function decode
         * @memberof signaling.ErrorEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {signaling.ErrorEvent & signaling.ErrorEvent.$Shape} ErrorEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorEvent.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.signaling.ErrorEvent(), value;
            while (reader.pos < end) {
                let start = reader.pos;
                let tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                let wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.uint32())
                            message.code = value;
                        else
                            delete message.code;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.string()).length)
                            message.message = value;
                        else
                            delete message.message;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                $util.makeProp(message, "$unknowns", false);
                (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes an ErrorEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof signaling.ErrorEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {signaling.ErrorEvent & signaling.ErrorEvent.$Shape} ErrorEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorEvent message.
         * @function verify
         * @memberof signaling.ErrorEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorEvent.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates an ErrorEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof signaling.ErrorEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {signaling.ErrorEvent} ErrorEvent
         */
        ErrorEvent.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.signaling.ErrorEvent)
                return object;
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let message = new $root.signaling.ErrorEvent();
            if (object.code != null)
                if (Number(object.code) !== 0)
                    message.code = object.code >>> 0;
            if (object.message != null)
                if (typeof object.message !== "string" || object.message.length)
                    message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from an ErrorEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof signaling.ErrorEvent
         * @static
         * @param {signaling.ErrorEvent} message ErrorEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorEvent.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ErrorEvent to JSON.
         * @function toJSON
         * @memberof signaling.ErrorEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ErrorEvent
         * @function getTypeUrl
         * @memberof signaling.ErrorEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ErrorEvent.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/signaling.ErrorEvent";
        };

        return ErrorEvent;
    })();

    return signaling;
})();

export {
  $root as default
};
