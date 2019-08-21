<template>
    <div> 
        <div class="container-fluid">     
            <div class="row">
                
                <div class="col-12 col-md-6">
                    <div class="h-100 align-items-center">
                        <div class="card bg-white d-flex position-relative border-0">
                            <!-- <img src="../../assets/images/product/producto_avena.png" alt="Papas" class="card-img-top"> -->
                            <img src="../../assets/images/informacion/image.png" alt="Papas" class="card-img-top">
                            <div>
                                <a href="#" id="menu-toggle-car">
                                    <div class="car bg-white p-3 position-absolute shadow d-none d-md-block">
                                        <img src="../../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;">
                                    </div>
                                </a>
                                <div class="corazon bg-white p-3 position-absolute shadow d-none d-md-block">
                                    <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-5 position-relative">
                    <!-- <div class="tabla position-absolute btn-warning btn-lg d-none d-md-block"><small> Tabla Nutricional</small></div> -->
                    <div class="row h-100">
                        <div class="col-12">
                            <div class="row d-md-none mt-4 mb-5 d-flex justify-content-between">
                                <div class="col-6">
                                    <span class="btn bg-white border shadow px-5" style="border-radius:1rem; color: #00D0D2;"><img src="../../assets/images/fav.svg">&nbsp;&nbsp;Agregar</span>
                                </div>
                                <div class="col-6 text-center">
                                    <span class="btn bg-info border shadow px-5" style="border-radius:1rem; color:rgb(255, 255, 255);"><img src="../../assets/images/informacion/cartBlanco.svg" style="width: 25px;">&nbsp;&nbsp;Agregar</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 align-self-center">
                            <div class="position-relative">
                                <!-- <div class="tabla position-absolute d-md-none btn-warning btn-lg "><small> Tabla Nutricional</small></div> -->
                                <h1 class="font-italic font-weight-bold" style="color: #00D0D2;">Pancake & Waffle <br>- Avena mix</h1>
                                <p class="mb-5 d-md-none" style="color: #CCCCCD;">Lok</p>
                                <div class="row">
                                    <div class="col-6 d-md-none">
                                        <span class="btn btn-warning border shadow px-4 font-italic font-weight-bold" style="border-radius:1rem; color:rgb(255, 255, 255);">Tabla Nutricional</span>
                                    </div>
                                    <div class="col-6">
                                        <p class="font-weight-bold text-dark text-right text-md-left mr-5 mr-md-0">$15.000</p>
                                    </div>
                                </div>
                                
                                <p class="mt-5" style="color: #CCCCCD;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magnam nam vitae odit nihil obcaecati, fuga ad, distinctio quidem maiores vel enim consequuntur dolorum aperiam officiis. Consectetur minus maxime inventore.</p>
                            </div>
                        </div>
                        <div class="col-12 align-self-end">
                            <div class="row">
                                <div class="col-12 col-lg-3">
                                    <h4 class="text-lg-center font-italic font-weight-bold" style="color: #00D0D2;">Categoria</h4>
                                    <p style="color: #CCCCCD;">Mercado Sano</p>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="ingre mb-3 ml-lg-2 pl-lg-4 pr-4 pt-3 pt-lg-0">
                                        <hr class="linea d-lg-none mt-0" style="border-color:#979797;">
                                        <h4 class="text-lg-center font-italic font-weight-bold" style="color: #00D0D2;">Ingredientes</h4>
                                        <p style="color: #CCCCCD;">Avena, chocolate</p>
                                        <hr class="linea d-lg-none mt-0" style="border-color:#979797;">
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3">
                                    <h4 class="text-lg-center font-italic font-weight-bold" style="color: #00D0D2;">Etiquetas</h4>
                                    <p style="color: #CCCCCD;">Chocolate natural, proteina, nueces fitness</p>
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
export default {
    
}
</script>
<style scoped>
.linea{
        margin-left: 0px;
        width: 9rem;
    }
.tabla{
    z-index: 100;
    top: 42%;
    border-radius: 20px;
    color:white;

}
.car{
    left: 10%;
    bottom: 6%;
    border-radius: 2rem;
}

.corazon{
    left: 77%;
    bottom: 6%;
    border-radius: 2rem;
}

@media(min-width: 576px) {
    .car{
    bottom: 9%;
    }

    .corazon{
    left: 77%;
    bottom: 9%;
    border-radius: 50%;
    }
}
@media(min-width: 768px) {
    .car, .corazon{
    bottom: 7%;
    }
    .columna{
        margin-top:45%;
    }
    .tabla{
    left: 20%;
    top: 2%;
    

}
}
@media(min-width: 992px) {
    .car, .corazon{
    bottom: 7%;
    }
    .ingre{
        border-left:solid 1px #979797;
        border-right:solid 1px #979797;
        border-top:none;
        border-bottom:none;
    }
    
}

</style>

