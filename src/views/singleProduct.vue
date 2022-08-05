<template>
  <div class="container-fluid">
    <div v-if="product">
      <h2>This is definately a {{ product[0].prodName }}...</h2>
      <img :src="product[0].prodUrl" alt="" />
    </div>
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
      console.log(this.$store.state.product);
      return this.$store.state.product;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  min-height: 88.4vh;
  color: white;
}
img{
    height: 500px;
    aspect-ratio: 1;
}
</style>