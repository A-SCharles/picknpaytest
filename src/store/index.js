import {
  createStore
} from "vuex";
import {
  router
} from "@/router/index.js";

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
      fetch("http://localhost:3000/products")
        // fetch("https://picknpay-apitest.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => context.commit("setproducts", data.results));
    },
    // retrieves single
    getProduct: async (context, id) => {
      fetch("http://localhost:3000/products/" + id)
        // fetch("https://picknpay-apitest.herokuapp.com/products/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setproduct", data.results));
    },

    // adds user to db
    register: async (context, payload) => {
      const {
        firstname,
        lastname,
        gender,
        address,
        userRole,
        email,
        userpassword
      } = payload;
      fetch("http://localhost:3000/register", {
          // fetch("https://picknpay-apitest.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            address: address,
            userRole: userRole,
            email: email,
            userpassword: userpassword
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then(() => (context.dispatch("getProducts")))
        .then(() => (context.commit("setuser", user)));
      console.log(payload)
      router.push({
        name: "products"
      })
    },
    login: async (context, payload) => {
      const myHeaders = new Headers();
      const {
        email,
        userpassword
      } = payload;
      fetch("http://localhost:3000/login", {
          // fetch("https://picknpay-apitest.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            userpassword: userpassword
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => response.json())
        .then((data) => {
          alert(data.msg)
          let token = data.token
          window.localStorage.setItem("x-auth-token", token);
        })
        .then(
          await fetch("http://localhost:3000/users/verify")
          .then((response) => response.json())
          .then((data) => {
            console.table(data)
          })
        )


      // .then((data) => alert(data.msg))
      // .then((data) => {
      //   console.table(data)
      // });
      // console.log(response.json())
      // .then(() => (context.dispatch("getProducts")))
      // .then(() => (context.commit("setuser", user)));
      // router.push({name: "products"}) 
    },
  },
  modules: {},
});