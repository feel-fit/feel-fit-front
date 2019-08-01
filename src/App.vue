<template>
  <div class="container-fluid p-0 d-flex toggled" id="app">
    <slider/>
    <div id="page-content-wrapper">
      <cabecera/>
      <router-view/>
      <foot/>
    </div>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Varela Round', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>

<script>

    import cabecera from '@/components/header.vue'
    import slider from '@/components/slider.vue'

    import foot from '@/components/footer.vue'

    export default {
        name: 'app',
        components: {
            cabecera, foot, slider
        }
    }
</script>








