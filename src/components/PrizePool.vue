<template>
    <div class="prize-pool-container">
        <div class="text-h2 text-center neon-text">
            ${{ formattedPrizeTotal }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'PrizePool',
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
    margin-bottom: -30px;
}
</style>
