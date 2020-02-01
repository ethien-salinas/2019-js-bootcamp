<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <h2>Login</h2>
    <form>
        <label for="email"></label>
        <input v-model="email" type="email" name="email" id="email" required autofocus>
        <label for="password"></label>
        <input v-model="password" type="password" name="password" id="password" required>
        <button type="submit" v-on:click="handleSubmit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(e){
            e.preventDefault()
            console.log('*** handleSubmit ***', e)
            console.log(this.email)
            console.log(this.password)
        }
    }
}
</script>

<style>

</style>