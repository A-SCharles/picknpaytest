<template>
    <div class="container text-center">
        <div class="row h-75 d-flex justify-content-center align-content-center">
            <form class="w-50 mx-auto p-5 text-black rounded-5" @submit.prevent="register">
                <h2 style="font-size: 3vw">Register</h2>
                <div class="form-group m-3">
                    <!-- firstName -->
                    <label for="name"></label>
                    <input id="name" v-model="name" class="form-control" type="text" placeholder="Enter Name">

                    <!-- lastname -->
                    <label for="lastname"></label>
                    <input id="lastname" v-model="lastname" class="form-control" type="text"
                        placeholder="Enter lastname">

                    <!-- Gender -->
                    <label for="gender"></label>
                    <input id="gender" v-model="gender" class="form-control" type="text" placeholder="Enter Gender">

                    <!-- Address -->
                    <label for="address"></label>
                    <input id="address" v-model="address" class="form-control" type="text" placeholder="Enter Address">

                    <!-- email -->
                    <label for="email"></label>
                    <input id="email" v-model="email" class="form-control" type="email"
                        placeholder="Enter Email Address">

                    <!-- password -->
                    <label for="userpassword"></label>
                    <input id="userpassword" v-model="userpassword" class="form-control" type="password"
                        placeholder="Choose password">
                </div>
                <button type="submit" class="btn btn-dark">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            lastname: "",
            gender: "",
            address: "",
            userRole: "",
            email: "",
            userpassword: "",
        }
    },
    methods: {
        register() {
            // Fetches register function in store and passes values to it
            return this.$store.dispatch("register", {
                firstname: this.name,
                lastname: this.lastname,
                gender: this.gender,
                address: this.address,
                userRole: this.userRole,
                email: this.email,
                password: this.password,
            })
        },
    },

    computed: {
        // returns value from store
        user() {
            return this.$store.state.user
        },
    }
}
</script>
<style>
</style>