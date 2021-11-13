import store from './store'


function socketHandler(event) {
    let data = JSON.parse(event.data)

    console.log(data)

    // if (data.attribute == "paragraph") {
    //     store.dispatch("populateParagraph", data.data)
    // }

    if (data.attribute == "playerProgress") {
        store.dispatch("setProgressScores", data.data)
    }

    if (data.attribute == "startGame") {
        console.log(data.group)
        store.dispatch("setPlayers", data.data.group )
        store.dispatch("populateParagraph", data.data.text)
    }


}

export default socketHandler;