<template>
  <div id="meetup">
    <div class="container">
        <h3>
           {{ this.day.toUpperCase() }}
        </h3>
        <h2>
            {{ meetup.name }}
        </h2>
        <h2>
            {{ meetup.org }}
        </h2>
        <!-- {{ this.day.charAt(0).toUpperCase() + this.day.slice(1) }} -->


    </div>
  </div>
</template>

<script>
export default {
    data(){return{
        dateOptions: { weekday: 'long', month: 'long', day: 'numeric', hours: 'numeric',  hour12: false},
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
    }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';

#meetup {
border: solid 1px $card-border;
height: 200px;
width: 200px;
border-radius: 6px;
margin: 1vw;
padding: 6px;

    &:hover {
        cursor: pointer;
        border: solid 1px $hover
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
    }
    h3 {
        letter-spacing: 0px;
        color: $border;
        font-size: .8rem;
        font-weight: 900;
    }
    
}
</style>