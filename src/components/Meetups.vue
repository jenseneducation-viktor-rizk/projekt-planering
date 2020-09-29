<template>
  <div id="meetups">
    <div class="left-header">
      <h2>Events</h2>
    </div>
    <div class="meetups-container">
      <Meetup v-for="meetup in meetups" :key="meetup.id" :meetup="meetup"/>
    </div>
  </div>
</template>

<script>
import Meetup from '@/components/Meetup'
import store from '@/store/index.js'

export default {
    components: { Meetup },
    data(){return{
        meetups: []
    }},
    created: function () {
        this.meetups = store.state.myList
        
    }
}
</script>

<style lang="scss">
@import '@/styles/fonts';
#meetups {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.meetups-container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

</style>