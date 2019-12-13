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
              <router-link class="nav-link" to="/recetas" >HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas/desayunos">BRUNCH Y DESAYUNOS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas/platos">PLATOS FUERTES</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas/postres">POSTRES</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas/batidos">BATIDOS</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/recetas/interes">ARTICULOS DE INTERÉS</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <router-view></router-view>
      

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
import suscribirte from "../components/recetas/home/suscribirte";
import instagram from "../components/recetas/home/instagram.vue";
import fresa from "../components/recetas/home/fresa.vue";

export default {
  components: {
    suscribirte,
    instagram,
    fresa
  },
  mounted(){
    this.$store.commit('open_menu', false)
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