<template>
  <div class="fresa d-none d-sm-block">
    <img src="../../../assets/images/recetas/frutas/fresa copy 4.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.fresa {
  position: relative;
  height:130px;
  top: 0;
  left: 0;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    object-fit: cover;
  }
}
// Large devices (desktops, 992px and up)
@media (max-width: 992px) {
  .fresa {
    img {
      width: 200px;
    }
  }
}
</style>