<template>
  <div>
    <div class="bg-white" id="sidebar-wrapper">
      <div class="row">
        <div class="col">
          <div class="sidebar-heading"><img class="img-fluid" :src="images.logo" alt=""></div>
        </div>
        <div class="col-auto">
          <a href="#" class="toggle text-body">
            <font-awesome-icon class="m-4 icon" icon="times"></font-awesome-icon>
          </a>
        </div>
      </div>
      <div class="list-group list-group-flush">
        <div class="container">
          <div class="row">
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Inicio</span></a></div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Búsqueda</span></a></div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Cátalogo</span></a></div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Caja Sorpresa</span></a></div>
          </div>
          
          <div class="row espaciado text-center">
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Conocenos</span></a></div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href="#"><span class="text-dark">Contactos</span></a></div>
            <div class="col-12 font-weight-bold font-italic text-center mt-3"><a href=""><span class="text-dark">Politicas de envio</span></a></div>
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

    export default {
        name: 'slider',
        data() {
            return {
                images: {
                    logo: logo
                }
            }
        },
        mounted() {
            $("#menu-toggle, .toggle").click(function (e) {
                e.preventDefault();
                $("#app").toggleClass("toggled");
            });
        }
    }
</script>


<style lang="scss">
.espaciado{
  margin-top: 8rem;
}
.contenedor-img1 img{
  transform: rotate(155deg);
}
.contenedor-img2 img{
  transform: rotate(-138deg);
}
  #sidebar-wrapper {
    min-height: 100vh;
    margin-left: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
  }

  #sidebar-wrapper .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  #sidebar-wrapper .list-group {
    width: 20rem;
  }

  // #page-content-wrapper {
  //   //min-width: 100vw;
  // }

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
