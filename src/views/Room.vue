<template>
    <div class="home">
        <v-row>
            <v-col>
                <div class="room-code-area code-room text-h2">
                    CODE: {{ $store.state.roomCode }}
                </div>
            </v-col>
            <v-col>
                <div class="prize-pool mt-6 mb-4 text-center">
                    <PrizePool />
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="input-view ma-0 pa-0 mr-3">
                <div class="container" v-if="$store.state.alive">
                    <TypingArea />
                </div>
                <div class="container" v-else>
                    <h1>YOU DIED</h1>
                </div>
                <v-btn
                    class="btn"
                    v-if="$store.state.gameOver"
                    @click="readyUp"
                    outlined
                    >Ready Up</v-btn
                >
                <div v-else>READY!</div>
            </v-col>
            <v-col>
                <div class="map-grid-view">
                    <PlayerMap />
                </div>
            </v-col>
        </v-row>
        <v-row class="players-grid">
            <PlayerGrid />
        </v-row>
    </div>
</template>

<script>
import PlayerGrid from '../components/PlayerGrid.vue';
import PlayerMap from '../components/PlayerMap.vue';
import TypingArea from '../components/TypingArea.vue';
import PrizePool from '../components/PrizePool.vue';
import { mapActions } from 'vuex';

export default {
    name: 'Room',
    components: {
        PrizePool,
        PlayerMap,
        PlayerGrid,
        TypingArea,
    },
    data: function () {
        return {
            isMapView: false,
        };
    },
    computed: {
        isMapViewText: function () {
            return this.isMapView ? 'Grid View' : 'Map View';
        },
    },
    methods: {
        ...mapActions({ startGame: 'startGame' }),
        readyUp() {
            this.$socket.sendReady();
            this.$store.dispatch('setGameOver', false);
        },
    },
};
</script>

<style scoped>
.map-grid-view {
    border: 1px solid #ccc;
    border-radius: 9px;
    margin-right: 20px;
    margin-top: 4px;
}

.input-view {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.code-room {
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
}

.room-code-area {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-top: 50px;
}
.room-code {
    display: inline;
    color: white;
    padding-left: 5px;
}
.btn {
    width: 25%;
    border: 1px solid;
    color: white;
}
.players-grid {
    position: absolute;
    bottom: 10px;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
    font-size: 50px;
}
</style>
