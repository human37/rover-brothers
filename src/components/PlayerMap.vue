<template>
    <div class="player-map">
        <div
            class="finish-line text-h5"
            style="margin-bottom: 500px"
            :style="$vuetify.theme.dark ? 'color: white' : 'color: black'"
        >
            FINISH
        </div>
        <span v-for="(player, index) in players" :key="index">
            <v-chip
                :disabled="!player.alive"
                :style="playerMapDistance[index]"
                :color="player.alive ? '#ea4884' : ''"
                ><v-icon class="neon-text pr-2">{{
                    getIcon(player.shape)
                }}</v-icon
                >{{ player.number }}</v-chip
            >
        </span>
        <div
            class="start-line text-h5"
            :style="$vuetify.theme.dark ? 'color: white' : 'color: black'"
            style="bottom: 0"
        >
            START
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlayerMap',
    props: {
        players: {
            type: Array,
            required: true,
        },
    },
    data: () => ({}),
    computed: {
        playerMapDistance() {
            return this.players.map((player) => {
                return 'bottom:' + player.score * 50 + 'px';
            });
        },
    },
    methods: {
        getIcon(shape) {
            if (shape === 'square') {
                return 'mdi-square-rounded-outline';
            } else if (shape === 'triangle') {
                return 'mdi-triangle-outline';
            } else {
                return 'mdi-circle-outline';
            }
        },
    },
};
</script>

<style scoped>
.player-map {
    bottom: 20px;
    text-align: center;
}
.start-line {
    border-top: 1px solid #ccc;
}
.finish-line {
    border-bottom: 1px solid #ccc;
}
.neon-style-text {
    color: white;
    filter: drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884);
}
</style>
