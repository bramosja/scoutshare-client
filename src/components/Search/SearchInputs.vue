<template>
  <div class="inputs-container">
    <!--  keyword input -->
    <input
      id="keyword-input"
      class="search-input"
      type="text"
      placeholder="Type keywords here.."
      v-model="keywords"
      @blur="search('keyword')"
    >
    <!--  zipcode/location -->
    <input
      id="location-input"
      class="search-input"
      type="text"
      placeholder="Zip Code or City"
      v-model="location"
      @blur="search('location')"
    >
    <!--  shoot type -->
    <input
      id="shoot-type-input"
      class="search-input"
      type="text"
      placeholder="Shoot Type"
      v-model="shootType"
      @blur="search('shoot-type')"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';

const keywords = ref()
const location = ref()
const shootType = ref()

function search(input_type) {
  if (input_type === "keyword") {
    console.log(keywords.value)
  }
  if (input_type === "location") {
    console.log(location.value)
  }
  if (input_type === "shoot-type") {
    console.log(shootType.value)
  }
}
</script>

<style scoped>
#keyword-input {
  flex-grow: 2;
}

#location-input {
}

#shoot-type-input {
}
</style>