<template>
  <vue-google-autocomplete
      ref="location"
      id="auto-location"
      classname="form-control location-input model-input"
      placeholder="Location"
      v-on:placechanged="getLocationData"
      types="(cities)"
      country="us"
  ></vue-google-autocomplete>
</template>

<script setup>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import {onMounted, onUpdated} from "vue";

const props = defineProps(['dataLocation', 'isEditing'])
const emit = defineEmits(["selectLocation"])

onMounted(() => {

})

onUpdated(() => {
  prefillLocation()
})

/**
 * When the location found
 * @param {Object} cityData Data of the found location
 * @param {Object} placeResultData PlaceResult object
 * @param {String} id Input container ID
 */
// eslint-disable-next-line
const getLocationData = (locationData, placeResultData, id) => {
  const location = [locationData.locality, locationData.administrative_area_level_1, locationData.country]
  emit("selectLocation", location)
}

const prefillLocation = () => {
  if (props.isEditing === true ) {
    document.getElementById("auto-location").value = dataLocationString()
  } else {
    document.getElementById("auto-location").value = ''
  }
}

const dataLocationString = () => {
  let locationString = ''
  props.dataLocation[0] != null ? locationString += `${props.dataLocation[0]}, ` : false
  props.dataLocation[1] != null ? locationString += `${props.dataLocation[1]}, ` : false
  props.dataLocation[2] != null ? locationString += `${props.dataLocation[2]}` : false

  return locationString
}
</script>

<style scoped>
.location-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  color: #111;
  border-radius: 4px;
  resize: vertical;
}
</style>