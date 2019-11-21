<template>
  <div class="tab-pane fade show active" id="home" role="tabpanel">
    <div class="container-fluid p-0 position-relative d-none d-md-block mt-3 margin-slider">
      <!-- slider -->
      <slider />
      <!-- slider -->

      <!-- informacion-admin -->
      <informacion-admin />
      <!-- informacion-admin -->

      <!-- receta-defaul-->

      <!-- receta-defaul -->
    </div>
    <!--fresa -->
    <fresa />
    <!--fresa -->

    <!--linea -->
    <linea class="margen-receta" :name="'mas ideas de feel fit'"/>
    <!--linea -->

    <!--doble recetas -->
    <doblereceta class="margen-receta my-5" />
    <!--doble recetas -->

    <!--fresa -->
    <galleta />
    <!--fresa -->

    <!-- mensaje positivo -->
    <mensajepositivo class="margen-receta my-5" />
    <!-- mensaje positivo -->

    <!--doble recetas -->
    <doblereceta class="margen-receta my-5" :inverso="true" />
    <!--doble recetas -->

    <!--fresa -->
    <hoja />
    <!--fresa -->

    <!--linea -->
    <linea class="margen-receta" :name="'articulos recientes'"/>
    <!--linea -->


    <!--fresa -->
    <galleta />
    <!--fresa -->

    <!--linea -->
    <linea class="margen-receta" :name="'entradas populares'"/>
    <!--linea -->


    <!--doble recetas -->
    <doblereceta class="margen-receta my-5" :inverso="false" />
    <!--doble recetas -->

    <blog/>

  </div>
</template>
<script>
import imageDefault from "../../../assets/images/recetas/Part 2/person.png";
import doblereceta from "./doblereceta.vue";
import slider from "./slider.vue";
import fresa from "./fresa.vue";
import linea from "./linea.vue";
import mensajepositivo from "./mensajepositivo.vue";
import informacionAdmin from "./informacion-admin.vue";
import galleta from './galleta.vue';
import hoja from './hoja.vue';
import blog from './blog.vue';
export default {
  components: {
    doblereceta,
    slider,
    fresa,
    linea,
    mensajepositivo,
    informacionAdmin,
    galleta,
    hoja,
    blog
  },
  data() {
    return {
      imageDefault
    };
  },
  mounted() {
    $(".carousel").carousel();
  }
};
</script>

<style scoped lang="scss">
.margen-receta {
  margin-left: 10%;
  margin-right: 10%;
}

.margin-slider {
    margin-bottom: 80px;
  }

@media (max-width: 768px) {
  .margin-slider {
    margin-bottom: 0px;
  }
}
</style>