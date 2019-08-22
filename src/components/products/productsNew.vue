<template>
  <div class="container-fluid position-relative mt-4">
    <div class="row mx-0 justify-content-around flex-row flex-wrap flex-sm-nowrap">
      <div class="col-12 col-sm align-self-end flex-nowrap flex-row order-3 order-sm-1 ">
      </div>
      <div class="container  order-1 order-sm-2">
        <div class="row">
          <slick
            ref="slick"
            :options="slickOptions">
            <div class="col">
              <product></product>
            </div>
            <div class="d-none d-sm-block col mt-4">
              <product></product>
            </div>
            <div class="d-none d-md-block col mt-4">
              <product></product>
            </div>
            <div class="d-none d-xl-block col mt-4">
              <product></product>
            </div>
          </slick>
        </div>
      </div>
      <div class="col-12 col-sm order-2 p-4 order-sm-3"></div>
    </div>
  </div>
</template>
<script>
import Slick from 'vue-slick'
import product from './product'

export default {
  name: 'productsNew',
  components: {
    product,Slick
  },
  props: {
    products: {
      required: true,
      type: Array
    },
      tag: {
          default: 'Nuevo'
      }
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 3,
        // Any other options that can be got from plugin documentation
      },
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },
  }
}
</script>
<style scoped>
</style>
