<template>
  <div class="home">
    <v-row>
<<<<<<< HEAD
      <v-col class="input-view" align-center> <TypingArea /> </v-col>
      <v-col class="map-grid-view" align-center>
        <v-btn text outlined @click="isMapView = !isMapView">{{
          isMapViewText
        }}</v-btn>
        <player-map v-if="isMapView" />
        <player-grid v-else />
=======
      <v-col class="input-view" align-center> <TypingArea /> </v-col>
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
>>>>>>> 98623098ce36a35e2e9a1f74120dad659b247c7f
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
import PlayerMap from "../components/PlayerMap.vue";
<<<<<<< HEAD
import TypingArea from "../components/TypingArea.vue";
=======
import PrizePool from "../components/PrizePool.vue";
>>>>>>> 98623098ce36a35e2e9a1f74120dad659b247c7f

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
<<<<<<< HEAD
    TypingArea,
=======
    PrizePool,
>>>>>>> 98623098ce36a35e2e9a1f74120dad659b247c7f
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
<<<<<<< HEAD

.input-view {
  margin: 10px;
  margin-top: 20px;
  margin-left: 30px;
  vertical-align: auto;
=======
.prize-pool {
  border: 1px solid #ccc;
  border-radius: 9px;
  margin: 10px;
>>>>>>> 98623098ce36a35e2e9a1f74120dad659b247c7f
}
</style>
