<template>
  <div class="card bg-white d-flex position-relative border-0">
    <img src="../../assets/images/product/yogurt_griego.jpg" alt="Papas" class="card-img-top shadow" style="border-radius: 1rem;">

    <div class="buttons mb-2 align-self-end w-100 px-3">
        <div class="row justify-content-between">
          <div class="col-auto">
            <div class="car bg-white p-2 rounded-circle  shadow">
              <img src="../../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;">
            </div>
          </div>
           <div class="col-auto">
             <div class=" corazon bg-white p-2 rounded-circle shadow">
               <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
             </div>
          </div>
        </div>
    </div>
    <div class="mt-4">
      <h6 class="Card-title font-italic text-capitalize text-center text-primary font-weight-bold mb-1" >Pancake & Waffle - Avena mix</h6>
      <p class="card-text text-center" style="color: #CCCCCD;">$ 15.000</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "product"
    }
</script>

<style scoped lang="scss">
.text_producto{
    left: 18%;
    right: 15%;
    top: 6%;
}
.buttons{
  bottom: 20px;
  margin-top: -4rem !important;
}

</style>
