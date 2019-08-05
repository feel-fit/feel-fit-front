<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col order-12">

        <a href="#"><img :src="whatsapp" alt="Whatsapp" class="float-right mb-4"></a>
        </div>
       
    </div>
  </div>
</template>

<script>
import whatsapp from './../../assets/images/whatsapp.svg'

    export default {
        name: "whatsapp",
        data() {
            return {
                whatsapp: whatsapp
                
            }
        },
    }
    
   
</script>


