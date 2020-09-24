<template>
  <div id="search">
      <input class="search-bar" type="text" v-model="searchWord">
      <button v-on:click="search">Search</button>
  </div>
</template>

<script>
export default {
    data(){return{
        searchWord: "",
        prevSearches: []
    }},
    methods: {
        search: function () {
            
            this.prevSearches.push(this.searchWord);
            this.searchWord = "";
        }
    }
}
</script>

<style>

</style>