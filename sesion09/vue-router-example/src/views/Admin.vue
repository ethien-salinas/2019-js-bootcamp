<template>
  <div>
    <h1>Admin View</h1>
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