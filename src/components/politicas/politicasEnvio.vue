<template>
  <section>
    <!-- Modal -->
    <div
      class="modal fade"
      id="politicasEnvioModal"
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
                src="./../../assets/images/politicas/berries-blackberries-card-698857.png"
                class="w-100 h-100"
              />
            </div>
            <div class="col-lg-6">
              <button type="button" class="close m-3" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

              <div class="container p-3 contenido-text overflow-auto">
                <h4 class="text-primary font-weight-bold font-italic">Pol&iacute;ticas de envio</h4>
                <div class="ml-3 mt-4 font-italic">
                  <h5 class="font-weight-bold text-uppercase my-4">Politicas de envio</h5>
                  <p>
                    Al momento de comprar tus productos ten en cuenta las siguientes recomendaciones:</p>
                    <ul>
                        <li>Compra minima de productos $15.000.</li>
                        <li>Espera tus productos aproximadamente 1 hora y media después de realizado tu pago.</li>
                        <li>Puedes realizar tus pedidos entre las 8 am y 8:30 pm. Si haces tu pedido por fuera de estos horarios nos comunicaremos contigo al día siguiente y programaremos la hora de entrega.</li>
                        <li>Los Domingos y festivos también te llevamos tu domicilio pero nos comunicamos contigo para programar la hora de entrega.</li>
                        <li>Si vives en la ciudad de Armenia el sistema automáticamente le sumara $1.500 a tu pedido por el domicilio.</li>
                        <li>Si vives en uno de los siguientes municipios: Calarcá, Circasia, La Tebaida, Montenegro o Quimbaya el domicilio tendrá un costo de $8,000 y nos comunicaremos contigo después de realizado tu pago para programar la hora de entrega.</li>
                        <li>Puedes realizar tu compra desde cualquier lugar del país, te enviaremos tu pedido a través de empresa de mensajería y el pago del flete lo realizas contra entrega.</li>
                        <li>Por políticas de calidad no enviamos productos que requieren refrigeración en los pedidos despachados mediante empresas de mensajería.</li>
                    </ul>
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
  name: 'politicas-envio'
}
</script>

<style scoped>
.contenido-text {
  height: 400px;
  margin-top: 1rem;
}

p,li {
  font-size: 0.9rem;
}

ul{
  padding: 0;
}

</style>
