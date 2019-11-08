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
            <input v-validate="'required|min:7'" @change="checkDocumento" :class="{'is-invalid':errors.first('cedula')}" name="cedula" type="text" class="form-control" v-model="cliente.identification">
            <div class="invalid-feedback">Se requiere de una cedula</div>
          </div>
          <div class="form-group col-md-12">
            <label>DIRECCI&Oacute;N</label>
            <input v-validate="'required|min:7'" :class="{'is-invalid':errors.first('direccion')}" name="direccion" type="text" class="form-control" v-model="address.address">
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
            <select v-validate="'required'" :class="{'is-invalid':errors.first('ciudad')}" @change="changeCity" name="ciudad" class="form-control" v-model="address.city_id">
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
            <input v-validate="'required|min:6'" :class="{'is-invalid':errors.first('telefono')}" name="telefono" type="tel" class="form-control" v-model="cliente.phone">
            <div class="invalid-feedback">Se requiere de un tel&eacute;fono</div>
          </div>
          <div class="form-group col-md-12">
            <div class="d-flex justify-content-between">
              <a href="#" @click="back" class="text-dark text-decoration-none">
                  <font-awesome-icon icon="arrow-left" size="xs"/>
                  Regresa a comprar</a>
                  <button @click="next" type="button" class="btn btn-primary text-white  btn-lg w-md-100 font-italic font-weight-bold">
                  CONTINUA A ENVIO
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import api from '../../plugins/api'
import { isEmpty, map, flatMap } from 'lodash'

export default {
  name: 'informacionCliente',
  data () {
    return {
      cities: [],
      cliente: {
        name: null,
        identification: null,
        email: null,
        phone: null,
        department: null,
        gender: 'otro'
      },
      address: {
        user_id: null,
        name: 'casa',
        address: null,
        city_id: null
      }
    }
  },
  computed: {
    departments () {
      return this.$store.state.departments
    },
    citiesall () {
      return this.$store.state.cities
    },
    me () {
      return this.$store.state.me
    }
  },
  mounted () {
      if (!isEmpty(this.me)) {
        this.cliente = this.me
        if(this.me.addresses.length > 0){
          this.address = this.me.addresses[0]
          this.changeDepartment()
        }
      }
  },
  methods: {
    checkDocumento () {
      api.Users().checkDocumento(this.cliente.identification).then(response => {
        if (response.data.data.length > 0) {
          let data = response.data.data[0]
          this.$store.commit('set_me',data )
          this.cliente.name= data.name
          this.cliente.email= data.email
          this.cliente.phone= data.phone
          if (this.me.addresses.length > 0) {
            this.address = this.me.addresses[0]
            this.changeDepartment()
            this.me.department = this.cliente.department
          }
        } else if (!this.me.id) {
          this.$store.commit('set_me', {})
          this.cliente.id = null
        }
      })
    },
    next () {
     
      // cambiar por result al finalizar pruebas
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.state.loading = true
            if (!isEmpty(this.me)) {
              if (!this.address.id) {
                api.Addresses().create(this.address).then(response => {
                  this.$store.state.loading = false
                  this.address = response.data.data
                  this.gotonext()
                })
              }
              // actualizar datos usuario.

              api.Users().update(this.me.id, this.cliente).then(
                response => {
                  this.$store.state.loading = false
                }
              ).catch(error=>{
                 this.$store.state.loading = false
              });
              this.gotonext()
            } else {
              api.Users().create(this.cliente).then(response => {
                this.$store.commit('set_me', response.data.data)
                this.address.user_id = response.data.data.id
                this.me.department = this.cliente.department
                api.Addresses().create(this.address).then(response => {
                  this.address = response.data.data
                  this.$store.state.loading = false
                  this.gotonext()
                })
                this.$store.state.loading = false
              }).catch(error=>{
                this.$store.state.loading = false
                this.$validator.errors.add({
                  field: 'email',
                  msg: 'email ya se encuentra en uso, inicia sesión para continuar.',
                  rule: "email"
                })
              })
            }
        }
      }).catch(error=>{
        this.$store.state.loading = false
      })
    },
    changeCity(){
      this.$store.state.setCity = this.address.city_id
    },
    changeCiudades () {
      this.cities = this.departments.filter(item => item.id == this.cliente.department)[0].cities
      this.$store.state.setDepartment = this.cliente.department
    },
    changeDepartment () {
      this.cliente.department = this.departments.filter(item => item.id == this.citiesall.filter(node => node.id == this.address.city_id)[0].department_id)[0].id
      this.changeCiudades()
    },
    back () {
        this.$router.push('/catalogo')
    },
    gotonext () {
      this.$store.commit('set_address', this.address)
      $('#envios-tab').removeClass('disabled').tab('show')
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
</style>
