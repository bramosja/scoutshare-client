<template>
  <vue-google-autocomplete
      ref="city"
      id="map"
      classname="form-control city-input model-input"
      placeholder="City"
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
        city: "",
      };
    },

    mounted() {
      // Here we make focus on the user input
      this.$refs.city.focus();
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
        this.city = cityData;
        console.log(this.city)
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