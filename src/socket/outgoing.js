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
    }
};

export default Socket;