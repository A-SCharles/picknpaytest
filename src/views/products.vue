<template>
    <h1>Hello I am products</h1>
    <div v-if="products">
        <div v-for="product in products" :key="product">
            <div class="container">
                <div class="row">
                    <div class="card p-3" style="width: 18rem; height: 500px;">
                        <h2>{{ product.prodName }}</h2>
                        <img :src="product.prodUrl" class="card-img-top" alt="">
                        <router-link :to="{ name: 'product', params: { id: product.id } }">
                            Single
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getProducts")
    },
    computed: {
        products() {
            console.log(this.$store.state.products)
            return this.$store.state.products
        }
    }
}
</script>

<style>
</style>