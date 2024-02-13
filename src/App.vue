<template>
  <router-view></router-view>
  <ul>
    <li><router-link to="/locations">Locations</router-link></li>
  </ul>
</template>

<script>
// import LocationsItems from './components/LocationsItems.vue'
// import LandingOpener from './components/LandingOpener.vue';

export default {
  name: 'App',
  components: {
    // LandingOpener,
    // LocationsItems
  },
  mounted() {
    let placesApiScript = document.createElement('script')
    placesApiScript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_API_KEY}&libraries=places`)
    document.head.appendChild(placesApiScript)
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
