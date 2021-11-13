import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";
import socket from "./socket"
import socketHandler from "./socketHandler"

Vue.config.productionTip = false;

socket.onmessage = socketHandler;

Vue.prototype.$socket = socket;


new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
