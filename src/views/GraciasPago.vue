<template>
  <section>
    <volver></volver>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <img src="./../assets/images/gracias/gracias.svg" class="img-fluid" />
        </div>
        <div class="col-lg-6">
          <div class="">
            <h3
              class="text-center titulo text-primary font-italic font-weight-bold my-5 py-4"
            >¡Gracias por tu compra!</h3>
            <p class="text-center text">
              Por favor revisa tu correo para ver la factura.
              <br />Si tienes alguna duda
            </p>
           <div class="text-center">
             <p class="text-center text">¡Cont&aacute;ctenos!</p>
             <p class="text-center text mt-5">Si su forma de pago es PSE o tarjeta de credito y no es redireccionado automaticamente</p>
             <p class="text-center text">por favor hacer click aquí</p>
            <p class="text-center text">
              <a href="https://www.zonapagos.com/t_feelfit/" rel="noopener" class="btn-primary btn text-center text-white">Ir a pagos</a>
            </p>
           </div>
            <p class="text-right text-primary text2 mt-5">Cuidarte, se siente bien</p>
           
            <div class="text-right mt-5">
              <router-link to="/" class="text-muted text-decoration-none">
                Continua en el inicio
                <font-awesome-icon icon="arrow-right" size="xs" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import volver from '../components/products/volver.vue'
export default {
  name: 'thankyou',
  metaInfo () {
    return {
      title: 'FEEL FIT | Gracias por su pago',
      meta: [
        { name: 'description', content: 'pagos fitness' },
        { name: 'keywords', content: 'pagos, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  components: { volver }
}
</script>

<style scoped>
.caja {
  border: 2px red solid;
}

.titulo {
  font-size: 39px;
}

.texto {
  font-size: 20px;
  color: #a3a3a3;
}

.texto2 {
  font-size: 17px;
}

.contenido {
  min-width: 35rem;
}
</style>
