<template>
  <div class="home">
    <v-row>
      <v-col class="input-view" align-center> <TypingArea /> </v-col>
      <v-col class="map-grid-view" align-center>
        <v-btn text outlined @click="isMapView = !isMapView">{{
          isMapViewText
        }}</v-btn>
        <player-map v-if="isMapView" />
        <player-grid v-else />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
import PlayerMap from "../components/PlayerMap.vue";
import TypingArea from "../components/TypingArea.vue";

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
  },
  computed: {
    isMapViewText: function () {
      return this.isMapView ? "Map View" : "Grid View";
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
  margin-right: 30px;
  vertical-align: auto;
}

.input-view {
  margin: 10px;
  margin-top: 20px;
  margin-left: 30px;
  vertical-align: auto;
}
</style>
