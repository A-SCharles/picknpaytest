import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setproducts",data));
    },
    getProduct: async (context, id) => {
      fetch("https://picknpay-apitest.herokuapp.com/products/"+ id)
        .then((res) => res.json())
        .then((data) => context.commit("setproduct",data));
      },

  },
  modules: {},
});