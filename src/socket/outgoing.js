import socket from '.';

export function SendData(data) {
    socket.send(JSON.stringify(data));
}

const Socket = {
    sendPlayerProgress: function (progress) {
        SendData({
            type: 'playerProgress',
            progress: progress
        });
    },
    createRoom: () => {
        SendData({
            type: "CREATE_ROOM",
        });
    },
    joinRoom: (code) => {
        SendData({
            type: "JOIN_ROOM",
            data: code
        });
    },
    sendReady: () => {
        SendData({
            type: "READY_UP"
        });
    }
};

export default Socket;