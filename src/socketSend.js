import store from './store'
import socket from './socket';

function send(data) {
    socket.send(json.stringify(data));
}

const socketSend = {
    sendPlayerProgress: function(progress) {
        send({
            type: 'playerProgress',
            progress: progress
        });
    }
}

export default socketSend;