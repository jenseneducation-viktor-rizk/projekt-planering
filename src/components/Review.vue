<template>
<div class="review-container">
  <textarea class="review" name="review" id="" cols="40" rows="20" v-model="myReview"></textarea>
    <Button class="submit" :buttonText="'Submit'" @buttonClicked="submitReview()"/> 
    {{ id }}
</div>
</template>

<script>
import Button from '@/components/Button'
export default {
components: { Button },
data(){return{
    myReview: "",
    trueOrFalse: false
}},
props: {
    id: String
},
methods: {
    submitReview(){
        
    }
}
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';
.review-container {
display: flex;
flex-direction: column;
}
.review {
    font-family: 'Roboto';
    border: solid 1px $border;
    border-radius: 6px;
    padding: 4px;
    resize: none;
    &:hover {
      border: solid 1px $hover;
    }
    &:focus {
      outline: none;
      border: solid 1px $focus;
    }
}

</style>