<template>
  <div class="player-map">
    <div class="finish-line text-h5" style="margin-bottom: 500px">END</div>
    <span v-for="(player, index) in players" :key="index">
      <v-chip
        :color="player.alive ? 'green' : 'red'"
        :style="playerMapDistance[index]"
        ><v-icon>mdi-account</v-icon>{{ player.name }}</v-chip
      >
    </span>
    <div class="start-line text-h5" style="bottom: 0">START</div>
  </div>
</template>

<script>
export default {
  name: "PlayerMap",

  data: () => ({}),
  computed: {
    players() {
      return this.$store.getters.players;
    },
    playerMapDistance() {
      return this.players.map((player) => {
        return "bottom:" + player.score * 50 + "px";
      });
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
  border-top: 1px solid gray;
}
.finish-line {
  border-bottom: 1px solid gray;
}
</style>
