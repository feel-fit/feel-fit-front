<template>
  <div class="tab-pane fade" id="interes" role="tabpanel">
    <div class="container-fluid py-5 my-3 px-0  ">
      <div class="row header-interes align-items-center ">
        <div class="col-12">
          <h1 class="header-text">
            Nuestro
            <br />Blog
          </h1>
        </div>
      </div>

      <!--fresa -->
      <fresa />
      <!--fresa -->

      <!-- articulos blog -->
      <carousel class="margen-receta my-5" identificador="blog" />
      <!-- blog -->

      <!--linea -->
      <linea class="margen-receta my-5" :name="'Te puede interesar'" />
      <!--linea -->

      <!-- articulos -->
      <div class="row margen-receta my-5" v-for="(articulo,index) in articulos">
        <div class="col-6 p-0" :class="[index%2 ? 'order-1' : '']">
          <img :src="articulo.photo" class="style-imagen-articulo" />
        </div>
        <div class="col-6 articulo">
          <div class="p-4">
            <h1>{{articulo.title}}</h1>
            <p
              class="articulo-city"
            >{{articulo.author}} - {{articulo.created_at|moment("from", "now")}}</p>
            <p class="articulo-text text-dark m-0">{{articulo.text_header}}</p>
            <div class="text-right">
              <button class="btn btn-primary boton">Leer más -></button>
            </div>
          </div>
        </div>
      </div>
      <!-- articulos -->
    </div>
  </div>
</template>

<script>
import api from "../../plugins/api";
import linea from "./home/linea.vue";
import carousel from "./home/carouselBlog.vue";
import fresa from "./home/fresa.vue";
export default {
  components: { linea, carousel , fresa },
  data() {
    return {
      articulos: []
    };
  },
  beforeMount() {
    api
      .Blog()
      .getAll()
      .then(response => {
        this.articulos = response.data.data;
      });
  }
};
</script>

<style scoped lang="scss">
.header-interes {
  height: 400px;
  background: url("../../assets/images/recetas/blog/18.png") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.header-text {
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-family: "CircularStd-BookItalic";
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 0.7rem;
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
    max-height: 100px;
    overflow: hidden;
    font-family: "CircularStd-Medium";
    font-size: 36px;
    color: #000000;
    line-height: 44px;
    text-transform: capitalize;
  }
  .articulo-city {
    height: 10px;
    font-size: 14px;
    color: #666666;
    text-transform: uppercase;
  }
  .articulo-text {
    height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 15px;
  }
  .boton {
    font-family: "CircularStd-Medium";
    font-size: 12px;
    color: #f6f6f6;
  }
}

.style-imagen-articulo {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>