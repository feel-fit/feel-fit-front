<template>
  <section>
    <div class="container-fluid position-relative my-5">
      <div class="row line-background bg-primary"></div>
      <div class="row justify-content-around flex-row flex-wrap flex-sm-nowrap">
        <div class="col-12 col-sm align-self-end flex-nowrap flex-row order-3 order-sm-1 ">
          <div class="d-flex justify-content-center">
            <font-awesome-icon style="cursor: pointer" @click="prev" icon="angle-left" size="lg" class="mr-3"/>
            <font-awesome-icon style="cursor: pointer" @click="next" icon="angle-right" size="lg"/>
          </div>
        </div>
        <div class="container  order-1 order-sm-2">
          <slick class="row"
                 ref="slick"
                 :options="slickOptions">
            <div v-for="item in products" :key="item.id" class="col-auto">
              <product :product="item" class="product"></product>
            </div>
          </slick>
        </div>
        <div class="col-12 col-sm order-2 p-4 order-sm-3"></div>
      </div>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick'
import product from './product'

export default {
  name: 'productsNew',
  components: {
    product, Slick
  },
  watch: {
    products() {
      this.reInitSlick(this.$refs.slick);
    }
  },
  props: {
    products: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 4,
        infinite: true,
        arrows: false,
        //centerMode: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              
              slidesToShow: 1
            }
          }
        ]
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
    reInitSlick(slick) {
      let currentIndex = slick.currentSlide()
    
      slick.destroy()
      this.$nextTick(() => {
        slick.create()
        slick.goTo(currentIndex, true)
      })
    },
  }
}
</script>
<style lang="scss">
  @import '~slick-carousel/slick/slick.scss';
  .line-background {
    position: absolute;
    width: 100%;
    height: 70px;
    top: 45%;
  }
  .slick-list {
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
  }
</style>
