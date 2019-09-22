<template>
  <div class="card bg-white d-flex position-relative border-0 link">
    <div @click="link">
      <v-lazy-image class="card-img-top shadow" style="border-radius: 1rem;"
                    :src="product.images.length > 0 ? product.images[0].url : imageDefault"
                    :src-placeholder="imageDefault"
      />
    </div>
    <div class="buttons mb-2 align-self-end w-100 px-3">
      <div class="row justify-content-between">
        <div @click="addToCart" class="col-auto">
          <div class="car bg-white p-2 rounded-circle  shadow">
            <img src="../../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;">
          </div>
        </div>
        <div @click="addToWishlist" class="col-auto">
          <div class=" corazon bg-white p-2 rounded-circle shadow">
            <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
    <div @click="link" class="mt-4">
      <h6 class="Card-title font-italic text-capitalize text-center text-primary font-weight-bold mb-1">
        {{product.name}}</h6>
      <p class="card-text text-center" style="color: #CCCCCD;">{{product.price | money}}</p>
    </div>
  </div>
</template>
<script>
import imageDefault from '../../assets/images/producto.png'

export default {
  name: 'product',
  props: {
    product: {
      type: Object,
      default: {
        images: [{ url: imageDefault }]
      }
    }
  },
  data () {
    return {
      imageDefault
    }
  },

  mounted () {

  },
  methods: {
    link () {
      console.log('click')
      this.$router.push({ name: 'producto', params: { id: this.product.id, slug: this.product.slug } })
    },
    addToCart () {
      this.$store.commit('addToCart', this.product)
    },
    addToWishlist () {
      this.$store.commit('addToWishlist', this.product)
    }
  }
}
</script>
<style scoped lang="scss">
  .text_producto {
    left: 18%;
    right: 15%;
    top: 6%;
  }
  .buttons {
    bottom: 20px;
    margin-top: -4rem !important;
  }
  .card-img-top {
    max-width: 100%;
    min-height: 200px;
  }
</style>
