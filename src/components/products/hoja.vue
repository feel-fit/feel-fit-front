<template>
  <section class="position-relative">
        <div class="hoja_product position-absolute mt-n5 d-none d-md-block">
            <img :src="hoja" class="img-fluid">
        </div>
  </section>
</template>

<script>
import hoja from '../../assets/images/product/hoja.png'

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
.hoja_product{
    left: 93%;
}
  
</style>
