<template>
  <div class="home">
    <v-row>
      <v-spacer />
      <div class="prize-pool mt-6 mb-4 text-center">
        <prize-pool />
      </div>
      <v-spacer />
    </v-row>
    <v-row>
      <v-col class="input-view ma-0 pa-0 mr-3"> <TypingArea /> </v-col>
      <v-col>
        <div class="map-grid-view">
          <v-btn text outlined @click="isMapView = !isMapView">{{
            isMapViewText
          }}</v-btn>
          <player-map v-if="isMapView" />
          <player-grid v-else />
        </div>
        <v-btn @click="startGame">
          Start Game
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
import PlayerMap from "../components/PlayerMap.vue";
import TypingArea from "../components/TypingArea.vue";
import PrizePool from "../components/PrizePool.vue";
import {mapActions} from "vuex";

export default {
  name: "Room",
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
  methods: {
    ...mapActions({
      startGame: "startGame",
    }),
  },
};
</script>

<style scoped>
.map-grid-view {
  border: 1px solid #ccc;
  border-radius: 9px;
  margin-right: 20px;
  margin-top: 4px;
}

.input-view {
  margin-left: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
