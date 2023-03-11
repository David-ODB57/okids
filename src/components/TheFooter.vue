<template>
  <footer>
    <div class="columns">
      <img :src="require('@/assets/logo.png')" alt="logo" />
      <div class="middle-column">
        <h3>Coordonnées</h3>
        <p>51 Rue de Sully, 57110 Hauconcourt 0650134469</p>
      </div>
      <div class="last-column">
        <div class="wifi">
          <i class="fa fa-wifi" aria-hidden="true"></i>
          <p>wifi</p>
        </div>
        <div class="clim">
          <i class="fa-solid fa-temperature-half"></i>
          <p>Espaces chauffés et climatisés</p>
        </div>
        <div class="socks">
          <i class="fa-solid fa-socks"></i>
          <p>Chaussettes obligatoires</p>
        </div>
        <div class="alimentation">
          <i class="fa-solid fa-candy-cane"></i>
          <p>Aliments extérieurs interdits</p>
        </div>
      </div>
    </div>
    <p>© Okids 2023</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  padding: 1em;
  background: #bf3782;
  color: white;
}
i {
  color: white;
  margin-bottom: 0.5em;
}
img {
  width: 200px;
}
.columns {
  display: block;
}
.columns > * {
  padding: 1rem;
}

.last-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.last-column div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: clamp(0.75rem, 0.3rem + 0.6667vw, 1.2rem);
  font-weight: 900;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .columns {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
