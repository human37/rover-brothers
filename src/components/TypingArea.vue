<template>
  <v-card className="prompt-card">
    <div class="goal-text">
      <p>
        Love isn't always a ray of sunshine. That's what the older girls kept
        telling her when she said she had found the perfect man. She had thought
        this was simply bitter talk on their part since they had been unable to
        find true love like hers. But now she had to face the fact that they may
        have been right. Love may not always be a ray of sunshine. That is
        unless they were referring to how the sun can burn.
      </p>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TypingArea",
  computed: {},
};
</script>

<style scoped>
.prompt-card {
  height: 500px;
  padding-left: 20px;
}
.goal-text {
  padding: 10px;
  text-align: center;
  min-height: 300px;
}

p {
  font-size: 32px;
}
</style>
