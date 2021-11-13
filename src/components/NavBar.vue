<template>
    <v-app-bar flat outlined rounded>
        <v-spacer />
        <v-btn
            to="/home"
            class="ma-4"
            style="
                filter: drop-shadow(0 0 2px #ea4884)
                    drop-shadow(0 0 2px #ea4884);
            "
            text
            outlined
            >Home</v-btn
        >

        <v-spacer />
        <div class="logo">
            <div class="shapes neon-text">
                <v-icon size="40">mdi-circle-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="40">mdi-square-rounded-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="40">mdi-triangle-outline</v-icon>
            </div>
        </div>
        <v-spacer />
        <div class="header-text neon-text">SQUID RACER</div>
        <v-spacer />
        <div class="logo">
            <div class="shapes neon-text">
                <v-icon size="40">mdi-triangle-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="40">mdi-square-rounded-outline</v-icon>
            </div>
            <div class="shapes neon-text">
                <v-icon size="40">mdi-circle-outline</v-icon>
            </div>
        </div>
        <v-spacer />
        <v-btn
            class="ma-4"
            style="
                filter: drop-shadow(0 0 2px #ea4884)
                    drop-shadow(0 0 2px #ea4884);
            "
            to="/about"
            text
            outlined
        >
            About
        </v-btn>

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
    font-size: 45px;
}
.v-icon {
    font-size: 40px;
    padding-left: 5px;
}
</style>
