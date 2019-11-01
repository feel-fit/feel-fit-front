<template>
  <div @click="link" class="card shadow bg-white link rounded d-flex card-product">
    <img :data-lazy="product.images.length > 0 ? product.images[0].url : imageDefault" :src="imageDefault" :alt="product.name"
         class="card-img-top">
    <div class="card-body">
      <h6 class="Card-title card-title font-italic text-capitalize d-flex justify-content-between">
        <span>{{product.name}}</span></h6><span
        class="badge small badge-secondary ">{{tag}}</span>
      <p class="card-text"><small>{{product.brand.name}}</small></p>
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
      type: Object

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
      this.$router.push({ name: 'producto', params: { id: this.product.id, slug: this.product.slug } })
    }

  }
}
</script>
<style scoped lang="scss">
  .card-product{
    max-width: 350px;
  }
  .card-title{
    width:100%;
    height:80px;
    overflow:hidden;
    text-overflow: ellipsis;
  }
</style>
