<template>
  <div class="container">
    <v-card id="card" class="full-height ma-1" flat outlined>
      <div class="goal-text">
        <p>
          <!-- {{ $store.state.typeText }} -->
          {{ paragraphText }}
        </p>
      </div>
      <v-text-field
        class="typing-input"
        color="#ea4884"
        placeholder="start typing here"
        :error="typedTextError"
        :error-messages="typedTextErrorMessage"
        v-model="typedText"
      >
      </v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TypingArea",
  data: function () {
    return {
      paragraphText:
        "Love isn't always a ray of sunshine. That's what the older girls kept telling her when she said she had found the perfect man. She had thought this was simply bitter talk on their part since they had been unable to find true love like hers. But now she had to face the fact that they may have been right. Love may not always be a ray of sunshine. That is unless they were referring to how the sun can burn.",
      typedText: "",
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
