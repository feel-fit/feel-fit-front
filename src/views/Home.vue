<template>
  <div>
    <portada></portada>
    <buscador></buscador>
    <whatsapp/>
    <producto></producto>
    <products-new></products-new>
    <fresa/>
    <producto/>
    <products-new></products-new>


    <!-- Tercera seccion productos-->
    <section class="row py-5 position-relative">
      <img src="../assets/images/fresa2_home.png" class="fresa2_home d-none d-md-inline-block position-absolute">
      <div class="col-sm-12">
        <div class="container">
          <div class="row justify-content-between mx-auto rounded shadow">
            <div class="img_productos col-6 col-md-4">
              <img src="../assets/images/sorpresa.png" alt="Papas" class="w-100 mx-auto d-block"
                   style="margin-top: -10%;">
            </div>
            <div class="text_productos col-6 col-md-4">
              <h2 class="font-weight-bold font-italic text-info mt-md-5">Nuestro productos nuevos</h2>
              <hr class="hr_producto">
              <p class="font-italic"><a href="#">Entra y sorprendente</a></p>
              <hr class="hr_producto">
            </div>
            <div class="align-self-center col-md-3 d-md-block d-none">
              <button type="button" class="btn btn-info btn-lg">
                <font-awesome-icon icon="arrow-right" size="xs"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <products-new></products-new>
  </div>
</template>
<script>

    import api from '../plugins/api'
    import cabecera from '../components/header.vue'
    import portada from '../components/home/portada'
    import buscador from '../components/home/buscador'
    import producto from '../components/home/producto'
    import whatsapp from '../components/home/whatsapp'
    import fresa from '../components/home/fresa'
    import productsNew from "../components/home/productsNew";

    export default {
        name: 'home',
        data() {
            return {}
        },
        components: {
            portada, buscador, producto, whatsapp, fresa,productsNew
        },
        mounted() {
            api.Users().getAll()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
