<template>
  <section class="position-fixed w-100 py-3 sticky-top">
    <div class="menu">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <font-awesome-icon icon="times"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row ">
        <div class="col">
          <font-awesome-icon icon="bars" size="2x" :style="{ color: 'gray' }"></font-awesome-icon>
        </div>
        <div class="col text-center">
          <img src="../assets/images/logo.svg" alt="logo">
        </div>
        <div class="col">
          <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
            <img src="../assets/images/cart.svg" alt="logo" class="w-100">
            <span class="badg badge-icon badge-pill badge-danger">1</span>
          </a>
          <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
            <img src="../assets/images/perfil.svg" alt="logo" class="w-100">
            <span class="ml-2 text-body small">Perfil</span>
          </a>
          <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
            <img src="../assets/images/fav.svg" alt="logo" class="w-100">
            <span class="badg badge-icon badge-pill badge-danger">1</span>
          </a>
        </div>
      </div>

      <!-- <header class="encabezado">

         <nav class="navbar navbar-expand-lg navbar-light fixed-top justify-content-between shadow-sm">
           <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#menu_desplegable" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>

           <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
             <img src="../assets/images/logo.svg" alt="logo" class="w-100">
           </a>
           <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
             <img src="../assets/images/cart.svg" alt="logo" class="w-100">
           </a>
           <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
             <img src="../assets/images/perfil.svg" alt="logo" class="w-100">
           </a>
           <a class="navbar-brand d-flex justify-content-end d-flex-inline float-right" href="#!">
             <img src="../assets/images/fav.svg" alt="logo" class="w-100">
           </a>

           <div class="collapse justify-content-end navbar-collapse" id="menu_desplegable">
             <ul class="navbar-nav">
               <li class="nav-item active">
                 <a class="nav-link" href="index.html">Inicio</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Búsqueda</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Catálogo</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Caja sorpresa</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="conocenos.html">Conócenos</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Contacto</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">Politicas de envío</a>
               </li>
             </ul>
           </div>
         </nav>
       </header>-->
    </div>
  </section>
</template>

<script>
    export default {
        name: 'header',
        mounted(){
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.sticky-top').addClass('bg-white')
                }
                if ($(this).scrollTop() < 50) {
                    $('.sticky-top').removeClass('bg-white')
                }
            });
        }
    }
</script>

<style scoped lang="scss">
.navbar-brand{
  position: relative;
  .badge-icon {
    position: absolute;
    font-size: 10px;
    top: 0;
    left: 15px;
  }
  }

  .menu{
    width: 200px;

  }

</style>
