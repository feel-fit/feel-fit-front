<template>
  <div>
    <section id="registro">
      <div class="container-fluid">
        <div class="row contenido">
          <div class="col-lg-6 img-fluid">
            <img src="./../assets/images/Registrate/image.svg">
          </div>
          <div class="col-lg-6 px-5">

            <div class="row">
              <h2 class="text-primary font-italic font-weight-bolder my-5">Registrate</h2>
            </div>

            <div class="row justify-content-center pb-5 mb-2 px-5">
              <div class="col">
                <form>

                  <div class="form-group">
                    <label for="name" class="font-weight-bold">Nombre completo</label>
                    <input type="text" id="name" class="form-control btn-lg" size="20" v-model="name">
                  </div>

                  <div class="form-group">
                    <label for="email" class="font-weight-bold">Correo electr&oacute;nico</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white" id="email">
                            <img src="./../assets/images/Registrate/Suche.svg">
                          </span>
                      </div>
                      <input type="email"  class="form-control btn-lg border-left-0" size="20" v-model="email">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="password" class="font-weight-bold">Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white">
                            <img src="./../assets/images/Registrate/SucheCopy.svg">
                          </span>
                      </div>
                      <input type="password" id="password" class="form-control btn-lg border-left-0" size="20" v-model="password">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="password_confirmation" class="font-weight-bold">Confirmar Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white">
                            <img src="./../assets/images/Registrate/SucheCopy.svg">
                          </span>
                      </div>
                      <input type="password" id="password_confirmation" class="form-control btn-lg border-left-0 "
                             size="20" v-model="password_confirmation">
                    </div>
                  </div>

                  <div class="form-group d-flex justify-content-between flex-fill">
                    <input type="button" name="wp-submit"
                           class="btn btn-lg font-weight-bold" value="Cancelar">
                    <input type="button" name="wp-submit"
                           class="btn font-weight-bold btn-primary text-white btn-lg" value="Registrarse"
                           @click="registro">
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import app from './../plugins/api';
    export default {
        name: "Registro",
        data(){
            return {
              name:'',
              email:'',
              password:'',
              password_confirmation:''
            };
        },
        methods:{
            registro(){
                console.log(this.$data);
                app.Users().register(this.$data);
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


</style>
