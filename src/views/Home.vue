<template>
  <div class="home">
    <v-row>
      <v-col> </v-col>
      <v-col>
        <div class="map-grid-view">
          <v-btn text outlined @click="isMapView = !isMapView">{{
            isMapViewText
          }}</v-btn>
          <player-map v-if="isMapView" />
          <player-grid v-else />
        </div>
        <div class="prize-pool mt-8">
          <v-btn text outlined>PRIZE POOL</v-btn>
          <prize-pool />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
import PlayerMap from "../components/PlayerMap.vue";
import PrizePool from "../components/PrizePool.vue";

export default {
  name: "Home",
  data: function () {
    return {
      isMapView: false,
    };
  },
  components: {
    PlayerMap,
    PlayerGrid,
    PrizePool,
  },
  computed: {
    isMapViewText: function () {
      return this.isMapView ? "Grid View" : "Map View";
    },
  },
};
</script>

<style scoped>
.map-grid-view {
  border: 1px solid #ccc;
  border-radius: 9px;
  margin: 10px;
  margin-top: 30px;
  vertical-align: auto;
}
.prize-pool {
  border: 1px solid #ccc;
  border-radius: 9px;
  margin: 10px;
}
</style>
