<template>
  <section>
    <volver></volver>
    <div class="container-fluid pb-5 contenido-catalogo">
      <div class="row">
        <img class="image-own d-none d-sm-block" src="../assets/images/catalogo/bgcat.png"/>
        <div class="col-md-3 p-0">
          <portada></portada>
        </div>
        <div class="col-md-8">
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
import portada from '../components/catalogo/catalogo.vue'
import whatsapp from '../components/home/whatsapp'
import volver from '../components/products/volver.vue'
import producto from '../components/catalogo/producto.vue'


export default {
  name: 'catalogo',
  metaInfo () {
    return {
      title: 'FEEL FIT  | Catálogo',
      meta: [
        { name: 'description', content: 'encuentra todo nuestro catálogo saludable en armenia' },
        { name: 'keywords', content: 'catalogo fitness, feelfit, venta de productos fitness' }
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
    portada,  volver, producto, whatsapp

  },
  mounted () {
    this.$store.commit('open_menu', false)
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .caja {
    border: 2px solid blue;
  }
  .image-own {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    top: 5%;
    height: 100%;
    z-index: -1;
  }
  .contenido-catalogo {
    position: relative;
  }
</style>
