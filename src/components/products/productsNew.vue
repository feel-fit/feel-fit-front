<template>
  
    <div class="container-fluid position-relative mt-4">
      <div class="row mx-0 justify-content-around flex-row flex-wrap flex-sm-nowrap">

        <div class="col-12 col-sm align-self-end flex-nowrap flex-row order-3 order-sm-1 ">
        </div>
        <div class="container  order-1 order-sm-2">
          <div class="row">
            <div class="col">
              <product></product>
            </div>
            <div class="d-none d-sm-block col">
              <product></product>
            </div>
            <div class="d-none d-md-block col">
              <product></product>
            </div>
            <div class="d-none d-xl-block col">
              <product></product>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm order-2 p-4 order-sm-3"></div>
      </div>
    </div>
  
</template>

<script>
    import product from "./product";

    export default {
        name: "productsNew",
        components: {
            product
        }
    }
</script>

<style scoped>
  
</style>
