<template>
  <div v-on:click="click" class="attend-button">
      {{ this.buttonText }}
  </div>
</template>

<script>
export default {
    props: {
        buttonText: String
    },
    methods: {
        click() {
            this.$emit('attendClick')
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';

.attend-button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 300;
    color: white;
    background-color: $green;
    width: 180px;
    height: 60px;
    border: solid 1px $border;
    border-radius: 6px;
    box-shadow: 0px 10px 15px -15px $border;
    user-select: none;
    &:hover {
        cursor: pointer;
        border: solid 1px $hover;
        
    }
    &:active {
        background-color: white;
        color: $green;
    }
}
</style>