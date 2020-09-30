<template>
  <div id="event-info">
      <div class="left-header">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam optio mollitia sequi, molestias perspiciatis doloremque saepe voluptatibus dolorem velit! Recusandae numquam, asperiores corporis odit cupiditate iusto dolor unde dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatum architecto laudantium nisi dolore sapiente voluptates molestias aut officia fugiat nemo veritatis sint eveniet, ut corporis. Voluptates eum dicta vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laboriosam similique aliquid minima numquam voluptas laborum quos, hic, harum, dicta libero cupiditate aliquam temporibus accusamus sint. Delectus ullam expedita minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum, aliquid, quod omnis rerum, ipsum minus eligendi tenetur eius voluptatem perspiciatis ducimus repellendus ratione enim fugiat corporis nobis praesentium mollitia! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae esse qui delectus, earum temporibus, iste quaerat commodi culpa, quos expedita rem dolorem reiciendis harum! Dolore deserunt voluptate adipisci quam quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, debitis quod necessitatibus quas laboriosam maiores ad nesciunt porro reprehenderit atque. Corrupti consequatur corporis dolor facilis, porro commodi totam omnis saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et sunt id nesciunt cum, officia iste reiciendis dolores velit magnam fuga? Autem, nemo nam beatae qui iste consequatur veritatis perferendis.</p>
      </div>
      <div class="right-header">
        <textarea class="review" name="review" id="" cols="40" rows="20"></textarea>
        <Button class="submit" :buttonText="'Submit'"/> 
      </div>

  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  components: { Button }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';

#event-info {
display: flex;
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
  .right-header {
    display: flex;
    flex-direction: column;
  }
  .submit {
    margin-top: 10px;
    margin-left: auto;
    margin-right: 0;
  }
}

</style>