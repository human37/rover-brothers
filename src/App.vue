<template>
    <v-app>
        <header>
            <NavBar />
        </header>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
    name: 'App',
    data: () => ({
        tab: null,
    }),
    components: { NavBar },
    computed: {},
    methods: {
        ...mapActions({
            populateStoreData: 'populateStoreData',
        }),
        connectToServer() {
            console.log('connecting to socket');
            this.socket = new WebSocket(
                `ws://${window.location.hostname}:3000`
            );
            this.socket.onmessage = (event) => {
                this.receivedUpdates(event);
            };
        },
        receivedUpdates(event) {
            this.populateStoreData(JSON.parse(event.data));
        },
        getRoomCode() {
            this.socket.send(JSON.stringify('GET_ROOM_CODE'));
        },
    },
    created() {
        this.connectToServer();
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
