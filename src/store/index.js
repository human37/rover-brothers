import Vue from "vue";
import Vuex from "vuex";
import Socket from "@/socket/outgoing";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        prizeTotal: 57893676,
        typeText: "",
        score: 0,
        players: [{
            score: 0,
            number: 456,
            shape: "circle",
            ready: false
        }],
        roomCode: localStorage.getItem("@roomCode"),
        badCode: false
    },
    mutations: {
        UPDATE_PLAYERS(state, players) {
            state.players = players;
        },
        UPDATE_PRIZE_TOTAL(state, prizeTotal) {
            state.prizeTotal = prizeTotal;
        },
        UPDATE_TYPE_TEXT(state, data) {
            state.typeText = data;
        },
        UPDATE_SCORE(state, data) {
            state.score = data;
        },
        SET_ROOM_CODE(state, code) {
            state.roomCode = code;
        },
        SET_BAD_ROOM_CODE(state, isBad) {
            state.badCode = isBad;
        },
        UPDATE_PLAYER_SCORES(state, data) {
            state.players = data;
        }
    },
    actions: {
        updatePlayers({ commit }, players) {
            commit("UPDATE_PLAYERS", players);
        },
        updatePrizeTotal({ commit }, prizeTotal) {
            commit("UPDATE_PRIZE_TOTAL", prizeTotal);
        },
        populateParagraph({ commit }, data) {
            commit("UPDATE_TYPE_TEXT", data);
        },
        setScore({ commit }, data) {
            Socket.sendPlayerProgress(data);
            commit("UPDATE_SCORE", data);
        },
        setPlayers({ commit }, data) {
            commit("UPDATE_PLAYERS", data);
        },
        startGame({ commit }) {
            Socket.startGame();
        },
        setProgressScores({ commit }, data) {
            commit("UPDATE_PLAYER_SCORES", data);
        }
    },
    getters: {
        players: (state) => {
            return state.players;
        },
        prizeTotal: (state) => {
            return state.prizeTotal;
        },
        typeText: (state) => {
            return state.typeText;
        },
    }
});
