<template>
    <div>
        <volver></volver>
        <mercado></mercado>
        <hoja></hoja>
        <products-new></products-new>
        <products-new></products-new>
        <fresa></fresa>
        
    </div>
</template>

<script>

    import volver from '../components/products/volver.vue'
    import mercado from '../components/products/mercado.vue'
    import productsNew from '../components/products/productsNew.vue'
    import hoja from '../components/products/hoja.vue'
    import fresa from '../components/products/fresa.vue'
    

    export default {
        name: 'product',
        data() {
            return {}
        },
        components: {
            mercado,volver,productsNew,hoja,fresa
           
        },
        mounted() {
           
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>