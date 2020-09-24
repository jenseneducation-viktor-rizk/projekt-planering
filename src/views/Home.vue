<template>
  <div id="home">
      <h1>
        Meetup
      </h1>
      <p> {{ list }} </p>
      <Search />
  </div>
</template>

<script>
import Search from '@/components/Search';

export default {
  components: { Search },
  computed: {
    list() {
      return this.$store.state.myList
    }
  }
}

</script>

<style lang="scss">

</style>