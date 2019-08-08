<template>
  <div class="card bg-white d-flex position-relative border-0">
    <img src="../../assets/images/product/producto_avena.png" alt="Papas" class="card-img-top">
    <div class="text_producto position-absolute d-sm-none">
        <h6 class="mb-0 text-center">Pancake & Waffle - Avena mix</h6>
        <p class="text-center">$15.000</p>
    </div>
    <div>
        <div class="car bg-white p-2 position-absolute shadow">
            <img src="../../assets/images/cart.svg" alt="Car" class="img-fluid">
        </div>
        <div class="corazon bg-white p-2 position-absolute shadow">
            <img src="../../assets/images/fav.svg" alt="Corazon" class="img-fluid">
        </div>
    </div>
    <div class="d-none d-sm-inline-block">
      <h6 class="Card-title font-italic text-capitalize text-center">Pancake & Waffle - Avena mix</h6>
      <p class="card-text text-center">$ 15.000</p>
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
    bottom: 10%;
    border-radius: 2rem;
}

.corazon{
    left: 77%;
    bottom: 10%;
    border-radius: 50%;
}

@media(min-width: 576px) {
    .car{
    left: 10%;
    bottom: 25%;
    border-radius: 2rem;
    }

    .corazon{
    left: 77%;
    bottom: 25%;
    border-radius: 50%;
    }
}

</style>
