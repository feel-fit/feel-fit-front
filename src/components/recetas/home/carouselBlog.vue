<template>
<div>

  <!--linea -->
    <linea class="mb-5" :name="'articulos recientes'" v-if="articulos.length>0"/>
  <!--linea -->

  <div class="padding-container" v-if="articulos.length>2">
    <div class="row blog">
      <div class="col-md-12">
        <div :id="'blogCarousel'+identificador" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li :data-target="'#blogCarousel'+identificador" class="mr-5 active" data-slide-to="0">
              <img src="../../../assets/images/recetas/Flechas/Group3Copy.svg" class="img-fluid" />
            </li>
            <li :data-target="'#blogCarousel'+identificador" class="ml-5" data-slide-to="1">
              <img src="../../../assets/images/recetas/Flechas/flechaizq.png" class="img-fluid" />
            </li>
          </ol>

          <!-- Carousel items -->
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <a @click="getReceta(articulos[0].id)" class="link">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[0].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[0].author}} | {{ articulos[0].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[0].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a @click="getReceta(articulos[1].id)" class="link">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[1].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[1].author}} | {{articulos[1].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[1].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a @click="getReceta(articulos[2].id)" class="link">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[2].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[2].author}} | {{articulos[2].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[2].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->

            <div class="carousel-item active" v-if="articulos.length>6">
              <div class="row">
                <div class="col-md-4">
                  <a @click="getReceta(articulos[3].id)" class="link">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[3].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[3].author}} | {{articulos[3].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[3].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a @click="getReceta(articulos[4].id)" class="link">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[4].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[4].author}} | {{articulos[4].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[4].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a @click="getReceta(articulos[5].id)" class="link">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2 text-uppercase">Blog</label>
                        <h5 class="card-title title">{{articulos[5].title}}</h5>
                        <p class="card-text">
                          <small
                            class="text-muted cite"
                          >{{articulos[5].author}} | {{articulos[5].created_at|moment("from", "now")}}</small>
                        </p>
                      </div>
                      <img :src="articulos[5].photo" class="card-img-top order-0" alt="..." />
                    </div>
                  </a>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->
          </div>
          <!--.carousel-inner-->
        </div>
        <!--.Carousel-->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import api from "../../../plugins/api";
import linea from "./linea.vue";
export default {
  components:{
    linea
  },
  props: ['identificador'],
  data(){
    return{
      articulos:[]
    }
  },
  beforeMount(){
    api
      .Blog()
      .getLatests()
      .then(response => {
        this.articulos = response.data.data;
      });
  },
  methods:{
    getReceta(articulo_id){
      this.$router.push('/recetas/articulo/'+articulo_id);
    }
  }
  
};
</script>
<style scoped lang="scss">
.padding-container {
  padding-bottom: 70px;
}
.blog .carousel-indicators li,
.blog .carousel-indicators li.active {
  width: 100px;
  height: 25px;
  background-color: #fff;
  position: relative;
  top: 100px;
  margin: 14px;
}

.blog .carousel-indicators img {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
}

.blog .carousel-item .card-img-top {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.etiqueta {
  background: #f7f6f6;
  border-radius: 3px;
  font-family: "CircularStd-Book";
  font-size: 11px;
  color: #2b2b2b;
  letter-spacing: 5px;
  font-weight: 900;
}

.title {
  font-family: "CircularStd-Medium";
  font-size: 24px;
  color: #000000;
  letter-spacing: 0;
  line-height: 32px;
  text-transform: capitalize;
}
.cite {
  text-transform: uppercase;
  font-family: "CircularStd-Bold";
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin: 0 auto;
}
</style>