<template>
    <div class="tab-pane fade show active" id="home" role="tabpanel">

            <div class="container-fluid p-0 position-relative">
                <!-- slider -->
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                    <img src="../../assets/images/recetas/18.png" >
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                    <img src="../../assets/images/recetas/18.png" >
                                </li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                    <img src="../../assets/images/recetas/18.png" >
                                </li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src="../../assets/images/recetas/18.png" class="d-block w-100" >
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/recetas/18.png" class="d-block w-100" >
                                </div>
                                <div class="carousel-item">
                                <img src="../../assets/images/recetas/18.png" class="d-block w-100" >
                                </div>
                            </div>
                    </div>
                </div>
                <!-- slider -->

                <div class="informacion-inicio shadow p-5  d-none d-lg-block">
                    <img src="../../assets/images/recetas/pp.png" class="img-fluid"/>
                    <h1 class="text-dark mt-4">Estefania C.</h1>
                    <h6 class="text-muted">ADMINISTRADORA FEEL FIT</h6>
                    <p class="text-dark my-3">
                        Hola, me llamo Estefania. Soy apasionada de la cocina. La pasión por la gastronomía despertó en mí y ya no hubo
                        marcha atrás
                    </p>
                    <img src="../../assets/images/recetas/firma.png" class="img-fluid"/>
                    <div>
                        <img src="../../assets/images/recetas/iconos_redes/group_12.svg" class="img-fluid"/>
                        <img src="../../assets/images/recetas/iconos_redes/group_13.svg" class="img-fluid mx-2"/>
                        <img src="../../assets/images/recetas/iconos_redes/group_18.svg" class="img-fluid"/>
                    </div>
                </div>

                <div class="receta-default d-flex align-items-center">
                    <img src="../../assets/images/recetas/pp.png" class="img-fluid imagen-receta mr-5">
                    <div>
                        <button class="btn bg-white mb-3">Postres</button>
                        <h3 class="text-white">Postre con OREO y SIN HORNO</h3>
                        <h3 class="text-white">(Para los  verdaderos amantes de las oreaos)</h3>
                        <h6 class="text-white">ESTEFANIA C. | PUBLICADO HACE 8 MINT</h6>
                    </div>
                </div>
            </div>

            <div>
                <div class="d-flex m-5 p-5">
                    <span>Más ideas de Feel</span>
                    <hr>
                    <span>VER TODAS</span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
   mounted() {
    $(".carousel").carousel();
  }
}
</script>

<style scoped lang="scss">

.imagen-receta{
    width: 100px;
    height: 100px;
}

.informacion-inicio{
    width:26%;
    max-width: 350px;
    position:absolute;
    z-index: 200;
    bottom: -80px;
    left:70%;
    background-color: white;
    border-radius: 1rem;
}

.informacion-imagen{
    width: 80%;
}

.receta-default{
    position: absolute;
    z-index: 200;
    top: 60%;
    left: 10%;
    color: white;
}

.carousel-indicators{
    list-style: none;
    margin: 0;
    margin-left: 2%;
    justify-content: center;
}

.carousel-indicators li, .carousel-indicators li.active{
    width: 220px;
    height: 140px;
    background-color: #fff;
    position: relative;
    top:100px;
    margin: 14px;
    opacity: 1;          
}

.carousel-indicators img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10;
    left: 0;            
}


// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 

 }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { 

 }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991.98px) { 
    
 }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1400px) { 
    .carousel-indicators{
        justify-content: start;
    }
    .informacion-inicio{
        font-size: 0.7rem;
        left:72%;
        h1{
            font-size: 1.7rem;
        }
        >img{
            width: 70%;
        }
    }
 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1400px) { 
    .carousel-indicators{
        justify-content: start;
    }
    .informacion-inicio{
        >img{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        h1{
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
 }


</style>