import { createStore } from "vuex";

import getDocuments from "../composables/documents";
import documentProc from "../composables/documentProc";

const { error, documents } = getDocuments("games");
const { err, addDoc, deleteDoc } = documentProc("games");

export default createStore({
  state: {
    games: documents,
    error: error,
    err: err,
  },
  mutations: {
    addMutation(state, game) {
      let gameN = {
        name: game,
      };
      addDoc(gameN);
    },
    deleteMutation(state, id) {
      deleteDoc(id);
    },
  },
  actions: {
    addGame(context, game) {
      context.commit("addMutation", game);
    },
    deleteGame(context, id) {
      context.commit("deleteMutation", id);
    },
  },
  modules: {},
});
