<template>
  <div class="row mensaje-positivo" v-if="message">
    <div class="col-md-7 order-md-1 p-0">
      <img :src="message.image" class="rounded img"/>
    </div>
    <div class="col-md-5 order-md-0 p-0">
      <div class="d-flex align-items-center h-100">
        <h1 class="text-primary p-5">" {{message.message}} "</h1>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../plugins/api'
export default {
  data(){
    return {
      message:null
    }
  },
  mounted(){
    api.PositiveMessage().getLatest().then(response=>{
      this.message = response.data.data;
    });
  }
};
</script>

<style scoped lang="scss">
.mensaje-positivo {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
</style>