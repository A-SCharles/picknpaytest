<template>
  <div class="container-fluid">
    <h1>Admin...</h1>
    <table class="table-responsive table-bordered">
      <div v-for="product in products" :key="product">
        <tr>
          <th>Product Name</th>
          <th>Product Quantity</th>
          <th>Product Price</th>
          <th>Total Product Price</th>
          <th>Date Created</th>
        </tr>
        <tr>
          <td>
            {{ product.prodName }}
          </td>
          <td>
            {{ product.quantity }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            {{ product.totalamount }}
          </td>
          <td>
            {{ product.dateCreated }}
          </td>
        </tr>
      </div>
    </table>
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
  min-height: 88.44vh;
  color: white;
}
table {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}
</style>