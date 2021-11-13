<template>
  <div class="container">
    <v-card id="card" class="full-height ma-1" flat outlined>
      <div class="goal-text">
        <p>
          {{$store.state.typeText}}
        </p>
      </div>
    </v-card>
    <v-text-field class="typing-input" color="#ea4884"> </v-text-field>
  </div>
</template>

<script>
export default {
  name: "TypingArea",
  computed: {},
};
</script>

<style scoped>
.goal-text {
  padding: 10px;
  text-align: center;
  min-height: 300px;
}

p {
  font-size: 32px;
}

#card {
  border: 1px solid #ccc;
  border-radius: 9px;
}

.typing-input >>> input {
  border-style: none !important;
  height: 50px;
  width: 75%;
  margin-top: 10px;
  font-size: 32px;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
