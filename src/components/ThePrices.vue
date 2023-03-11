<template>
  <section id="tarifs">
    <div class="infos">
      <div class="left">
        <div class="view-details">
          <button
            class="btn-plus"
            :style="{ display: active ? 'none' : 'block' }"
            @click="open"
          >
            +
          </button>
          <button
            class="btn-moins"
            :style="{ display: active ? 'block' : 'none' }"
            @click="open"
          >
            -
          </button>
        </div>
        <h3 class="formula-title">Formule BASIC</h3>
        <!-- <div class="age-suggestion">Forfait base 9 enfants 189 euros puis</div> -->
      </div>

      <div class="right">
        <div class="formula-price">135€</div>
        <!-- <div class="price-item">Par enfant</div> -->
      </div>
    </div>

    <div class="details" :style="{ display: active ? 'block' : 'none' }">
      <p>Après-midi de 14h à 16h45</p>

      <p>Samedi et Dimanche</p>

      <p>
        Prestations communes à toutes les formules (accès illimité aux jeux
        pendant la durée de l'anniversaire, cartons d'invitation, gâteau
        d'anniversaire, boissons et friandises, certificat d'anniversaire)
      </p>

      <p>+ un animateur consacré à votre anniversaire</p>

      <p>+ parade avec Léon</p>

      <p>+ une pochette surprise pour chaque enfant</p>

      <p>+ un tour de moto pour chaque enfant</p>

      <p>&nbsp;</p>
    </div>

    <div class="bar green"></div>

    <div class="infos">
      <div class="left">
        <div class="view-details">
          <button
            class="btn-plus"
            :style="{ display: active ? 'none' : 'block' }"
            @click="open"
          >
            +
          </button>
          <button
            class="btn-moins"
            :style="{ display: active ? 'block' : 'none' }"
            @click="open"
          >
            -
          </button>
        </div>
        <h3 class="formula-title">Formule SNACK</h3>
        <!-- <div class="age-suggestion">Formule base 9 enfants 159 euros puis </div> -->
      </div>

      <div class="right">
        <div class="formula-price">159€</div>
        <!-- <div class="price-item">Par enfant</div> -->
      </div>
    </div>

    <div class="details" :style="{ display: active ? 'block' : 'none' }">
      <p>Matin de 10h à 12h45</p>

      <p>
        Prestations communes (accès illimité aux jeux pendant la durée de
        l'anniversaire,&nbsp;cartons d'invitation, gâteau d'anniversaire,
        boissons et friandises, certificat d'anniversaire)
      </p>

      <p>+ repas d'anniversaire</p>

      <p>&nbsp;</p>
    </div>

    <div class="bar green"></div>

    <div class="infos">
      <div class="left">
        <div class="view-details">
          <button
            class="btn-plus"
            :style="{ display: active ? 'none' : 'block' }"
            @click="open"
          >
            +
          </button>
          <button
            class="btn-moins"
            :style="{ display: active ? 'block' : 'none' }"
            @click="open"
          >
            -
          </button>
        </div>
        <h3 class="formula-title">Formule VIP</h3>
        <!-- <div class="age-suggestion">Forfait base 9 enfants 189 euros puis</div> -->
      </div>

      <div class="right">
        <div class="formula-price">189€</div>
        <!-- <div class="price-item">Par enfant</div> -->
      </div>
    </div>

    <div class="details" :style="{ display: active ? 'block' : 'none' }">
      <p>Après-midi de 14h à 16h45</p>

      <p>Samedi et Dimanche</p>

      <p>
        Prestations communes à toutes les formules (accès illimité aux jeux
        pendant la durée de l'anniversaire, cartons d'invitation, gâteau
        d'anniversaire, boissons et friandises, certificat d'anniversaire)
      </p>

      <p>+ un animateur consacré à votre anniversaire</p>

      <p>+ parade avec Léon</p>

      <p>+ une pochette surprise pour chaque enfant</p>

      <p>+ un tour de moto pour chaque enfant</p>

      <p>&nbsp;</p>
    </div>

    <div class="bar green"></div>

    <div class="infos">
      <div class="left">
        <div class="view-details">
          <button
            class="btn-plus"
            :style="{ display: active ? 'none' : 'block' }"
            @click="open"
          >
            +
          </button>
          <button
            class="btn-moins"
            :style="{ display: active ? 'block' : 'none' }"
            @click="open"
          >
            -
          </button>
        </div>
        <h3 class="formula-title">Formule VIP SNACK</h3>
        <!-- <div class="age-suggestion">Forfait base 9 enfants 219 euros puis</div> -->
      </div>

      <div class="right">
        <div class="formula-price">219€</div>
        <!-- <div class="price-item">Par enfant</div> -->
      </div>
    </div>

    <div class="details" :style="{ display: active ? 'block' : 'none' }">
      <p>Comprenant :</p>

      <ul>
        <li>
          Accès illimité&nbsp;aux jeux pendant la durée de l'anniversaire,
        </li>
        <li>Cartons d'invitation,</li>
        <li>Gâteau d'anniversaire,</li>
        <li>Boissons et friandises,</li>
        <li>Certificat d'anniversaire,</li>
      </ul>

      <p>
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+ 3</strong
        >&nbsp;heures d'animation encadrée,&nbsp;<br />
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+</strong> un tour de
        moto pour chaque enfant,&nbsp;<br />
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+ </strong>parade avec
        la mascotte,&nbsp;<br />
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+ </strong>une pochette
        surprise pour chaque enfant,&nbsp;<br />
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;+ </strong>repas
        d'anniversaire (chips, nuggets).
      </p>

      <p>
        <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>&nbsp;Horaires:
        10h00&nbsp;à 13h00
      </p>

      <p>&nbsp;</p>
    </div>

    <div class="bar green"></div>
  </section>
</template>

<script>
export default {
  name: "ThePrices",

  data() {
    return {
      active: false,
    };
  },
  methods: {
    open() {
      this.active = !this.active;
    },
  },
};
</script>

<style>
#tarifs {
  min-height: 100%;
  width: 100vw;
  background: #f5a623;
  font-family: "Shantell Sans", cursive;
  /* transform: translateX(1px); */
}
.infos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  padding-left: 1.5em;
  display: flex;
}
.left button {
  margin-right: 1em;
}
.formula-price {
  font-size: 3.8rem;
  line-height: 3.8rem;
  font-weight: 900;
  color: #bbce00;
}
</style>
