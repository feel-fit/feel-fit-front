<template>
  <section class=" py-5 position-relative">
      <img :src="fresa" class="fresa_home d-none d-md-inline-block position-absolute">
  </section>
</template>

<script>
import fresa from './../../assets/images/fresa_home.png'

    export default {
        name: "fresa",
        data() {
            return {
                fresa:fresa

            }
        },
    }
</script>

<style scoped>
  .fresa_home {
    left: 91%;
    top: -20%;
    width: 9%;
}
</style>
