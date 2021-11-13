import store from '../store';


function socketHandler(event) {
    let msg = JSON.parse(event.data);

    console.log(msg);

    if (msg.type === "SEND_UUID") {
        localStorage.setItem("@uuid", msg.data);
    } else if (msg.attribute == "paragraph") {
        store.dispatch("populateParagraph", msg.data);
    }


}

export default socketHandler;