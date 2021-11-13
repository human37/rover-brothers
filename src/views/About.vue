<template>
    <div class="about">
        <div class="about-form">
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
    width: 520px;
    height: 400px;
    margin-left: calc(50% - 250px);
    margin-top: 20px;
    box-shadow: 0px 0px 5px #ea4884, 0px 0px 5px #ea4884;
}
.about-list dt {
    font-size: 20px;
    color: white;
    filter: drop-shadow(0 0 2px #ea4884);
    text-align: center;
    padding-bottom: 30px;
}

#about-header {
    font-size: 30px;
    color: white;
    text-align: center;
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
    padding-top: 20px;
    padding-bottom: 40px;
}
</style>
