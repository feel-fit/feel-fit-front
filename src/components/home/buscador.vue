<template>
  <!-- Inicio seccion de productos-->
  <section class="py-5 position-relative" id="section1">
    <img :src="hoja" class="hoja_home position-absolute d-none d-md-inline-block">
    <img :src="fresa" class="fresa_buscador position-absolute d-none d-md-inline-block">
    <div class="container">
      <div class="form-inline active-pink-4 justify-content-center position-relative  border-0">
        <input @keyup="searchTimeOut" v-model="search" class="buscador form-control form-control-sm w-100 shadow p-4 mb-4 bg-white" type="search"
               placeholder="Encuentra yogurt, granola y mucho más.."
               aria-label="Search">
        <font-awesome-icon icon="search" class="img_search icon" size="lg"></font-awesome-icon>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-6 mx-auto">
          <div class="shadow buscador">
            <item-search v-for="item in products" :key="item.id" :product="item"></item-search>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import hoja from './../../assets/images/hoja.png'
import fresa from './../../assets/images/conocenos/fresa2.png'
import itemSearch from '../../components/buscar/item-search'
import api from '../../plugins/api'

export default {
  name: 'buscador',
  data () {
    return {
      hoja,
      fresa,
      search: '',
      products: [],
      timeout: null
    }
  },
  components: {
    itemSearch
  },
  methods: {
    searchTimeOut () {
      clearTimeout(this.timeout)
      // Make a new timeout set to go off in 800ms
      this.timeout = setTimeout(() => {
        this.searching()
      }, 200)
    },
    searching () {
      console.log('hola')
      api.Products().search(this.search).then(result => {
        this.products = result.data.data
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style scoped>
  .buscador{
    border-radius: 2rem;
  }

  .caja{
    border: 2px green solid;
  }

  .fresa_buscador{
    right:0;
    top:   -10%;
    width: 9%;
    margin: 0;
    padding: 0;
  }

  .img_search{
    position: absolute;
    right:    1.5rem;
    top:      40%;
  }
</style>
