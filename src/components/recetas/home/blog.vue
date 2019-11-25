<template>
  <div class="position-relative">
    <img src="../../../assets/images/recetas/Part 2/agriculture.png" class="enlace-blog rounded">
    <receta-default/>
  </div>
</template>

<script>
import recetaDefault from "./receta-default.vue";
export default {
  components:{recetaDefault}
}
</script>

<style>
  .enlace-blog{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
</style>