<template>
  <section>
    <volver></volver>
    <div class="container p-0">
      <div id="accordion" class="accordion">
        <div class="menu">
          <div class="option collapsed shadow" data-toggle="collapse" href="#usuario">
            <div class="row m-0 p-0">
              <div class="col-6 p-0">
                <img src="./../assets/images/Usuario/infodeusuario.svg" class="img-fluid imagen" />
              </div>
              <div class="col-4">
                <h5 class="text-muted m-0 pt-5 font-italic">Informaci&oacute;n de</h5>
                <h1 class="text-primary font-italic font-weight-bold">Usuario</h1>
              </div>
              <div class="col-2">
                <div class="row justify-content-center align-items-center h-100">
                  <div class="icono">
                    <img src="./../assets/images/Usuario/Icons/Arrow.svg" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="usuario" class="card-body collapse" data-parent="#accordion">
            <div class="container-fluid mt-5">
              <div class="row">
                <div class="col-md-6">
                  <div class="container px-md-5 mx-md-5">
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Nombre Completo</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{$store.state.me.name}}</span>
                    </div>
                    <div class="mb-4">
                      <h5
                        class="text-primary font-italic font-weight-bold"
                      >C&eacute;dula de Ciudadania</h5>
                      <span
                        class="d-inline-block pl-2 text-capitalize"
                      >{{$store.state.me.identification}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">G&eacute;nero</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{$store.state.me.gender}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Fecha de nacimiento</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{$store.state.me.birth}}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="container px-md-5 mx-md-5">
                    <div class="mb-4">
                      <h5
                        class="text-primary font-italic font-weight-bold"
                      >Correo electr&oacute;nico</h5>
                      <span class="d-inline-block pl-2">{{$store.state.me.email}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Departamento/ciudad</h5>
                      <span
                        class="d-inline-block pl-2 text-capitalize"
                      >{{$store.state.me.addresses| department_city }}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Direcci&oacute;n</h5>
                      <span
                        class="d-inline-block pl-2 text-capitalize"
                      >{{$store.state.me.addresses>0?$store.state.me.addresses[0].name:''}}</span>
                    </div>
                    <div class="mb-4 d-flex justify-content-end">
                      <button class="btn btn-primary btn-lg text-white">Editar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu">
          <div class="option collapsed shadow" data-toggle="collapse" href="#descuento">
            <div class="row m-0 p-0">
              <div class="col-6 p-0">
                <img src="./../assets/images/Usuario/descuentos.svg" class="img-fluid imagen" />
              </div>
              <div class="col-4">
                <h5 class="text-muted m-0 pt-5 font-italic"></h5>
                <h1 class="text-primary font-italic font-weight-bold">Descuentos</h1>
              </div>
              <div class="col-2">
                <div class="row justify-content-center align-items-center h-100">
                  <div class="icono">
                    <img src="./../assets/images/Usuario/Icons/Arrow.svg" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="descuento" class="card-body collapse" data-parent="#accordion">
            <div class="container-fluid mt-5">
              <div class="row">
                <div class="col-4">
                  <div class="row justify-content-end">
                    <div class="d-inline-block">
                      <h4 class="text-primary font-italic font-weight-bold text-uppercase">Descuento</h4>
                      <h4 class="text-primary font-italic font-weight-bold text-uppercase">De 50%</h4>
                    </div>
                  </div>
                </div>
                <div class="col-8 d-flex align-items-center p-0">
                  <span
                    class="ml-5 font-italic font-weight-bold"
                  >Has sido seleccionado para disfrutar de este descuento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu">
          <div class="option collapsed shadow" data-toggle="collapse" href="#pago">
            <div class="row m-0 p-0">
              <div class="col-6 p-0">
                <img src="./../assets/images/Usuario/metododepago.svg" class="img-fluid imagen" />
              </div>
              <div class="col-4">
                <h5 class="text-muted m-0 pt-5 font-italic">M&eacute;todos de</h5>
                <h1 class="text-primary font-italic font-weight-bold">Pago</h1>
              </div>
              <div class="col-2">
                <div class="row justify-content-center align-items-center h-100">
                  <div class="icono">
                    <img src="./../assets/images/Usuario/Icons/Arrow.svg" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pago" class="card-body collapse" data-parent="#accordion">
            <div class="container-fluid mt-5">
              <div class="row mb-5">
                <div class="col-md-4 d-flex justify-content-center justify-content-md-end">
                  <img
                    src="./../assets/images/Usuario/metodosdepago/pse.svg"
                    class="img-fluid shadow imagen-pago mb-4 m-md-0"
                  />
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div>
                    <h5 class="text-primary font-italic font-weight-bold">Paga con PSE</h5>
                    <p class="mr-md-5 pr-md-5">
                      Las transacciones son seguras y est&aacute;n cifradas. Luego de hacer clic en "Finalizar pedido".
                      ser&aacute;s redirigido a PSE para conpletar tu compra de forma segura.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-4 d-flex justify-content-center justify-content-md-end">
                  <img
                    src="./../assets/images/Usuario/metodosdepago/contraentrega.svg"
                    class="img-fluid shadow imagen-pago mb-4 m-md-0"
                  />
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div>
                    <h5 class="text-primary font-italic font-weight-bold">Domicilio en Armenia</h5>
                    <p
                      class="mr-md-5 pr-md-5"
                    >Debe ser pagado contraentrega en efectivo al domiciliario, revisar la politica de env&iacute;os.</p>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                <div class="col-md-4 d-flex justify-content-center justify-content-md-end">
                  <img
                    src="./../assets/images/Usuario/metodosdepago/credit.svg"
                    class="img-fluid shadow imagen-pago mb-4 m-md-0"
                  />
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div>
                    <h5
                      class="text-primary font-italic font-weight-bold"
                    >Paga con tu tarjeta de cr&eacute;dito</h5>
                    <p class="mr-md-5 pr-md-5">Desde el portal de Davivienda</p>
                  </div>
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
import volver from "../components/products/volver.vue";
import app from './../plugins/api'
export default {
  name:'usuario',
  components: {
    volver
  },
  mounted() {
    //console.log(this.$store.state.me);
    app.Users().getMe().then((result)=>{
      console.log(result);
    });
    
  }
};
</script>

<style scoped lang="scss">

.imagen-pago {
  width: 120px;
  height: 120px;
  padding: 1rem;
  border-radius: 20px;
}
.menu {
  margin-bottom: 2rem;
}

.option {
  background-color: white;
  border-radius: 20px;
}

.imagen {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.accordion .option .icono {
  transform: scaleY(-1);
}

.accordion .option.collapsed .icono {
  transform: scaleY(1);
}
</style>