import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export const TEXT_COLOR_NORMAL = '#bcbcb9';
export const TEXT_COLOR_NORMAL = '#9c9c99';
export const TEXT_COLOR_RED = '#e60d2e';
export const TEXT_COLOR_GREY = '#8f8fbc';


export default new Vuex.Store({
  state: {
    status: false,
    loaded: false,
    sectionsLoaded: [],
    imageFrames: new Map<string, HTMLImageElement[]>(),
    toRoute: "",
    fromRoute: "",
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
