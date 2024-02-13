<template>
  <vue-google-autocomplete
      ref="location"
      id="map"
      classname="form-control city-input model-input"
      placeholder="Location"
      v-on:placechanged="getCityData"
      types="(cities)"
      country="us"
  ></vue-google-autocomplete>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
    components: { VueGoogleAutocomplete },

    data: function () {
      return {
        location: []
      };
    },

    mounted() {
      // Here we make focus on the user input
      this.$refs.location.focus();
    },

    methods: {
      /**
       * When the location found
       * @param {Object} cityData Data of the found location
       * @param {Object} placeResultData PlaceResult object
       * @param {String} id Input container ID
       */
      // eslint-disable-next-line
      getCityData: function (cityData, placeResultData, id) {
        this.location = [ cityData.locality, cityData.administrative_area_level_1, cityData.country]
      },
    },
  };
</script>

<style scoped>
.city-input {
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