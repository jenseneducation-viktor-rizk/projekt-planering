<template>
  <div id="app">
    <router-view />      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/styles/fonts.scss";
  body {
    margin: 0 auto;
    padding: 0;
    max-width: 100vw;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -1px;
  }
  h1 {
    font-weight: 900;
    font-style: italic;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    display: inline;
  }
  h2 {
    margin: 0;
    font-size: 4rem;
    font-size: 7vw;
    font-weight: 100;
  }
  h3 {
    margin: 0;
    font-weight: 300;
  }
  .right-header {
    margin-left: auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    text-align: right;
    max-width: 60vw;
  }
  .left-header {
    margin-right: auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    text-align: left;
    max-width: 60vw;
  }

  </style>