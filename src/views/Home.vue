<template>
  <div>
    <portada></portada>
    <buscador></buscador>
    <whatsapp/>
    <home-category url="productos-nuevos" title="Nuestros Productos nuevos" :id="1" :image="images.papas"></home-category>
    <products-new tag="nuevo" :products="nuevos"></products-new>
    <fresa/>
    <home-category url="productos-destacados" title="Nuestros Productos destacados" :id="2" :image="images.yogurt"/>
    <products-new tag="destacado" :products="destacados"></products-new>
    <fresa/>
    <home-category url="cajas-sorpresa" title="Nuestras Cajas Sorpresa" :id="3" :image="images.sorpresa"/>
    <products-new tag="caja sorpresa" :products="sorpresas"></products-new>
  </div>
</template>
<script>

    import api from '../plugins/api'
    import {logout, getUserToken, getGuestToken} from './../plugins/auth'
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
        data() {
            return {
                nuevos: [{images: [{ url: imageDefault }],price:0}],
                destacados: [{images: [{ url: imageDefault }],price:0}],
                sorpresas: [{images: [{ url: imageDefault }],price:0}],
                images: {
                    sorpresa, papas, yogurt,imageDefault
                }
            }
        },
        components: {
            portada, buscador, homeCategory, whatsapp, fresa, productsNew
        },
        mounted() {
            // verificamos el token de invitado
            if (!getGuestToken()) {
                this.$store.dispatch('setGuestToken')
            } else {
                this.$store.dispatch('checkToken')
            }
            if (getUserToken() && !this.me) this.$store.dispatch('getMe')

            api.Categories().products(1).getPaginate().then(response => {
                this.nuevos = response.data.data
              api.Categories().products(2).getPaginate().then(response => {
                this.destacados = response.data.data
                api.Categories().products(3).getPaginate().then(response => {
                  this.sorpresas = response.data.data
                })
              })
            })
        },
        computed: {
            me() {
                let me = this.$store.state.me
                if (isEmpty(me)) return null
                return me
            },
            name() {
                return upperFirst(first(words(this.me.name)))
            }
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
