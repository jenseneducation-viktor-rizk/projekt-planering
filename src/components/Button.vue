<template>
  <button class="button" @click="emitClick">{{ buttonText }}</button>
</template>

<script>
export default {
    props: {
        buttonText: String
    },
    methods: {
        emitClick() {
            this.$emit('buttonClicked')
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';
    .button {
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
        color: $green;
        user-select: none;
        &:hover {
            border: solid 1px $hover;
            cursor: pointer;
        }
        &:active {
            background-color: $green;
            color: white;
        }
        

    }
</style>