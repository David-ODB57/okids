<template>
  <the-header />
  <router-view />
  <the-footer />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: { TheFooter, TheHeader },
};
</script>

<style>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
}
</style>
