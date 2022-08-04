<template>
<div v-if="product">
    <h2>{{product[0].prodName}}</h2>
    <img :src="product[0].prodUrl" alt="">
</div>
</template>

<script>
export default {
    props: ["id"],

    mounted() {
        // Call function created in store
        this.$store.dispatch("getProduct", this.id);
    },
    computed: {
        // returns item from function that was called
        product() {
            console.log(this.$store.state.product)
            return this.$store.state.product;
        },
    },
}
</script>

<style>
</style>