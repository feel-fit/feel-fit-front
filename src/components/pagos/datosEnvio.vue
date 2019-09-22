<template>
  <div class="container" id="informacion-cliente">
    <div class="row">
                <span class="h3 font-italic text-primary font-weight-bold titulo">
                    Datos de env&iacute;o
                </span>
    </div>
    <div class="row mb-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            Direccion
          </div>
          <div class="col-12 ml-3">
            <span v-if="me.addresses && me.addresses.length > 0" class="text-dark font-weight-bold h4 text-capitalize">{{me.addresses[0].address }}</span>
          </div>
          <div class="col-12">
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="otra-direccion" v-model="otherAddress">
              <label class="form-check-label" for="otra-direccion">utilizar otra dirección</label>
            </div>
          </div>
        </div>
        <div class="row" v-if="otherAddress">
          <div class="col-12">
            <div class="form-group">
              <label for="inputAddressAux">Direcci&oacute;n</label>
              <input v-validate="'required'" name="direccion" type="text" class="form-control" id="inputAddressAux"
                     :class="{ 'is-invalid': errors.first('direccion') }"
                     v-model="address.address">
              <div class="invalid-feedback">Se requiere de una direcci&oacute;n</div>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>DEPARTAMENTO</label>
            <select @change="changeCiudades" v-validate="'required'" :class="{'is-invalid':errors.first('departamento')}" name="departamento" class="form-control" v-model="department">
              <option v-for="item in departments" :value="item.id">{{item.name}}</option>
            </select>
            <div class="invalid-feedback">Se requiere de un departamento</div>
          </div>
          <div class="form-group col-md-6">
            <label>CIUDAD</label>
            <select v-validate="'required'" :class="{'is-invalid':errors.first('ciudad')}" name="ciudad" class="form-control" v-model="address.city_id">
              <option v-for="item in cities" :value="item.id">{{item.name}}</option>
            </select>
            <div class="invalid-feedback">Se requiere de una ciudad</div>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="armenia" name="domicilio" class="custom-control-input"
                         v-model="domicile"
                         value="armenia"
                         @change="selectDomicile"> <label class="custom-control-label" for="armenia"></label>
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="text-primary">Domicilio en Armenia</h4>
                <p class="text-muted">
                  Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.
                </p>
              </div>
              <div class="col-sm-3 d-flex flex-column justify-content-center align-items-center">
                <small class="text-muted font-italic">Valor Env&iacute;o</small>
                <h5 class="text-dark font-weight-bold font-italic">$3.000</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="quindio" name="domicilio" class="custom-control-input"
                         v-model="domicile"
                         value="quindio"
                         @change="selectDomicile"> <label class="custom-control-label" for="quindio"></label>
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="text-primary">Domicilio en Quindio</h4>
                <p class="text-muted">
                  Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.
                </p>
              </div>
              <div class="col-sm-3 d-flex flex-column justify-content-center align-items-center">
                <small class="text-muted font-italic">Valor Env&iacute;o</small>
                <h5 class="text-dark font-weight-bold font-italic">$8.000</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="row my-li-own mb-3 p-4">
              <div class="col-sm-3 px-0 align-self-center">
                <div class="custom-control custom-radio  text-center">
                  <input type="radio" id="otro" name="domicilio" class="custom-control-input"
                         v-model="domicile"
                         value="otro"
                         @change="selectDomicile"> <label class="custom-control-label" for="otro"></label>
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="text-primary">Domicilio en Armenia</h4>
                <p class="text-muted">
                  Debe ser pagado contraentrega en efectivo al domicilio. Revise las politicas de envio.
                </p>
              </div>
              <div class="col-sm-3 d-flex flex-column justify-content-center align-items-center">
                <small class="text-muted font-italic">Pago</small>
                <h5 class="text-dark font-weight-bold font-italic">Contraentrega</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row p-5">
          <div class="col-sm-6  align-self-center">
            <a href="#" @click="back" class="text-dark text-decoration-none">
              <font-awesome-icon icon="arrow-left" size="xs"/>
              Informaci&oacute;n del cliente</a>
          </div>
          <div class="col-sm-6  text-right">
            <button @click="next" type="submit"
                    class="btn btn-primary text-white  btn-lg w-md-100  font-italic font-weight-bold">CONTINUA A PAGO
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from '../../plugins/api'

export default {
  name: 'datosEnvio',
  data () {
    return {
      otherAddress: false,
      address: {
        address: null,
        city_id: null,
        name: 'segunda casa'
      },
      domicile: 'armenia',
      department: null,
      cities: [],
    }
  },
  created () {
    this.selectDomicile()
    
  },
  computed: {
    departments () {
      return this.$store.state.departments
    },
    me () {
      return this.$store.state.me
    }
  },
  methods: {
    changeCiudades () {
      this.cities = this.departments.filter(item => item.id == this.department)[0].cities
    },
    next () {
      this.$validator.validateAll().then((result) => {
        //cambiar por result al finalizar pruebas
        if (result) {
          if (this.otherAddress) {
            api.Addresses().update(this.me.addresses[0].id, this.address).then(response => {
              this.$store.state.me.addresses[0] = response.data.data
            })
          }
          $('#metodo-pago-tab').removeClass('disabled').tab('show')
        }
      })
    },
    back () {
      $('#informacion-tab').tab('show')
    },
    selectDomicile () {
      let valor = 0
      switch (this.domicile) {
        case 'armenia':
          valor = 3000
          break
        case 'quindio':
          valor = 8000
          break
        default:
          valor = 0
      }
      this.$store.state.tool_paying.costSend = valor
    }
  },
  
}
</script>
<style scoped>
  .caja{
    border: solid red;
  }
  
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
</style>
