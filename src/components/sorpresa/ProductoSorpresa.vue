<template>
  <div class="container contenido-sorpresa">
    <div class="producto bg-primary row justify-content-between mx-auto shadow p-3">
      <div class="mb-5 m-sm-0 col-md-5 col-lg-4 d-flex align-content-center align-items-center">
        <img
          :src="producto.images.length>0?producto.images[0].url:imageDefault"
          class="w-100 mx-auto d-block"
        />
      </div>
      <div class="col-md-5 text_productos">
        <h2 class="font-weight-bold font-italic mt-lg-5 mb-3 text-white">{{producto.name}}</h2>
        <p class="font-italic mb-3 texto-producto font overflow-auto text-white">{{producto.description}}</p>
        <p class="text-right text-white font-weight-bold">$15.000</p>
      </div>
      <div class="col-md-auto">
        <!--botones-->
        <div class="row flex-md-column mr-md-2 justify-content-between h-100">
          <div @click="addToWishlist(producto)" class>
            <div class="corazon bg-white p-2 rounded-circle shadow">
              <img :src="isProduct?imgDeseoActivo:imgDeseoNoActivo" alt="Corazon" class="img-fluid" />
            </div>
          </div>

          <div @click="addToCart(producto)" class>
            <div class="car bg-white p-2 rounded-circle shadow">
              <img src="../../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgDeseoActivo from "../../assets/images/deseos/heart.svg";
import imgDeseoNoActivo from "../../assets/images/fav.svg";

export default {
  name: "producto-sorpresa",
  props: {
    producto: {}
  },
  data() {
    return {
      imgDeseoActivo,
      imgDeseoNoActivo
    };
  },
  methods:{
    addToCart () {
      this.$store.commit('addToCart',this.producto)
    },
    addToWishlist () {
      this.$store.commit('addToWishlist',this.producto)
    },
    setData (data, id) {
      this.productos = data
      api.Categories().getOne(id).then(response => {
        this.name = response.data.data.name
      })
    }
  },
  computed:{
    isProduct(){
      let product = this.$store.state.wishlist.find(item => {
        if (item.id === this.producto.id) return item
      })
      if(product){
        return true;
      }else{
        return false;
      }
    }
  }

};
</script>

<style>
</style>