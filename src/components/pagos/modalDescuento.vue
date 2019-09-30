<template>
  <section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalDescuento"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalDescuentoTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content btn-lg">
          <div class="modal-header border-0">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-center">
            <img src="./../../assets/images/pagos/descuentos/des.png" class="img-fluid" />
            <h1 class="descuento">{{discount.value}}%</h1>
          </div>
          <div class="modal-footer d-flex flex-column border-0">
            <span class="text-muted font-italic small">Ha sido activado</span>
            <h3 class="text-primary font-weight-bold font-italic">Tu Descuento</h3>
            <p class="text-muted small">Has sido seleccionado para disfrutar de nuestro descuento</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "descuento",
  props:{
    discount:{require:true}
  },
  data(){
  
  }
};
</script>
<style scoped>

.descuento {
  position: absolute;
  bottom: 21%;
  right:44%;
  font-size: 400%;
  transform: rotate(-3deg);
  color: white;
}

@media screen and (max-width: 992px) {
  .descuento {
    bottom: 22%;
    right: 43%;
    font-size: 45px;
    transform: rotate(-3deg);
  }
}

@media screen and (max-width: 576px) {
  .descuento {
    bottom: 22%;
    right: 42%;
    font-size: 9vw;
    transform: rotate(-3deg);
  }
}

</style>
