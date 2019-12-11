<template>
  <section>
    <div class="container-fluid p-0 m-0">
      <h1 class="title-recetas text-primary font-italic">Nuetras Recetas</h1>
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="bars" class="icon"></font-awesome-icon>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#home" role="tab">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#desayunos" data-toggle="tab" role="tab">BRUNCH Y DESAYUNOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#platos" data-toggle="tab" role="tab">PLATOS FUERTES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#postres" data-toggle="tab" role="tab">POSTRES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#batidos" data-toggle="tab" role="tab">BATIDOS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#interes" data-toggle="tab" role="tab">ARTICULOS DE INTERÉS</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Tab panels -->
      <div class="tab-content">
        <!--Panel 1-->
        <home />
        <!--/.Panel 1-->

        <!--Panel 2-->
        <desayunos />
        <!--/.Panel 2-->

        <!--Panel 4-->
        <interes />
        <!--/.Panel 4-->

        <!--Panel 4-->
        <batidos />
        <!--/.Panel 4-->

        <!--Panel 4-->
        <platos />
        <!--/.Panel 4-->

        <!--Panel 4-->
        <postres />
        <!--/.Panel 4-->
         <router-view></router-view>
      </div>


      <div>
        <!--fresa -->
        <fresa />
        <!--fresa -->
        <suscribirte />
        <instagram/>
      </div>
    </div>
  </section>
</template>

<script>
import home from "../components/recetas/home/home";
import desayunos from "../components/recetas/desayunos";
import interes from "../components/recetas/interes";
import batidos from "../components/recetas/batidos";
import platos from "../components/recetas/platos";
import postres from "../components/recetas/postres";
import suscribirte from "../components/recetas/home/suscribirte";
import instagram from "../components/recetas/home/instagram.vue";
import fresa from "../components/recetas/home/fresa.vue";

export default {
  components: {
    home,
    desayunos,
    interes,
    batidos,
    platos,
    postres,
    suscribirte,
    instagram,
    fresa
  }
};
</script>

<style scoped>
.title-recetas {
  font-size: 2.3rem;
  margin-top: 90px;
  margin-bottom: 8px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.nav .nav-item a {
  font-size: 13px;
  letter-spacing: 0.7px;
  font-family: "CircularStd-BookItalic";
  color: #7f7f7f;
  font-weight: 900;
}

.nav .nav-item .active {
  text-decoration: line-through;
  color: #27d8db !important;
}
</style>