<template>
   <div>
     <volver></volver>
     <section id="product-404">
       <div class="container">
         <div class="img-wrapper">
           <img src="../assets/images/productos-404.png" alt="Producto No encontrado">
         </div>
       </div>
     </section>
   </div>
</template>

<script>
    import volver from '../components/products/volver.vue'
    export default {
        name: 'Not-found-product',
        components:{volver},
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss">
  #product-404{
    padding: 80px 0;
    .img-wrapper{
      img{
        max-width: 100%;
      }
    }
  }
</style>
