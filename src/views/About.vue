<template>
    <div class="about">
        <div class="about-form">
            <div class="how-to-play">
                <h1>How To Play</h1>
                <p>
                    Squid Racer is a multiplayer typracing game inspired by the
                    popular TV series "Squid Games". To start a game create a
                    room or join one of your friends using the code provided in
                    the room lobby. Be the first to finish the race to win, but
                    don't get caught typing during a red-light or you lose!
                </p>
            </div>
            <div id="about-header">Creators</div>
            <dl class="about-list">
                <dt>
                    Polina Coulter
                    <v-btn
                        class="pl-3"
                        icon
                        href="https://github.com/polinacoulter"
                        ><v-icon size="50">mdi-github</v-icon></v-btn
                    >
                </dt>
                <dt>
                    Mark Abraham
                    <v-btn
                        icon
                        class="pl-3"
                        href="https://github.com/mabraham23"
                        ><v-icon size="50">mdi-github</v-icon></v-btn
                    >
                </dt>
                <dt>
                    Ammon Taylor
                    <v-btn icon class="pl-3" href="https://github.com/human37"
                        ><v-icon size="50">mdi-github</v-icon></v-btn
                    >
                </dt>
                <dt>
                    Ryan H. Corry
                    <v-btn icon class="pl-3" href="https://github.com/rcorry"
                        ><v-icon size="50">mdi-github</v-icon></v-btn
                    >
                </dt>
            </dl>
        </div>
    </div>
</template>

<style scoped>
.about-form {
    border: 1px solid;
    border-color: white;
    box-shadow: 0px 0px 5px #ea4884, 0px 0px 5px #ea4884;
    margin-top: 25px;
    padding: 30px;
}
.about-list dt {
    font-size: 20px;
    color: white;
    filter: drop-shadow(0 0 2px #ea4884);
    text-align: center;
    padding-bottom: 35px;
}

#about-header {
    font-size: 30px;
    color: white;
    text-align: center;
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
    padding-top: 20px;
    padding-bottom: 40px;
}
.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.how-to-play {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
}
p {
    text-align: center;
    font-size: 24px;
}
h1 {
    color: white;
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
    margin-bottom: 10px;
}
</style>
