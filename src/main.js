import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import socket from "./socket";
import { SendData } from "./socket/outgoing";
import SocketMessageHandler from "./socket/incoming";

Vue.config.productionTip = false;

socket.onopen = (event) => {
    const uuid = localStorage.getItem("@uuid");
    if (uuid !== null) {
        SendData({
            type: "INITIAL_AUTH",
            data: uuid
        });
    } else {
        // No saved uuid so empty body
        SendData({
            type: "INITIAL_AUTH",
            data: ""
        });
    }
};
socket.onmessage = SocketMessageHandler;

Vue.prototype.$socket = socket;

new Vue({
    vuetify,
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
