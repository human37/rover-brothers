<template>
  <div class="home">
    <v-row>
      <v-col id="player-map">
        <player-map />
      </v-col>
      <v-col>
        <player-grid />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlayerGrid from "../components/PlayerGrid.vue";
// @ is an alias to /src
import PlayerMap from "../components/PlayerMap.vue";

export default {
  name: "Home",
  components: {
    PlayerMap,
    PlayerGrid,
  },
};
</script>
