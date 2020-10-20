<template>
  <div id="event">
    <Nav />
    <Search />
    <div class="border">
      <EventHeader :id="id" v-on:attendClicked="this.dispatchAttend"/>
    </div>
    <EventInfo :id="id"/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Search from '@/components/Search'
import EventHeader from '@/components/EventHeader'
import EventInfo from '@/components/EventInfo'
export default {
components: { Nav, Search, EventHeader, EventInfo },
data(){return{
    id: this.$route.params.id
}},
methods: {
  dispatchAttend(attend, id){
    this.$store.dispatch('changeAttend', {attend, id})
  }
}
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';
#event {
    margin: 0 auto;
    max-width: 90vw;
}
.border {
  width: 90vw;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0px 10px 15px -15px $border;
}
</style>