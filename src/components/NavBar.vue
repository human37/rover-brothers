<template>
    <v-app-bar flat outlined rounded>
        <v-spacer />
        <v-btn to="/home" class="ma-4" text outlined>Home</v-btn>
        <v-spacer />
        <div class="logo">
            <div class="shapes neon-text">
                <v-icon size="50">mdi-circle-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="50">mdi-square-rounded-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="50">mdi-triangle-outline</v-icon>
            </div>
        </div>
        <div class="header-text neon-text">SQUID RACER</div>
        <v-spacer />
        <v-btn class="ma-4" to="/about" text outlined> About </v-btn>
        <v-spacer />

        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
            <v-icon>mdi-weather-night</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
};
</script>

<style>
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 200px;
}

.header-text {
    font-size: 40px;
    padding-left: 40px;
}
.v-icon {
    font-size: 40px;
    padding-left: 5px;
}
</style>