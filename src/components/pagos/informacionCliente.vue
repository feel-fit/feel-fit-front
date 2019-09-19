<template>
  <div class="container" id="informacion-cliente">
    <div class="row">
      <span class="h3 font-italic text-primary font-weight-bold titulo">
          Informaci&oacute;n del cliente
      </span>
    </div>
    <div class="row mb-5">
      <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>NOMBRE COMPLETO</label>
            <input v-validate="'required'" :class="{'is-invalid':errors.first('name')}" name="name" type="text" class="form-control" v-model="cliente.name">
            <div class="invalid-feedback">
              Se requiere un nombre.
            </div>
          </div>
          <div class="form-group col-md-6">
            <label>CEDULA</label>
            <input v-validate="'required'" @change="checkDocumento" :class="{'is-invalid':errors.first('cedula')}" name="cedula" type="text" class="form-control" v-model="cliente.identification">
            <div class="invalid-feedback">Se requiere de una cedula</div>
          </div>
          <div class="form-group col-md-12">
            <label>DIRECCI&Oacute;N</label>
            <input v-validate="'required'" :class="{'is-invalid':errors.first('direccion')}" name="direccion" type="text" class="form-control" v-model="cliente.addresses[0].address">
            <div class="invalid-feedback">Se requiere de una direcci&oacute;n</div>
          </div>
          <div class="form-group col-md-6">
            <label>DEPARTAMENTO</label>
            <select @change="changeCiudades" v-validate="'required'" :class="{'is-invalid':errors.first('departamento')}" name="departamento" class="form-control" v-model="cliente.department">
              <option v-for="item in departments" :value="item.id">{{item.name}}</option>
            </select>
            <div class="invalid-feedback">Se requiere de un departamento</div>
          </div>
          <div class="form-group col-md-6">
            <label>CIUDAD</label>
            <select v-validate="'required'" :class="{'is-invalid':errors.first('ciudad')}" name="ciudad" class="form-control" v-model="cliente.addresses[0].city_id">
              <option v-for="item in cities" :value="item.id">{{item.name}}</option>
            </select>
            <div class="invalid-feedback">Se requiere de una ciudad</div>
          </div>
          <div class="form-group col-md-12">
            <label>CORREO</label>
            <input v-validate="'required|email'" :class="{'is-invalid':errors.first('email')}" name="email" type="email" class="form-control" v-model="cliente.email">
            <div class="invalid-feedback">Se requiere de un correo válido</div>
          </div>
          <div class="form-group col-md-6">
            <label>TELEFONO</label>
            <input v-validate="'required'" :class="{'is-invalid':errors.first('telefono')}" name="telefono" type="tel" class="form-control" v-model="cliente.phone">
            <div class="invalid-feedback">Se requiere de un tel&eacute;fono</div>
          </div>
          <div class="form-group col-md-12">
            <div class="row">
              <div class="col-sm-6  align-self-center ">
                <a href="#" @click="back" class="text-dark text-decoration-none">
                  <font-awesome-icon icon="arrow-left" size="xs"/>
                  Regresa a comprar</a>
              </div>
              <div class="col-sm-6  text-right">
                <button @click="next" type="button" class="btn btn-primary text-white  btn-lg w-md-100 font-italic font-weight-bold ">
                  CONTINUA A ENVIO
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import api from '../../plugins/api'

export default {
  name: 'informacionCliente',
  data () {
    return {
      cities: [],
      cliente: {
        name: null,
        identification: null,
        addresses: [{
          user_id: null,
          name: 'casa',
          address: null,
          city_id: null,
        }],
        email: null,
        phone: null,
        department: null,
      },
    }
  },
  computed: {
    departments () {
      return this.$store.state.departments
    },
    citiesall () {
      return this.$store.state.cities
    }
  },
  methods: {
    checkDocumento () {
      api.Users().checkDocumento(this.cliente.identification).then(response => {
        if (response.data.data.length > 0) {
          this.cliente = response.data.data[0]
          if (this.cliente.addresses.length == 0) {
            this.cliente.addresses.push({
              user_id:this.cliente.id,
              name: 'casa',
              address: null,
              city_id: null,
            })
          } else {
            this.changeDepartment
          }
          this.$store.commit('set_me', this.cliente)
        }
      }).catch()
    },
    next () {
      //cambiar por result al finalizar pruebas
      this.$validator.validateAll().then((result) => {
        if (result) {
          if (!this.nextViewSend) {
            
            if (this.cliente.id) {
                if (this.cliente.addresses[0].id) {
                  api.Addresses().update(this.cliente.addresses[0].id, this.cliente.addresses[0]).then(response=>{
                    this.cliente.addresses[0] = response.data.data
                    this.$store.state.me.addresses = response.data.data
                  })
                } else {
                  api.Addresses().create(this.cliente.addresses[0]).then(response => {
                    this.cliente.addresses[0] = response.data.data
                    this.$store.state.me.addresses = response.data.data
                  })
                }
            } else {
              api.Users().create(this.cliente).then(response => {
                this.$store.commit('set_me', response.data.data)
                this.cliente.addresses[0].user_id = response.data.data.id
                api.Addresses().create(this.cliente.addresses[0]).then(response => {
                  this.cliente.addresses[0] = response.data.data
                  this.$store.state.me.addresses = response.data.data
                })
              })
            }
            
            $('#envios-tab').removeClass('disabled').tab('show')
          }
        }
      })
      
    },
    changeCiudades () {
      this.cities = this.departments.filter(item => item.id == this.cliente.department)[0].cities
    },
    changeDepartment () {
      console.log(this.cliente.addresses[0].city_id)
      console.log(this.citiesall.filter(node => node.id == this.cliente.addresses[0].city_id)[0].department_id)
      this.department = this.departments.filter(item => item.id == 1)[0].id
    },
    back () {
    
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
</style>
