<template>
  <section id="tarifs">
    <h2>Nos Formules</h2>
    <div class="container">
      <div class="infos" v-for="formule in formules" :key="formule.title">
        <div class="headings">
          <div class="left">
            <div class="view-details">
              <button
                class="btn-plus"
                :style="{
                  display: activeFormule === formule ? 'none' : 'block',
                }"
                @click="toggleDetails(formule)"
              >
                +
              </button>
              <button
                class="btn-moins"
                :style="{
                  display: activeFormule === formule ? 'block' : 'none',
                }"
                @click="toggleDetails(formule)"
              >
                -
              </button>
            </div>
            <div class="formule">
              <h3 class="formule-title">Formule {{ formule.title }}</h3>
              <h4>{{ formule.forfait }}</h4>
              <h5 v-if="formule.title === 'BASIC' || formule.title === 'SNACK'">
                Formule SANS animateur
              </h5>
              <h5
                v-if="formule.title === 'VIP' || formule.title === 'VIP SNACK'"
              >
                Formule avec un animateur pendant toute la durée de
                l'anniversaire
              </h5>
              <h5>{{ formule.horaire }}</h5>
            </div>
          </div>

          <div class="right">
            <div class="formule-price">{{ formule.price }}</div>
          </div>
        </div>
        <div
          class="details"
          :style="{ display: activeFormule === formule ? 'block' : 'none' }"
        >
          <h4>Est inclus dans cette formule:</h4>
          <p v-for="detail in formule.details" :key="detail">{{ detail }}</p>
          <br />
          <h4 class="options" v-if="formule.option">Option possible:</h4>
          <p v-if="formule.option">{{ formule.option }}</p>
        </div>
      </div>
      <div class="warnings">
        <p>Un MINIMUM de 9 ENFANTS sera facturé.</p>
        <p>
          Les groupes d'anniversaires restent sous la responsabilité des adultes
          organisateurs.
        </p>
        <p>
          <b
            >Les consommations et boissons venant de l'extérieur sont
            INTERDITS.</b
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeFormule: null,
      formules: [
        {
          title: "BASIC",
          price: "135€",
          forfait: "puis 12,90€/enfant supplémentaire",
          horaire:
            "Uniquement disponible le mercredi ou samedi matin ou dimanche matin",
          details: [
            "+ accès illimité aux jeux pendant 2h",
            "+ un espace anniversaire dédié",
            "+ cartons d'invitation",
            "+ gâteau d'anniversaire",
            "+ boisson à volonté(sirop, eau)",
            "+ bonbons (à discrétion)",
          ],
          option: "+ jeton moto",
        },
        {
          title: "SNACK",
          price: "159€",
          forfait: "puis 14,90€/enfant supplémentaire",
          horaire: "De 10h à 12h45",
          details: [
            "+ accès illimité aux jeux pendant 2h45",
            "+ un espace anniversaire dédié",
            "+ cartons d'invitation",
            "+ repas(nuggets et chips)",
            "+ gâteau d'anniversaire",
            "+ boisson à volonté(sirop, eau)",
            "+ bonbons (à discrétion)",
          ],
          option: "+ jeton moto",
        },
        {
          title: "VIP",
          price: "189€",
          forfait: "puis 18,90€/enfant supplémentaire",
          horaire: "de 14h à 16h45 ou de 10h à 12h30 le samedi ou le dimanche",
          details: [
            "+ accès illimité aux jeux pendant 2h45",
            "+ un espace anniversaire dédié",
            "+ cartons d'invitation",
            "+ gâteau d'anniversaire",
            "+ boisson à volonté(sirop, eau)",
            "+ bonbons (à discrétion)",
            "+ animation musicale",
            "+ parade et chorégraphie avec la mascotte",
            "+ 1 jeton moto pour chaque enfant",
            "+ 1 pochette surprise pour chaque enfant",
          ],
        },
        {
          title: "VIP SNACK",
          price: "219€",
          forfait: "puis 21,90€/enfant supplémentaire",
          horaire: "de 10h à 13h",
          details: [
            "+ accès illimité aux jeux pendant 3h",
            "+ un espace anniversaire dédié",
            "+ cartons d'invitation",
            "+ repas(nuggets et chips)",
            "+ gâteau d'anniversaire",
            "+ boisson à volonté(sirop, eau)",
            "+ bonbons (à discrétion)",
            "+ animation musicale",
            "+ parade et chorégraphie avec la mascotte",
            "+ 1 jeton moto pour chaque enfant",
            "+ 1 pochette surprise pour chaque enfant",
          ],
        },
      ],
    };
  },
  methods: {
    toggleDetails(formule) {
      if (this.activeFormule === formule) {
        this.activeFormule = null;
      } else {
        this.activeFormule = formule;
      }
    },
  },
};
</script>

<style>
#tarifs {
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("@/assets/anniv.png") no-repeat;
  /* background-position: top center; */
  background-size: cover;
  font-family: "Shantell Sans", cursive;
  padding: 1em;
}
.container {
  width: 100%;
  min-height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: clamp(1em, 4.7vw + 1rem, 5em);
  text-transform: uppercase;
}
h3 {
  font-size: clamp(2em, 1.7vw + 1rem, 4em);
}
h4 {
  font-size: clamp(0.75em, 0.7vw + 0.66rem, 3em);
}
.view-details button {
  padding: 0.2em 0.5em;
  background: #f5a623;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.infos {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.infos + .infos {
  margin-top: 2em;
}

.headings {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
}
.left button {
  margin-right: 1em;
}
.formule-title {
  color: #bf3782;
}
.formule-price {
  font-size: clamp(1em, 3.7vw + 1rem, 3.7em);
  font-weight: 900;
  color: black;
}
.details {
  padding: 1em 2em;
  font-size: clamp(1em, 1.7vw + 1rem, 1.7em);
}
.warnings {
  text-align: center;
  margin-top: 3em;
  font-size: clamp(0.7em, 0.3vw + 0.5rem, 1.7em);
}
.warnings p:last-of-type {
  margin-top: 1em;
}
</style>
