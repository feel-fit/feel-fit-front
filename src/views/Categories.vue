<template>
  <div id="productos">
    <volver></volver>
    <mercado :title="name"></mercado>
    <hoja></hoja>
    <products :products="productos"></products>
    <div class="col-12 justify-content-lg-end mb-5 p-2">
      <div class="d-flex justify-content-center" v-if="productos.length>0">
        <a href="#productos" class="pr-5">
          <font-awesome-icon
          style="cursor:pointer"
          @click="to_prev"
          icon="angle-left"
          size="lg"
        />
        </a>
        <a href="#productos" class="pl-5 ml-4">
        <font-awesome-icon style="cursor:pointer" @click="to_next" icon="angle-right" size="lg" />
        </a>
      </div>
    </div>
    <fresa></fresa>
  </div>
</template>
<script>
import api from '../plugins/api'
import volver from '../components/products/volver.vue'
import mercado from '../components/products/mercado.vue'
import products from '../components/products/products.vue'
import hoja from '../components/products/hoja.vue'
import fresa from '../components/products/fresa_producto.vue'

export default {
  name: 'categorias',
  metaInfo () {
    return {
      title: 'FEEL FIT | '+this.name ,
      meta: [
        { name: 'description', content: 'encuentra todo nuestro catálogo saludable en armenia' },
        { name: 'keywords', content: 'catalogo fitness, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  data () {
    return {
      productos: [],
      next: '',
      prev: '',
      name: ''
    }
  },
  props: {
    url: {
      default: 'products'
    },
    id: {
      type: Number
    },
    category: { default: 'productos' }
  },
  components: {
    mercado,
    volver,
    products,
    hoja,
    fresa
  },

  mounted () {
    if (this.id) {
      api
        .Categories()
        .products(this.id)
        .getPaginate()
        .then(response => {
          this.setData(response.data, this.id)
        })
        .catch()
    } else {
      api
        .Categories()
        .getBySlug(this.category)
        .then(response => {
          let id = response.data.data[0].id
          api
            .Categories()
            .products(id)
            .getPaginate()
            .then(response => {
              this.setData(response.data, id)
            })
            .catch()
        })
        .catch()
    }
  },
  methods: {
    setData (data, id) {
      this.setProduct(data)
      api
        .Categories()
        .getOne(id)
        .then(response => {
          this.name = response.data.data.name
        })
    },
    setProduct (data) {
      this.productos = data.data
      this.next = data.links.next
      this.prev = data.links.prev
    },
    to_prev () {
      if (this.prev != null) {
        api.Categories().getProductsPagination(this.prev).then(
          response => {
            this.setProduct(response.data)
          }
        )
      }
    },
    to_next () {
      if (this.next != null) {
        api.Categories().getProductsPagination(this.next).then(
          response => {
            this.setProduct(response.data)
          }
        )
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.caja {
  border: red 2px solid;
}
</style>
