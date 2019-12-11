<template>
  <div class="tab-pane fade" id="interes" role="tabpanel">
    <div class="container-fluid py-5 my-3 px-0  ">
      <div class="row header-interes align-items-center ">
        <div class="col-12">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./../plugins/api";
export default {
  components: { },
  data() {
    return {
      articulos: []
    };
  },
  beforeMount() {
    api
      .Blog()
      .getAll()
      .then(response => {
        this.articulos = response.data.data;
      });
  }
};
</script>

<style scoped lang="scss">

</style>