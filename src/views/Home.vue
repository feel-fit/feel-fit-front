<template>
  <div>
    <portada></portada>
    <buscador></buscador>
    <whatsapp/>
    <producto title="Nuestros Productos nuevos" :image="images.papas"></producto>
    <products-new tag="nuevo" :products="nuevos"></products-new>
    <fresa/>
    <producto title="Nuestros Productos destacados" :image="images.yogurt"/>
    <products-new tag="destacado" :products="destacados"></products-new>
    <fresa/>
    <producto title="Nuestras Cajas Sorpresa" :image="images.sorpresa"/>
    <products-new tag="destacado" :products="sorpresas"></products-new>

  </div>
</template>
<script>
    import api from '../plugins/api'
    import {logout, getUserToken, getGuestToken} from './../plugins/auth'
    import portada from '../components/home/portada'
    import buscador from '../components/home/buscador'
    import producto from '../components/home/producto'
    import whatsapp from '../components/home/whatsapp'
    import fresa from '../components/home/fresa'
    import productsNew from '../components/home/productsNew'
    import isEmpty from 'lodash/isEmpty'
    import sorpresa from '../assets/images/sorpresa.png'
    import papas from './../assets/images/producto1.png'
    import yogurt from './../assets/images/destacados.png'

    export default {
        name: 'home',
        data() {
            return {
                nuevos: [],
                destacados: [],
                sorpresas: [],
                images: {
                    sorpresa, papas, yogurt
                }
            }
        },
        components: {
            portada, buscador, producto, whatsapp, fresa, productsNew
        },
        mounted() {
            // verificamos el token de invitado
            if (!getGuestToken()) {
                this.$store.dispatch('setGuestToken')
            } else {
                this.$store.dispatch('checkToken')
            }
            if (getUserToken() && !this.me) this.$store.dispatch('getMe')

            api.Categories().products(1).getAll().then(response => {
                this.nuevos = response.data.data
            })
            api.Categories().products(2).getAll().then(response => {
                this.destacados = response.data.data
            })
            api.Any('products?surprise_box=1').getPaginate().then(response => {
                this.sorpresas = response.data.data
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
