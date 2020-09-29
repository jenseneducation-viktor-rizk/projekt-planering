<template>
  <div @click="route" id="meetup">
    <div  class="container">
        <h3>
           {{ this.day.toUpperCase() }}
        </h3>
        <h2 class="light">
            {{ meetup.name }}
        </h2>
        <h4>
            {{ meetup.org }}
        </h4>
    </div>
    <div class="image-container">
        <img class="image" :src="meetup.img" :alt="meetup.name">
    </div>
  </div>
</template>

<script>
import router from '@/router/index.js'

export default {
    data(){return{
        dateOptions: { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false},
        timeOptions: {}
    }},
    props: {
        meetup: Object
    },
    computed: {
        day: function () {
            return this.meetup.date.toLocaleString('se-SE', this.dateOptions)
        }
    },
    created: function () {
        // console.log(this.day)
    },
    methods: {
        route() {

            router.push("/event/" + this.meetup.id)
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';

#meetup {
border: solid 1px $card-border;
height: 250px;
width: 200px;
border-radius: 10px;
margin: 1vw;
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;
overflow: hidden;
    &:hover {
        cursor: pointer;
        border: solid 1px $hover
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 6px
    }
    h2 {
        font-size: 1.2rem;
    }
    h3 {
        letter-spacing: 0px;
        color: $border;
        font-size: .8rem;
    }
    .image-container {
        filter: sepia(0.3);
        background-position: bottom;
        width: 200px;
        overflow: hidden;
        .image {
            height: 100%;
        }
    }
    
}
</style>