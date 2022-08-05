import { createStore } from "vuex";
import { router } from "@/router/index";

export default createStore({
  state: {
    products: null,
    product: null,
    user: null
  },
  getters: {},
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    setuser: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    // retrieves all products
    getProducts: async (context) => {
      fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setproducts", data));
    },
    // retrieves single
    getProduct: async (context, id) => {
      fetch("https://picknpay-apitest.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setproduct", data));
    },
    register: async (context, user) => {
      fetch("https://picknpay-apitest.herokuapp.com/register", {
        method: "POST",
        body: JSON.stringify(
          user
        ),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() =>(context.dispatch("getProducts")))
        // .then(() => (context.commit("setuser" , user)))
        router.push({name: "products"}) 
    },
  },
  modules: {},
});
