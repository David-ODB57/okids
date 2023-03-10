<template>
  <div class="home">
    <div class="royal">
      <img :src="require('@/assets/logo-royal.webp')" alt="logo royal kids" />
    </div>
    <h1>Royal Kids Hauconcourt devient</h1>
    <div class="okids">
      <img :src="require('@/assets/logo-optimization.png')" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePageView",
};
</script>

<style scoped>
.home {
  padding: 2.3em;
}
.royal {
  display: flex;
  justify-content: center;
  padding: 6em;
}
.royal img,
.okids img {
  margin-top: 3em;
  width: 50vw;
}
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: url("@/assets/okids.webp") no-repeat;
  background-position: center;
  background-size: contain; */
}
h1 {
  text-align: center;
  font-size: clamp(1em, 3.7vw + 1rem, 2.7em);
  font-family: "Shantell Sans", cursive;
  color: black;
}
</style>
