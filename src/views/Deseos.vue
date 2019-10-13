<template>
    <div>
        <volver></volver>
        <lista></lista>
    </div>
</template>
<script>
import volver from '../components/products/volver.vue'
import lista from '../components/deseos/lista.vue'
export default {
  metaInfo () {
    return {
      title: 'Lista de deseos | Feelfit',
      meta: [
        { name: 'description', content: 'lista de deseos fitness' },
        { name: 'keywords', content: 'lista de deseos, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  components: {
    volver, lista
  }
}
</script>
<style scoped>

</style>
