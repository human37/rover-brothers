<template>
  <div class="player-grid">
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
          :color="player.alive ? 'green' : 'red'"
        >
          <v-card-title>
            <v-icon class="pr-3">mdi-account</v-icon>{{ player.name }}
          </v-card-title>
          <v-card-subtitle class="text-h2">
            {{ player.score }}
          </v-card-subtitle>
        </v-card>
        <v-spacer />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PlayerGrid",
  computed: {
    players() {
      return this.$store.getters.players;
    },
  },
};
</script>
