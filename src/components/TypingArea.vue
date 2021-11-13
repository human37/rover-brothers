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
            v-for="(word, index) in splitParagraphText"
            :key="index"
            :id="'word-' + index"
          >
            {{ word }}
          </span>
        </p>
      </div>
      <v-text-field
        class="typing-input mb-4"
        color="#ea4884"
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
      previousTypedText: "",
      redLight: false,
      currentIndex: 0,
    };
  },
  methods: {
    calculateScoreAndSend() {
      if (this.typedText.length > 0 && !this.typedTextError) {
        let score = (this.typedText.length / this.paragraphText.length) * 10;
        this.$store.dispatch("setScore", score);
      }
      setTimeout(this.calculateScoreAndSend, 4000);
    },
    checkIfDead() {
      if (this.redLight) {
        alert("You are dead");
      }
    },
    handleInput(e) {
      this.checkIfDead();
      if (this.previousTypedText > this.typedText) {
        if (
          this.previousTypedText[this.previousTypedText.length - 1] === " " &&
          !this.typedTextError
        ) {
          let wordId = "#word-" + this.currentIndex;
          this.$el.querySelector(wordId).style.filter = "none";
          this.currentIndex--;
          wordId = "#word-" + this.currentIndex;
          this.$el.querySelector(wordId).style.filter =
            " drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884)";
        }
      } else {
        if (e[e.length - 1] == " " && !this.typedTextError) {
          let wordId = "#word-" + this.currentIndex;
          this.$el.querySelector(wordId).style.filter = "none";
          this.currentIndex++;
          wordId = "#word-" + this.currentIndex;
          this.$el.querySelector(wordId).style.filter =
            " drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884)";
        }
      }
      this.previousTypedText = this.typedText;
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
    splitParagraphText: function () {
      return this.paragraphText.split(" ");
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

#word-0 {
  filter: drop-shadow(0 0 3px #ea4884) drop-shadow(0 0 3px #ea4884);
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
