<template>
  <div class="container h-100 d-flex  flex-column " style="width: 310px">

    <div class="row">
      <div class="col-sm-12 bg-white py-5 px-4 ">
        <h3 class="h2 font-italic font-weight-bold text-left text-primary">Tu carrito</h3>
        <span class="texto-resumen text-dark font-weight-bold">Resumen del pedido</span>
      </div>
    </div>

    <div class="row  my-3 flex-fill">
      <div class="col-sm-12 mt-3">
        <div class="row flex-nowrap my-li-own mb-3" v-for="item in cart.items" :key="item.id">
          <div class="col-auto px-0">
            <div class="card border-0">
              <v-lazy-image class="img-fluid image-product rounded-left"
                            :src="item.images.length > 0 ? item.images[0].url : imageDefault"
                            :src-placeholder="imageDefault"/>
            </div>
          </div>
          <div class="col-sm div-va">
            <div class="row py-1">
              <div class="col-sm-12 mb-1 text-left">
                <p class="m-0 font-weight-bold text-capitalize">
                  {{item.name}}
                </p>
              </div>
              <div class="col-auto div-va ">
                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-secondary rounded-0 br-left"
                          @click="item.quantity--">-
                  </button>
                  <button class="btn btn-outline-secondary">{{item.quantity}}</button>
                  <button type="button" class="btn btn-outline-secondary rounded-0 br-right"
                          @click="item.quantity++">+
                  </button>
                </div>
              </div>
              <div class="col-auto div-va px-0">
                <p class="m-0 price font-weight-bold">
                  {{item.price | money}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-auto div-va pl-0">
            <button type="button" class="close" aria-label="Close"
                    @click="remove_product_cart(item)">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row bg-white mt-3 mt-auto p-2 ">
      <div class="col-sm-12 p-4">
        <div class="row  px-5 d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0 font-weight-bold">Subtotal</h6>
          </div>
          <span class="text-muted font-weight-bold">{{total | money}}</span>
        </div>

        <div class="row  pb-1 px-5 d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0 font-weight-bold">Costo envio</h6>
          </div>
          <span class="text-muted font-weight-bold">{{$store.state.tool_paying.costSend | money}}</span>
        </div>

        <div class="row  pb-1 px-5 d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0 font-weight-bold">Descuento</h6>
          </div>
          <span class="text-muted font-weight-bold">{{ 0 | money}}</span>
        </div>

        <div class="row pt-3 pb-1 px-5 d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0 font-weight-bold">Precio Total</h6>
          </div>
          <span class="font-weight-bold text-dark">{{total+$store.state.tool_paying.costSend | money}}</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import imageDefault from '../../assets/images/producto.png'
import sumBy from 'lodash/sumBy'

export default {
  name: 'tuCarrito',
  data: function () {
    return {
      listaCarrito: [],
      imageDefault,
    }
  },
  computed: {
    open () {
      return this.$store.state.open_cart
    },
    cart () {
      return this.$store.state.cart
    },
    total () {
      return sumBy(this.cart.items, item => {
        return item.quantity * item.price
      })
    },
    quantityCart () {
      return sumBy(this.$store.state.cart.items, item => {
        return item.quantity
      })
    }
  },
  methods: {
    open_menu () {
      this.$store.commit('open_cart', !this.open)
    },
    remove_product_cart (item) {
      this.$store.commit('removeProductCart', item)
    }

  }
}
</script>
<style scoped>
  .image-product{
    max-width: 80px;
  }

  .caja{
    background-color: #FFC215;
    border:           red solid;
  }

  .my-li-own{
    background-color: white;
    border-radius:    1rem;
    border-radius:    1rem;
    box-shadow:       0 0 10px rgba(0, 0, 0, .1);
  }

  .my-li-own div{
    color: #20D6D9;
  }

  .div-va{
    display:         flex;
    justify-content: center;
    align-items:     center;
  }

  .br-left{
    border-top-left-radius:    1.5rem !important;
    border-bottom-left-radius: 1.5rem !important;
  }

  .br-right{
    border-top-right-radius:    20rem !important;
    border-bottom-right-radius: 20rem !important;
  }

  .price{
    color: black;
  }

</style>
