<template>
  <div>
    <div @click="link" class="col-12 link py-3 ">
      <div class="row align-items-center">
        <div class="col-3 col-sm-3 col-lg-2">
          <v-lazy-image class="img-fluid"
                        :src="product.images.length > 0 ? product.images[0].url : imageDefault"
                        :src-placeholder="imageDefault"
          />
        </div>
        <div class="col text-left" @mouseenter="popovers(product)"><p class="text-capitalize mb-1">{{product.name}}</p>
          <span class="text-capitalize">{{product.brand.name}}</span>
        </div>
        <div class="col text-center">
          <span class="text-capitalize">{{product.price|money}}</span>
        </div>
      </div>
    </div>
    <!--
     <div class="objeto">
       <div class="card shadow bg-white  rounded d-flex">
         <img src="../../assets/images/catalogo/wakeup.png" alt="Papas" class="card-img-top p-3">
         <div class="card-body">
           <h6 class="Card-title font-italic font-weight-bold h6">Crema de maní(Wake up)</h6>
           <p class="card-text"><small>Choco One Pack</small></p>
           <p class="card-text"><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga
             ullam saepe, in ad dolorem autem ab culpa.</small></p>
           <p class="card-text h6 text-right mr-3 small"><strong>$15.000</strong></p>
           <p class="card-text h6 text-left mt-n4 mr-3 mb-1 small"><a href="#">Ver detalles</a></p>
         </div>
       </div>
     </div>
    -->
  </div>
</template>
<script>
import imageDefault from '../../assets/images/producto.png'

export default {
  name: 'item-search',
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
  methods: {
    link () {
      this.$router.push({ name: 'producto', params: { id: this.product.id, slug: this.product.slug } })
    },
    popovers () {
      console.log('si funciona')
    }
  }
}
</script>
<style scoped lang="scss">
  .link:hover {
    color:#00D0D2;;
  }
</style>
