<template>
  <router-view></router-view>
  <ul>
    <li><router-link to="/locations">Locations</router-link></li>
    <li><router-link to="/sites">Sites</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'App'
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
