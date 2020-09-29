<template>
  <div id="home">
      <Nav />
      <Header />
      <Search />
      <Meetups />
  </div>
</template>

<script>
import Search from '@/components/Search';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import Meetups from '@/components/Meetups';

export default {
  components: { Search, Nav, Header, Meetups },
  computed: {
    list() {
      return this.$store.state.myList
    }
  }
}

</script>

<style lang="scss">
#home {
  margin: 0 auto;
  width: 90vw;
}

</style>