<template>
  <div class="outer">
    <div class="inner">
      <v-col class="container">
        <v-btn to="/room" class="btn" flat outlined>Create A Room</v-btn>
      </v-col>
      <v-col class="container">
        <v-btn class="btn" flat outlined>Join A Room</v-btn>
      </v-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {};
  },
  components: {},
  computed: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.btn {
  width: 90%;
  min-height: 100%;
  font-size: 50px;

  border: 1px solid;
  border-color: white;
  box-shadow: 0px 0px 5px #ea4884,0px 0px 5px #ea4884;
  color: white;
  filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
}
.outer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
}
</style>
