<template>
  <div>
    <h1>Dashboard view</h1>
    <button v-on:click="logoutFn">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logoutFn(){
      localStorage.removeItem('jwt')
      localStorage.removeItem('user')
      this.$router.push('login')
    }
  }
}
</script>

<style>

</style>