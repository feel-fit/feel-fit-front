<template>
  <div>
    <volver></volver>
    <mercado :title="name"></mercado>
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
      productos: [
        { images: [], price: 0 },
        { images: [], price: 0 },
        { images: [], price: 0 },
        { images: [], price: 0 },
        { images: [], price: 0 },
        { images: [], price: 0 }
      ],
      name: ''
    }
  },
  props: {
    url: {
      default: 'products'
    },
    id: {
      type: Number
    },
    category: { default: 'productos' },
    
  },
  components: {
    mercado, volver, products, hoja, fresa
    
  },
  
  mounted () {
    if (this.id) {
      api.Categories().products(this.id).getPaginate().then(response => {
        this.setData(response.data.data, this.id)
      }).catch()
    } else {
      api.Categories().getBySlug(this.category).then(response => {
        let id = response.data.data[0].id
        api.Categories().products(id).getPaginate().then(response => {
          this.setData(response.data.data, id)
        }).catch()
      }).catch()
    }
  },
  methods: {
    setData (data, id) {
      this.productos = data
      api.Categories().getOne(id).then(response => {
        this.name = response.data.data.name
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
