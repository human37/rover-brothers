<template>
    <v-app>
        <header>
            <NavBar />
        </header>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from './components/NavBar.vue';

export default {
    name: 'App',
    data: () => ({
        tab: null,
    }),
    components: {},
    created: function () {
        this.$vuetify.theme.dark = true;
    },
    methods: {
        ...mapActions({}),
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
