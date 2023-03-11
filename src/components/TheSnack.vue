<template>
  <section id="snack">
    <div class="formule">
      <div class="wrapper">
        <header>
          <h1>formule anniversaire</h1>
          <h2>* happy snack *</h2>
          <h3>14,90€ / enfant</h3>
          <h4>Minimum 8 enfants</h4>
        </header>
        <main>
          <p>Détails de la prestation :</p>
          <ul>
            <li>carton d'invitation</li>
            <li>Espace réservé, table dressée</li>
            <li>Déjeuner d'anniversaire(nuggets/pizza)</li>
            <li>Gâteau d'anniversaire</li>
            <li>Boissons à volonté</li>
            <li>Bonbons</li>
            <li>Certificat d'anniversaire</li>
            <li>Animation collective 30 minutes</li>
          </ul>
          <p>Options possibles :</p>
          <ul>
            <li>Jeton moto / pochette surprise</li>
          </ul>
        </main>
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
.formule {
  /* background: linear-gradient(
    180deg,
    rgb(34, 126, 34) 2.9%,
    rgb(168, 251, 60) 90.3%
  ); */
  font-family: "Shantell Sans", cursive;
}
.wrapper {
  width: 100vw;
  background: url("@/assets/anniversaire.png") no-repeat;
  background-position: top;
  background-size: cover;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em;
  text-align: center;
}
header h1,
h2 {
  text-transform: uppercase;
}
header h1 {
  color: rgb(64, 206, 29);
  font-size: clamp(1em, 3.7vw + 1rem, 2.7em);
  font-weight: 900;
}
header h2 {
  color: rgb(23, 23, 199);
  font-size: clamp(1em, 2.7vw + 1rem, 2.7em);
  font-weight: 900;
}
header h3 {
  color: rgb(199, 23, 58);
  font-size: clamp(1em, 2.7vw + 1rem, 2.7em);
  font-weight: 900;
}
header h4 {
  color: black;
  font-size: clamp(1em, 1.7vw + 1rem, 2.7em);
}

main {
  font-size: clamp(1em, 1.3vw + 1rem, 2.7em);
  font-weight: 900;
  padding: 1.5em;
}

main ul {
  margin-left: 1.7em;
  color: black;
}
p {
  color: rgb(64, 206, 29);
  text-decoration: underline;
}
ul + p {
  margin-top: 1.3em;
}
</style>
