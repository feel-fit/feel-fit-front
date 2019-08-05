<template>
  <div class="container">
    <div class="row">
        <div class="col order-12">

        <a href="#"><img :src="whatsapp" alt="Whatsapp" class="img_whatsapp rounded float-right"></a>
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


