<template>
  <div>
    <section class="bienvenidos d-flex align-items-center flex-column justify-content-center " :style="{ backgroundImage: `url('${background}')` }">
      <img src="../assets/images/conocenos/logo_conocenos.svg" alt="logo" class=""><br/>
      <button class="btn btn-primary text-white  btn-lg mb-5 w-md-50"><i>Comprar ahora </i>&nbsp;&nbsp;<font-awesome-icon
        icon="arrow-right" size="xs"/>
      </button>
      </br>
      <a href="#"><img src="../assets/images/scroll.svg" alt="Scroll" class="d-none d-md-inline-block"
                       data-target="#section1"></a>
    </section>
    <!-- Inicio seccion de productos-->
    <section class="py-5 position-relative" id="section1">
      <img src="../assets/images/hoja.png" class="hoja_home position-absolute d-none d-md-inline-block">
      <div class="container">
        <form class="form-inline active-pink-4 justify-content-center">
          <input class="form-control form-control-sm mr-3 w-75 shadow p-4 mb-4 bg-white rounded" type="text"
                 placeholder="Encuentra yogurt, granola y mucho más.."
                 aria-label="Search">
          <img src="../assets/images/search.svg" alt="Buscar" class="img_search">
        </form>
        <div class="row ">
          <div class="col order-12">

            <a href="#"><img src="../assets/images/whatsapp.svg" alt="Whatsapp"
                             class="img_whatsapp rounded float-right"></a>
          </div>
        </div>
        <div class="row justify-content-between mx-auto rounded shadow">
          <div class="img_productos col-6 col-md-4">
            <img src="../assets/images/producto1.png" alt="Papas" class="w-100 mx-auto d-block" style="margin-top: -10%;">
          </div>
          <div class="text_productos col-6 col-md-4">
            <h2 class="font-weight-bold font-italic text-info mt-md-5">Nuestro productos nuevos</h2>
            <hr class="hr_producto">
            <p class="font-italic"><a href="#">Entra y sorprendente</a></p>
            <hr class="hr_producto">
          </div>
          <div class="align-self-center col-md-3 d-md-block d-none">
            <button type="button" class="btn btn-info btn-lg">
              <font-awesome-icon icon="arrow-right" size="xs"/>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!--Slide de productos-->
    <section>
      <div class="container-fluid position-relative my-5">
        <div class="row justify-content-around">
          <img src="../assets/images/bg_slide1.png" class="bg_slide position-absolute">
          <div class="align-self-center d-none d-md-inline-block col-md-2 text-center">
            <font-awesome-icon icon="angle-left" size="xs"/>&nbsp;<font-awesome-icon icon="angle-right" size="xs"/>

          </div>
          <div class="d-none col-md-3 d-md-inline-block shadow-sm bg-white rounded">
            <div>
              <img src="../assets/images/yogurt_griego.png" alt="Papas" class="img-fluid d-block">
              <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
              <p class="align-self-end mt-n1"><small>1 litro</small></p>
              <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
            </div>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <div>
              <img src="../assets/images/yogurt_griego.png" alt="Papas" class="img-fluid d-block">
              <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
              <p class="align-self-end mt-n1"><small>1 litro</small></p>
              <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
            </div>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <div>
              <img src="../assets/images/yogurt_griego.png" alt="Papas" class="img-fluid d-block">
              <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
              <p class="align-self-end mt-n1"><small>1 litro</small></p>
              <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--fin slide-->
    <!-- Fin seccion de productos-->

    <!-- Segunda seccion productos-->
    <section class="row py-5 position-relative">
      <img src="../assets/images/fresa_home.png" class="fresa_home d-none d-md-inline-block position-absolute">
      <div class="col-sm-12">
        <div class="container">
          <div class="row justify-content-between mx-auto rounded shadow">
            <div class="img_productos col-6 col-md-4">
              <img src="../assets/images/yogurt.png" alt="Papas" class="w-100 mx-auto d-block" style="margin-top: -10%;">
            </div>
            <div class="text_productos col-6 col-md-4">
              <h2 class="font-weight-bold font-italic text-info mt-md-5">Nuestro productos nuevos</h2>
              <hr class="hr_producto">
              <p class="font-italic"><a href="#">Entra y sorprendente</a></p>
              <hr class="hr_producto">
            </div>
            <div class="align-self-center col-md-3 d-md-block d-none">
              <button type="button" class="btn btn-danger btn-lg">
                <font-awesome-icon icon="arrow-right" size="xs"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Slide de productos 2-->
    <section class="position-relative">
      <img src="../assets/images/hoja2.png" class="hoja_slide position-absolute d-none d-md-inline-block">
      <div class="container-fluid  position-relative my-5">
        <div class="row justify-content-around">
          <img src="../assets/images/bg_slide2.png" class="bg_slide position-absolute">
          <div class="align-self-center d-none d-md-inline-block col-md-2 text-center">
            <font-awesome-icon icon="angle-left" size="xs"/>&nbsp;<font-awesome-icon icon="angle-right" size="xs"/>

          </div>
          <div class="d-none col-md-3 d-md-inline-block shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="w-75 mx-auto d-block mt-5">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="w-75 mx-auto d-block mt-5">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="d-block mt-5 mx-auto w-75">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
        </div>
      </div>
    </section>
    <!--fin slide-->


    <!-- Tercera seccion productos-->
    <section class="row py-5 position-relative">
      <img src="../assets/images/fresa2_home.png" class="fresa2_home d-none d-md-inline-block position-absolute">
      <div class="col-sm-12">
        <div class="container">
          <div class="row justify-content-between mx-auto rounded shadow">
            <div class="img_productos col-6 col-md-4">
              <img src="../assets/images/sorpresa.png" alt="Papas" class="w-100 mx-auto d-block" style="margin-top: -10%;">
            </div>
            <div class="text_productos col-6 col-md-4">
              <h2 class="font-weight-bold font-italic text-info mt-md-5">Nuestro productos nuevos</h2>
              <hr class="hr_producto">
              <p class="font-italic"><a href="#">Entra y sorprendente</a></p>
              <hr class="hr_producto">
            </div>
            <div class="align-self-center col-md-3 d-md-block d-none">
              <button type="button" class="btn btn-info btn-lg">
                <font-awesome-icon icon="arrow-right" size="xs"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!--Slide de productos 3-->
    <section>
      <div class="container-fluid position-relative my-5">
        <div class="row justify-content-around">
          <img src="../assets/images/bg_slide1.png" class="bg_slide position-absolute">
          <div class="align-self-center d-none d-md-inline-block col-md-2 text-center">
            <font-awesome-icon icon="angle-left" size="xs"/>&nbsp;<font-awesome-icon icon="angle-right" size="xs"/>

          </div>
          <div class="d-none col-md-3 d-md-inline-block shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="w-75 mx-auto d-block mt-5">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="w-75 mx-auto d-block mt-5">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
          <div class="col-4 col-md-3 shadow-sm bg-white rounded">
            <img src="../assets/images/yogurt_griego.png" alt="Papas" class="d-block mt-5 mx-auto w-75">
            <h6 class="font-italic mt-2">Papas BBQ <span class="badge badge-secondary">New</span></h6>
            <p class="align-self-end mt-n1"><small>1 litro</small></p>
            <p class="align-self-end text-right mt-n2"><small>$115.000</small></p>
          </div>
        </div>
      </div>
    </section>
    <!--fin slide-->
  </div>
</template>
<script>


    import api from '../plugins/api'
    import background from './../assets/images/img_bienvenido.png'

    export default {
        name: 'home',
        data() {
            return {
                background: background
            }
        },
        components: {
            // HelloWorld
        },
        mounted() {
            api.Users().getAll()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bienvenidos {
    background-size: cover;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }

</style>
