<template>
  <!-- Inicio seccion de productos-->
    <section class="py-5 position-relative" id="section1">
      <img :src="hoja" class="hoja_home position-absolute d-none d-md-inline-block">
      <div class="container">
        <form class="form-inline active-pink-4 justify-content-center">
          <input class="form-control form-control-sm mr-3 w-75 shadow p-4 mb-4 bg-white rounded" type="text"
                 placeholder="Encuentra yogurt, granola y mucho más.."
                 aria-label="Search">
          <img :src="search" alt="Buscar" class="img_search">
        </form>
      </div>
    </section>
</template>

<script>
import hoja from './../../assets/images/hoja.png'
import search from './../../assets/images/search.svg'
    export default {
        name: "buscador",
        data() {
            return {
                hoja: hoja,
                search:search
            }
        },
    }
</script>

<style scoped>
 
</style>
