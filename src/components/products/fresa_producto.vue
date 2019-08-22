<template>
  <!--Slide de productos 2-->
    <section class="position-relative">
        <div class="fresa_product position-absolute">
            <img :src="fresa_producto" class="img-fluid">
        </div>
    </section>
</template>

<script>
import fresa_producto from './../../assets/images/product/fresa.png'

    export default {
        name: "hoja",
        data() {
            return {
                fresa_producto:fresa_producto
                
            }
        },
    }
</script>

<style scoped>
.fresa_product{
    bottom: -12rem;
    z-index: 10;
    width: 10rem;
    left: -1rem;
}
@media(min-width: 768px) {
    .fresa_product {
        bottom: 3rem;
        z-index: 10;
        width: 10rem;
        left: -1rem;
    }
}
  
</style>