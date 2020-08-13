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
      title: 'FEEL FIT | Lista de deseos',
      meta: [
        { name: 'description', content: 'lista de deseos saludable' },
        { name: 'keywords', content: 'lista de deseos, feelfit, venta de productos saludable' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfit.com.co' + this.$route.fullPath }
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
