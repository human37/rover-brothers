import store from './store'


function socketHandler(event) {
    let data = JSON.parse(event.data)

    console.log(data)

    if (data.attribute == "paragraph") {
        store.dispatch("populateParagraph", data.data)
    }


}

export default socketHandler;