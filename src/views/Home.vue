<template>
  <div id="home">
      <Nav />
      <Header />
      <Search />
  </div>
</template>

<script>
import Search from '@/components/Search';
import Nav from '@/components/Nav';
import Header from '@/components/Header'

export default {
  components: { Search, Nav, Header },
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
}

</style>