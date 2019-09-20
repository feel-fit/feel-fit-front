<template>
  <div class="container-fluid p-0 d-flex" :class="{'toggled':!open_menu}" id="app">
    <slider/>
    <div class="w-100" id="page-content-wrapper" :class="{'open_cart':open_cart}">
      <cabecera/>
      <router-view/>
      <foot/>
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

export default {
  name: 'app',
  components: {
    cabecera, foot, slider, producto, whatsapp, buscador, fresa, sliderCar
  },
  mounted () {
    if (this.$store.state.nuevos.length == 0) this.$store.dispatch('getNuevos')
  },
  computed: {
    open_menu () {
      return this.$store.state.open_menu
    },
    open_cart () {
      return this.$store.state.open_cart
    },
  }
}
</script>
<style scoped lang="scss">
  .open_cart {
    margin-left: -20rem;
  }
</style>








