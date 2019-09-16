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
                        <div class="row my-li-own mb-3 p-4 ">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="domicilio-armenia" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="domicilio-armenia"></label>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <h4 class="text-primary">Domicilio en Armenia</h4>
                                <p class="text-muted">
                                    Debe ser pagado contraentrega en efectivo al domiciliario.
                                    Revise las politicas de envio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row my-li-own mb-3 p-4">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="pago-pse" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="pago-pse"></label>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <h4 class="text-primary">Pago con PSE</h4>
                                <p class="text-muted">
                                    Las transacciones son seguras y estan cifradas. Luego de hacer click en "finalizar pedido",
                                  ser&aacute;s redirigido a Davivienda para completar tu compra de forma segura.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="row my-li-own mb-3 p-4">
                            <div class="col-sm-3 px-0 align-self-center">
                                <div class="custom-control custom-radio  text-center">
                                    <input type="radio" id="pago-credito" name="customRadio" class="custom-control-input">
                                    <label class="custom-control-label" for="pago-credito"></label>
                                </div>
                            </div>
                            <div class="col-sm-9">
                                <h4 class="text-primary">Paga con tarjeta de cr&eacute;dito</h4>
                                <p class="text-muted">
                                    Ser&aacute;s redirigido a Davivienda para completar tu compra de forma segur&aacute;.
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
                        <a href="#" @click="back" class="text-dark text-decoration-none"><font-awesome-icon icon="arrow-left" size="xs"/> Regresa a comprar</a>
                    </div>
                    <div class="col-sm-6  text-right">
                        <button @click="next" type="submit" class="btn btn-primary text-white  btn-lg w-md-100 text-uppercase">Realizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "seleccionarPago",
        methods:{
            next(){

            },
            back(){
                $('#envios-tab').tab('show');
            }
        }
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
