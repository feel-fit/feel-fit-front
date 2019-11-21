<template>
  <div class="receta-default d-none d-md-flex align-items-center">
    <img
      src="../../../assets/images/recetas/pp.png"
      class="img-fluid imagen-receta mr-5 d-none d-md-block"/>
    <div>
      <button class="btn bg-white mb-3">Postres</button>
      <h3 class="text-white">Postre con OREO y SIN HORNO</h3>
      <h3 class="text-white">(Para los verdaderos amantes de las oreaos)</h3>
      <h6 class="text-white">ESTEFANIA C. | PUBLICADO HACE 8 MINT</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.receta-default {
  position: absolute;
  z-index: 200;
  top: 60%;
  left: 10%;
}

.imagen-receta {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {
  .receta-default {
    position: absolute;
    z-index: 200;
    margin: 0;
    width: 80%;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    h3 {
      font-size: 1.2rem;
    }
  }
}
</style>