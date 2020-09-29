<template>
  <div id="event-header">
        <div class="left-container">
            <h2>
                {{ this.event.name }}
            </h2>
            <h3>
                {{ this.event.date.toLocaleString("se-SE", this.dateOptions) }}
            </h3>
        </div>
        <div class="right-container">
            <Attend />
            <h3>
               Host: {{ this.event.org }}
            </h3>
        </div>
  </div>
</template>

<script>
import Attend from '@/components/Attend'
export default {
    components: { Attend },
    data(){return{
        event: {},
        dateOptions: { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',  hour12: false},
    }},
    props: {
        id: String
    },
    computed: {
        
    },
    created: function () {
        // console.log(this.id)
        this.event = this.$store.getters.getEventById(this.id);
    }
}
</script>

<style lang="scss">
@import '@/styles/colors';
@import '@/styles/fonts';
#event-header {
    width: 100%;
    display: flex;
    height: 240px;
    flex-direction: row;
    justify-content: space-between;
}
.right-container, .left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.right-container {
    align-items: flex-end;
}
.left-container {
    align-items: flex-start;
}


</style>