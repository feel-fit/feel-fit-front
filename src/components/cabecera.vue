<template>
  <section class="position-fixed w-100 shadow py-3 sticky-top">
    <div class="container">
      <div class="row">
        <div class="col">
          <div @click="open_menu"  href="#">
            <font-awesome-icon icon="bars" size="2x" class="icon"></font-awesome-icon>
          </div>
        </div>
        <div class="col text-center">
          <img src="../assets/images/logo.svg" alt="logo">
        </div>
        <div class="col">
          <div @click="open_cart" class="navbar-brand d-flex justify-content-end d-flex-inline float-right">
            <img src="../assets/images/cart.svg" alt="logo" class="w-100 icon">
            <span class="badg badge-icon badge-pill badge-danger">1</span>
          </div>
          <a class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex" href="#!">
            <img src="../assets/images/perfil.svg" alt="logo" class="w-100 icon"> <span class="ml-2 text-body small">Perfil</span>
          </a>
          <div class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex">
            <img src="../assets/images/fav.svg" alt="logo" class="w-100 icon">
            <span class="badg badge-icon badge-pill badge-danger">1</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import logo from './../assets/images/logo_menu.svg'

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
    open_menu_data(){
      return this.$store.state.open_menu
    }
  },
  methods: {
    open_menu () {
      this.$store.commit('open_menu', !this.open_menu_data)
    },
    open_cart () {
      this.$store.commit('open_cart', !this.open)
    },
   
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
