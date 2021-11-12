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

  data: () => ({
    players: [
      {
        name: "Player 1",
        score: 2,
        alive: true,
        id: 1,
      },
      {
        name: "Player 2",
        score: 5,
        alive: false,
        id: 2,
      },
      {
        name: "Player 3",
        score: 0,
        alive: true,
        id: 3,
      },
      {
        name: "Player 4",
        score: 6,
        alive: true,
        id: 4,
      },
      {
        name: "Player 5",
        score: 2,
        alive: true,
        id: 5,
      },
      {
        name: "Player 6",
        score: 9,
        alive: false,
        id: 6,
      },
      {
        name: "Player 7",
        score: 8,
        alive: true,
        id: 7,
      },
    ],
  }),
};
</script>

<style scoped>
.player-grid {
  position: absolute;
  bottom: 20px;
}
</style>
