<template>
    <div>
        <volver></volver>
        <section id="pagos">
            <div class="container-fluid">
                <div class="row" >
                    <div class="col-8  bg-white">
                        <div class="row">
                            <div class="container mt-5 mb-2">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <router-link to="/pagos" class="nav-link h6 text-primary" >01 INFORMACI&Oacute;N DEL CLIENTE</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/pagos/datos" class="nav-link h6 text-primary">02 DATOS DE ENVIO</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/pagos/forma-pago" class="nav-link h6 text-primary">03 SELECCI&Oacute;N DEL PAGO</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <router-view></router-view>
                        </div>
                    </div>
                    <div class="col-4">
                        <tu-carrito/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import InformacionCliente from "../components/pagos/informacionCliente";
    import TuCarrito from "../components/pagos/tuCarrito";
    import volver from '../components/products/volver.vue';

    export default {
        name: "pago",
        components: {TuCarrito, InformacionCliente,volver}
    }
</script>

<style scoped>

    #pagos{
        background-color: #F6F6F6;
    }

</style>
