<template>
  <div>
    <!--linea -->
    <linea :name="'entradas populares'" class="my-5" />
    <!--linea -->
    <!--doble recetas -->
    <doblereceta class="my-5" :inverso="false"/>
    <!--doble recetas -->
    <!--blog-->
    <blog class="my-5"/>
    <!--blog-->
  </div>
</template>

<script>
import linea from "./linea.vue";
import doblereceta from "./doblereceta.vue";
import blog from './blog.vue';
export default {
    components:{
        linea,
        doblereceta,
        blog
    }
};
</script>

<style scoped lang="scss">
</style>