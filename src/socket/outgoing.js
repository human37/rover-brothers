import socket from '.';

export function SendData(data) {
    socket.send(JSON.stringify(data));
}

const Socket = {
    sendPlayerProgress: function (progress) {
        SendData({
            type: 'UPDATE_PROGRESS',
            data: progress,
        });
    },
    sendPlayerAliveStatus: function (alive) {
        SendData({
            type: 'UPDATE_ALIVE_STATUS',
            data: alive,
        });
    },
    createRoom: () => {
        SendData({
            type: 'CREATE_ROOM',
        });
    },
    joinRoom: (code) => {
        SendData({
            type: 'JOIN_ROOM',
            data: code,
        });
    },
    sendReady: () => {
        SendData({
            type: 'READY_UP',
        });
    },
};

export default Socket;
