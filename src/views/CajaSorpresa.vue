<template>
  <section>
    <volver></volver>
    <home-category
      url="cajas-sorpresa"
      title="Nuestras Cajas Sorpresa"
      class="m-5"
      :id="3"
      :image="sorpresa"
    />

    <div class="m-5" v-for="(producto, index) in products" :key="index">
      <div class="container contenido-sorpresa">
        <div class="producto bg-primary row justify-content-between mx-auto shadow p-3">
          <div class="mb-5 m-sm-0 col-md-5 col-lg-4 d-flex align-content-center align-items-center ">
            <img :src="producto.images.length>0?producto.images[0].url:imageDefault"  class="w-100 mx-auto d-block" />
          </div>
          <div class="col-md-5 text_productos ">
            <h2 class="font-weight-bold font-italic mt-lg-5 mb-3 text-white">{{producto.name}}</h2>
            <p
              class="font-italic mb-3 texto-producto font overflow-auto"
            >{{producto.description}}</p>
            <p class="text-right text-white font-weight-bold ">$15.000</p>
          </div>
          <div class="col-md-auto ">
            <!--botones-->
            <div class="row flex-md-column mr-md-2 justify-content-between h-100 ">
              
              <div @click="addToWishlist(producto)" class="">
                <div class="corazon bg-white p-2 rounded-circle shadow">
                  <img src="../assets/images/fav.svg" alt="Corazon" class="img-fluid" />
                </div>
              </div>

              <div @click="addToCart(producto)" class="">
                <div class="car bg-white p-2 rounded-circle shadow">
                  <img
                    src="../assets/images/product/botonCar.svg"
                    alt="Car"
                    style="width: 25px;"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '../plugins/api'
import volver from "../components/products/volver.vue";
import homeCategory from "../components/home/homeCategory";
import imageDefault from '../assets/images/caja_sorpresa/Group.svg';
import sorpresa from "../assets/images/sorpresa.png";
export default {
  components: { volver, homeCategory },
  data() {
    return {
      sorpresa,
      imageDefault,
      products:[]
    };
  },

  mounted(){
    api.Categories().getBySlug('cajas-sorpresa').then(response => {
        let id = response.data.data[0].id
        api.Categories().products(id).getPaginate().then(response => {
          this.products = response.data.data;
        }).catch()
      }).catch()
  },
  methods:{
      addToCart (product) {
      this.$store.commit('addToCart',product)
    },
    addToWishlist (product) {
      this.$store.commit('addToWishlist',product)
    },
    setData (data, id) {
      this.productos = data
      api.Categories().getOne(id).then(response => {
        this.name = response.data.data.name
      })
    }
  }
};
</script>

<style scoped lang="scss">
.caja {
  border: 2px red solid;
}

.producto {
  border-radius: 1.25rem;
}

.texto-producto {
  max-height: 125px;
  color: white;
  padding: 1.5rem;
}

.contenido-sorpresa {
  padding-left: 7%;
  padding-right: 7%;
}
</style>