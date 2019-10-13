<template>
   <div>
     <volver></volver>
     <section id="boxes-404">
       <div class="container">
         <div class="img-wrapper">
           <img src="../assets/images/cajas-404.png" alt="Caja No encontrada">
         </div>
       </div>
     </section>
   </div>
</template>

<script>
import volver from '../components/products/volver.vue'
export default {
  name: 'Not-found-box',
  components: { volver },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  #boxes-404{
    padding: 80px 0;
    .img-wrapper{
      img{
        max-width: 100%;
      }
    }
  }
</style>
