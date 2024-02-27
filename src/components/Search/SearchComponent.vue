<template>
  <div id="search-container">
    <div style="padding: .5em;">Find a location your clients will love</div>
    <SearchInputs></SearchInputs>
  </div>
</template>

<script setup>
import SearchInputs from "@/components/Search/SearchInputs.vue";

// const API_URL = 'http://localhost:3000/locations'

</script>

<style scoped>
#search-container {
  display: flex;
  flex-direction: column;
  min-height: 10em;
  background: #E5EEED;
  font-weight: 800;
  font-size: 2em;
  color: #000000;
}

</style>