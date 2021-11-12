<template>
  <div class="container">
    <v-card id="card" class="full-height ma-1" flat outlined>
      <div class="goal-text">
        <p>
          Love isn't always a ray of sunshine. That's what the older girls kept
          telling her when she said she had found the perfect man. She had
          thought this was simply bitter talk on their part since they had been
          unable to find true love like hers. But now she had to face the fact
          that they may have been right. Love may not always be a ray of
          sunshine. That is unless they were referring to how the sun can burn.
        </p>
      </div>
    </v-card>
    <v-text-field class="typing-input"> </v-text-field>
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
  backround-color: red;
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
