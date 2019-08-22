<template>
  <div class="container-fluid p-0 d-flex toggled" id="app">
    <slider/>
    <sliderCar/>
    <div class="w-100" id="page-content-wrapper">
      <cabecera/>
      <router-view/>
      <foot/>
    </div>
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
    import producto from '@/components/home/producto.vue'
    import whatsapp from '@/components/home/whatsapp.vue'
    import buscador from '@/components/home/buscador.vue'
    import fresa from '@/components/home/fresa.vue'
    import foot from '@/components/foot.vue'

    export default {
        name: 'app',
        components: {
            cabecera, foot, slider, producto, whatsapp, buscador, fresa, sliderCar
        }
    }
</script>








