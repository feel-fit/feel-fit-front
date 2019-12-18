<template>
  <div class="informacion-inicio shadow p-5 d-none d-lg-block">
    <img src="../../../assets/images/recetas/pp.png" class="img-fluid" />
    <h1 class="text-dark mt-4">Estefania C.</h1>
    <h6 class="text-muted">ADMINISTRADORA FEEL FIT</h6>
    <p class="text-dark my-5">
      Hola, me llamo Estefania. Soy apasionada de la cocina. La pasión por la gastronomía despertó en mí y ya no hubo
      marcha atrás
    </p>
    <img src="../../../assets/images/recetas/firma.png" class="img-fluid mt-4" />
    <div>
      <a target="_blank" href="https://facebook.com/feelfitmarket"><img src="../../../assets/images/recetas/redessociales/fa.png" class="img-fluid" /></a>
      <a target="_blank" href="https://instagram.com/feelfitmarket"><img src="../../../assets/images/recetas/redessociales/ig.png" class="img-fluid mx-2" /></a>
      <a target="_blank" href="mailto:feelfitmarket@gmail.com"><img src="../../../assets/images/recetas/redessociales/go.png" class="img-fluid mr-2" /></a>
      <a target="_blank" href="#"><img src="../../../assets/images/recetas/redessociales/tw.png" class="img-fluid" /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

.informacion-inicio {
  width: 320px;
  position: absolute;
  z-index: 200;
  bottom: -80px;
  right: 1%;
  background-color: white;
  border-radius: 1rem;
  > img {
    width: 130px;
  }
  > h1 {
    font-size: 2rem;
  }
}

@media (min-width: 1200px) {
  .informacion-inicio {
    width: 350px;
    right: 5%;
    background-color: white;
    border-radius: 1rem;
    > img {
      width: auto;
    }
  }
}

@media (min-width: 1500px) {
  .informacion-inicio {
    width: 350px;
    right: 10%;
    background-color: white;
    border-radius: 1rem;
  }
}

</style>