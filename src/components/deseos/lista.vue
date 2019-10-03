<template>
  <div>
    <div class="container">
      <div class="mb-5 p-5 shadow cuerpo_border">
        <div class="row mb-5">
          <div class="col">
            <span
              class="h1 font-italic font-weight-bold text-center pb-1 text-primary"
            >Tu lista de deseos</span>
            <p class="font-weight-bold text-dark">Tiene {{quantityHearts}} productos</p>
            <hr class="linea" />
          </div>
        </div>
        <div class="row mb-4 p-1 d-none d-md-flex">
          <div class="col-3">
            <span class="text-left">Producto</span>
          </div>
          <div class="col-md-3 col-lg-4 text-center">
            <span>Nombre</span>
          </div>
          <div class="col-2 text-lg-center">
            <span>Cantidad</span>
          </div>
          <div class="col-2 text-lg-center">
            <span>Precio</span>
          </div>
          <div class="col-1"></div>
        </div>
        <!-- Fila de deseos -->
        <div class="mb-4 shadow box p-1" v-for="item in wishlist">
          <div class="row align-items-center">
            <div class="col-1 text-center">
              <div class="form-check">
                <div class="custom-control custom-checkbox">
                  <button
                    @click="remove_product_cart(item)"
                    type="button"
                    class="close p-3"
                    aria-label="Close"
                  >
                    <small aria-hidden="true">&times;</small>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-2 col-lg-1 col-xl-1">
              <div class="card border-0">
                <img :src="item.images[0].url" class="img-fluid card-img-top rounded-left" />
              </div>
            </div>
            <div class="col-3 col-lg-5">
              <span class="h6 font-italic font-weight-bold text-primary">{{item.name}}</span>
              <br />
              <span class="h6 d-none d-md-block">{{item.brand.name}}</span>
            </div>
            <div class="col-1 col-sm-2 ml-2 ml-sm-0">
              <div class="row">
                <div
                  @click="item.quantity--"
                  class="click border col-12 col-md-4 p-0 rounded text-center"
                >
                  <span></span>-
                </div>
                <div class="col-12 col-md-4 border text-center p-0">
                  <span></span>
                  {{ item.quantity }}
                </div>
                <div
                  @click="item.quantity++"
                  class="click col-12 col-md-4 border rounded text-center p-0"
                >
                  <span></span>+
                </div>
              </div>
              <!-- <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">-</button>
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">+</button>
              </div>-->
            </div>
            <div class="col-3 col-md-2 text-center">
              <span>{{item.price | money}}</span>
            </div>
            <div class="col-md-1 d-none d-md-block">
              <a href="#">
                <img src="../../assets/images/deseos/heart.svg" alt="Corazon" class="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div class="row mt-5 d-flex justify-content-between">
          <span
            @click="eliminar"
            class="btn btn-lg btn-primary click text-white font-italic h6"
          >Borrar lista deseos</span>

          <span
            @click="agregarCarrito"
            class="btn btn-lg btn-primary click text-white font-italic h6"
          >Agregar al carrito</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cloneDeep } from "lodash";
export default {
  name: "lista_deseos",
  data() {
    return {};
  },
  computed: {
    quantityHearts() {
      return this.$store.state.wishlist.length;
    },
    wishlist() {
      return this.$store.state.wishlist.map(item => {
        this.$set(item, "quantity", item.quantity || 1);
        return item;
      });
    }
  },
  methods: {
    agregarCarrito() {
      this.wishlist.map(item =>
        this.$store.commit("addToCart", cloneDeep(item))
      );
      this.$store.state.wishlist = [];
    },
    remove_product_cart(item) {
      this.$store.commit("removeProductWish", item);
    },
    eliminar() {
      this.$store.state.wishlist = [];
    }
  }
};
</script>
<style scoped lang="scss">
.caja {
  border: red solid 2px;
}
.cuerpo_border {
  border-radius: 1rem;
}
.box {
  border-radius: 1rem;
}
.box:hover {
  transition: box-shadow 0.3s;
  box-shadow: 0 0 3px rgb(30, 214, 217) !important;
}
.linea {
  margin-left: 0;
  border: black 1px solid;
  width: 30px;
}
.click {
  cursor: pointer;
}
</style>
