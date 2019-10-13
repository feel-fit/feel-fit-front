<template>
  <section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="terminosModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content btn-lg p-0">
          <div class="row">
            <div class="d-none d-lg-block col-lg-6 p-0">
              <img
                src="./../../assets/images/politicas/cook-cooked-cuisine-2147490.png"
                class="w-100 h-100"
              />
            </div>
            <div class="col-lg-6">
              <button type="button" class="close m-3" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

              <div class="container p-3 contenido-text overflow-auto">
                <h4 class="text-primary font-weight-bold font-italic">T&eacute;rminos y condiciones</h4>
                <div class="ml-3 mt-4 font-italic">
                  <p>
                    <span class="font-weight-bold text-uppercase">Feel fit market</span> desempeña una actividad de medios debido a su papel de
                    intermediario en la adquisici&oacute;n de los productos y/o alimentos para la promoci&oacute;n
                    de un estilo de vida sana, un f&acute;cil acceso a estos productos y/o alimentos para con posterioridad
                    ser entregados en la ubicaci&oacute;n brindada por nuestros usuarios y/o clientes, para su posterior preparaci&oacute;n
                    y/o consumo.container
                  </p>
                  <h5 class="font-weight-bold text-uppercase my-4">Condiciones</h5>
                  <p>
                    Datos de indentificaci&oacute;n: para la individualizaci&oacute;n
                    de cada uno de nuestros usuarios y/o clientes, son estrictamente necesarios los siguentes datos para una correcta determinaci&oacute;n:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'terminos'
}
</script>

<style scoped>

.contenido-text {
  height: 400px;
  margin-top: 1rem;
}

p{
    font-size: .9rem;
}

</style>
