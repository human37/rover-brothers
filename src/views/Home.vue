<template>
  <div class="home">
    <v-row>
      <v-spacer />
      <div class="prize-pool mt-6 text-center">
        <prize-pool />
      </div>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col class="input-view" align-center> <TypingArea /> </v-col>
      <v-col>
        <div class="map-grid-view">
          <v-btn text outlined @click="isMapView = !isMapView">{{
            isMapViewText
          }}</v-btn>
          <player-map v-if="isMapView" />
          <player-grid v-else />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
import PlayerMap from "../components/PlayerMap.vue";
import TypingArea from "../components/TypingArea.vue";
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
    TypingArea,
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
  margin-right: 20px;
}

.input-view {
  margin: 10px;
  margin-left: 30px;
  vertical-align: auto;
}
</style>
