<template>
  <div class="prize-pool-container">
    <div class="text-h2 text-center neon-style-text">
      ${{ formattedPrizeTotal }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PrizePool",
  computed: {
    prizeTotal() {
      return this.$store.getters.prizeTotal;
    },
    formattedPrizeTotal() {
      return this.prizeTotal.toLocaleString();
    },
  },
};
</script>

<style scoped>
.prize-pool-container {
  padding: 20px;
}
.neon-style-text {
  color: white;
  filter: drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884);
}
</style>
