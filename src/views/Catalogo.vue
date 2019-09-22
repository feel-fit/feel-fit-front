<template>
    <section>
        <volver></volver>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 p-0">
                    <catalogo></catalogo>
                </div>
                <div class="col-md-9">
                    <producto></producto>
                </div>
                <div class="d-none d-md-block col-md-1">
                    <whatsapp></whatsapp>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import catalogo from '../components/catalogo/catalogo.vue'
import whatsapp from '../components/home/whatsapp'
import hoja from '../components/products/hoja.vue'
import volver from '../components/products/volver.vue'
import producto from '../components/catalogo/producto.vue'
import hoja2 from '../components/home/hoja'

export default {
  name: 'product',
  data () {
    return {}
  },
  components: {
    catalogo, hoja, volver, producto, hoja2, whatsapp

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.caja{
    border:2px solid blue;
}

</style>
