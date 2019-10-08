<template>
  <section>
    <volver></volver>
    <home-category
      url="cajas-sorpresa"
      title="Nuestras Cajas Sorpresa"
      class="m-5"
      :id="3"
      :image="sorpresa"
    />

    <div class="m-5" v-for="producto in products">
        <producto-sorpresa :producto="producto"/>
    </div>
  </section>
</template>

<script>
import api from '../plugins/api'
import volver from "../components/products/volver.vue";
import homeCategory from "../components/home/homeCategory";
import ProductoSorpresa from "../components/sorpresa/ProductoSorpresa";
import imageDefault from '../assets/images/caja_sorpresa/Group.svg';
import sorpresa from "../assets/images/sorpresa.png";

export default {
  components: { volver, homeCategory , ProductoSorpresa },
  data() {
    return {
      sorpresa,
      imageDefault,
      products:[],
    };
  },
  
  mounted(){
    api.Categories().getBySlug('cajas-sorpresa').then(response => {
        let id = response.data.data[0].id
        api.Categories().products(id).getPaginate().then(response => {
          this.products = response.data.data;
        }).catch()
      }).catch()
  }
};
</script>

<style scoped lang="scss">
.caja {
  border: 2px red solid;
}

.producto {
  border-radius: 1.25rem;
}

.texto-producto {
  max-height: 125px;
  color: white;
  padding: 1.5rem;
}

.contenido-sorpresa {
  padding-left: 7%;
  padding-right: 7%;
}
</style>