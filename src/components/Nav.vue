<template>
  <div id="nav">
      <div class="nav-container">
        <div class="line">
            <h1>Meetup</h1>
            <h1 class="light-pink">.</h1>
        </div>
      </div>
  </div>
</template>

<script>
export default {


}
</script>

<style lang="scss">
@import "@/styles/fonts";
@import "@/styles/colors";

#nav {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    max-height: 100px;
    width: 100vw;
    
    
    .nav-container {
        
        margin: 10px auto;
        width: 90vw;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .line:hover {
            border-bottom: solid 1px $pink
        }
        h1 {
            color: $pink;
            font-weight: 900;
            font-style: italic;
            font-size: 2rem;
            letter-spacing: -1px;
            margin: 0;
            padding: 0;
            display: inline;
        }
        .light-pink {
            color: $light-pink;
        }
    }
}

</style>