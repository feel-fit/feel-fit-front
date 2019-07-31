<template>
    <div class="container-fluid" id="app">
        <heade/>
        <router-view/>
        <foot/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

</style>

<script>

  import heade  from '@/components/header.vue'

  import foot from '@/components/footer.vue'

  export default {
    name: 'app',
    components: {
      heade, foot
    }
  }
</script>








