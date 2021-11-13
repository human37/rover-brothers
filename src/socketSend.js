import socket from './socket';

function send(data) {
    socket.send(JSON.stringify(data));
}

const socketSend = {
    sendPlayerProgress: function(progress) {
        send({
            attribute: 'playerProgress',
            score: progress
        });
    },
    startGame: function() {
        send({
            attribute: 'startGame',
        });
    }
}

export default socketSend;