import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loader: false,
  },

  mutations: {
    loading(state, payload) {
      state.loader = payload;
    },
  }

});

export default store