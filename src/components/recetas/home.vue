<template>
  <div class="tab-pane fade show active" id="home" role="tabpanel">
    <div class="container-fluid p-0 position-relative d-none d-md-block">
      <!-- slider -->
      <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators d-none d-lg-flex">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
              <img src="../../assets/images/recetas/18.png" />
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
              <img :src="imageDefault" />
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
              <img src="../../assets/images/recetas/18.png" />
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../assets/images/recetas/18.png" class="d-block carousel-img" />
            </div>
            <div class="carousel-item">
              <img :src="imageDefault" class="d-block carousel-img"/>
            </div>
            <div class="carousel-item">
              <img src="../../assets/images/recetas/18.png" class="d-block carousel-img" />
            </div>
          </div>
        </div>
      </div>
      <!-- slider -->

      <div class="informacion-inicio shadow p-5 d-none d-lg-block">
        <img src="../../assets/images/recetas/pp.png" class="img-fluid" />
        <h1 class="text-dark mt-4">Estefania C.</h1>
        <h6 class="text-muted">ADMINISTRADORA FEEL FIT</h6>
        <p class="text-dark my-3">
          Hola, me llamo Estefania. Soy apasionada de la cocina. La pasión por la gastronomía despertó en mí y ya no hubo
          marcha atrás
        </p>
        <img src="../../assets/images/recetas/firma.png" class="img-fluid" />
        <div>
          <img src="../../assets/images/recetas/iconos_redes/group_12.svg" class="img-fluid" />
          <img src="../../assets/images/recetas/iconos_redes/group_13.svg" class="img-fluid mx-2" />
          <img src="../../assets/images/recetas/iconos_redes/group_18.svg" class="img-fluid" />
        </div>
      </div>

      <div class="receta-default d-none d-md-flex align-items-center">
        <img
          src="../../assets/images/recetas/pp.png"
          class="img-fluid imagen-receta mr-5 d-none d-md-block"
        />
        <div>
          <button class="btn bg-white mb-3">Postres</button>
          <h3 class="text-white">Postre con OREO y SIN HORNO</h3>
          <h3 class="text-white">(Para los verdaderos amantes de las oreaos)</h3>
          <h6 class="text-white">ESTEFANIA C. | PUBLICADO HACE 8 MINT</h6>
        </div>
      </div>
    </div>

<!--fresa -->
    <div class="fresa d-none d-sm-block">
      <img src="../../assets/images/recetas/frutas/fresa copy 4.png" />
    </div>
<!--fresa -->

    <!--linea -->
    <div>
      <div class="d-flex linea">
        <span class="font-weight-bold">
          Más ideas
          <br />de Feel Fit
        </span>
        <hr class="border border-dark mx-3" />
        <span>VER TODAS</span>
      </div>
    </div>
    <!--linea -->

<!--doble recetas -->
    <div class="row receta margen-receta">
      <div class="col-lg-5 pr-lg-5">
        <div class="row h-100 pb-5">
          <div class="col-12 p-0 order-lg-1 alto">
            <img :src="imageDefault" class="rounded"/>
          </div>
          <div class="col-12 p-0 order-lg-0 bajo">
            <label class="etiqueta my-3 mt-lg-0 p-2">POSTRES</label>
            <h4 class="title mb-3">Torta de manzana y canela, asi recibimos la mejor época del año</h4>
            <p class="cite">ESTAFANIA | 2 MINT</p>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="row h-100 pb-5">
          <div class="col-12 p-0 alto">
            <img :src="imageDefault" class="rounded"/>
          </div>
          <div class="col-12 p-0 bajo">
            <label class="etiqueta my-3 p-2">POSTRES</label>
            <h4 class="title mb-3">Torta de manzana y canela, asi recibimos la mejor época del año</h4>
            <p class="cite">ESTAFANIA | 2 MINT</p>
          </div>
        </div>
      </div>
    </div>
<!--doble recetas -->

<!-- mensaje positivo -->

    <div class="row mensaje-positivo margen-receta">
       <div class="col-5 p-0">
         <div class="d-flex align-items-center h-100">
            <h1 class="text-primary p-5">
              " Que tu meta hoy sea ganarle a TU MEJOR EXCUSA "
            </h1>
         </div>
       </div>
       <div class="col-7 p-0">
         <img src="../../assets/images/recetas/Part 2/frases.png" class="rounded">
       </div>
    </div>

