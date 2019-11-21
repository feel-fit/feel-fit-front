<template>
  <div class="position-relative caja">
    <img src="../../../assets/images/recetas/Part 2/person.png" class="enlace-blog">
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
    height: 400px;
    object-fit: cover;
  }
</style>