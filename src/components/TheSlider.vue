<template>
  <div class="wrapper">
    <Splide :options="options" :has-track="false">
      <div style="position: relative">
        <SplideTrack>
          <SplideSlide v-for="slide in generateSlides()" :key="slide.alt">
            <img :src="slide.src" :alt="slide.alt" class="slide-image" />
          </SplideSlide>
        </SplideTrack>
      </div>

      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

export default {
  name: "TheSlider",
  components: {
    Splide,
    SplideTrack,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        autoplay: true,
        cover: true,
        height: "40rem",
      },
    };
  },
  methods: {
    generateSlides() {
      const images = require.context(
        "@/assets/slider",
        false,
        /\.(png|jpe?g|gif|webp)$/i
      );
      const slideCount = images.keys().length;
      const baseUrl = window.location.href.replace(/\/$/, "");

      return Array.from({ length: slideCount }).map((value, index) => {
        const imagePath = images(`./image${index}.webp`);
        return {
          src: `${baseUrl}${imagePath}`,
          alt: `Image ${index}`,
        };
      });
    },
  },
};
</script>
<style>
@import "@splidejs/splide/dist/css/themes/splide-default.min.css";

.slide-image {
  width: 100%;
  height: auto;
}
</style>
