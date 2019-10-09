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

    <div class="col-12 justify-content-lg-end mb-5 p-2">
      <div class="d-flex justify-content-center">
        <font-awesome-icon
          style="cursor:pointer"
          @click="to_prev"
          icon="angle-left"
          size="lg"
          class="separador mr-md-5"
        />
        <font-awesome-icon style="cursor:pointer" class="ml-md-5" @click="to_next" icon="angle-right" size="lg" />
      </div>
    </div>

  </section>
</template>

<script>
import api from '../plugins/api'
import volver from "../components/products/volver.vue";
import homeCategory from "../components/home/homeCategory";
import ProductoSorpresa from "../components/sorpresa/ProductoSorpresa";
import sorpresa from "../assets/images/sorpresa.png";

export default {
  components: { volver, homeCategory , ProductoSorpresa },
  data() {
    return {
      sorpresa,
      products:[],
      next:'',
      prev:'',
    };
  },
  
  mounted(){
    api.Categories().getBySlug('cajas-sorpresa').then(response => {
        let id = response.data.data[0].id
        api.Categories().products(id).getPaginate().then(response => {
          this.setProduct(response.data);
        }).catch()
      }).catch()
  },
  methods:{
    setProduct(data){
      this.products = data.data;
      this.next = data.links.next;
      this.prev = data.links.prev;
    },
    to_prev(){
      if(this.prev!=null){
        api.Categories().getProductsPagination(this.prev).then(
          response =>{
            this.setProduct(response.data);
          }
        );
      }
    },
    to_next(){
      if(this.next!=null){
        api.Categories().getProductsPagination(this.next).then(
          response =>{
            this.setProduct(response.data);
          }
        );
      }
    }
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