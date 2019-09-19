<template>
  <div>
    <section id="registro">
      <div class="container-fluid">
        <div class="row contenido">
          <div class="col-md-8 fondo"></div>
          <div class="col-md-4 pr-5">

            <div class="row">
              <h2 class="text-primary font-italic font-weight-bolder my-5">Registrate</h2>
            </div>

            <div class="row justify-content-center pb-5 mb-2 px-5">
              <div class="col-12">
                <form>
                  
                  <div class="form-group">
                    <label for="user_login" class="font-weight-bold">Nombre completo</label>
                    <input type="text" name="log" id="user_login" class="form-control btn-lg" size="20">
                  </div>

                  <div class="form-group">
                    <label for="email" class="font-weight-bold">Correo electr&oacute;nico</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white" id="email">
                            <img src="./../assets/images/Registrate/Suche.svg">
                          </span>
                      </div>
                      <input type="email" name="email" class="form-control btn-lg border-left-0" size="20">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="password" class="font-weight-bold">Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white" id="password">
                            <img src="./../assets/images/Registrate/SucheCopy.svg">
                          </span>
                      </div>
                      <input type="text" name="password" class="form-control btn-lg border-left-0" size="20">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="password_confirmation" class="font-weight-bold">Confirmar Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                          <span class="input-group-text btn-lg bg-white" id="password_confirmation">
                            <img src="./../assets/images/Registrate/SucheCopy.svg">
                          </span>
                      </div>
                      <input type="password" name="password_confirmation" class="form-control btn-lg border-left-0 "
                             size="20">
                    </div>
                  </div>

                  <div class="form-group d-flex justify-content-between">
                    <input type="submit" name="wp-submit" class="btn btn-lg font-weight-bold" value="Cancelar">
                    <input type="submit" name="wp-submit"
                           class="btn font-weight-bold btn-primary text-white btn-lg " value="Registrarse">
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div class="">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Registro"
    }
</script>

<style scoped>
  .caja {
    border: solid red;
  }

  .contenido {
    margin-top: 4.5rem;
  }

  .fondo {
    background: url("./../assets/images/Registrate/image.svg");
    background-repeat: no-repeat;
  }

</style>
