<template>
  <div>
    <portada :slides="slides"></portada>
    <buscador id="producto-nuevo"></buscador>
    <home-category url="productos-nuevos" title="Nuestros Productos nuevos" :id="1" :image="images.papas"></home-category>
    <products-new tag="nuevo" :products="nuevos" v-if="nuevos.length>0"></products-new>
    <fresa/>
    <home-category url="productos-destacados" title="Nuestros Productos destacados" :id="2" :image="images.yogurt"/>
    <products-new tag="destacado" :products="destacados" v-if="destacados.length>0"></products-new>
    <fresa/>
    <home-category url="cajas-sorpresa" title="Nuestras Cajas Sorpresa" :class="[sorpresas.length>0?'':'mb-5']" :id="3" :image="images.sorpresa"/>
    <products-new tag="caja sorpresa" :products="sorpresas" v-if="sorpresas.length>0"></products-new>
  </div>
</template>
<script>
import api from '../plugins/api'
import { logout, getUserToken, getGuestToken } from './../plugins/auth'
import portada from '../components/home/portada'
import buscador from '../components/home/buscador'
import homeCategory from '../components/home/homeCategory'
import whatsapp from '../components/home/whatsapp'
import fresa from '../components/home/fresa'
import productsNew from '../components/home/productsNew'
import isEmpty from 'lodash/isEmpty'
import sorpresa from '../assets/images/sorpresa.png'
import papas from './../assets/images/producto1.png'
import yogurt from './../assets/images/destacados.png'
import imageDefault from './../assets/images/producto.png'

export default {
  name: 'home',
  metaInfo () {
    return {
      title: 'FEEL FIT | tienda saludable',
      meta: [
        { name: 'description', content: 'Tu mercado saludable en la puerta de tu casa' },
        { name: 'keywords', content: 'feelfit, venta de productos saludables' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  data () {
    return {
      images: {
        sorpresa, papas, yogurt, imageDefault
      }

    }
  },
  components: {
    portada, buscador, homeCategory, whatsapp, fresa, productsNew
  },
  mounted () {
    // verificamos el token de invitado
    if (!getGuestToken()) {
      this.$store.dispatch('setGuestToken')
    } else {
      this.$store.dispatch('checkToken')
    }
    if (getUserToken() && !this.me) this.$store.dispatch('getMe')
    this.$store.dispatch('getSlides')

    this.$store.commit('open_menu', false)
  },
  computed: {
    me () {
      let me = this.$store.state.me
      if (isEmpty(me)) return null
      return me
    },
    name () {
      return upperFirst(first(words(this.me.name)))
    },
    slides () {
      return this.$store.state.slides
    },
    nuevos () {
      return this.$store.state.nuevos
    },
    destacados () {
      return this.$store.state.destacados
    },
    sorpresas () {
      return this.$store.state.sorpresas
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
