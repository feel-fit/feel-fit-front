<template>
  <div class="container-fluid p-0 m-0" v-if="recetas.length>0">
    <fresa class="mt-5" />
    <!-- card 3 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta" v-if="recetas[item-1]">
          <img v-if="recetas[item-1].photo"
            :src="recetas[item-1].photo"
            class="tarjeta-imagen"/>
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">{{recetas[item-1].category.name}}</h5>
            <p
              class="card-text title"
            >{{recetas[item-1].title}}</p>
            <p class="card-text cite">Mayo 13, 2019 - {{recetas[item-1].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <!-- card 2 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            src="../../../assets/images/recetas/Miniaturas/gabi-miranda-dxb_HSjoQ40-unsplash.png"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">postre</h5>
            <p
              class="card-text title2"
            >Torta de manzana y canela, así recibimos la mejor época del año</p>
            <p class="card-text cite2">Mayo 13, 2019 - Estefania C</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 2 recetas -->
    <galleta />
    <!-- card 3 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta">
          <img
            src="../../../assets/images/recetas/Miniaturas/bart-vermeiren-GGFMrUBJHY0-unsplash.png"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">postre</h5>
            <p
              class="card-text title"
            >Torta de manzana y canela, así recibimos la mejor época del año</p>
            <p class="card-text cite">Mayo 13, 2019 - Estefania C</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <!-- card 2 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            src="../../../assets/images/recetas/Miniaturas/gabi-miranda-dxb_HSjoQ40-unsplash.png"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">postre</h5>
            <p
              class="card-text title2"
            >Torta de manzana y canela, así recibimos la mejor época del año</p>
            <p class="card-text cite2">Mayo 13, 2019 - Estefania C</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 2 recetas -->
    <hoja />
    <!-- card 3 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta">
          <img
            src="../../../assets/images/recetas/Miniaturas/bart-vermeiren-GGFMrUBJHY0-unsplash.png"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">postre</h5>
            <p
              class="card-text title"
            >Torta de manzana y canela, así recibimos la mejor época del año</p>
            <p class="card-text cite">Mayo 13, 2019 - Estefania C</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <galleta />
    <!-- card 2 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            src="../../../assets/images/recetas/Miniaturas/gabi-miranda-dxb_HSjoQ40-unsplash.png"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">postre</h5>
            <p
              class="card-text title2"
            >Torta de manzana y canela, así recibimos la mejor época del año</p>
            <p class="card-text cite2">Mayo 13, 2019 - Estefania C</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 2 recetas -->
  </div>
</template>

<script>
import api from '../../../plugins/api'
import fresa from "../home/fresa.vue";
import galleta from "../home/galleta.vue";
import hoja from "../home/hoja.vue";
export default {
  props:['category'],
  components: {
    fresa,
    galleta,
    hoja
  },
  data(){
    return {
      recetas:null
    }
  },
  beforeMount(){
    api.RecipeCategory().getPaginate(this.category).then(
      (response)=>{
        this.recetas=response.data.data;
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
.tarjeta {
  position: relative;
  height: 500px;
}
.tarjeta-imagen {
  width: 100%;
  height: 380px;
  object-fit: cover;
}
.tarjeta-body {
  position: absolute;
  bottom: 0;
  background-color: white;
  margin-right: 5%;
  margin-left: 5%;
  border-radius: 5px;
}
.tipo {
  font-family: "CircularStd-BookItalic";
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
  text-transform: uppercase;
}
.title {
  font-family: "CircularStd-Medium";
  font-size: 18px;
  color: #171717;
  text-align: center;
  line-height: 28px;
}
.cite {
  font-family: "CircularStd-BookItalic";
  color: #a3a3a3;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
}

.tipo2 {
  font-family: "CircularStd-BookItalic";
  font-size: 12px;
  color: #a3a3a3;
  text-transform: uppercase;
}
.title2 {
  font-family: "CircularStd-Medium";
  font-size: 18px;
  color: #171717;
  line-height: 28px;
}
.cite2 {
  font-family: "CircularStd-BookItalic";
  color: #a3a3a3;
  font-size: 14px;
  text-transform: capitalize;
}
</style>