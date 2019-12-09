<template>
  <div class="padding-container">
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
          <div class="carousel-inner" v-if="articulos.lenght>2">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2">{{articulos[0].category.name}}</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top order-0"
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2">POSTRES</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body order-1">
                        <label class="etiqueta p-2">POSTRES</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
              </div>
              <!--.row-->
            </div>
            <!--.item-->

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2">POSTRES</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2">POSTRES</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#">
                    <div class="card">
                      <div class="card-body">
                        <label class="etiqueta p-2">POSTRES</label>
                        <h5
                          class="card-title title"
                        >Vuelta a la maravillosa rutina ¿Cual es la tuya?</h5>
                        <p class="card-text">
                          <small class="text-muted cite">Last updated 3 mins ago</small>
                        </p>
                      </div>
                      <img
                        src="../../../assets/images/recetas/Part 2/Pollo.png"
                        class="card-img-top"
                        alt="..."
                      />
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
</template>

<script>
export default {
  props: {
    articulos: Array,
    identificador: String
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
}
.cite {
  font-family: "CircularStd-Bold";
  color: rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  margin: 0 auto;
}
</style>