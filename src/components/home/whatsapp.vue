<template>
  <div class="whatsapp">
    <div class="row">
        <div class="col order-12">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=573113745588&text=Hola%20deseo%20saber%20más!"><img :src="whatsapp" alt="Whatsapp" class="float-right mb-4"></a>
        </div>

    </div>
  </div>
</template>

<script>
import whatsapp from './../../assets/images/whatsapp.svg'

export default {
  name: 'whatsapp',
  data () {
    return {
      whatsapp: whatsapp

    }
  }
}

</script>
<style scoped>
  .whatsapp{
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 200;
  }
</style>
