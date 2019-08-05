<template>
  <section>
    <div class="container-fluid position-relative my-5">
      <div class="row justify-content-around">
        <!-- <img src="../../assets/images/bg_slide1.png" class="bg_slide position-absolute">
       -->
        <div class="line-background bg-primary"></div>
        <div class="align-self-end d-none d-sm-block p-5">
          <font-awesome-icon icon="angle-left" size="lg" class="mr-3"/>
          <font-awesome-icon icon="angle-right" size="lg"/>
        </div>
        <div class="col-10 col-sm-4 col-md-3 col-xl-2">
          <product></product>
        </div>
        <div class="d-none d-sm-block col-sm-4 col-md-3 col-xl-2">
          <product></product>
        </div>
        <div class="d-none d-md-block col-md-3 col-xl-2">
          <product></product>
        </div>
        <div class="d-none d-xl-block col-xl-2">
          <product></product>
        </div>
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
