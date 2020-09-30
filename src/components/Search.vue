<template>
  <div id="search">
        <input class="search-bar" type="text" v-model="searchWord">
        <Button :buttonText="'Search'"/>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
    components: { Button },
    data(){return{
        searchWord: "",
        prevSearches: []
    }},
    methods: {
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
}

</style>