<template>
  <div class="card bg-white d-flex position-relative border-0">
    <img src="../../assets/images/product/yogurt_griego.jpg" alt="Papas" class="card-img-top shadow" style="border-radius: 1rem;">
    <div class="text_producto position-absolute d-sm-none">
        <h6 class="mb-0 text-center font-weight-bold mb-1" style="color:#00D0D2;">Pancake & Waffle - Avena mix</h6>
        <p class="text-center" style="color: #CCCCCD;">$15.000</p>
    </div>
    <div>
        <div class="car bg-white p-2 position-absolute shadow">
            <img src="../../assets/images/product/botonCar.svg" alt="Car" style="width: 25px;">
        </div>
        <div class="corazon bg-white p-2 position-absolute shadow">
            <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
        </div>
    </div>
    <div class="d-none d-sm-inline-block mt-sm-4">
      <h6 class="Card-title font-italic text-capitalize text-center font-weight-bold mb-1" style="color:#00D0D2;">Pancake & Waffle - Avena mix</h6>
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
.car{
    left: 10%;
    bottom: 6%;
    border-radius: 2rem;
}

.corazon{
    left: 77%;
    bottom: 6%;
    border-radius: 2rem;
}

@media(min-width: 576px) {
    .car{
    bottom: 25%;
    }

    .corazon{
    left: 74%;
    bottom: 25%;
    border-radius: 50%;
    }
}
@media(min-width: 768px) {
    .car, .corazon{
    bottom: 30%;
    }
}
@media(min-width: 992px) {
    .car, .corazon{
    bottom: 22%;
    }
}

</style>
