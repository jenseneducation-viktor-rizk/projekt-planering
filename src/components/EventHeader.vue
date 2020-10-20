<template>
  <div id="event-header">
        <div class="left-container">
            <h2>
                {{ this.event.name }}
            </h2>
            <h3>
                {{ this.event.date.toLocaleString("se-SE", this.dateOptions) }}
            </h3>
        </div>
        <div class="right-container">
            <Attend v-if="!this.event.attend" @attendClick="this.attend" :buttonText="'Attend'"/>
            <Attend v-else @attendClick="this.attend" :buttonText="'Neglect'"/>
            <img v-show="this.event.attend" height="100px" src="https://img.icons8.com/cotton/256/000000/checkmark.png"/>
            <h3>
               Host: {{ this.event.org }}
            </h3>
        </div>
  </div>
</template>

<script>
import Attend from '@/components/Attend'
export default {
    components: { Attend },
    data(){return{
        // willAttend: event.attend,
        dateOptions: { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: false},
    }},
    props: {
        id: String
    },
    methods: {
        attend() {
            this.$emit('attendClicked', !this.event.attend, this.id)
        }
    },
    computed: {
        event: function () {
            return this.$store.getters.getEventById(this.id);
        }
    },
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';
#event-header {
    width: 100%;
    display: flex;
    height: 240px;
    flex-direction: row;
    justify-content: space-between;
}
.right-container, .left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.right-container {
    align-items: flex-end;
}
.left-container {
    align-items: flex-start;
}


</style>