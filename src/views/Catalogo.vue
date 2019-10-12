<template>
  <section>
    <volver></volver>
    <div class="container-fluid pb-5 contenido-catalogo">
      <div class="row">
        <img class="image-own d-none d-sm-block" src="../assets/images/catalogo/bgcat.png"/>
        <div class="col-md-3 p-0">
          <catalogo></catalogo>
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
import catalogo from '../components/catalogo/catalogo.vue'
import whatsapp from '../components/home/whatsapp'
import hoja from '../components/products/hoja.vue'
import volver from '../components/products/volver.vue'
import producto from '../components/catalogo/producto.vue'
import hoja2 from '../components/home/hoja'

export default {
  name: 'catalogo',
  metaInfo () {
    return {
      title: 'Catálogo | Feelfit',
      meta: [
        { name: 'description', content: 'encuentra todo nuestro catálogo fitness en armenia' },
        { name: 'keywords', content: 'catalogo fitness, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath },
      ]
    }
  },
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
