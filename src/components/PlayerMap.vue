<template>
  <div class="player-map"></div>
</template>

<script>
export default {
  name: "PlayerMap",

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
.player-map {
  border: 1px solid #ccc;
}
</style>
