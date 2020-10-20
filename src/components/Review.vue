<template>
<div class="review-container">
  <h3>Review</h3>
  <textarea class="review" name="review" id="" cols="40" rows="20" v-model="myReview"></textarea>
    <Button class="submit" :buttonText="'Submit'" @buttonClicked="dispatchReview(myReview, id)"/> 
    <div class="reviews" v-for="(review, i) in reviews" :key="i"> {{ i + 1 }}. {{ review }} </div>
</div>
</template>

<script>
import Button from '@/components/Button'
export default {
components: { Button },
data(){return{
    myReview: ""
}},
props: {
    id: String
},
methods: {
    dispatchReview(review, id){
        this.$store.dispatch('storeReview', {review, id})
        this.myReview = ""
    }
},
computed: {
  reviews: function () {
    return this.$store.getters.getReviewById(this.id);
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
.reviews {
  width: 100%;
  text-align: start;
}

</style>