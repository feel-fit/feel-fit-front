<template>
  <div class="container-fluid position-relative mt-4">
    <div class="row mx-0 ">
      <div class="container ">
        <div class="row flex-wrap mb-5">
          <div v-for="item in products" :key="item.id" class="col-12 my-3 col-sm-6 col-md-4 col-xl-3">
            <product :product="item"></product>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import product from './product'

export default {
  name: 'products',
  components: {
    product
  },
  props: {
    products: {
      type: Array

    },
    tag: {
      default: 'Nuevo'
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
</style>
