<template>
  <div class="home">
    <section id="main">
      <the-slider />
      <div id="presentation">
        <h1>OKIDS HAUCONCOURT</h1>
        <p><b>Parc de jeux pour enfants de 0 à 12 ans</b></p>
        <p>
          <b
            >Bienvenue dans le royaume des enfants à Hauconcourt, aux portes de
            METZ !</b
          >
        </p>
        <h3><b>Le parc:</b></h3>
        <p>
          <b>Okids</b> est une plaine de jeux indoor totalement sécurisée,
          chauffée l’hiver et climatisée l’été, où les enfants évoluent dans des
          jeux géants et adaptés à leur âge sous la surveillance de leurs
          parents.
        </p>
        <p>
          Pour s’amuser, se dépenser, fêter son anniversaire, votre parc de jeux
          <b>Okids</b> est un lieu unique !!!
        </p>
        <h3><b>Horaires:</b></h3>
        <p>
          <b
            >- En période scolaire les mercredis, samedis, dimanches et jours
            fériés de 10h00 à 18h30</b
          >
        </p>
        <p>
          <b
            >- Pendant les vacances scolaires tous les jours de 10h00 à 18h30</b
          >
        </p>

        <!-- <a href="https://www.facebook.com/royalkids.hauconcourt"
          >SUIVEZ TOUTE L'ACTUALITE DU PARC SUR NOTRE PAGE FACEBOOK</a
        >
        <p>
          <b
            >CHAUSSETTES OBLIGATOIRES POUR ENFANTS ET ADULTES, ALIMENTS ET
            BOISSONS (eau, gourdes, etc ….) EXTERIEURS INTERDITS.</b
          >
          <br />A bientôt chez Léon 😍🥳 Parc chauffé ou climatisé ❄️ <br />
          <b>A bientôt les amis</b> <br />
          <b
            >Okids est ouvert les mercredis, samedis et dimanche de 10h à
            18h30</b
          >
        </p> -->
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
    <the-formules />

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
    <the-snack />
    <the-contact-form />
  </div>
</template>

<script>
import TheContactForm from "../components/TheContactForm.vue";
import TheFormules from "../components/TheFormules.vue";
import TheSlider from "../components/TheSlider.vue";
import TheSnack from "../components/TheSnack.vue";

export default {
  components: { TheFormules, TheSlider, TheSnack, TheContactForm },
  name: "HomePageView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap");
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
#main {
  width: 100%;
  background: #36a9e1;
}
#presentation {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

#presentation h3 {
  margin: 1em 0;
  text-transform: uppercase;
}

#presentation p + p {
  margin-top: 0.5em;
}

#presentation p + a {
  margin: 1em 0;
  color: black;
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
  font-size: clamp(2em, 3.7vw + 1rem, 5em);
  color: black;
  margin-bottom: 1em;
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
  transform: rotate(180deg) translateY(-1px);
}

.divider-line svg {
  width: calc(100% + 1.3px);
  height: 200px;
}

.divider-line .shape-fill {
  fill: #6cabf9;
}
</style>
