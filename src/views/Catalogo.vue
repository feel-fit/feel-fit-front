<template>
    <div>
        <volver></volver>
        <catalogo></catalogo>
        <hoja></hoja>
        <producto></producto>
        <hoja2></hoja2>
        
        
    </div>
</template>

<script>

    import catalogo from '../components/catalogo/catalogo.vue'
    import hoja from '../components/products/hoja.vue'
    import volver from '../components/products/volver.vue'
    import producto from '../components/catalogo/producto.vue'
    import hoja2 from '../components/home/hoja'
    
    

    export default {
        name: 'product',
        data() {
            return {}
        },
        components: {
            catalogo,hoja,volver,producto,hoja2
           
        },
        mounted() {
           
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>