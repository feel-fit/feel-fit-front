<template>
  <div class="container" id="informacion-cliente">
    <div class="row">
                <span class="h3 font-italic text-primary font-weight-bold titulo">
                    Informaci&oacute;n del cliente
                </span>
    </div>
    <div class="row mb-5">
      <form id="form-informacion-cliente" class="needs-validation">
        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="nombreCompleto">NOMBRE COMPLETO</label>
            <input type="text" class="form-control"
                   :class="{ 'is-invalid': $v.name.$error }"
                   v-model.trim="$v.name.$model"
                   id="nombreCompleto"
                   v-model="name"
                   name="name">
            <div class="invalid-feedback">Se requiere de un nombre</div>
          </div>

          <div class="form-group col-md-6">
            <label for="cedula">CEDULA</label>
            <input type="text" class="form-control"
                   :class="{ 'is-invalid': $v.identification.$error }"
                   v-model.trim="$v.identification.$model"
                   id="cedula" v-model="identification" name="identification">
            <div class="invalid-feedback">Se requiere de una cedula</div>
          </div>
          <div class="form-group col-md-12">
            <label for="direccion">DIRECCI&Oacute;N</label>
            <input type="text" class="form-control"
                   :class="{ 'is-invalid': $v.address.$error }"
                   v-model.trim="$v.address.$model"
                   id="direccion" v-model="address" name="address">
            <div class="invalid-feedback">Se requiere de una direcci&oacute;n</div>
          </div>
          <div class="form-group col-md-6">
            <label for="departamento">DEPARTAMENTO</label>
            <select id="departamento" class="form-control" v-model="department" name="department">
              <option v-for="itmeDepartment in departments" :value="itmeDepartment.id">{{itmeDepartment.name}}</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="cidudad">CIUDAD</label>
            <input type="text" class="form-control"
                   :class="{ 'is-invalid': $v.city.$error }"
                   v-model.trim="$v.city.$model"
                   id="cidudad" v-model="city" name="city">
            <div class="invalid-feedback">Se requiere de una ciudad</div>
          </div>
          <div class="form-group col-md-12">
            <label for="email">CORREO</label>
            <input type="email" class="form-control"
                   :class="{ 'is-invalid': $v.email.$error }"
                   v-model.trim="$v.email.$model"
                   id="email" v-model="email" name="email">
            <div class="invalid-feedback">Se requiere de un correo</div>
          </div>
          <div class="form-group col-md-6">
            <label for="telefono">TELEFONO</label>
            <input type="text" class="form-control"
                   :class="{ 'is-invalid': $v.phone.$error }"
                   v-model.trim="$v.phone.$model"
                   id="telefono" v-model="phone" name="photo">
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
    import {required, numeric} from 'vuelidate/lib/validators'
    export default {
        name: "informacionCliente",
        data() {
            return {
                departments: [],
                name: '',
                identification: '',
                address: '',
                department:'',
                city: '',
                email: '',
                phone: '',
            }
        },
        created: function () {
            api.Departments().getAll().then(result => {
                this.departments = result.data.data;
                this.department = this.departments.length > 0 ? this.departments[0].id : null;
            }).catch(error => {
                console.log(error);
            });
        },
        methods: {
            next() {
                this.$v.$touch();
                if(!this.$v.$invalid){
                    let dataClient ={
                        name: this.name,
                        identification: this.identification,
                        address: this.address,
                        department:this.department,
                        city: this.city,
                        email: this.email,
                        phone: this.phone,
                    };
                    this.$store.commit('dataPaying',{
                        dataClient:dataClient
                    });
                    $('#envios-tab').removeClass("disabled").tab('show');
                }
            },
            back() {

            }
        },
        validations: {
            name: {
                required,
            },
            identification:{
                required,
            },
            address:{
                required
            },
            department:{
                required
            },
            city:{
                required
            },
            email: {
                required
            },
            phone: {
                required
            },
        }
    }
</script>

<style scoped>
  .caja {
    border: solid red;
  }

  label {
    font-size: 0.7em;
  }

  .titulo {
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }
</style>
