<template>
    <div class="outer">
        <div class="inner">
            <v-col class="container">
                <v-btn @click="createRoom" class="btn" outlined
                    >Create A Room</v-btn
                >
            </v-col>
            <v-col class="container">
                <v-btn
                    v-if="!enteringCode"
                    @click="joinRoomTransition"
                    class="btn"
                    outlined
                    >Join A Room</v-btn
                >
                <v-text-field
                    v-else
                    v-model="joinCode"
                    @blur="enteringCode = false"
                    @keydown.enter="joinRoom"
                ></v-text-field>
            </v-col>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            enteringCode: false,
            joinCode: '',
        };
    },
    computed: {},
    methods: {
        createRoom() {
            this.$socket.createRoom();
        },
        joinRoomTransition() {
            this.enteringCode = true;
        },
        joinRoom() {
            this.$socket.joinRoom(this.joinCode);
        },
    },
    watch: {
        '$store.state.roomCode': function () {
            console.log('roomCode change');
            this.$router.push('/room');
        },
        '$store.state.badCode': function (z) {
            console.log('bad code:', z);
        },
    },
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
    width: 90%;
    min-height: 100%;
    font-size: 50px;

    border: 1px solid;
    border-color: white;
    box-shadow: 0px 0px 5px #ea4884, 0px 0px 5px #ea4884;
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
</style>
