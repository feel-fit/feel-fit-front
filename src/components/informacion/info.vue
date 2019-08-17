<template>
    <div>
        <div class="container-fluid">
            
                <div class="row">
                    <div class="col-12 col-md-6 border">
                        <div class="h-100 border align-items-center">
                            <div class="card bg-white d-flex position-relative border-0">
                                <!-- <img src="../../assets/images/product/producto_avena.png" alt="Papas" class="card-img-top"> -->
                                <img src="../../assets/images/informacion/image.png" alt="Papas" class="card-img-top">
                                <div>
                                    <div class="car bg-white p-2 position-absolute shadow">
                                        <img src="../../assets/images/cart.svg" alt="Car" class="img-fluid">
                                    </div>
                                    <div class="corazon bg-white p-2 position-absolute shadow">
                                        <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="mt-5">
                            <h1>Pancake & Waffle <br>- Avena mix</h1>
                            <p class="font-weight-bold text-dark">$15.000</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias magnam nam vitae odit nihil obcaecati, fuga ad, distinctio quidem maiores vel enim consequuntur dolorum aperiam officiis. Consectetur minus maxime inventore.</p>
                        
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-3">
                                <h4>Categoria</h4>
                            </div>
                            <div class="col-12 col-md-3">
                                <h4>Ingredientes</h4>
                            </div>
                            <div class="col-12 col-md-3">
                                <h4>Etiquetas</h4>
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
    bottom: 25%;
    }

    .corazon{
    left: 74%;
    bottom: 25%;
    border-radius: 50%;
    }
}
@media(min-width: 768px) {
    .car, .corazon{
    bottom: 30%;
    }
}
@media(min-width: 992px) {
    .car, .corazon{
    bottom: 22%;
    }
}
</style>

