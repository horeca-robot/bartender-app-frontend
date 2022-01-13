import Socket from "./Client/SocketClient";

export default {
    _socket: null,
    _messages: [],
    _newMessages: true,

    async connect()
    {
        this._socket = new Socket('wss://ws.guyliangilsing.me/customer');

        if(this._socket instanceof Socket && await this._socket.connect()) {
            const decodeData = (data) => {
                let decodedData = null;
                
                try {
                    decodedData = JSON.parse(data);
                } catch {
                    decodedData = null;
                }

                return decodedData;
            }

            const socket = this._socket;

            this._socket.registerOnMessageCallback((event) => {
                const data = decodeData(event.data);

                if(data === null || !(data instanceof Object)) {
                    return;
                }

                if(data.type == "help" && data.clientID !== undefined) {
                    if(data.payload !== undefined && data.payload.reason !== undefined && data.payload.description !== undefined) {
                        data.payload.id = data.clientID;
                        this._messages.push(data.payload);
                        this._newMessages = true;
                        
                        socket.send(JSON.stringify({
                            isSuccessful: true,
                            message: "Melding is ontvangen, er komt een medewerker zo snel mogelijk uw kant op.",
                            clientID: data.clientID
                        }));
                    }
                }
            })
        }
    },

    hasNewMessages()
    {
        return this._newMessages;
    },

    async getAll()
    {
        this._newMessages = false;
        return this._messages;
        // return [
        //     {
        //         id: 1,
        //         status: 0,
        //         table: {
        //             id: "98cd8d46-d868-4410-81a0-2d5fdebc40fb",
        //             tableNumber: 3,
        //             xaxis: 53,
        //             yaxis: 64
        //         },
        //     },
        //     {
        //         id: 1,
        //         status: 0,
        //         table: {
        //             id: "549db5d1-2246-440d-b63f-fcbe6182099c",
        //             tableNumber: 4,
        //             xaxis: 20,
        //             yaxis: 30
        //         },
        //     }
        // ];
    }
}
