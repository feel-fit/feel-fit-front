<template>
  <div class="container-fluid p-0 d-flex flex-column h-100" :class="{'toggled':!open_menu}" id="app">
    <loading :opacity="0.9" color="#20d6d9" :active.sync="$store.state.loading"
             :is-full-page="true" :z-index="1000000">
             </loading>
    <slider/>
    <div >
      <div class="w-100" id="page-content-wrapper" :class="{'open_cart':open_cart}">
        <cabecera/>
        <router-view/>
        <whatsapp/>
        <terminos/>
        <politicas-envio/>
        <politicas-calidad/>
      </div>
      <sliderCar/>
    </div>
    <foot class="pie"/>
  </div>
</template>
<style  lang="scss">
  #app {
    font-family: 'Varela Round', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
<script>
import cabecera from '@/components/cabecera.vue'
import slider from '@/components/slider.vue'
import sliderCar from '@/components/sliderCar.vue'
import producto from '@/components/home/homeCategory.vue'
import whatsapp from '@/components/home/whatsapp.vue'
import buscador from '@/components/home/buscador.vue'
import fresa from '@/components/home/fresa.vue'
import foot from '@/components/foot.vue'
import terminos from '@/components/politicas/terminos.vue'
import politicasEnvio from '@/components/politicas/politicasEnvio.vue'
import politicasCalidad from '@/components/politicas/politicasCalidad.vue'
import Whatsapp from '@/components/home/whatsapp.vue'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'app',
  components: {
    Loading, cabecera, foot, slider, producto, whatsapp, buscador, fresa, sliderCar, terminos, politicasEnvio, politicasCalidad, Whatsapp
  },
  mounted () {
    if (this.$store.state.nuevos.length == 0) this.$store.dispatch('getNuevos')
    this.$store.state.loading = false
  },
  computed: {
    open_menu () {
      return this.$store.state.open_menu
    },
    open_cart () {
      return this.$store.state.open_cart
    }
  }
}
</script>
<style scoped lang="scss">
  .pie{
    margin-top: auto;
    width: 100%;
  }
  .open_cart {
    margin-left: -20rem;
  }

  .sliderCar{
    position:relative;
    right: 0;
  }
</style>
