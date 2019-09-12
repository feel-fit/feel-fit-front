<template>
    <div>
        <div class="header-informacion p-5">
            <h1 class="h1 font-italic font-weight-bold text-left text-primary titulo-carrito">Tu carrito</h1>
            <span class="texto-resumen ">Resumen del pedido</span>
        </div>
        <div>
            <ul class="list-group">
                <li class="list-group-item lista-productos rounded-5 rounded-lg mt-3" v-for="item in listaCarrito">
                    <img src="../../assets/images/fresa_home.png" width="100px" height="100px"/>
                    <strong class="text-primary ml-2 ">Titulo</strong>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tuCarrito",
        data:function(){
            return {
              listaCarrito:[4,6]
            };
        },
        created: function (){

        }
    }
</script>

<style scoped>

    .header-informacion{
        background-color: white;
    }

    .titulo-carrito{
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .texto-resumen{
        padding-top: 0;
        margin-top: 0;
    }

    .lista-productos{

    }

    .caja{
        background-color: #ffc215;
        border: red solid;
    }
</style>
