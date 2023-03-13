<template>
  <nav>
    <div class="navbar-brand">
      <a href="/"><img :src="require('@/assets/logo2.png')" alt="logo" /></a>
    </div>
    <ul :class="['nav-links', { 'nav-links-open': isOpen }]">
      <li><a href="#main">accueil</a></li>
      <li><a href="#">parc</a></li>
      <li><a href="#snack">snack</a></li>
      <li><a href="#tarifs">tarifs</a></li>
      <li><a href="#">contact</a></li>
    </ul>
    <div class="social">
      <the-social-links />
    </div>
    <button class="burger-btn" @click="isOpen = !isOpen">
      <i class="fas fa-bars" :class="{ active: isOpen }"></i>
    </button>
  </nav>
</template>

<script>
import TheSocialLinks from "./TheSocialLinks.vue";

export default {
  components: { TheSocialLinks },
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      isMobileView: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkWidth);
    this.checkWidth;
  },
  methods: {
    checkWidth() {
      this.windowWidth = window.innerWidth;
      this.windowWidth <= 750
        ? (this.isMobileView = true)
        : (this.isMobileView = false);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@500&display=swap");

nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1em;
  box-shadow: 0 10px 30px black;
  background: hsla(327, 55%, 48%, 0.9);
  font-family: "Shantell Sans", cursive;
  z-index: 10;
}
.navbar-brand img {
  height: 6vw;
  transition: 0.8s ease-in-out all;
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

li a {
  color: hsl(0, 0%, 100%);
  font-size: clamp(0.5rem, 0.7rem + 0.6667vw, 2rem);
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s;
}
li a:hover,
li a:focus {
  --color: #01b3ff;
  color: var(--color);
}
i.active {
  transform: rotate(180deg);
  transition: 0.8s ease all;
}

/* styles pour le menu burger */
.burger-btn {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  color: white;
  padding: 1rem;
  z-index: 1;
  transition: 0.8s ease all;
}
@media (max-width: 768px) {
  .social {
    display: none;
  }
  .burger-btn {
    display: block;
  }
  .navbar-brand img {
    height: 15vw;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    flex-direction: column;
    background: #bf3782;
    text-align: center;
  }
  .nav-links-open {
    display: flex;
  }
  .nav-links li {
    margin: 1rem 0;
  }
}
</style>
