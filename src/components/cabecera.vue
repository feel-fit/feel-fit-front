<template>
  <section class="position-fixed w-100 shadow py-3 sticky-top">
    <div class="container">
      <div class="row">
        <div class="col">
          <div @click="open_menu" href="#">
            <font-awesome-icon icon="bars" size="2x" class="icon"></font-awesome-icon>
          </div>
        </div>
        <div class="col text-center">
          <router-link to="/">
            <img src="../assets/images/logo.svg" alt="logo">
          </router-link>
        </div>
        <div class="col">
          <div @click="open_cart" class="navbar-brand d-flex justify-content-end d-flex-inline float-right">
            <img src="../assets/images/cart.svg" alt="logo" class="w-100 icon">
            <span v-if="quantityCart > 0" class="badg badge-icon badge-pill badge-danger">{{quantityCart}}</span>
          </div>
          <div v-if="isLogin" class="dropdown  navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex">
            <img data-toggle="dropdown" src="../assets/images/perfil.svg" alt="logo" class="w-100 icon">
            <span data-toggle="dropdown" class="ml-2 text-body small">Perfil</span>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <router-link tag="a" to="/usuario" class="dropdown-item">Perfil</router-link>
              <div class="dropdown-divider"></div>
              <a @click="logout" class="dropdown-item" href="#">Cerrar sesion</a>
            </div>
          </div>
          <router-link v-else tag="a" to="/login" class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex">
            <img src="../assets/images/perfil.svg" alt="logo" class="w-100 icon"> <span class="ml-2 text-body small">Login</span>
          </router-link>
          <div @click="open_wish" class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex">
            <img src="../assets/images/fav.svg" alt="logo" class="w-100 icon">
            <span v-if="quantityHearts > 0" class="badg badge-icon badge-pill badge-danger">{{quantityHearts}}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import logo from './../assets/images/logo_menu.svg'
import { logout } from '../plugins/auth'
import { sumBy, sum, isEmpty } from 'lodash'

export default {
  name: 'cabecera',
  data () {
    return {}
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)

    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.sticky-top').addClass('bg-white')
      }
      if ($(this).scrollTop() < 50) {
        $('.sticky-top').removeClass('bg-white')
      }
    })
  },

  computed: {
    open () {
      return this.$store.state.open_cart
    },
    isLogin () {
      if (!isEmpty(this.me)) {
        return true
      }
      return false
    },
    me () {
      return this.$store.state.me
    },
    open_menu_data () {
      return this.$store.state.open_menu
    },
    quantityCart () {
      return sumBy(this.$store.state.cart.items, item => {
        return item.quantity
      })
    },
    quantityHearts () {
      return this.$store.state.wishlist.length
    }
  },
  methods: {
    open_menu () {
      this.$store.commit('open_menu', !this.open_menu_data)
    },
    open_cart () {
      this.$store.commit('open_cart', !this.open)
    },
    open_wish () {
      this.$router.push('/deseos')
    },
    logout () {
      logout()
      this.$store.commit('set_me', null)
      this.$store.state.wishlist = []
      this.$store.state.cart = {
        items: []
      }
      this.$router.push('/')
    }

  }
}
</script>
<style scoped lang="scss">
  .navbar-brand {
    position: relative;
    .badge-icon {
      position: absolute;
      font-size: 10px;
      top: 0;
      left: 15px;
    }
  }
  .menu {
    width: 350px;
  }
</style>
