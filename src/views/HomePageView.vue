<template>
  <div class="home">
    <section id="main">
      <div class="royal">
        <img :src="require('@/assets/logo-royal.webp')" alt="logo royal kids" />
      </div>
      <h1>Royal Kids Hauconcourt devient</h1>
      <div class="okids">
        <img :src="require('@/assets/logo.png')" alt="logo" />
      </div>
    </section>
    <div class="divider">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <the-snack />
    <div class="divider-line">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <the-prices />
  </div>
</template>

<script>
import ThePrices from "../components/ThePrices.vue";
import TheSnack from "../components/TheSnack.vue";

export default {
  components: { TheSnack, ThePrices },
  name: "HomePageView",
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: url("@/assets/okids.webp") no-repeat;
      background-position: center;
      background-size: contain; */
  overflow: hidden;
}
#main {
  width: 100%;
  background: #36a9e1;
}
.royal {
  display: flex;
  justify-content: center;
  padding: 1.5em;
}
.okids {
  display: flex;
  justify-content: center;
}
.royal img,
.okids img {
  width: 40vw;
}
h1 {
  text-align: center;
  font-size: clamp(1em, 3.7vw + 1rem, 2.7em);
  font-family: "Shantell Sans", cursive;
  color: black;
}
.divider {
  width: 100%;
}

.divider svg {
  width: calc(100% + 1.3px);
  height: 138px;
}

.divider .shape-fill {
  fill: #36a9e1;
}

.divider-line {
  width: 100%;
  overflow: hidden;
  transform: rotate(180deg);
}

.divider-line svg {
  width: calc(100% + 1.3px);
  height: 167px;
}

.divider-line .shape-fill {
  fill: #f5a623;
}
</style>
