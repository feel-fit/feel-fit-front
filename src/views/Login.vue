<template>
    <section id="registro">
      <div class="container-fluid fondo">
        <div class="row">
          <div class="m-auto col-12 col-sm-8 col-lg-4">
            <form class="formulario" @keyup.enter="login">
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
              <div class="alert alert-danger text-center" role="alert" v-if="error">
                  Las credenciales no son válidas
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
                  <input type="checkbox" class="custom-control-input" id="recordarme" v-model="recordar" @change="recordarMe"/>
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
          href: "https://feelfit.com.co" + this.$route.fullPath
        }
      ]
    };
  },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      recordar:false,
      error:false
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
            setTimeout(this.$router.push("/usuario"), 9000);
            this.recordarMe();
            this.error =false;
          })
          .catch(error => {
            this.$store.state.loading = false;
            this.error =true;
          });
      });
    },
    registro() {
      this.$router.push("/registro");
    },
    recordarMe(){
      if (this.recordar) {
        localStorage.email = this.form.email;
        localStorage.password = this.form.password;
      } else {
        localStorage.email = null;
        localStorage.password = null;
      }
      localStorage.check = this.recordar;
    }
  },
  mounted() {
    this.$store.commit("open_menu", false);
    this.recordar = localStorage.check == "true";
    if (this.recordar) {
      this.form.email = localStorage.email;
      this.form.password = localStorage.password;
    }
  }
};
</script>
<style scoped>

.formulario {
  margin-top: 17rem;
  margin-bottom: 16rem;
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
  font-size: 1rem;
}


.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ced4da;
  outline: 0;
  -webkit-box-shadow: 0 0 0 0.2rem transparent !important;
  box-shadow: 0 0 0 0.2rem transparent !important;
  font-size: 1rem;
}

@media (max-width: 480px){
    .formulario {
        margin-top: 10rem;
        margin-bottom: 15rem;
        font-size: 0.9rem;
        height: 100%;
    }

    .input-group > .form-control {
        border-radius: 1.3rem;
    }

    .input-group-prepend{
        display: none;
    }

    .fondo{
        padding-top: 3rem;
    }
    
}

@media (max-height:480px){
    .formulario {
        margin-top: 2rem;
        margin-bottom: 2.5rem;
    }
    .fondo{
        background-image:none;
    }
}

</style>
