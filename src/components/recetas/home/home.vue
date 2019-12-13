<template>
  <div class="">
    <div class="container-fluid p-0 position-relative d-none d-md-block mt-3 margin-slider">
      <!-- slider -->
      <slider />
      <!-- slider -->

      <!-- informacion-admin -->
      <informacion-admin v-if="recetas.length>0" />
      <!-- informacion-admin -->

    </div>
    <!--fresa -->
    <fresa v-if="recetas.length>0"/>
    <!--fresa -->
    <!--linea -->
    <linea class="margen-receta" :name="'mas ideas de feel fit'" v-if="recetas.length>0"/>
    <!--linea -->
    <!--doble recetas -->
    <doblereceta class="margen-receta my-5" :receta1="recetas[0]?recetas[0]:null" :receta2="recetas[1]?recetas[1]:null"/>
    <!--doble recetas -->
    <!--galleta -->
    <galleta v-if="recetas[0]?recetas[0]:null"/>
    <!--galleta -->
    <!-- mensaje positivo -->
    <mensajepositivo class="margen-receta my-5" v-if="recetas[2]?recetas[2]:null" />
    <!-- mensaje positivo -->
    <!--doble recetas -->
    <doblereceta class="margen-receta my-5" :inverso="true" :receta1="recetas[2]?recetas[2]:null" :receta2="recetas[3]?recetas[3]:null"/>
    <!--doble recetas -->
    <!--fresa -->
    <hoja/>
    <!--fresa -->
    <!-- articulos blog -->
    <carousel class="margen-receta my-5" identificador="home"/>
    <!-- blog -->
    <!--galleta -->
    <galleta />
    <!--galleta -->
    <!--populares -->
    <populares class="margen-receta"/>
    <!--populares -->

  </div>
</template>
<script>
import api from '../../../plugins/api'
import linea from "./linea.vue";
import slider from "./slider.vue";
import fresa from "./fresa.vue";
import mensajepositivo from "./mensajepositivo.vue";
import informacionAdmin from "./informacion-admin.vue";
import galleta from './galleta.vue';
import hoja from './hoja.vue';
import carousel from './carouselBlog.vue';
import populares from './populares.vue';
import doblereceta from "./doblereceta.vue";
export default {
  components: {
    slider,
    fresa,
    mensajepositivo,
    informacionAdmin,
    galleta,
    hoja,
    carousel,
    populares,
    doblereceta,
    linea
  },
  data() {
    return {
      recetas:[],
    };
  },
  beforeMount() {
    $(".carousel").carousel();
    api.Recipes().getAll().then(
      response =>{
        this.recetas = response.data.data;
      }
    );
  }
};
</script>

<style scoped lang="scss">
.margen-receta {
  margin-left: 10%;
  margin-right: 10%;
}

.margin-slider {
    margin-bottom: 180px;
  }

@media (max-width: 991px) {
  .margin-slider {
    margin-bottom: 80px;
  }
}
</style>