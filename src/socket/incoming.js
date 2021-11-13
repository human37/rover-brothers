import store from '../store';


function SocketHandler(event) {
    let msg = JSON.parse(event.data);

    console.log(msg);

    if (msg.type === "SEND_UUID") {
        localStorage.setItem("@uuid", msg.data);
    } else if (msg.type === "ROOM_JOINED") {
        localStorage.setItem("@roomCode", msg.data.roomCode);
        alert(JSON.stringify(msg.data));
        store.commit("SET_ROOM_CODE", msg.data.roomCode);
        store.commit("SET_BAD_ROOM_CODE", false);
    } else if (msg.type == "NEW_PARAGRAPH") {
        store.dispatch("populateParagraph", msg.data);
    } else if (msg.type == "BAD_CODE") {
        store.commit("SET_BAD_ROOM_CODE", true);
    }
}

export default SocketHandler;