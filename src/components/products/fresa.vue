<template>
  <!--Slide de productos 2-->
    <section class="position-relative">
        <div class="fresa_product position-absolute d-none d-md-block">
            <img :src="fresa" class="img-fluid">
        </div>
    </section>
</template>

<script>
import fresa from './../../assets/images/product/fresa.png'

    export default {
        name: "hoja",
        data() {
            return {
                fresa:fresa
                
            }
        },
    }
</script>

<style scoped>
.fresa_product{
    bottom: 3rem;
    z-index: 10;
    width: 10rem;
    left: -1rem;
}
  
</style>