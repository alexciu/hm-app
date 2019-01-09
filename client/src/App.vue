<template>
  <div id="app">
    <h6 class="temp">app.vue</h6>
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Register></Register> -->
    <Menu></Menu>
    <router-view></router-view>
  </div>
  
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
   components: {
     Menu
   }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: #502c3d 2px solid;
  height: 80%;
}
</style>
