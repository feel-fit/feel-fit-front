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
    import Api from '../plugins/api'
    import volver from '../components/products/volver.vue'
    import mercado from '../components/products/mercado.vue'
    import products from '../components/products/products.vue'
    import hoja from '../components/products/hoja.vue'
    import fresa from '../components/products/fresa_producto.vue'


    export default {
        name: 'product',
        data() {
            return {
                productos: [],
            }
        },
        props:{
          url:{
              default:'products'
          }
        },
        components: {
            mercado, volver, products, hoja, fresa

        },
        mounted() {
            Api.Any(this.url).getPaginate().then(response=>{
                this.productos = response.data.data
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
