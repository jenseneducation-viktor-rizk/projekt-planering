<template>
  <div id="search">
      <input class="search-bar" type="text" v-model="searchWord">
      <button class="search-button" v-on:click="search">Search</button>
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

<style lang="scss">
@import "@/styles/colors";
#search{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px auto;  
    .search-bar {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        margin: 0 5px 0 auto;
        border: solid 1px $border;
        border-radius: 6px;
        font-size: 1rem;
        &:focus {
            border: solid 1px $focus;
            outline: none;
        }
        &:hover:not(:focus) {
            border: solid 1px $active;
        }
    }
    .search-button {
        margin: 0 auto 0 5px;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        font-size: .9rem;
        min-width: 60px;
        max-width: 80px;
        height: 40px;
        border-radius: 6px;
        border: solid 1px $border;
        background-color: #fff;
        outline: none;
        &:hover {
            border: solid 1px $hover;
            cursor: pointer;
        }
        &:active {
            background-color: $green;
        }
        

    }
}

</style>