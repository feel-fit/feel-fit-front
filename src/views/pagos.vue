<template>
    <div class="container-fluid pagos">
        <div class="row" >
            <div class="col-8">
                <informacion-cliente></informacion-cliente>
            </div>
            <div class="col-4">
                <tu-carrito/>
            </div>
        </div>
    </div>
</template>
<script>
    import InformacionCliente from "../components/pagos/informacionCliente";
    import TuCarrito from "../components/pagos/tuCarrito";
    export default {
        name: "pago",
        components: {TuCarrito, InformacionCliente}
    }
</script>

<style scoped>
  .pagos{
      margin-top: 5%;
      background-color: #F6F6F6;
  }
</style>
