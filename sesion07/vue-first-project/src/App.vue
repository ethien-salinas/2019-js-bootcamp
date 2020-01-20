<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MainContent/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
