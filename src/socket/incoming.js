import store from '../store';

function SocketHandler(event) {
    let msg = JSON.parse(event.data);

    if (msg.type === 'SEND_UUID') {
        localStorage.setItem('@uuid', msg.data);
    } else if (msg.type === 'ROOM_JOINED') {
        localStorage.setItem('@roomCode', msg.data.roomCode);
        store.commit('SET_ROOM_CODE', msg.data.roomCode);
        store.commit('SET_BAD_ROOM_CODE', false);
    } else if (msg.type == 'NEW_PARAGRAPH') {
        store.dispatch('populateParagraph', msg.data);
    } else if (msg.type == 'BAD_CODE') {
        store.commit('SET_BAD_ROOM_CODE', true);
    } else if (msg.type == 'UPDATE_PROGRESS') {
        store.dispatch('setPlayers', msg.data);
    } else if (msg.type == 'GAME_OVER') {
        store.dispatch('setGameOver', true);
    } else if (msg.type == 'RED_LIGHT_GREEN_LIGHT') {
        store.dispatch('setRedLight', msg.data);
    }
}

export default SocketHandler;
