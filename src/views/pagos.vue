<template>
  <div>
    <volver></volver>
    <section id="pagos">
      <div class="container-fluid">
        <div class="row pt-3">
          <div class="col-sm bg-white">
            <div class="row">
              <div class="col-sm-12">
                <div class="container mt-5 mb-2 ">
                  <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active h6 font-weight-bold font-italic mb-0" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">01
                        INFORMACIÓN DEL CLIENTE</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold h6 font-italic mb-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">02
                        DATOS DE ENVIO</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link font-weight-bold h6 font-italic mb-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">03
                        SELECCI&Oacute;N DEL PAGO</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <informacion-cliente/>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <datos-envio/>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <seleccionar-pago/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <router-view></router-view>
            </div>
          </div>
          <div class="col-auto">
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
  components: { SeleccionarPago, DatosEnvio, TuCarrito, InformacionCliente, volver }
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
