<template>
  <!-- Inicio seccion de productos-->
    <section class="py-5 position-relative" id="section1">
      <img :src="hoja" class="hoja_home position-absolute d-none d-md-inline-block">
      <img :src="fresa" class="fresa_buscador position-absolute d-md-none">
      <div class="container">
        <form class="form-inline active-pink-4 justify-content-center d-md-none border-0">
          <input class="buscador form-control form-control-sm mr-3 w-75 shadow p-4 mb-4 bg-white" type="text"
                 placeholder="Encuentra yogurt, granola y mucho más.."
                 aria-label="Search">
          <img :src="search" alt="Buscar" class="img_search">
          
        </form>
      </div>
    </section>
</template>

<script>
import hoja from './../../assets/images/hoja.png'
import fresa from './../../assets/images/conocenos/fresa2.png'
import search from './../../assets/images/search.svg'
    export default {
        name: "buscador",
        data() {
            return {
                hoja: hoja,
                search: search,
                fresa:fresa
            }
        },
    }
</script>

<style scoped>
.buscador{
    border-radius: 2rem;
}
.fresa_buscador{
  left: 90%;
  top: -10%;
  width: 14%;
}
 
</style>
