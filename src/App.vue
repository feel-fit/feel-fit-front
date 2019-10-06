<template>
  <div class="container-fluid p-0 d-flex" :class="{'toggled':!open_menu}" id="app">
    <loading :opacity="0.9" color="#20d6d9" :active.sync="$store.state.loading"
             :is-full-page="true"></loading>
    <slider/>
    <div class="w-100" id="page-content-wrapper" :class="{'open_cart':open_cart}">
      <cabecera/>
      <router-view/>
      <foot/>
      <terminos/>
      <politicas-envio/>
    </div>
    <sliderCar/>
  </div>
</template>
<style lang="scss">
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
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'app',
  components: {
    Loading, cabecera, foot, slider, producto, whatsapp, buscador, fresa, sliderCar, terminos, politicasEnvio
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
  .open_cart {
    margin-left: -20rem;
  }
</style>
