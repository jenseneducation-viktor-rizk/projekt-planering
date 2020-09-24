<template>
    <div id="header">
        
            <div class="text-container">
                <h1>Get together with your new or old friends now</h1>
            </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;  
    width: 90vw;  
    .text-container {
        margin-left: auto;
        margin-top: 4vh;
        margin-bottom: 4vh;
        text-align: right;
        max-width: 60vw;
        h1 {
            margin: 0;
            font-size: 7vw;
            font-weight: 100;
        }
    }
}
// @media screen and (max-width: 600px) {
//     #header {
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     margin: auto;  
//     width: 90vw;  
//     .text-container {
//         margin-left: auto;
//         text-align: right;
//         max-width: 500px;
//         h1 {
//             font-size: 10vw;
//             font-weight: 100;
//         }
//     }
// }
// }
</style>