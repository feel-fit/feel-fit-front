<template>
  <div class="container-fluid p-0 m-0" v-if="recetas.length>0">
    <fresa class="mt-5" />
    <!-- card 3 recetas -->
    <div class="row margen-receta">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta" v-if="recetas[item-1]">
          <img
            :src="recetas[item-1].photo"
            class="tarjeta-imagen"/>
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">{{recetas[item-1].category.name}}</h5>
            <p
              class="card-text title"
            >{{recetas[item-1].title}}</p>
            <p class="card-text cite">{{recetas[item-1].created_at|moment("from", "now")}} - {{recetas[item-1].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <!-- card 2 recetas -->
    <div class="row margen-receta" v-if="recetas.length>2">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            :src="recetas[item+2].photo"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">{{recetas[item+2].category.name}}</h5>
            <p
              class="card-text title2"
            >{{recetas[item+2].title}}</p>
            <p class="card-text cite2">{{recetas[item+2].created_at|moment("from", "now")}} - {{recetas[item+2].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 2 recetas -->
    <galleta />
    <!-- card 3 recetas -->
    <div class="row margen-receta" v-if="recetas.length>4">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta" v-if="recetas[item+4]">
          <img
            :src="recetas[item+4].photo"
            class="tarjeta-imagen"/>
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">{{recetas[item+4].category.name}}</h5>
            <p
              class="card-text title"
            >{{recetas[item+4].title}}</p>
            <p class="card-text cite">{{recetas[item+4].created_at|moment("from", "now")}} - {{recetas[item+4].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <!-- card 2 recetas -->
    <div class="row margen-receta" v-if="recetas.length>7">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            :src="recetas[item+7].photo"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">{{recetas[item+7].category.name}}</h5>
            <p
              class="card-text title2"
            >{{recetas[item+7].title}}</p>
            <p class="card-text cite2">{{recetas[item+7].created_at|moment("from", "now")}} - {{recetas[item+7].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 2 recetas -->
    <hoja />
    <!-- card 3 recetas -->
    <div class="row margen-receta" v-if="recetas.length>9">
      <div class="mb-5 col-4" v-for="item in 3">
        <div class="card tarjeta" v-if="recetas[item+9]">
          <img
            :src="recetas[item+9].photo"
            class="tarjeta-imagen"/>
          <div class="card-body tarjeta-body">
            <h5 class="card-title tipo">{{recetas[item+9].category.name}}</h5>
            <p
              class="card-text title"
            >{{recetas[item+9].title}}</p>
            <p class="card-text cite">{{recetas[item+9].created_at|moment("from", "now")}} - {{recetas[item+9].author}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- card 3 recetas -->
    <galleta />
    <!-- card 2 recetas -->
    <div class="row margen-receta" v-if="recetas.length>12">
      <div class="mb-5 col-6" v-for="item in 2">
        <div class="card tarjeta">
          <img
            :src="recetas[item+12].photo"
            class="tarjeta-imagen"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title tipo2">{{recetas[item+12].category.name}}</h5>
            <p
              class="card-text title2"
            >{{recetas[item+12].title}}</p>
            <p class="card-text cite2">{{recetas[item+12].created_at|moment("from", "now")}} - {{recetas[item+12].author}}</p>
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
      recetas:[]
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
  width: 90%;
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