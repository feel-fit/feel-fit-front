<template>
    <div>
        <div class="container">
            <div class="mb-5 p-5 shadow cuerpo_border">
                <div class="row mb-5">
                    <div class="col">
                        <span class="h1 font-italic font-weight-bold text-center pb-1 text-primary">Tu lista de deseos</span>
                        <p class="font-weight-bold text-dark">Tiene 4 productos</p>
                        <!-- <hr> -->
                    </div>
                </div>
                
                <div class="row mb-4 p-1 d-none d-md-flex">
                    <div class="col-1 text-center">
                        <div class="form-check">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" disabled>
                        </div>
                    </div>
                    <div class="col-2"><span class="text-left">Producto</span></div>
                    <div class="col-4 text-center"><span>Nombre</span></div>
                    <div class="col-2"><span>Cantidad</span></div>
                    <div class="col-2"><span>Precio</span></div>
                    <div class="col-1"></div>
                </div>
                <!-- Fila de deseos -->
                <div class="mb-4 box rounded p-1">
                    <div class="row align-items-center">
                        <div class="col-1 text-center">
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            </div>
                        </div>
                        <div class="col-2 col-lg-1 col-xl-1">
                            <div class="card border-0">
                	            <img src="../../assets/images/carrito/pancake.png" class="img-fluid card-img-top rounded-left">
                	        </div>
                        </div>
                        <div class="col-3 col-lg-5">
                            <span class="h6 font-italic font-weight-bold text-primary">Pancake y Waffle <span class="d-none d-md-block">- Avena Mix</span></span><br>
                            <span class="h6 d-none d-md-block">Chocolate 300 Gr - Viva Natur</span>
                        </div>
                        <div class="col-1 col-sm-2">
                            <div class="row">
                                <div class="border col-12 col-md-4 p-0 rounded text-center"><span></span>-</div>
                                <div class="col-12 col-md-4 border text-center p-0"><span></span>1</div>
                                <div class="col-12 col-md-4 border rounded text-center p-0"><span></span>+</div>
                            </div>
                            <!-- <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">-</button>
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">+</button>
                            </div> -->
                        </div>
                        <div class="col-3 col-md-2 text-right text-md-left">
                            <span>$15.000</span>
                        </div>
                        <div class="col-md-1 d-none d-md-block">
                            <a href="#"><img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
                <!-- Fila de deseos -->
                <div class="mb-4 box rounded p-1">
                    <div class="row align-items-center">
                        <div class="col-1 text-center">
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            </div>
                        </div>
                        <div class="col-2 col-lg-1 col-xl-1">
                            <div class="card border-0">
                	            <img src="../../assets/images/carrito/pancake.png" class="img-fluid card-img-top rounded-left">
                	        </div>
                        </div>
                        <div class="col-3 col-lg-5 col-xl-5">
                            <span class="h6 font-italic font-weight-bold text-primary">Pancake y Waffle <span class="d-none d-md-block">- Avena Mix</span></span><br>
                            <span class="h6 d-none d-md-block">Chocolate 300 Gr - Viva Natur</span>
                        </div>
                        <div class="col-1 col-sm-2">
                            <div class="row">
                                <div class="border col-12 col-md-4 p-0 rounded text-center"><span></span>-</div>
                                <div class="col-12 col-md-4 border text-center p-0"><span></span>1</div>
                                <div class="col-12 col-md-4 border rounded text-center p-0"><span></span>+</div>
                            </div>
                            <!-- <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">-</button>
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">+</button>
                            </div> -->
                        </div>
                        <div class="col-3 col-md-2 text-right text-md-left">
                            <span>$15.000</span>
                        </div>
                        <div class="col-md-1 d-none d-md-block">
                            <a href="#"><img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
                <!-- Fila de deseos -->
                <div class="mb-4 box rounded p-1">
                    <div class="row align-items-center">
                        <div class="col-1 text-center">
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            </div>
                        </div>
                        <div class="col-2 col-lg-1 col-xl-1">
                            <div class="card border-0">
                	            <img src="../../assets/images/carrito/pancake.png" class="img-fluid card-img-top rounded-left">
                	        </div>
                        </div>
                        <div class="col-3 col-lg-5 col-xl-5">
                            <span class="h6 font-italic font-weight-bold text-primary">Pancake y Waffle <span class="d-none d-md-block">- Avena Mix</span></span><br>
                            <span class="h6 d-none d-md-block">Chocolate 300 Gr - Viva Natur</span>
                        </div>
                        <div class="col-1 col-sm-2">
                            <div class="row">
                                <div class="border col-12 col-md-4 p-0 rounded text-center"><span></span>-</div>
                                <div class="col-12 col-md-4 border text-center p-0"><span></span>1</div>
                                <div class="col-12 col-md-4 border rounded text-center p-0"><span></span>+</div>
                            </div>
                            <!-- <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">-</button>
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">+</button>
                            </div> -->
                        </div>
                        <div class="col-3 col-md-2 text-right text-md-left">
                            <span>$15.000</span>
                        </div>
                        <div class="col-md-1 d-none d-md-block">
                            <a href="#"><img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
                <!-- Fila de deseos -->
                <div class="mb-4 box rounded p-1">
                    <div class="row align-items-center">
                        <div class="col-1 text-center">
                            <div class="form-check">
                                <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">
                            </div>
                        </div>
                        <div class="col-2 col-lg-1 col-xl-1">
                            <div class="card border-0">
                	            <img src="../../assets/images/carrito/pancake.png" class="img-fluid card-img-top rounded-left">
                	        </div>
                        </div>
                        <div class="col-3 col-lg-5 col-xl-5">
                            <span class="h6 font-italic font-weight-bold text-primary">Pancake y Waffle <span class="d-none d-md-block">- Avena Mix</span></span><br>
                            <span class="h6 d-none d-md-block">Chocolate 300 Gr - Viva Natur</span>
                        </div>
                        <div class="col-1 col-sm-2">
                            <div class="row">
                                <div class="border col-12 col-md-4 p-0 rounded text-center"><span></span>-</div>
                                <div class="col-12 col-md-4 border text-center p-0"><span></span>1</div>
                                <div class="col-12 col-md-4 border rounded text-center p-0"><span></span>+</div>
                            </div>
                            <!-- <div class="btn-group mr-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary">-</button>
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">+</button>
                            </div> -->
                        </div>
                        <div class="col-3 col-md-2 text-right text-md-left">
                            <span>$15.000</span>
                        </div>
                        <div class="col-md-1 d-none d-md-block">
                            <a href="#"><img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid"></a>
                        </div>
                    </div>
                </div>
                
                <div class="row mt-5">
                    <div class="col-12 text-center text-md-right">
                        <span class="btn btn-lg btn-primary text-white font-italic h6">Agregar al carrito</span>
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
<style scoped lang="scss">

.cuerpo_border{
    border-radius:1rem;
}
.box{
    transition: box-shadow .3s;
    box-shadow: 0 0 3px rgb(30, 214, 217);
}
.box:hover {
  box-shadow: 0 0 11px rgb(30, 214, 217); 
}

</style>