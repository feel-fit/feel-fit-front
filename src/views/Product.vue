<template>
  <div>
    <volver></volver>
    <mercado></mercado>
    <hoja></hoja>
    <products :products="productos"></products>
    <fresa></fresa>
  </div>
</template>
<script>
import api from '../plugins/api'
import volver from '../components/products/volver.vue'
import mercado from '../components/products/mercado.vue'
import products from '../components/products/products.vue'
import hoja from '../components/products/hoja.vue'
import fresa from '../components/products/fresa_producto.vue'

export default {
  name: 'product',
  data () {
    return {
      productos: [],
    }
  },
  props: {
    url: {
      default: 'products'
    }
  },
  components: {
    mercado, volver, products, hoja, fresa
    
  },
  beforeRouteEnter (to, from, next) {
    if (to.params.id) {
      api.Categories().products(to.params.id).getPaginate().then(response => {
        next(vm => vm.setData(response.data.data))
      }).catch()
    } else {
      api.Categories().getBySlug(to.params.category).then(response => {
        api.Categories().products(response.data.data[0].id).getPaginate().then(response => {
          next(vm => vm.setData(response.data.data))
        }).catch()
      }).catch()
    }
  },
  mounted () {
  
  
  },
  methods: {
    setData (data) {
      this.productos = data
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
