<template>
  <section>
    <volver></volver>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <img src="./../assets/images/gracias/gracias.png" class="img-fluid">
        </div>
        <div class="col-12 col-md-6 pr-md-5">
          <h3 class="text-center titulo text-primary font-italic font-weight-bold my-5 py-5">¡Gracias por tu compra!</h3>
          <p class="text-center text">
            Por favor revisa tu correo para ver la factura.<br> Si tienes alguna duda
          </p>
          <p class="text-center text">¡Cont&aacute;ctenos!</p>
          <p class="text-right text-primary text2 mt-3 ">Cuidarte, se siente bien</p>
          <div class=" text-right mt-4">
            <router-link to="/" class="text-muted text-decoration-none">
              Continua en el inicio
              <font-awesome-icon icon="arrow-right" size="xs"/>
              </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import volver from "../components/products/volver.vue";
export default {
  name: "thankyou",
  components: { volver }
};
</script>

<style scoped>
.caja {
  border: 2px red solid;
}

.titulo{
  font-size: 39px;
}

.texto{
  font-size: 20px;
  color:#A3A3A3;
}

.texto2{
  font-size: 17px;
}

</style>