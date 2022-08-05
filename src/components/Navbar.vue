<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <img src="../assets/pick-n-pay-logo.png" alt="logo" />
      </div>
      <div class="col">
        <nav>
          <router-link class="text-decoration-none" to="/">Home</router-link> |
          <router-link class="text-decoration-none" to="/about">About</router-link> |
          <router-link class="text-decoration-none" to="/products">Products</router-link> |
          <router-link class="text-decoration-none" to="/register">Register</router-link> | 
          <router-link class="text-decoration-none" to="login">Login</router-link> |
          <router-link class="text-decoration-none" to="admin">Admin</router-link>
        </nav>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.row{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
containr-fluid{
  top: 0;
  position: sticky;
}
</style>