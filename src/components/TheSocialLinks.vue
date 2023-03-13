<template>
  <div class="social">
    <a href="https://www.facebook.com/royalkids.hauconcourt/?locale=fr_FR"
      ><i class="fab fa-facebook" aria-hidden="true"></i
    ></a>
    <a href="http://"><i class="fab fa-instagram" aria-hidden="true"></i></a>
    <a href="http://"><i class="fab fa-twitter" aria-hidden="true"></i></a>
  </div>
</template>

<script>
export default {
  name: "TheSocialLinks",
};
</script>

<style scoped>
.social {
  /* display: flex; */
  /* justify-content: flex-end; */
  /* align-self: flex-end; */
}
i {
  font-size: 1.7em;
  color: black;
  transition: 0.3s ease-in-out;
}
a + a {
  margin-left: 1em;
}
i:hover {
  color: #00b3ff;
}
</style>
