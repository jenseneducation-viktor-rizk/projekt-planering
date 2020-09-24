import Vue from "vue";
import Vuex from "vuex";
import list from "./list";
import searches from "./searches"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myList: list,
        mySearches: searches
    },
    getters: {},
    mutations: {},
    actions: {}
});