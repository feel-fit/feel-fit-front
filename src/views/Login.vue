<template>
  <div>
    <section id="registro">
      <div class="container-fluid fondo">
        <div class="row contenido-login justify-content-center ">
          <div class="m-auto col-auto">
            <form class="formulario">
              <h2
                class="text-primary text-center font-weight-bold font-italic mb-md-5"
              >Inicio de Sesi&oacute;n</h2>
              <div class="form-group">
                <label for="email" class="font-weight-bold">E-mail</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend" :class="{'is-invalid':errors.first('email')}">
                    <span class="input-group-text btn-lg bg-white">
                      <img src="./../assets/images/Registrate/Suche.svg" />
                    </span>
                  </div>
                  <input
                    type="email"
                    v-validate="'required|email'"
                    :class="{'is-invalid':errors.first('email')}"
                    name="email"
                    id="email"
                    class="form-control btn-lg border-left-0"
                    size="20"
                    v-model="form.email"
                    placeholder="Ingresa tu usuario"
                  />
                  <div class="invalid-feedback">Se requiere de un email valido</div>
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="font-weight-bold">Contraseña</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend" :class="{'is-invalid':errors.first('password')}">
                    <span class="input-group-text btn-lg bg-white">
                      <img src="./../assets/images/Registrate/SucheCopy.svg" />
                    </span>
                  </div>
                  <input
                    type="password"
                    v-validate="'required'"
                    :class="{'is-invalid':errors.first('password')}"
                    name="password"
                    id="password"
                    class="form-control btn-lg border-left-0"
                    size="20"
                    v-model="form.password"
                    placeholder="Ingresa tu contraseña"
                  />
                  <div class="invalid-feedback">Se requiere de una contraseña valida</div>
                </div>
              </div>
              <div class="row">

                <div class="col-md-6 text-center">
                  <input
                    type="button"
                    name="wp-submit"
                    class="btn btn-outline-primary btn-lg font-weight-bold"
                    value="Registrarse"
                    @click="registro"
                  />
                </div>

                <div class="col-md-6 text-center mt-3 mt-md-0">
                  <input
                    type="button"
                    name="wp-submit"
                    class="btn font-weight-bold btn-primary text-white btn-lg"
                    value="Iniciar sesión"
                    @click="login"
                  />
                </div>

              </div>
              <div class="d-flex justify-content-between mt-5">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="recordarme" />
                  <label class="custom-control-label" for="recordarme">Recordarme</label>
                </div>
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#modal-olvide"
                >¿Olvidaste la contraseña?</a>
              </div>
              <recuperar-contrasena />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import app from "./../plugins/api";
import recuperarContrasena from "../components/usuario/recuperarContrasena";

export default {
  name: "Login",
  components: { recuperarContrasena },
  metaInfo() {
    return {
      title: "FEEL FIT | login",
      meta: [
        { name: "description", content: "login" },
        {
          name: "keywords",
          content: "login, feelfit, venta de productos fitness"
        }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://feelfitmarket.com" + this.$route.fullPath
        }
      ]
    };
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$validator.validateAll().then(result => {
        this.$store.state.loading = true;
        app
          .Users()
          .login(this.form)
          .then(response => {
            this.$store.state.loading = false;
            this.$store.dispatch("getLogin", response.data.data.access_token);
            setTimeout(this.$router.back(), 9000);
          })
          .catch(error => {
            this.$store.state.loading = false;
          });
      });
    },
    registro() {
      this.$router.push("/registro");
    }
  },
  mounted() {
    this.$store.commit("open_menu", false);
  }
};
</script>
<style scoped>
.contenido-login {
  margin-top: 4.5rem;
}

.formulario {
  margin-top: 10rem;
  margin-bottom: 15rem;
}

.fondo {
  background-image: url("./../assets/images/fresa3_home.png"),
    url("./../assets/images/hoja3.png");
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
}

.input-group > .form-control {
  border-top-right-radius: 1.3rem;
  border-bottom-right-radius: 1.3rem;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ced4da;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem transparent !important;
  box-shadow: 0 0 0 0.2rem transparent !important;
}

@media (max-width: 480px){
    .formulario {
        margin-top: 0.6rem;
        margin-bottom: 2.5rem;
        font-size: 0.9rem;
    }

    .input-group > .form-control {
        border-radius: 1.3rem;
    }

    .input-group-prepend{
        display: none;
    }
}

</style>
