<template>
    <section class="position-fixed w-100 shadow py-3 sticky-top">
      <div class="container">
        <div class="row ">
          <div class="col">
            <a id="menu-toggle" href="#">
              <font-awesome-icon icon="bars" size="2x" class="icon"></font-awesome-icon>
            </a>
          </div>
          <div class="col text-center">
            <img src="../assets/images/logo.svg" alt="logo">
          </div>
          <div class="col">
            <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
              <img src="../assets/images/cart.svg" alt="logo" class="w-100 icon">
              <span class="badg badge-icon badge-pill badge-danger">1</span>
            </a>
            <a class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex" href="#!">
              <img src="../assets/images/perfil.svg" alt="logo" class="w-100 icon">
              <span class="ml-2 text-body small">Perfil</span>
            </a>
            <a class="navbar-brand justify-content-end d-flex-inline float-right d-none d-md-flex" href="#!">
              <img src="../assets/images/fav.svg" alt="logo" class="w-100 icon">
              <span class="badg badge-icon badge-pill badge-danger">1</span>
            </a>
          </div>
        </div>
      </div>
    </section>


</template>

<script>
    import logo from './../assets/images/logo_menu.svg'

    export default {
        name: 'header',
        data() {
            return {

            }
        },
        mounted() {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.sticky-top').addClass('bg-white')
                }
                if ($(this).scrollTop() < 50) {
                    $('.sticky-top').removeClass('bg-white')
                }
            });

            $("#menu-toggle").click(function (e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
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
