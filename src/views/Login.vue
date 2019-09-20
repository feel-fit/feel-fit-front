<template>
  <div>
    <section id="registro">
      <div class="container-fluid">
        <div class="row contenido ">
          <div class="col-12 p-0">
            <img src="./../assets/images/fresa2_home.png" class="img-fluid fresa">
          </div>
          <div class="col-12">
            <div class="row justify-content-center">
              <form>

                <h2 class="text-primary text-center font-weight-bold font-italic mb-5">Inicio de Sesi&oacute;n</h2>

                <div class="form-group">
                  <label for="email" class="font-weight-bold">E-mail</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white">
                            <img src="./../assets/images/Registrate/Suche.svg">
                          </span>
                    </div>
                    <input type="email" v-validate="'required|email'" :class="{'is-invalid':errors.first('email')}" name="email" id="email" class="form-control btn-lg border-left-0" size="20" v-model="email" placeholder="Ingresa tu usuario">
                    <div class="invalid-feedback">Se requiere de un email valido</div>
                  </div>
                </div>

                <div class="form-group">
                  <label for="password" class="font-weight-bold">Contraseña</label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white" >
                            <img src="./../assets/images/Registrate/SucheCopy.svg">
                          </span>
                    </div>
                    <input type="password" v-validate="'required'" :class="{'is-invalid':errors.first('password')}" name="password" id="password"  class="form-control btn-lg border-left-0" size="20" v-model="password" placeholder="Ingresa tu contraseña">
                    <div class="invalid-feedback">Se requiere de una contraseña valido</div>
                  </div>
                </div>

                <div class="form-group d-flex justify-content-between flex-fill flex-wrap mt-5">
                  <input type="button" name="wp-submit"
                         class="btn btn-lg font-weight-bold" value="Cancelar">
                  <input type="button" name="wp-submit"
                         class="btn font-weight-bold btn-primary text-white btn-lg" value="Registrarse"
                         @click="login">
                </div>

              </form>
            </div>
          </div>
          <div class="col-12 p-0 text-right">
            <img src="./../assets/images/hoja.png" class="hoja">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import app from './../plugins/api';
    export default {
        name: "Login",
        data(){
            return {
                email:'',
                password:''
            }
        },
        methods:{
            login(){
                app.Users().login(this.$data).then(
                    (data)=>{
                        console.log(data);
                    }
                )
            }
        }
    }
</script>

<style scoped>
  .caja {
    border: solid red;
  }

  .contenido {
    margin-top: 4.5rem;
  }

  .fresa{
    transform: scale(-1,-1);
  }

  .hoja{
    transform: scale(-1,1);
  }


</style>
