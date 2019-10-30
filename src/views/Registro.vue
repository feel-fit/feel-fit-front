<template>
  <div>
    <section id="registro">
      <div class="container-fluid">
        <div class="row contenido justify-content-center">
          <div class="col-lg-6 p-0">
            <img class="img-fluid align-self-end d-md-none d-lg-block" src="./../assets/images/Registrate/image.svg" />
            <img class="img-fluid align-self-end d-none d-md-block d-lg-none" src="./../assets/images/Registrate/registrar.png" />
          </div>
          <div class="col-lg-6  px-5">
            <div class="row justify-content-md-center justify-content-lg-start">
              <h2 class="text-primary font-italic font-weight-bolder my-5">Registrate</h2>
            </div>
            <div class="row justify-content-center pb-5 mb-2 px-lg-5">
              <div class="col-md-8 col-lg-10">
                <form>
                  <div class="form-group">
                    <label for="name" class="font-weight-bold">Nombre completo</label>
                    <input
                      v-validate="'required'"
                      :class="{'is-invalid':errors.first('nombre')}"
                      name="nombre"
                      type="text"
                      id="name"
                      class="form-control btn-lg"
                      size="20"
                      v-model="form.name"
                    />
                    <div class="invalid-feedback">Se requiere de un nombre valido</div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="font-weight-bold">Correo electr&oacute;nico</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text btn-lg bg-white">
                          <img src="./../assets/images/Registrate/Suche.svg" />
                        </span>
                      </div>
                      <input
                        type="email"
                        v-validate="'required|email'"
                        :class="{'is-invalid':errors.first('email') || error.email}"
                        name="email"
                        id="email"
                        class="form-control btn-lg border-left-0"
                        size="20"
                        v-model="form.email"
                      />
                      <div v-if="error.email" class="invalid-feedback">Este email ya es utilizado</div>
                      <div v-else class="invalid-feedback">Se requiere de un email valido</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password" class="font-weight-bold">Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
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
                      />
                      <div class="invalid-feedback">Se requiere de una contraseña</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password_confirmation" class="font-weight-bold">Confirmar Contraseña</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text btn-lg bg-white">
                          <img src="./../assets/images/Registrate/SucheCopy.svg" />
                        </span>
                      </div>
                      <input
                        type="password"
                        v-validate="'required'"
                        :class="{'is-invalid':errors.first('password_confirmation')}"
                        name="password_confirmation"
                        id="password_confirmation"
                        class="form-control btn-lg border-left-0"
                        size="20"
                        v-model="form.password_confirmation"
                      />
                      <div class="invalid-feedback">validar la contraseña</div>
                    </div>
                  </div>
                  <div class="form-group d-flex justify-content-between">
                    <input
                      @click="$router.push('/login')"
                      type="button"
                      name="wp-submit"
                      class="btn btn-lg font-weight-bold"
                      value="Cancelar"
                    />
                    <input
                      type="button"
                      name="wp-submit"
                      class="btn font-weight-bold btn-primary text-white btn-lg"
                      value="Registrarse"
                      @click="registro"
                    />
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
import api from "./../plugins/api";

export default {
  name: "Registro",
  metaInfo() {
    return {
      title: "FEEL FIT | Registro",
      meta: [
        {
          name: "description",
          content: "registrese y crea una cuenta en la mejor tienda saludable"
        },
        {
          name: "keywords",
          content: "registro, feelfit, venta de productos fitness"
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
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      error: {
        email: false
      }
    };
  },
  methods: {
    registro() {
      this.$validator.validateAll().then(result => {
        this.$store.state.loading = true;
        api
          .Users()
          .create(this.form)
          .then(response => {
            this.$store.commit("set_me", response.data.data);
            api
              .Users()
              .login(this.form)
              .then(response => {
                this.$router.push("/");
              });
            this.$store.state.loading = false;
          })
          .catch(error => {
            this.$store.state.loading = false;
            this.error.email = true;
          });
      });
      //
    }
  }
};
</script>
<style scoped>
.caja {
  border: solid red;
}

.contenido {
  margin-top: 4.5rem;
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
</style>
