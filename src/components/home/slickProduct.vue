<template>
  <div @click="link" class="card shadow bg-white link rounded d-flex">
    <img :data-lazy="product.images.length > 0 ? product.images[0].url : imageDefault" :src="imageDefault" :alt="product.name"
         class="card-img-top">
    <div class="card-body">
      <h6 class="Card-title font-italic text-capitalize h6 d-flex justify-content-between ">
        <span>{{product.name}}</span><span
        class="badge small badge-secondary ">{{tag}}</span></h6>
      <p class="card-text"><small>{{product.name}}</small></p>
      <p class="card-text h6 text-right mr-3 mb-1 small "><strong>{{product.price | money}}</strong></p>
    </div>
  </div>
</template>
<script>
import imageDefault from '../../assets/images/producto.png'

export default {
  name: 'product',
  props: {
    product: {
      required: true,
      type: Object,
      
    },
    tag: {
      default: 'Nuevo'
    }
  },
  data () {
    return {
      imageDefault
    }
  },
  methods: {
    link () {
      console.log('click')
      this.$router.push({ name: 'producto', params: { id: this.product.id, slug: this.product.slug } })
    },
    
  }
}
</script>
<style scoped lang="scss">
</style>