<!-- mensaje positivo -->

<!--doble recetas -->
    <div class="row receta margen-receta mt-5">
      <div class="col-lg-5 pr-lg-5">
        <div class="row h-100 pb-5">
          <div class="col-12 p-0 alto">
            <img :src="imageDefault" class="rounded"/>
          </div>
          <div class="col-12 p-0  bajo">
            <label class="etiqueta my-3 mt-lg-0 p-2">POSTRES</label>
            <h4 class="title mb-3">Torta de manzana y canela, asi recibimos la mejor época del año</h4>
            <p class="cite">ESTAFANIA | 2 MINT</p>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="row h-100 pb-5">
          <div class="col-12 p-0 order-lg-1  alto">
            <img :src="imageDefault" class="rounded"/>
          </div>
          <div class="col-12 p-0 order-lg-0 bajo">
            <label class="etiqueta my-3 p-2">POSTRES</label>
            <h4 class="title mb-3">Torta de manzana y canela, asi recibimos la mejor época del año</h4>
            <p class="cite">ESTAFANIA | 2 MINT</p>
          </div>
        </div>
      </div>
    </div>
<!--doble recetas -->



  </div>
</template>
<script>
import imageDefault from "../../assets/images/recetas/Part 2/person.png";

export default {
  data() {
    return {
      imageDefault
    };
  },
  mounted() {
    $(".carousel").carousel();
  }
};
</script>

<style scoped lang="scss">

.imagen-receta {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.informacion-inicio {
  width: 26%;
  max-width: 350px;
  position: absolute;
  z-index: 200;
  bottom: -80px;
  left: 70%;
  background-color: white;
  border-radius: 1rem;
}

.informacion-imagen {
  width: 80%;
}

.receta-default {
  position: absolute;
  z-index: 200;
  top: 60%;
  left: 10%;
}

.carousel-img{
  width: 100%;
  height: 70vmin;
  object-fit: cover;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  margin-left: 2%;
  justify-content: center;
}

.carousel-indicators li,
.carousel-indicators li.active {
  width: 220px;
  height: 140px;
  background-color: #fff;
  position: relative;
  top: 100px;
  margin: 14px;
  opacity: 1;
}

.carousel-indicators img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10;
  left: 0;
}

.linea {
  color: #2b2b2b;
  margin: 170px 10%;
  margin-bottom: 70px;
  b {
    font-size: 1rem;
  }
  span {
    display: inline-block;
    width: 140px;
    margin-top: 6px;
    font-size: 0.9rem;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    letter-spacing: 5px;
    text-transform: uppercase;
  }
  hr {
    width: 80%;
  }
}

.fresa {
  position: relative;
  top: 0;
  left: 0;
  img {
    position: absolute;
    top: 80px;
    width: 200px;
    height: auto;
  }
}

.margen-receta{
  margin-left: 10%;
  margin-right: 10%;
}

.receta {
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .alto {
    height: 65%;
    min-height: 290px;
    max-height: 320px;
  }
  .bajo {
    height: 35%;
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
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0 auto;
  }
}

.mensaje-positivo{
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 992px) {
  .linea {
    margin: 0 10%;
    margin-bottom: 100px;
    b {
      font-size: 1rem;
    }
    span {
      display: inline-block;
      width: 140px;
      margin-top: 6px;
      font-size: 0.9rem;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      letter-spacing: 5px;
      text-transform: uppercase;
    }
    hr {
      width: 80%;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1400px) {
  .carousel-indicators {
    justify-content: start;
  }
  .informacion-inicio {
    font-size: 0.7rem;
    left: 72%;
    h1 {
      font-size: 1.7rem;
    }
    > img {
      width: 70%;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (max-width: 768px) {
  .receta-default {
    position: absolute;
    z-index: 200;
    margin: 0;
    width: 80%;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    h3 {
      font-size: 1.2rem;
    }
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .fresa {
    position: relative;
    top: 0;
    left: 0;
    img {
      position: absolute;
      top: 80px;
      width: auto;
      height: auto;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1400px) {
  .carousel-indicators {
    justify-content: start;
  }
  .informacion-inicio {
    > img {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>