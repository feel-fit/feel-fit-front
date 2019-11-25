<template>
  <div class="galleta d-none d-sm-block">
    <img src="../../../assets/images/recetas/frutas/cookie.png" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.galleta {
  position: relative;
  height:0px;
  top: 0;
  left: 0;
  img {
    position: absolute;
    top:-100px;
    right: 0;
    width: auto;
    height: auto;
    object-fit: cover;
    z-index: 100;
  }
}
// Large devices (desktops, 992px and up)
@media (max-width: 992px) {
  .galleta {
    img {
      width: 120px;
    }
  }
}
</style>