<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomeMain></HomeMain>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMain from "../components/HomeMain.vue";

export default {
  name: "HomeView",
  component: { HomeMain },
};
</script>
