<template>
  <div class="tab-pane fade" id="interes" role="tabpanel">
    <div class="container-fluid py-5 my-3">
      <div class="row">
        <div class="col-12 p-0">
          <img src="../../assets/images/recetas/blog/18.png" class="style-imagen cabecera" />
        </div>
      </div>
      <!--linea -->
      <linea class="margen-receta my-5" :name="'articulos recientes'" />
      <!--linea -->
      <!-- articulos blog -->
      <carousel class="margen-receta" identificador="interesados" />
      <!-- blog -->
      <!-- articulos -->
      <div class="row margen-receta my-5">
        <div class="col-6 p-0">
          <img
            src="../../assets/images/recetas/blog/18.png"
            class="style-imagen"
          />
        </div>
        <div class="col-6 articulo h-100">
          <div class="p-4">
            <h1>¿Y si probamos con comida de verdad?</h1>
            <p class="articulo-city">Estefania C - Marzo 19,2019</p>
            <p class="articulo-text text-dark m-0">
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
              Hoy abordamos un nuevo tema que esperamos que estremoas sea de interes y utlidad
            </p>
            <div class="text-right">
              <button class="btn btn-primary boton">Leer más -></button>
            </div>
            <p>Tags: ejercicio,habitos,sano,brunch</p>
          </div>
        </div>
      </div>
      <!-- articulos -->
    </div>
  </div>
</template>

<script>
import linea from "./home/linea.vue";
import carousel from "./home/carouselBlog.vue";
export default {
  components: { linea, carousel }
};
</script>

<style scoped lang="scss">
.cabecera {
  height: 400px;
}
.margen-receta {
  margin-left: 10%;
  margin-right: 10%;
}
.articulo {
  height: 400px;
  background-color: #f7f6f6;
  h1 {
    display: block;
    height: 100px;
    overflow: hidden;
    font-family: "CircularStd-Medium";
    font-size: 36px;
    color:#000000;
    line-height: 44px;
  }
  .articulo-city {
    height: 10px;
    font-size: 14px;
    color:#666666;
  }
  .articulo-text {
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .boton{
    font-family: "CircularStd-Medium";
    font-size:12px;
    color:#f6f6f6;
  }
  
}
</style>