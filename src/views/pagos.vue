<template>
  <div>
    <volver></volver>
    <section id="pagos">
      <div class="container-fluid">
        <div class="row pt-3">
          <div class="col-12 col-md-6 col-lg   bg-white">
            <div class="row">
              <div class="col-sm-12">
                <div class="container mt-5 mb-2 ">
                  <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active h6 font-weight-bold font-italic mb-0 " id="informacion-tab" data-toggle="tab" href="#informacion" role="tab" aria-controls="informacion" aria-selected="true">01
                        INFORMACIÓN DEL CLIENTE</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold h6 font-italic mb-0 disabled" id="envios-tab" data-toggle="tab" href="#envios" role="tab" aria-controls="envios" aria-selected="false">02
                        DATOS DE ENVIO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold h6 font-italic mb-0 disabled" id="metodo-pago-tab" data-toggle="tab" href="#metodo-pago" role="tab" aria-controls="metodo-pago" aria-selected="false">03
                        SELECCI&Oacute;N DEL PAGO</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="informacion" role="tabpanel" aria-labelledby="informacion-tab">
                      <informacion-cliente/>
                    </div>
                    <div class="tab-pane fade" id="envios" role="tabpanel" aria-labelledby="envios-tab">
                      <datos-envio v-if="me!=null"/>
                    </div>
                    <div class="tab-pane fade" id="metodo-pago" role="tabpanel" aria-labelledby="metodo-pago-tab">
                      <seleccionar-pago v-if="me!=null"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-auto col-md-6 ">
            <tu-carrito/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import InformacionCliente from '../components/pagos/informacionCliente'
import TuCarrito from '../components/pagos/tuCarrito'
import volver from '../components/products/volver.vue'
import DatosEnvio from '../components/pagos/datosEnvio'
import SeleccionarPago from '../components/pagos/seleccionarPago'

export default {
  name: 'pago',
  metaInfo () {
    return {
      title: 'FEEL FIT | Pagos',
      meta: [
        { name: 'description', content: 'pagos' },
        { name: 'keywords', content: 'pagos, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  components: { SeleccionarPago, DatosEnvio, TuCarrito, InformacionCliente, volver },
  created () {
    this.$store.dispatch('getDepartments')
    this.$store.dispatch('getCities')
  },
  computed: {
    nextViewSend () {
      return this.$store.state.tool_paying.nextViewSend
    },
    nextViewPay () {
      return this.$store.state.tool_paying.nextViewPay
    },
    me () {
      return this.$store.state.me
    }
  }
}
</script>
<style scoped>
  #pagos{
    background-color: #F6F6F6;
  }

  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{
    color:            #20D6D9 !important;
    line-height:      3;
    background-color: #FFF;
    border-color:     #20D6D9;
    border-top:       none;
    border-left:      none;
    border-right:     none;
    border-bottom:    2px solid #20D6D9;
  }

  .nav-link{
    display:     block;
    line-height: 3;
    padding:     .5rem 1rem;
    color:       silver !important;
  }

  .nav-link:focus, .nav-link:hover{
    text-decoration: none;
    outline:         none;
    border:          none;
  }

  .caja{
    border: solid red;
  }
</style>
