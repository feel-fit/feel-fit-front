<template>
  <section>
    <div @click="link" class="container">
      <div class="producto row justify-content-between mx-auto shadow pb-3">
        <div class="col-6 col-md-5 col-lg-4">
          <img :src="image" alt="Papas" class="w-100 mx-auto d-block"
               style="margin-top: -10%;">
        </div>
        <div class="text_productos col-6 col-md-5 ">
          <h2 class="font-weight-bold font-italic text-info mt-lg-5 mt-3">{{title}}</h2>
          <hr class="hr_producto mt-lg-3 text-black-50">
          <p class="font-italic mb-2">Entra y sorpr&eacute;ndente</p>
          <hr class="hr_producto">
        </div>
        <div class="align-self-center col-md-2 d-md-block d-none">
          <button type="button" class="boton btn btn-sm  btn-info min-width">
            <font-awesome-icon class="text-white" icon="arrow-right" size="xs"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'homeCategory',
  props: {
    image: {
      required: true
    },
    title: {
      required: true
    },
    id: {
      required: true
    },
    url: {
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    link () {
      this.$router.push({ name: 'category', params: { id: this.id, category: this.url } })
    }
  }
}
</script>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  .min-width {
    min-width: 80px;
    @include media-breakpoint-up(md) {
      min-width: 120px;
    }
  }
  .boton {
    padding: 0rem 19%;
    border-radius: 1rem !important;
  }
  .producto {
    border-radius: 1.25rem;
  }
  .hr_producto {
    margin-top: 0;
    margin-bottom: 2%;
  }
  .text_productos {
    p {
      color: #B2B2B2;
    }
    h2 {
      @include media-breakpoint-up(xs) {
        font-size: 20px
      }
      @include media-breakpoint-up(sm) {
        font-size: 28px
      }
      @include media-breakpoint-up(md) {
        font-size: 36px
      }
    }
  }
</style>
