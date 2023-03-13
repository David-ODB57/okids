<template>
  <section id="snack">
    <div class="wrapper">
      <div class="inner-wrapper">
        <h3>Pause sucrée ou salée</h3>
        <p>
          Retrouvez dans votre parc de jeux intérieur, un espace de restauration
          convivial. Une carte vous est proposée avec un large choix, pour les
          petits comme pour les grands ! Pour le plaisir et la convivialité,
          boissons chaudes et boissons fraiches.
        </p>
        <h3>Pour les plus gourmands…</h3>
        <p>
          Pizzas, frites, nuggets, boîtes chaudes … Gaufres, crêpes, glaces…
        </p>
        <h3>De quoi passer un agréable moment !!!</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSnack",
};
</script>

<style scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  padding: 3em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Shantell Sans", cursive;
  background: url("@/assets/okids.webp") no-repeat;
  background-position: top center;
  background-size: cover;
  font-size: clamp(1.3em, 2vw + 0.5rem, 2.7em);
}
.inner-wrapper {
  background: rgba(255, 255, 255, 0.508);
  color: black;
  border-radius: 30px;
}
/* p {
  color: #10b0ef;
} */
</style>
