import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from 'uuid';
// import { list, updateList } from "./list.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        myList: [
            {
                name: "Zumba class",
                date: new Date(2020, 11, 17, 9, 0, 0),
                org: "Z-Gang",
                id: uuidv4(),
                img: "https://www.verywellfit.com/thmb/Gt8hUD-eWejPhLo9kSnhgWCNWYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zumba-fatcamera-c9d4ee824a0f4fda883484f878abc8ae.jpg",
                attend: false,
                reviews: []
            },
            {
                name: "Coffee on the pier",
                date: new Date(2020, 12, 3, 10, 0, 0),
                org: "Kaffedrickarna",
                id: uuidv4(),
                img: "https://image.freepik.com/free-photo/top-view-cup-coffee-with-copy-space_23-2148336691.jpg",
                attend: false,
                reviews: []
            },
            {
                name: "Rave with dave",
                date: new Date(2020, 12, 25, 3, 0, 0),
                org: "Forest trip",
                id: uuidv4(),
                img: "https://imengine2.lrf.infomaker.io/?uuid=6e0d8238-c883-4262-8093-894f08fcbc16&type=preview&source=&function=cropresize&width=1400&height=1000&q=80&x=6&y=0&crop_w=1794&crop_h=1197&z=1.9955654101995566&name=skot-din-skog-klimatsmart-jpg",
                attend: false,
                reviews: []
            },
            {
                name: "Party in the park",
                date: new Date(2020, 10, 4, 17, 0, 0),
                org: "Davey",
                id: uuidv4(),
                img: "https://resfredag.se/wp-content/uploads/2017/05/s%C3%B6der2.png",
                attend: false,
                reviews: []
            }
        ],
        
    },
    getters: {
        getEventById: (state) => (i) => {
            return state.myList.find(event => event.id === i)
        },
        getReviewById: (state) => (i) => {
            return state.myList.find(event => event.id === i).reviews
        }
    },
    mutations: {
        changeAttend(state, payload) {
            Vue.set(state.myList.find(event => event.id === payload.id), 'attend', payload.attend )
        },
        storeReview(state, payload) {
            state.myList.find(event => event.id === payload.id).reviews.push(payload.review)
            console.log(state.myList.find(event => event.id === payload.id).reviews)
            // Vue.set(state.myList.find(event => event.id === payload.id).reviews.push(payload.review))
        }
    },
    actions: {
        changeAttend(context, payload) {
            context.commit('changeAttend', payload)
        },
        storeReview(context, payload) {
            context.commit('storeReview', payload)
        }
    }
});