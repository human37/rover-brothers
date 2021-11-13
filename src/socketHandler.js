import store from './store'


function socketHandler(event) {
    let data = JSON.parse(event.data)

    console.log(data)

    if (data.attribute == "paragraph") {
        store.dispatch("populateParagraph", data.data)
    }

    if (data.attribute == "playerProgress") {
        store.dispatch("setProgressScores", data.data)
    }

    if (data.attribute == "startGame") {
        console.log(data)
        store.dispatch("setPlayers", data.group)
    }


}

export default socketHandler;