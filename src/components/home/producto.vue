<template>
  <section>
    <div class="container">
      <div class="producto row justify-content-between mx-auto shadow pb-3">
        <div class="img_productos col-6 col-md-4">
          <img :src="producto1" alt="Papas" class="w-100 mx-auto d-block" style="margin-top: -10%;">
        </div>
        <div class="text_productos col-6 col-md-4">
          <h2 class="font-weight-bold font-italic text-info mt-md-5">Nuestro productos nuevos</h2>
          <hr class="hr_producto">
          <p class="font-italic"><a href="#">Entra y sorprendente</a></p>
          <hr class="hr_producto">
        </div>
        <div class="align-self-center col-md-3 d-md-block d-none">
          <button type="button" class="boton btn btn-info btn-lg">
            <font-awesome-icon icon="arrow-right" size="xs"/>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import producto1 from './../../assets/images/producto1.png'

    export default {
        name: "producto",
        data() {
            return {
                producto1: producto1
    
            }
        },
    }
</script>

<style scoped>
  .btn-info {
    color: #ffffff;
  }
  .boton {
    padding: 0rem 19%;
  }
  .producto{
    border-radius: 1.25rem;
  }
  .hr_producto{
    margin-top: 0%;
    margin-bottom: 2%;
  }
  .text_productos p{
    color: #B2B2B2;
  }
</style>
