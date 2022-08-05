<template>
  <div class="container-fluid">
    <h1>Hello I am products</h1>
    <div v-if="products">
      <div v-for="product in products" :key="product">
        <div class="container">
          <div id="row" class="row">
            <div class="card p-3" style="width: 100rem; height: 500px">
              <div class="row">
                <h2>{{ product.prodName }}</h2>
                <div class="col">
                  <img :src="product.prodUrl" class="card-img-top" alt="" />
                </div>
                <div id="details" class="col">
                  <label for="quantity">Quantity: {{ product.quantity }}</label>
                  <br> 
                  <label for="price">Price: R{{ product.price }}</label>
                  <br>
                  <label for="totalamount">Total amount:      {{ product.totalamount }}</label>
                  <br>
                  <label for="datecreated">Date created:  {{ product.dateCreated }}</label>
                </div>
                <router-link
                  :to="{ name: 'product', params: { id: product.id } }"
                >
                  Single
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  min-height: 88.4vh;
}
h1 {
  color: white;
  text-decoration: underline 2px;
}
#row {
  display: flex;
  justify-content: center;
  padding: 10px;
}
img {
  object-fit: contain;
  aspect-ratio: 1;
  height: 300px;
}
#details{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card{
  border: solid 4px blue;
  border-radius: 50px;
}
</style>