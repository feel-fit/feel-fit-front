<template>
    <div class="container" id="informacion-cliente">
        <div class="row">
                <span  class="h3 font-italic text-primary font-weight-bold titulo">
                    M&eacute;todo de pago
                </span>
        </div>
        <div class="row mb-2">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-uppercase">
                        Direccion de envio
                    </div>
                    <div class="col-12 ml-3">
                        <span class="text-dark font-weight-bold h4">Calle 10a Norte</span>
                    </div>
                </div>

                <div class="row pt-4">
                    <div class="col-sm-12">
                        <div class="row my-li-own mb-3">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadio1"></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h4 class="text-primary">Domicilio en Armenia</h4>
                                <p>
                                    Debe ser pagado contraentrega en efectivo al domicilio.
                                    Revise las politicas de envio.
                                </p>
                            </div>
                            <div class="col-sm-3 div-va justify-content-lg-end">
                                <p class="mr-5 price font-weight-bold">
                                    $ 3000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row my-li-own mb-3">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadio1"></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h4 class="text-primary">Domicilio en Armenia</h4>
                                <p>
                                    Debe ser pagado contraentrega en efectivo al domicilio.
                                    Revise las politicas de envio.
                                </p>
                            </div>
                            <div class="col-sm-3 div-va justify-content-lg-end">
                                <p class="mr-5 price font-weight-bold">
                                    $ 3000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row my-li-own mb-3">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="customRadio1"></label>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <h4 class="text-primary">Domicilio en Armenia</h4>
                                <p>
                                    Debe ser pagado contraentrega en efectivo al domicilio.
                                    Revise las politicas de envio.
                                </p>
                            </div>
                            <div class="col-sm-3 div-va justify-content-lg-end">
                                <p class="mr-5 price font-weight-bold ">
                                    $ 3000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row p-5">
                    <div class="col-12">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="facturaCheck">
                            <label class="custom-control-label" for="facturaCheck">Necesita Factura</label>    
                        </div>
                    </div>
                    <div class="col-12">
                         <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="condiciones">
                            <label class="custom-control-label" for="condiciones">
                                He le&iacute;do  estoy de acuerdo con los <span class="font-weight-bold text-primary">t&eacute;rminos y cond&iacute;ciones </span> y <span class="font-weight-bold text-primary">politicas de privaidad.</span>
                            </label>    
                        </div>
                    </div>
                </div>

                <div class="row p-5">
                    <div class="col-sm-6  align-self-center ">
                        <span class="text-dark "><font-awesome-icon icon="arrow-left" size="xs"/> Regresa a comprar</span>
                    </div>
                    <div class="col-sm-6  text-right">
                        <button type="submit" class="btn btn-primary text-white  btn-lg w-md-100 ">CONTINUA A ENVIO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "seleccionarPago"
    }
</script>

<style scoped>
    .caja{
        border:solid red;
    }

    label{
        font-size: 0.7em;
    }

    .titulo{
        margin-top: 5rem;
        margin-bottom: 2.5rem ;
    }

    .my-li-own {
        background-color: white;
        border-radius: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }

    .my-li-own div {
        color: #20d6d9;
    }

    .div-va {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .br-left {
        border-top-left-radius: 1.5rem !important;
        border-bottom-left-radius: 1.5rem !important;
    }

    .br-right {
        border-top-right-radius: 20rem !important;
        border-bottom-right-radius: 20rem !important;
    }

    .price {
        color: black;
    }

    .list-car {
        height: 30rem;
        overflow-y: scroll;
    }
</style>
