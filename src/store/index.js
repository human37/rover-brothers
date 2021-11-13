import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prizeTotal: 57893676,
    typeText:
      "However, sticking rigidly to this formula is not always advisable. Even though the length of a paragraph is supposed to be determined by the topic, writers have learned to divide long texts into bite-sized paragraphs to avoid presenting too much text in one chunk. This is a justifiable technique that ensures readers are not over-faced. If you employ this technique, look for a natural break in your long paragraph. In other words, do not create the divide between two closely linked sentences.",
    score: 0,
    players: [
      {
        name: "Player 1",
        score: 2,
        alive: true,
        id: 1,
      },
      {
        name: "Player 2",
        score: 5,
        alive: false,
        id: 2,
      },
      {
        name: "Player 3",
        score: 0,
        alive: true,
        id: 3,
      },
      {
        name: "Player 4",
        score: 6,
        alive: true,
        id: 4,
      },
      {
        name: "Player 5",
        score: 2,
        alive: true,
        id: 5,
      },
      {
        name: "Player 6",
        score: 10,
        alive: false,
        id: 6,
      },
      {
        name: "Player 7",
        score: 8,
        alive: true,
        id: 7,
      },
    ],
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
      commit("UPDATE_SCORE", data);
    },
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
  },
});
