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
    getters: {
        getEventById: (state) => (i) => {
            // console.log("incoming id:", i)
            // console.log("state: ", state.myList.find(e => e.id == i).id)
            
            return state.myList.find(event => event.id === i)
        }
    },
    mutations: {},
    actions: {}
});