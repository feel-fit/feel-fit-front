<template>
  <section>
    <div class="container-fluid top-header">
      <div class="row">
        <div class="col-lg-6 p-0 justify-content-around position-relative">
          <img :src="images.contactanos" alt="Feel Fit" class="img-fluid  d-md-none d-lg-block">
          <img :src="images.contactanos2" alt="Feel Fit" class="img-fluid d-none d-md-block d-lg-none">
        </div>
        <div class="col-lg-6 flex-fill d-flex bg-white  position-relative">
          <div class="col-sm-12" v-if="!result">
            <h4 class="letra text-warning text-center font-italic font-weight-bold" style="margin-top: 7%;">
              Contáctanos</h4>
            <hr class="hr_conocenos">
            <img src="../assets/images/conocenos/circulo.svg" class="circulo float-right float-md-left">
            <div>
              <form class="needs-validation pt-5" novalidate>
                <div class="form-row">
                  <div class="form-group col-lg-8 mx-auto">
                    <label class="text-left">Nombre completo</label>
                    <input v-validate="'required'" :class="{'is-invalid':errors.first('name')}" name="name" type="text" class="form-control" v-model="message.name">
                    <div class="invalid-feedback">
                      Se requiere un nombre.
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-8 mx-auto">
                    <label>Email</label>
                    <input v-validate="'required|email'" :class="{'is-invalid':errors.first('email')}" name="email" type="email" class="form-control" v-model="message.email">
                    <div class="invalid-feedback">
                      Se requiere un email.
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-8 mx-auto">
                    <label>Mensaje y teléfono</label>
                    <textarea v-validate="'required'" rows="4" :class="{'is-invalid':errors.first('description')}" name="description" class="form-control" v-model="message.description">
                  </textarea>
                    <div class="invalid-feedback">
                      Se requiere un email.
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-lg-8 mx-auto text-center p-3">
                    <button @click="enviarMensaje" type="button" class="btn btn-primary text-white  btn-lg w-md-100 font-italic font-weight-bold ">
                      ENVIAR MENSAJE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="justify-content-center px-5 d-flex flex-column" v-else>
            <h2 class="h1 text-primary pb-5 mt-3"><i>¡Hola <span class="text-capitalize">{{ message.name }}</span> !</i></h2>
            <p class="pb-5">Gracias por contactarnos, nos comunicaremos contigo en el menor tiempo posible para atender tu solicitud.
            </p>
            <p class="pb-2 text-center"> Con cariño</p>
            <p class=" text-center"> Feel Fit</p>
          </div>
          

        </div>
      </div>
    </div>
  </section>
</template>
<script>
import contactanos from '../assets/images/contactanos/contactenos.png'
import contactanos2 from '../assets/images/contactanos/contactanos2.png'
import api from './../plugins/api'

export default {
  name: 'contactanos',
  metaInfo () {
    return {
      title: 'FEEL FIT | Contactanos',
      meta: [
        { name: 'description', content: 'Escribenos y pronto te daremos una respuesta de feelfit' },
        { name: 'keywords', content: 'contactanos, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfit.com.co' + this.$route.fullPath }
      ]
    }
  },
  data () {
    return {
      images: {
        contactanos,contactanos2
      },
      message: {
        name: null,
        email: null,
        description: null
      },
      result: false
    }
  },
  computed: {},
  methods: {
    enviarMensaje () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          api.Messages().create(this.message).then(result => {
            this.result = true
          })
        }
      })
    }
  },
  mounted () {
    this.$store.commit('open_menu', false)
  },
}
</script>
<style scoped lang="scss">
  .top-header {
    margin-top: 67px;
  }
</style>
