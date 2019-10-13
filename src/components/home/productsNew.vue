<template>
  <section>
    <div class="container-fluid position-relative my-5">
      <div class="row line-background bg-primary"></div>
      <div class="row">
        <div class="col-12 col-md-2 order-3 order-sm-1 align-self-end">
          <div class="d-flex justify-content-center justify-content-lg-end">
            <font-awesome-icon style="cursor:pointer" @click="prev" icon="angle-left" size="lg" class="separador mr-md-3"/>
            <font-awesome-icon style="cursor:pointer" @click="next" icon="angle-right" size="lg"/>
          </div>
        </div>
        <div class="col-12 col-md-8 container order-md-1 m-0">
          <slick class="row"
                 ref="slick"
                 :options="slickOptions">
            <div v-for="item in products" :key="item.id" class="col-auto">
              <slick-product :product="item" class="product"></slick-product>
            </div>
          </slick>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Slick from 'vue-slick'
import slickProduct from './slickProduct'

export default {
  name: 'productsNew',
  components: {
    slickProduct, Slick
  },
  watch: {
    products () {
      this.reInitSlick(this.$refs.slick)
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
        // centerMode: true,
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
      }
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },
    reInitSlick (slick) {
      let currentIndex = slick.currentSlide()

      slick.destroy()
      this.$nextTick(() => {
        slick.create()
        slick.goTo(currentIndex, true)
      })
    }
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

  .caja{
    border:2px red solid;
  }

  .separador{
    margin-right: 40%;
  }
</style>
