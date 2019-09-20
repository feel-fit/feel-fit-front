<template>
  <div>
    <volver></volver>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 px-0 col-md-6">
          <div class="h-100 w-100 d-flex align-items-center">
            <div class="card bg-white d-flex position-relative border-0">
              <v-lazy-image class="img-fluid"
                            :src="product.images.length > 0 ? product.images[0].url : imageDefault"
                            :src-placeholder="imageDefault"
              />
              <div>
                <a href="#" id="menu-toggle-car">
                  <div @click="addToCart" class="car bg-white p-3 position-absolute shadow d-none d-md-block">
                    <img src="../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;">
                  </div>
                </a>
                <div class="corazon bg-white p-3 position-absolute shadow d-none d-md-block">
                  <img src="../assets/images/fav.svg" alt="Corazon" class="img-fluid">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 position-relative">
          <!-- <div class="tabla position-absolute btn-warning btn-lg d-none d-md-block"><small> Tabla Nutricional</small></div> -->
          <div class="row px-3 h-100 d-flex align-items-center">
            <div class="col-12">
              <div class="row d-md-none mt-4 mb-5 d-flex justify-content-between">
                <div class="col-6 text-center">
                  <span @click="addToCart" class="btn bg-info border shadow py-2 px-4 px-sm-5 color_border">
                    <img src="../assets/images/informacion/cartBlanco.svg" style="width: 25px;">&nbsp;&nbsp;Agregar</span>
                </div>
                <div class="col-6 text-center">
                  <span class="btn bg-white border shadow py-2 px-4 px-sm-5 color_texto1" style="border-radius:1rem;">
                    <img src="../assets/images/fav.svg">&nbsp;&nbsp;Agregar</span>
                </div>
              </div>
            </div>
            <div class="col-12 align-self-center">
              <div class="position-relative">
                <!-- <div class="tabla position-absolute d-md-none btn-warning btn-lg "><small> Tabla Nutricional</small></div> -->
                <h1 class="font-italic text-capitalize font-weight-bold color_texto1">{{product.name}}</h1>
                <p class="mb-5 d-md-none color_texto2">{{product.brand}}</p>
                <div class="row">
                  <div class="col-6 d-md-none">
                    <span class="btn btn-warning border shadow px-4 font-italic font-weight-bold color_border">Tabla Nutricional</span>
                  </div>
                  <div class="col-6">
                    <p class="font-weight-bold text-dark text-right text-md-left mr-5 mr-md-0">{{product.price |
                      money}}</p>
                  </div>
                </div>
                <p class="mt-3 color_texto2">{{product.description}}</p>
              </div>
            </div>
            <div class="col-12 mb-5 align-self-end">
              <div class="row">
                <div class="col-12 mb-3 col-lg-4 border-right">
                  <h4 class="text-lg-center text-primary font-italic">Categoría</h4>
                  <div>
                    <small v-for="item in product.categories" class="color_texto2 text-capitalize">
                      {{item.name}},</small>
                  </div>
                </div>
                <div class="col-12 mb-3 col-lg-4 border-right">
                  <h4 class="text-lg-center text-primary font-italic">Ingredientes</h4>
                  <div>
                    <small v-for="item in product.tags" class="color_texto2 text-capitalize"> {{item.name}},</small>
                  </div>
                </div>
                <div class="col-12 mb-3 col-lg-4">
                  <h4 class="text-lg-center text-primary font-italic">Etiquetas</h4>
                  <div>
                    <small v-for="item in product.tags" class="color_texto2 text-capitalize"> {{item.name}},</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import volver from '../components/products/volver.vue'
import api from '../plugins/api'
import imageDefault from '../assets/images/producto.png'

export default {
  props: {
    slug: {
      default: 'products'
    },
    id: {
      type: Number
    },
  },
  data () {
    return {
      product: {
        price: 0,
        images: [{ url: imageDefault }]
      },
      imageDefault
    }
  },
  components: {
    volver
  },
  beforeRouteEnter (to, from, next) {
    if (to.params.id) {
      api.Products().getOne(to.params.id).then(response => {
        next(vm => ( vm.product = response.data.data ))
      })
    } else {
      api.Products().getBySlug(to.params.slug).then(response => {
        next(vm => ( vm.product = response.data.data[0] ))
      })
    }
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  mounted () {
  
  
  },
  methods: {
    addToCart () {
      this.$store.commit('addToCart', this.product)
    }
  }
  
}
</script>
<style scoped>
  .btn{
    cursor: pointer;
  }
  
  .color_texto1{
    color: #00D0D2;
  }
  
  .color_texto2{
    color: #CCCCCD;
  }
  
  .color_border{
    border-radius: 1rem;
    color:         rgb(255, 255, 255);
  }
  
  .car{
    left:          10%;
    bottom:        6%;
    border-radius: 2rem;
  }
  
  .corazon{
    left:          77%;
    bottom:        6%;
    border-radius: 2rem;
  }
  
  @media (min-width: 576px){
    .car{
      bottom: 9%;
    }
    
    .corazon{
      left:          77%;
      bottom:        9%;
      border-radius: 50%;
    }
  }
  
  @media (min-width: 768px){
    .car, .corazon{
      bottom: 7%;
    }
  }
  
  @media (min-width: 992px){
    .car, .corazon{
      bottom: 7%;
    }
    
  }
</style>
