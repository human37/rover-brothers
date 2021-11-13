<template>
    <div class="pa-3">
        <v-row>
            <v-col
                cols="auto"
                sm="1"
                md="3"
                v-for="(player, id) in players"
                :key="id"
            >
                <v-spacer />
                <v-card
                    class="full-height ma-1"
                    flat
                    outlined
                    :disabled="!player.alive"
                    :color="player.alive ? '#ea4884' : ''"
                >
                    <v-card-title>
                        <v-icon class="pr-3 neon-text">{{
                            getIcon(player.shape)
                        }}</v-icon
                        >{{ player.number }}
                    </v-card-title>
                    <v-card-subtitle class="text-h5 text-center">
                        {{ player.score | percent }}
                    </v-card-subtitle>
                </v-card>
                <v-spacer />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'PlayerGrid',
    props: {
        players: {
            type: Array,
            required: true,
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
    filters: {
        percent: function (score) {
            return parseFloat(score).toFixed(2) + '%';
        },
    },
};
</script>
