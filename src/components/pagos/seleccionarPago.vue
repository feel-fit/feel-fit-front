<template>
  <div class="container" id="informacion-cliente">
    <div class="row">
                <span class="h3 font-italic text-primary font-weight-bold titulo">
                    M&eacute;todo de pago
                </span>
    </div>
    <div class="row mb-2">
      <div class="container">
        <div class="row">
          <div class="col-12 text-uppercase">
            Direccion de envio
          </div>
          <div class="col-12 ml-3">
            <span v-if="me.addresses && me.addresses.length > 0" class="text-dark font-weight-bold h4 text-capitalize">{{me.addresses[0].address}}</span>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4 ">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="domicilio-armenia" name="metodo-pago" class="custom-control-input" v-model="metodoPago" value="1">
                  <label class="custom-control-label" for="domicilio-armenia"></label>
                </div>
              </div>
              <div class="col-sm-9">
                <h4 class="text-primary">Contraentrega en Armenia</h4>
                <p class="text-muted">
                  Debe ser pagado contraentrega en efectivo al domiciliario. Revise las politicas de envio.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="pago-pse" name="metodo-pago" class="custom-control-input" v-model="metodoPago" value="2">
                  <label class="custom-control-label" for="pago-pse"></label>
                </div>
              </div>
              <div class="col-sm-9">
                <h4 class="text-primary">Pago con PSE</h4>
                <p class="text-muted">
                  Las transacciones son seguras y estan cifradas. Luego de hacer click en "finalizar pedido", ser&aacute;s
                  redirigido a Davivienda para completar tu compra de forma segura.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="pago-credito" name="metodo-pago" class="custom-control-input" v-model="metodoPago" value="3">
                  <label class="custom-control-label" for="pago-credito"></label>
                </div>
              </div>
              <div class="col-sm-9">
                <h4 class="text-primary">Paga con tarjeta de cr&eacute;dito</h4>
                <p class="text-muted">
                  Ser&aacute;s redirigido a Davivienda para completar tu compra de forma segur&aacute;.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-5">
          <div class="col-12">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="facturaCheck" v-model="factura">
              <label class="custom-control-label" for="facturaCheck">Necesita Factura</label>
            </div>
          </div>
          <div class="col-12">
            <div class="custom-control custom-checkbox">
              <input :class="{ 'is-invalid': !condiciones }" type="checkbox" name="condiciones" class="custom-control-input" id="condiciones" v-model="condiciones">
              <label class="custom-control-label" for="condiciones"> He le&iacute;do estoy de acuerdo con los
                <span class="font-weight-bold text-primary">t&eacute;rminos y cond&iacute;ciones </span> y
                <span class="font-weight-bold text-primary">politicas de privaidad.</span> </label>
              <div class="invalid-feedback">Se requiere confirmación</div>
            </div>
          </div>
        </div>
        <div class="row p-5">
          <div class="col-sm-6  align-self-center ">
            <a href="#" @click="back" class="text-dark text-decoration-none">
              <font-awesome-icon icon="arrow-left" size="xs"/>
              Regresa a comprar</a>
          </div>
          <div class="col-sm-6  text-right">
            <button @click="next" type="submit" class="btn btn-primary text-white font-italic font-weight-bold  btn-lg w-md-100 text-uppercase">
              Realizar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
    <descuento v-if="descuento" :discount="me.discounts[0]"></descuento>
  </div>
</template>
<script>
import { sumBy, isEmpty } from 'lodash'
import api from '../../plugins/api'
import descuento from './modalDescuento'

export default {
  name: 'seleccionarPago',
  components: { descuento },
  data () {
    return {
      metodoPago: '1',
      factura: false,
      condiciones: false,
      items: []
    }
  },
  mounted () {
  
  },
  computed: {
    me () {
      return this.$store.state.me
    },
    shopping () {
      return {
        status_order_id: 1,
        user_id: this.me.id,
        address_id: this.me.addresses[0].id,
        items: this.cart.items,
        total: this.total + this.costo_envio - this.descuento,
        // crear descuento
        discount_id: null,
        payment_id: this.metodoPago
        
      }
    },
    cart () {
      return this.$store.state.cart
    },
    total () {
      return sumBy(this.cart.items, item => {
        return item.quantity * item.price
      })
    },
    costo_envio () {
      return this.$store.state.tool_paying.costSend
    },
    discount () {
      if (!isEmpty(this.me) && !isEmpty(this.me.discounts) && this.me.discounts.length > 0) {
        return this.me.discounts[0]
      }
      return null
    },
    descuento () {
      if (!isEmpty(this.me) && !isEmpty(this.me.discounts) && this.me.discounts.length > 0) {
        return parseInt(( this.me.discounts[0].value / 100 ) * this.total)
      }
      return 0
    }
  },
  methods: {
    next () {
      if (this.condiciones) {
        this.$store.state.loading = true
        this.shopping.discount_id = this.discount ? this.discount.id : null
        api.Shopping().create(this.shopping).then(result => {
          this.cart.items = this.shopping.items.map(item => {
            item.shopping_id = result.data.data.id
            item.product_id = item.id
            item.value = item.price
            return item
          })
          
          api.DetailShopping().create(this.cart).then(response => {
              // TODO mandar a thankyou page o a pagina de pagos
              this.$store.state.loading = false
              if (this.me.discounts.length > 0 && this.me.discounts[0].id) {
                api.Discounts().Users(this.me.discounts[0].id).delete(this.me.id).then(response => {
                  this.$store.state.me.discounts = this.me.discounts.filter(item => item.id != this.me.discounts[0].id)
                })
              }
              let value = response.data.total;
              this.$store.state.cart.items = []
              this.$router.push({
                name:'thankyou',
                params:{value}
              })
              if (this.metodoPago != '1') {
                window.open('https://www.zonapagos.com/t_feelfit/', '_system')
              }
            }
          )
        }).catch(error => {
          this.$store.state.loading = false
        })
      }
    },
    back () {
      $('#envios-tab').tab('show')
    }
  }
}
</script>
<style scoped>
  label{
    font-size: 0.7em;
  }
  
  .titulo{
    margin-top:    5rem;
    margin-bottom: 2.5rem;
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
  
  .list-car{
    height:     30rem;
    overflow-y: scroll;
  }
</style>
