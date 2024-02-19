<template>
  <div class="nav-contents">
    <img id="nav-logo" src="@/assets/scoutshare_logo.webp" />
    <ul id="nav-list">
      <li class="fake-active">scout</li>
      <li>learn</li>
      <li>community</li>
      <li>blog</li>
    </ul>
    <div id="user-box">
      <JoinBox></JoinBox>
    </div>
  </div>
</template>

<script setup>

import JoinBox from "@/components/Nav/JoinBox.vue";
</script>

<style scoped>
.nav-contents {
  display: flex;
  justify-content: space-between;
}

#nav-logo {
  max-width: 10em;
  max-height: 3.8em;
  padding: 1em;
}

#nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0;

  li {
    padding: 0 2em;
    font-weight: bolder;
    font-size: large;

  }
}

#nav-list > li:hover {
  font-size: larger;
}

#nav-list > li:active {
  text-decoration: underline #F6C641;
}

.fake-active {
  text-decoration: underline #F6C641;
  text-decoration-thickness: .2em;
}

#user-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 3.8em;
  padding: 1em;
}
</style>