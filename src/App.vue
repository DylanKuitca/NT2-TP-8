<template>
  <div>
    <div class="container-fluid mt-3">
      <div class="jumbotron">
        <h2>TP N8</h2>
        <Navbar/>
        <router-view></router-view>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
