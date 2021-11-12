<template>
  <v-app>
    <header>
      <v-app-bar>
        <v-spacer />
        <v-btn to="/" class="ma-4" text outlined>Home</v-btn>
        <v-spacer />
        <div class="text-h2">SQUID GAMES</div>
        <v-spacer />
        <v-btn class="ma-4" to="/about" text outlined> About </v-btn>
        <v-spacer />
      </v-app-bar>
    </header>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
