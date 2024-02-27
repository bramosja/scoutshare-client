<template>
  <NavHeader></NavHeader>
  <router-view></router-view>
</template>

<script>
import NavHeader from "@/components/Nav/NavHeader.vue";

export default {
  name: 'App',
  components: {NavHeader}
}
</script>

<style>
#app {
  font-family: Filson pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
