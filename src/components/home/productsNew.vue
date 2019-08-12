<template>
  <section>
    <div class="container-fluid position-relative my-5">
      <div class="row line-background bg-primary"></div>
      <div class="row justify-content-around flex-row flex-wrap flex-sm-nowrap">

        <div class="col-12 col-sm align-self-end flex-nowrap flex-row order-3 order-sm-1 ">
         <div class="d-flex justify-content-center">
           <font-awesome-icon icon="angle-left" size="lg" class="mr-3"/>
           <font-awesome-icon icon="angle-right" size="lg"/>
         </div>
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
  </section>
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
  .line-background {
    position: absolute;
    width: 100%;
    height: 70px;
    top: 45%;
  }
</style>
