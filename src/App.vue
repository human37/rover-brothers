<template>
  <v-app>
    <header>
      <v-app-bar flat outlined rounded>
        <v-spacer />
        <v-btn @click="$router.push('/')" class="ma-4" text outlined
          >Home</v-btn
        >
        <v-spacer />
        <div class="logo">
          <div class="shapes"><ion-icon name="ellipse-outline"></ion-icon></div>
          <div class="shapes">
            <ion-icon name="triangle-outline"></ion-icon>
          </div>
          <div class="shapes"><ion-icon name="square-outline"></ion-icon></div>
        </div>
        <div class="header-text">SQUID GAMES</div>
        <v-spacer />
        <v-btn class="ma-4" @click="$router.push('/about')" text outlined>
          About
        </v-btn>
        <v-spacer />

        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
      </v-app-bar>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    tab: null,
  }),
  components: {
  },
  computed: {
  },
  methods: {
    ...mapActions({
      populateStoreData: 'populateStoreData'
    }),
    connectToServer() { 
        this.socket = new WebSocket("ws://localhost:3000");
        this.socket.onmessage = (event) => {
            this.receivedUpdates(event);
        }
    },
    receivedUpdates(event) {
      this.populateStoreData(JSON.parse(event.data));
    }
  },
  created() {
    this.connectToServer()
  }
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header-text {
  font-size: 40px;
  color: white;
  filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
  padding-left: 40px;
}
</style>
