<template>
  <div class="container">
    <v-card
      id="card"
      class="full-height ma-1"
      :style="redLight ? 'border-color: red' : ''"
      flat
      outlined
    >
      <div class="goal-text">
        <p>
          {{ $store.state.typeText }}
        </p>
      </div>
      <v-text-field
        class="typing-input mb-4"
        color="#ea4884"
        placeholder="start typing here"
        @input="checkIfDead"
        :error="typedTextError"
        :error-messages="typedTextErrorMessage"
        v-model="typedText"
      >
      </v-text-field>
      <!-- <v-btn @click="redLight = !redLight">LIGHT CHANGE</v-btn> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TypingArea",
  data: function () {
    return {
      typedText: "",
      redLight: false,
    };
  },
  methods: {
    calculateScoreAndSend() {
      if (this.typedText.length > 0 && !this.typedTextError) {
        let score = (this.typedText.length / this.paragraphText.length) * 10;
        console.log("score set", score);
        this.$store.dispatch("setScore", score);
      }
      setTimeout(this.calculateScoreAndSend, 3000);
    },
    checkIfDead() {
      if (this.redLight) {
        alert("You are dead");
      }
    },
  },
  computed: {
    typedTextError: function () {
      let charCount = this.typedText.length;
      if (charCount == 0) {
        return false;
      }
      let messageToMatch = this.paragraphText.substring(0, charCount);
      if (this.typedText === messageToMatch) {
        return false;
      }
      return true;
    },
    typedTextErrorMessage: function () {
      if (this.typedTextError) {
        return "  What you have typed is incorrect, go back and fix please.";
      }
      return "";
    },
    paragraphText: function () {
      return this.$store.state.typeText;
    },
  },
  created: function () {
    this.calculateScoreAndSend();
  },
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
  width: 450px;
  margin-top: 10px;
  font-size: 32px;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
}
</style>

<style>
.v-messages__message {
  font-size: 16px;
  text-align: center;
}
</style>
