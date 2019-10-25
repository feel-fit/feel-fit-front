<template>
  <div>
    <section class="bienvenidos d-flex flex-column align-items-center justify-content-center">
      <div class="fondo-bienvenido">
        <div id="carouselSlider" class="carousel slide h-100" data-ride="carousel">
          
          <div class="carousel-inner h-100">
            <div
              class="carousel-item h-100"
              :class="{active:index==0}"
              v-for="(background,index) in backgrounds"
            >
              <img class="d-block w-100 h-100 cover" :src="background.url" />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column align-items-center justify-content-center ">
        <img :src="logo" alt="logo" class="img-fluid"/>
        <br/>
        <a class="btn btn-primary text-white btn-lg my-4 w-md-50" href="/catalogo">
          <i>Comprar ahora</i>&nbsp;&nbsp;
          <font-awesome-icon icon="arrow-right" size="xs"/>
        </a>
        <a class="mt-1" href="#producto-nuevo">
          <img :src="scroll" alt="Scroll" class="d-none d-md-inline-block img-fluid" data-target="#section1" />
        </a>
      </div>
    </section>
  </div>
</template>
<script>
import logo from "./../../assets/images/conocenos/logo_conocenos.svg";
import scroll from "./../../assets/images/scroll.svg";
import background from "./../../assets/images/img_bienvenido.png";

export default {
  name: "portada",
  props: ["slides"],
  data() {
    return {
      backgrounds: [
        {
          name: "default",
          url: background
        }
      ],
      logo: logo,
      scroll: scroll,
      contador: 0
    };
  },
  created() {
    if (this.slides.length > 0) {
      this.backgrounds = this.slides;
    }
  },
  mounted() {
    $(".carousel").carousel();
  }
};
</script>
<style scoped>

.bienvenidos {
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  -webkit-transition: background-position 0.5s ease-in-out;
  -moz-transition: background-position 0.5s ease-in-out;
  -o-transition: background-position 0.5s ease-in-out;
  transition: background-position 0.5s ease-in-out;
}

.cover{
  object-fit: cover;
}

.fondo-bienvenido {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -5;
}

.control-img {
  position: absolute;
  z-index: 100;
}

.caja{
  border:2px red solid;
}
</style>
