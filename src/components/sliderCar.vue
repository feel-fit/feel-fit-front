<template>
  <div>
    <div :class="{'open':open}" class="bg-white shadow h-100 container" id="sidebarCar-wrapper">
      <div class="row">
        <div class="col-12 h-100">
          <div class="row h-100 overflow-auto">
            <div class="col-12">
              <div class="row">
                <div class="col">
                  <div class="mb-5 mt-5">
                    <span class="h1 font-italic font-weight-bold text-center pb-1 text-primary">Tu carrito</span>
                    <p class="font-weight-bold text-dark">Tienes {{quantityCart}} {{quantityCart == 1 ?'producto' :
                      'productos'}}</p>
                  </div>
                </div>
                <div class="col-auto">
                  <a @click="open_menu" href="#" class="toggle text-body">
                    <font-awesome-icon class="m-4 icon" icon="times"></font-awesome-icon>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="list-group row list-group-flush">
                <div class="col-12 d-flex flex-column">
                  <div class="row bg-light">
                    <div class="col-11 ml-3 mt-3">
                      <!-- Fila de carrito - producto adquirido -->
                      <div v-for="item in cart.items" :key="item.id"
                           class="row align-items-center bg-white justify-content-between shadow mb-4"
                           style="border-radius:1rem;">
                        <div class="col-4 px-0">
                          <div class="card border-0">
                            <v-lazy-image class="img-fluid card-img-top rounded-left"
                                          :src="item.images.length > 0 ? item.images[0].url : imageDefault"
                                          :src-placeholder="imageDefault"
                            />
                          </div>
                        </div>
                        <div class="col-8">
                          <div class="row align-items-center">
                            <div class="col mt-n2 product-name">
                              <span class="h6 text-capitalize font-weight-bold font-italic text-primary">{{item.name}}</span>
                            </div>
                            <div class=" mt-n4">
                              <button @click="remove_product_cart(item)" type="button" class="close p-3" aria-label="Close">
                                <small aria-hidden="true">&times;</small>
                              </button>
                            </div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col">
                              <div class="input-group input-group-sm mr-2" role="group" aria-label="Second group">
                                <div @click="item.quantity--" class="input-group-prepend">
                                  <button type="button" class="btn btn-outline-secondary">-</button>
                                </div>
                                <input type="text" v-model="item.quantity" class="form-control btn btn-outline-secondary">
                                <div @click="item.quantity++" class="input-group-append">
                                  <button class="btn btn-outline-secondary" type="button">+</button>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto"><span class="h6 small font-weight-bold text-dark">{{ item.price | money }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="car_footer" style="height: 432px;"></div> -->
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <div class="col-12 mt-3 politicas">
                  <p class="h4 mb-3 font-weight-bold font-italic text-dark">Politícas de envío</p>
                  <p>
                    Al momento de comprar tus productos ten en cuenta las siguientes recomendaciones:
                  </p>
                  <ul>
                    <li>Compra minima de productos $15.000.</li>
                    <li>Espera tus productos aproximadamente 1 hora y media después de realizado tu pago.</li>
                    <li>Puedes realizar tus pedidos entre las 8 am y 8:30 pm. Si haces tu pedido por fuera de estos
                      horarios nos comunicaremos contigo al día siguiente y programaremos la hora de entrega.
                    </li>
                    <li> Los Domingos y festivos también te llevamos tu domicilio pero nos comunicamos contigo para
                      programar la hora de entrega.
                    </li>
                    <li> Si vives en la ciudad de Armenia el sistema automáticamente le sumara $1.500 a tu pedido por el
                      domicilio.
                    </li>
                    <li> Si vives en uno de los siguientes municipios: Calarcá, Circasia, La Tebaida, Montenegro o
                      Quimbaya el domicilio tendrá un costo de $8,000 y nos comunicaremos contigo después de realizado
                      tu pago para programar la hora de entrega.
                    </li>
                    <li> Puedes realizar tu compra desde cualquier lugar del país, te enviaremos tu pedido a través de
                      empresa de mensajería y el pago del flete lo realizas contra entrega.
                    </li>
                    <li>Por políticas de calidad no enviamos productos que requieren refrigeración en los pedidos
                      despachados mediante empresas de mensajería.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 border-top pt-4 bg-white align-self-end total position-fixed">
              <div class="row">
                <div class="col">
                  <span class="font-italic d-block mb-2 font-weight-bold" style="color:#CCCCCD;">Precio Total</span>
                  <span class=" font-weight-bold font-italic text-dark d-block h4">{{total | money}}</span>
                </div>
                <div class="col">
                  <span @click="pagar" class="btn btn-primary p-3 text-white font-italic font-weight-bold" style="border-radius:30px;">Ir a Pagar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from './../assets/images/logo_menu.svg'
import sumBy from 'lodash/sumBy'
import imageDefault from './../assets/images/producto.png'

export default {
  name: 'slider',
  data () {
    return {
      images: {
        logo: logo
      },
      imageDefault
    }
  },
  mounted () {

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
  watch: {
    cart: {
      handler: function (newValue) {
        this.$store.commit('setCart', newValue)
      },
      deep: true
    }
  },
  methods: {
    open_menu () {
      this.$store.commit('open_cart', !this.open)
    },
    remove_product_cart (item) {
      this.$store.commit('removeProductCart', item)
    },

    pagar () {
      if(this.$store.state.cart.items.length>0){
        this.$router.push('/pagos')
      }
      this.open_menu()
    }

  }
}
</script>
<style scoped lang="scss">
  .rounded-left {
    border-top-left-radius: 1rem !important;
    border-bottom-left-radius: 1rem !important;
  }
  .card {
    background-color: inherit !important;
  }
  .total {
    z-index: 1000;
  }
  #sidebarCar-wrapper {
    min-height: 100vh;
    margin-right: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
    display: none;
    position: fixed;
    background: white;
    z-index: 100000;
    overflow-y: auto;
  }
  #sidebarCar-wrapper .sidebar-heading {
  }
  #sidebarCar-wrapper {
    width: 20rem;
  }
  #sidebarCar-wrapper {
    margin-right: -20rem;
    &.open {
      margin-right: 0;
      display: block;
      right: 0;
      top: 0;
    }
  }
  .product-name{

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    #sidebarCar-wrapper {
      margin-right: -20rem;
      &.open {
        margin-right: 0;
        right: 0;
        top: 0;
      }
    }
  }
  .position-fixed {
    width: 320px;
    bottom: 0;
    right: 0;
  }
  .politicas {
    margin-bottom: 100px;
  }
</style>
