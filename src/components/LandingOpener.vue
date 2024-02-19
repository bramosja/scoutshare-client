<template>
  <div id="nav">
    <NavHeader></NavHeader>
  </div>
  <div class="overlay">
    <div class="container">
      <div class="content">
        <h1>FIND THE PERFECT PLACE FOR YOUR SHOOT.</h1>
        <h3>Enter keywords for what you're looking for below and find the special spot your clients will love.</h3>
      </div>

      <div class="content">
        <h1>Images</h1>
        <h3>More images</h3>
      </div>
    </div>

  </div>
</template>

<script setup>
import NavHeader from "@/components/Nav/NavHeader.vue";

</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
.container {
  display: flex;
  justify-content: space-evenly;
}

#nav {
  display: block;
  width: auto;
  div {
    display: flex;
    justify-content: space-between;
  }
}
</style>
