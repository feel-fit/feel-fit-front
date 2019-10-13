<template>
  <div>
    <div class="bg-white shadow" id="sidebar-wrapper">
      <div class="row">
        <div class="col">
          <div class="sidebar-heading"><img class="img-fluid" :src="images.logo" alt=""></div>
        </div>
        <div class="col-auto">
          <a @click="open_menu" href="#" class="toggle text-body">
            <font-awesome-icon class="m-4 icon" icon="times"></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="list-group list-group-flush">
        <div class="container">
          <div class="row">
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link  class="text-dark" to="/">Inicio</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link class="text-dark" to="/buscar">Buscar</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link class="text-dark"  to="/catalogo">Cátalogo</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link class="text-dark" to="/caja-sorpresa">Caja sorpresa</router-link>
            </div>
          </div>
          <div class="row espaciado text-center">
            <div class="col-12 font-weight-bold font-italic text-center mt-3" v-if="me">
              <router-link tag="a" to="/usuario" class="text-dark">Perfil</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3 mb-5" v-if="me">
              <a @click="logout" class="text-dark " href="#">Cerrar sesion</a>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3 mb-5" v-else>
              <router-link  class="text-dark" to="/login">Login</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link  class="text-dark" to="/conocenos">Conocenos</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3">
              <router-link  class="text-dark" to="/contactanos">Contactanos</router-link>
            </div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"data-toggle="modal" data-target="#politicasEnvioModal"><span class="text-dark">Politicas de envio</span></a>
            </div>
          </div>
          <div class="row espaciado">
            <div class="col-12 text-md-center my-auto">
              <a href="#"><img src="../assets/images/facebook.svg" alt="Facebook" class="mr-3"></a>
              <a href="#"><img src="../assets/images/instagram.svg" alt="Instagram"></a>
              <a href="#"><img src="../assets/images/mail.svg" alt="Email" class="ml-3"></a>
            </div>
          </div>
          <div class="row">
            <div class="col contenedor-img1">
              <img class="float-right" src="../assets/images/conocenos/fresa_copy.svg" alt="Fresa">
            </div>
            <div class="col contenedor-img2 mt-n4">
              <img class="d-block mx-auto" src="../assets/images/conocenos/fresa_copy.svg" alt="Fresa">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import logo from './../assets/images/logo_menu.svg'
import { logout } from '../plugins/auth'

export default {
  name: 'slider',
  data () {
    return {
      images: {
        logo: logo
      }
    }
  },
  mounted () {

  },
  computed: {
    open_menu_data () {
      return this.$store.state.open_menu
    },
    me () {
      return this.$store.state.me
    }
  },
  methods: {
    open_menu () {
      this.$store.commit('open_menu', !this.open_menu_data)
    },
    logout () {
      logout()
      this.$store.commit('set_me', null)
      this.$store.state.wishlist = []
      this.$store.state.cart = {
        items: []
      }
      // this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="scss">
  .espaciado {
    margin-top: 8rem;
  }
  .contenedor-img1 img {
    transform: rotate(155deg);
  }
  .contenedor-img2 img {
    transform: rotate(-138deg);
  }
  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
    position: fixed;
    background: white;
    z-index: 100000;
  }
  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }
  #sidebar-wrapper .list-group {
    width: 20rem;
  }
  #app.toggled #sidebar-wrapper {
    margin-left: -20rem;
  }
  @media (min-width: 768px) {
    #sidebar-wrapper {
      margin-left: 0;
    }
    /* #page-content-wrapper {
       min-width: 0;
       width: 100%;
     }*/
    #app.toggled #sidebar-wrapper {
      margin-left: -20rem;
    }
  }
</style>
