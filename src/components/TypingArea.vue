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
          <span
            class="colored-text"
            :class="
              coloredText[coloredText.length - 1] == ' ' ||
              nonColoredText[0] == ' '
                ? ''
                : 'mr-n2'
            "
          >
            {{ coloredText }}
          </span>
          <span style="font-size: 32px">
            {{ nonColoredText }}
          </span>
        </p>
      </div>
      <v-text-field
        class="typing-input mb-4"
        color=white
        style="
          filter: drop-shadow(0 0 2px #ea4884)
              drop-shadow(0 0 2px #ea4884);
        "
        placeholder="start typing here"
        @input="handleInput"
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
        this.$store.dispatch("setScore", score);
      }
      setTimeout(this.calculateScoreAndSend, 500);
    },
    checkIfDead() {
      if (this.redLight) {
        alert("You are dead");
      }
    },
    handleInput() {
      this.checkIfDead();
    },
  },
  computed: {
    typedTextError: function () {
      let charCount = this.typedText.length;
      console.log("this.typedText", this.typedText)
      if (charCount == 0) {
        return false;
      }
      let messageToMatch = this.paragraphText.substring(0, charCount);
      if (this.typedText === messageToMatch) {
            " drop-shadow(0 0 3px green) drop-shadow(0 0 3px green)";
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
    coloredText: function () {
      let charCount = this.typedText.length;
      let messageToMatch = this.paragraphText.substring(0, charCount);
      let coloredEnteredText = "";
      for (let i = 0; i < charCount; i++) {
        if (this.typedText[i] === messageToMatch[i]) {
          coloredEnteredText += this.typedText[i];
        }
      }
      return coloredEnteredText;
    },
    nonColoredText: function () {
      return this.paragraphText.replace(this.coloredText, "");
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

.colored-text {
  filter: drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884);
  font-size: 32px;
}

#card {
  border: 1px solid #ccc;
  border-radius: 9px;
  background-color: transparent;
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
