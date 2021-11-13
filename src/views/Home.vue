<template>
    <div class="outer">
        <div class="inner">
            <v-col class="container">
                <v-btn to="/room" class="btn" flat outlined
                    >Create A Room</v-btn
                >
            </v-col>
            <v-col class="container">
                <div class="join-input">
                    <v-text-field
                        v-model="typingInput"
                        class="typingInput mb-4"
                        color="#ea4884"
                        placeholder="Enter Room Code"
                        @keydown.enter="handleJoin"
                        @input="handleInput"
                    >
                    </v-text-field>
                </div>
                <v-btn
                    class="btn"
                    flat
                    outlined
                    @click="handleJoin"
                    :disabled="typingInput.length == 0"
                    >Join</v-btn
                >
            </v-col>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function () {
        return { typingInput: '' };
    },
    components: {},
    computed: {},
    methods: {},
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.btn {
    position: relative;
    width: 90%;
    min-height: 100%;
    font-size: 50px;
    border: 1px solid;
    border-color: white;
    box-shadow: 0px 0px 5px #ea4884, 0px 0px 5px #ea4884;
    color: white;
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
}
.outer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
}
.inner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
}
.join-input {
    margin-bottom: -100px;
    position: absolute;
    margin-top: 25px;
    width: 25%;
    height: 50px;
    color: white;
    filter: drop-shadow(0 0 2px #ea4884) drop-shadow(0 0 2px #ea4884);
    z-index: 1;
}

.typingInput >>> input {
    text-align: center;
    color: white;
    font-size: 32px;
}
</style>
