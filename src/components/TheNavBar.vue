<template>
  <nav>
    <div class="navbar-brand">
      <a href="/"><img :src="require('@/assets/logo.png')" alt="logo" /></a>
    </div>
    <ul>
      <li><a href="/">accueil</a></li>
      <li><a href="#">parc</a></li>
      <li><a href="#">anniversaire</a></li>
      <li><a href="#snack">snack</a></li>
      <li><a href="#tarifs">tarifs</a></li>
      <li><a href="#">contact</a></li>
    </ul>
    <the-social-links />
  </nav>
</template>

<script>
import TheSocialLinks from "./TheSocialLinks.vue";

export default {
  components: { TheSocialLinks },
  name: "NavBar",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@500&display=swap");
root {
  --color-primary: #db3f39;
  --color-secondary: #ee9e39;
  --color-green: #1eab97;
  --color-blue: #5bc5f2;

  --li-first: var(--color-primary);
  --li-second: var(--color-secondary);
  --li-third: var(--color-green);
  --li-fourth: var(--color-primary);
  --li-fifth: var(--color-blue);
  --li-sixth: var(--color-secondary);
}
nav {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5em 3%;
  background: #bf3782;
  font-family: "Shantell Sans", cursive;
}
.navbar-brand img {
  width: 200px;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
li {
  list-style: none;
  padding: 1em;
}
li:nth-child(6n + 1) {
  background-color: var(--li-first);
}
li:nth-child(6n + 2) {
  background-color: var(--li-second);
}
li:nth-child(6n + 3) {
  background-color: var(--li-third);
}
li:nth-child(6n + 4) {
  background-color: var(--li-fourth);
}
li:nth-child(6n + 5) {
  background-color: var(--li-fifth);
}
li:nth-child(6n + 6) {
  background-color: var(--li-sixth);
}
li a {
  color: hsl(0, 0%, 100%);
  font-size: clamp(1rem, 0.5rem + 0.6667vw, 1.2rem);
  font-weight: 700;
  text-decoration: underline transparent;
  text-transform: uppercase;
  transition: all 0.3s;
}
/* li a:hover,
li a:focus {
  --color: #f35b04;
  color: var(--color);
  text-decoration-color: var(--color);
} */
</style>
