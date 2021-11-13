import Vue from "vue";
import Vuex from "vuex";
import socketSend from "../socketSend";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prizeTotal: 57893676,
    typeText:
      "However, sticking rigidly to this formula is not always advisable. Even though the length of a paragraph is supposed to be determined by the topic, writers have learned to divide long texts into bite-sized paragraphs to avoid presenting too much text in one chunk. This is a justifiable technique that ensures readers are not over-faced. If you employ this technique, look for a natural break in your long paragraph. In other words, do not create the divide between two closely linked sentences.",
    score: 0,
    players: [],
  },
  mutations: {
    UPDATE_PLAYERS(state, players) {
      console.log("UPDATE_PLAYERS", players);
      players.forEach((playerId) => {
        let person = {
          name: "bob", 
          score: 0,
          alive: true,
          id: playerId,
        }
        state.players.push(person);
      })
      console.log("the coool state", state.players);
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
    UPDATE_PLAYER_SCORES(state, data) {
      console.log("here", data.score);
      console.log("id", data.id);
      console.log("players", state.players);
      let player = state.players.find((player) => player.id === data.id);
      console.log("player", player);
      player.score = data.score;
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
      socketSend.sendPlayerProgress(data); 
      commit("UPDATE_SCORE", data);
    },
    setPlayers({ commit }, data) {
      console.log("this", data);
      commit("UPDATE_PLAYERS", data);
    },
    startGame({ commit }) {
      socketSend.startGame();
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
  },
});
