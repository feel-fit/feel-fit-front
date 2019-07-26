<template>
  <div class="row">
    <div class="col-sm-6">
      <button class="btn btn-primary">boton</button>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import api from '../plugins/api'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  mounted () {
    api.Users().getAll()
  }
}
</script>
