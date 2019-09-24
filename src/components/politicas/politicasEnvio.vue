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
                <h4
                  class="text-primary font-weight-bold font-italic"
                >Pol&iacute;ticas de calidad y privacidad</h4>
                <div class="ml-3 mt-4 font-italic">
                  <h5 class="font-weight-bold text-uppercase my-4">Politicas de calidad</h5>
                  <p>
                    Para <span class="font-weight-bold text-uppercase">Feel fit market</span> es importante garantizar a nuestros usuarios y clientes
                    un buen servicio y atenci&oacute;n en todo momento;es de todo nuestro inter&eacute;s que el
                    servicio prestado sea de su agrado; adem&aacute;s, son garantias para los usaurios y clientes, los siguientes puntos:<br>
                    Tiempo de entrega:<br>
                    Nuestros tiempos de entrega corresponden al t&eacute;rmino de la distancia que se puede demorar la entrega de los productos y/o alimentos adquiridos
                    por medio de nuestro servicio; el tiempo aproximado ser&aacute; dado al momento de realizar el pedido, partiendo desde el sector urbano del Municipio 
                    de Armenia
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
  name: "politicas-envio"
};
</script>

<style>
.caja {
  border: 2px red solid;
}
.contenido-text {
  height: 400px;
  margin-top: 1rem;
}

p {
  font-size: 0.9rem;
}

.contenido {
  border-radius: 300px;
}
</style>