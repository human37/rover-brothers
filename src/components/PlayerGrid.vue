<template>
    <div class="pa-3">
        <v-row>
            <v-spacer />
            <span v-for="(player, index) in players" :key="index">
                <v-card
                    class="full-height ma-1"
                    flat
                    outlined
                    :disabled="!player.alive"
                    :color="player.alive ? '#ea4884' : ''"
                >
                    <v-card-title class="text-h4">
                        <v-icon class="pr-3 text-h3">mdi-account</v-icon
                        >{{ player.number }}
                    </v-card-title>
                    <v-card-text class="text-h2">
                        %{{ Math.round(player.score * 10) }}
                    </v-card-text>
                </v-card>
            </span>
            <v-spacer />
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PlayerGrid',
    computed: {
        players() {
            return this.$store.getters.players;
        },
    },
};
</script>
