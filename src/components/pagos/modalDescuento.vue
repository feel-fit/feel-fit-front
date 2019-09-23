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
              <img src="./../../assets/images/pagos/descuento.png" class="img-fluid">
          </div>
          <div class="modal-footer d-flex flex-column border-0">
              <span class="text-muted font-italic small">Ha sido activado</span>
              <h3 class="text-primary font-weight-bold font-italic">Tu Descuento</h3>
              <p class="text-muted small">
                Has sido seleccionado para disfrutar de nuestro descuento
              </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'descuento'
};
</script>
<style scoped>
  .caja{
    border: 2px red solid;
  }
</style>