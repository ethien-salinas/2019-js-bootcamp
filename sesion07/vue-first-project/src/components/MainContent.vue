<template>
    <section class="container">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </section>
</template>

<script>
import Card from './Card.vue'
export default {
    components: {
        Card
    }
}
</script>

<style scoped>
    .container{
        position: relative;
        min-width: 85vw;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .container .card:nth-child(even) {
        flex-direction: column-reverse;
    }
    @media (max-width: 1000px) {
        .container {
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            margin: 50px;
        }
        .container .card:nth-child(even) {
            flex-direction: row-reverse;
            margin: 10px 0;
        }
    }
    @media (max-width: 600px) {
        .container .card:nth-child(even) {
            flex-direction: column;
        }
    }
</style>