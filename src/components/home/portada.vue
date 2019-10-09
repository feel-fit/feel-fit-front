<template>
  <div>
    <section
      class="bienvenidos d-flex align-items-center flex-column justify-content-center"
      :style="{ backgroundImage: `url('${background}')`}"
    >
      <img :src="logo" alt="logo" class />
      <br />
      <a class="btn btn-primary text-white btn-lg my-4 w-md-50" href="/catalogo">
        <i>Comprar ahora</i>&nbsp;&nbsp;
        <font-awesome-icon icon="arrow-right" size="xs" />
      </a>
      <a class="mt-1" href="#producto-nuevo">
        <img :src="scroll" alt="Scroll" class="d-none d-md-inline-block" data-target="#section1" />
      </a>
    </section>
    <template>
      <img class="d-none" v-for="item in slides" :src="item.url" :key="item.url" rel="preload" />
    </template>
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
      background: background,
      defecto: background,
      logo: logo,
      scroll: scroll,
      contador: 1
    };
  },
  mounted() {
     this.animacionCambioImagen(); 
  },
  methods: {
    animacionCambioImagen() {
      $(".bienvenidos")
        .stop()
        .animate({ opacity: 0 },{ duration: 2000 },function(){
          this.animacionCambioImagen2().bind(this);
        });
    },
    animacionCambioImagen2(){
        let imagen = this.cambiarImagen();
          $(".bienvenidos")
            .css({'background-image': "url('"+imagen+"')"})
            .animate({ opacity: 1 }, { duration: 5000},this.animacionCambioImagen());
    },
    cambiarImagen(){
      if(this.slides.length>0){
        if(this.contador<this.slides.length){
          this.contador++;
        }else{
          this.contador=0;
        }
        console.log(thi);
        return this.slides[this.contador].url;
      }
      return this.defecto;
    }
  }
};
</script>
<style scoped>
.bienvenidos {
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
  -webkit-transition: background-position 0.5s ease-in-out;
  -moz-transition: background-position 0.5s ease-in-out;
  -o-transition: background-position 0.5s ease-in-out;
  transition: background-position 0.5s ease-in-out;
}

@keyframes animatedBackground {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
