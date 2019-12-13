<template>
  <div>
    <!--linea -->
    <linea :name="'entradas populares'" class="my-5" v-if="blog" />
    <!--linea -->
    <!--doble recetas -->
    <doblereceta class="my-5" :inverso="false" />
    <!--doble recetas -->
    <!--blog-->
    <blog class="my-5" :blog="blog"/>
    <!--blog-->
  </div>
</template>

<script>
import api from '../../../plugins/api'
import linea from "./linea.vue";
import doblereceta from "./doblereceta.vue";
import blog from "./blog.vue";
export default {
  components: {
    linea,
    doblereceta,
    blog
  },
  data() {
    return {
      blog: null
    };
  },
  beforeMount() {
    api
      .Blog()
      .getLatest()
      .then(response => {
        this.blog = response.data.data;
      });
  }
};
</script>

<style scoped lang="scss">
</style>