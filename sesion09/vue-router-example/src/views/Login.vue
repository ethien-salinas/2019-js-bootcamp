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
            let data = {
              email: this.email,
              password: this.password
            }
            console.log(data)
            console.log(JSON.stringify(data))
            fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                let is_admin = response.user.is_admin
                // set in localstorage
                localStorage.setItem('user', JSON.stringify(response.user))
                localStorage.setItem('jwt', response.token)

                // redirect as needed
                if(localStorage.getItem('jwt') !== null){
                  if (is_admin) {
                    this.$router.push('admin')
                  }else{
                    this.$router.push('dashboard')
                  }
                }
            });
        }
    }
}
</script>

<style>

</style>