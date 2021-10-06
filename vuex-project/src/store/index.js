import { createStore } from "vuex";

export default createStore({
  state: {
    yapilacaklar: [
      { id: 1, ad: "Kitap Oku", durum: true },
      { id: 2, ad: "Film İzle", durum: false },
      { id: 3, ad: "Spor Yap", durum: true },
    ],
  },
  mutations: {
    ekle(state, { yAd, yDurum }) {
      let yapilacak = {
        id: Math.floor(Math.random() * 1000),
        ad: yAd,
        durum: yDurum,
      };
      state.yapilacaklar.push(yapilacak);
    },
  },
  actions: {
    ekleAction(context, nesne) {
      context.commit("ekle", nesne);
    },
  },
  getters: {
    yapilacakToplamSayisi(state) {
      return state.yapilacaklar.length;
    },

    yapilanlarinSayisi(state) {
      return state.yapilacaklar.filter((y) => y.durum == true).length;
    },
    yapilmayanlarinSayisi(state) {
      return state.yapilacaklar.filter((y) => y.durum == false).length;
    },
  },
  modules: {},
});
