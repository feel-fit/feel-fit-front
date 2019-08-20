<template>
    <div>
        <volver></volver>
        <producto></producto>
    </div>
</template>
<script>

import volver from '../components/products/volver.vue'
import producto from'../components/carrito/producto.vue'

export default {
    data(){
        return{

        }
    },
    components:{
        producto,volver
    }
    
}
</script>
<style scoped>

</style>