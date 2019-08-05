<template>
  <!--Slide de productos 2-->
    <section class="position-relative">
        <img :src="hoja" class="hoja_slide position-absolute d-none d-md-inline-block">
    </section>
</template>

<script>
import hoja from './../../assets/images/hoja2.png'

    export default {
        name: "hoja",
        data() {
            return {
                hoja:hoja
                
            }
        },
    }
</script>

<style scoped>
  .hoja_slide {
    top: -10%;
    z-index: 1000;
    width: 7%;
}
</style>

