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
}

</script>

<style lang="scss">
@import "@/styles/colors";
#home {
  margin: 0 auto;
  width: 90vw;
}

</style>