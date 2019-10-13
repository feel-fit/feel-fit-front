<template>
    <div>
        <volver></volver>
        <buscar></buscar>
    </div>
</template>

<script>

import volver from '../components/products/volver.vue'
import buscar from '../components/buscar/buscar.vue'
import buscador from '../components/home/buscador'

export default {
  name: 'product',
  metaInfo () {
    return {
      title: 'Buscador | Feelfit',
      meta: [
        { name: 'description', content: 'Buscar los mejore productos fitness en armenia' },
        { name: 'keywords', content: 'buscador fitness, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  data () {
    return {}
  },
  components: {
    volver, buscar, buscador

  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
