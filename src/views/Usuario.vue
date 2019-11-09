<template>
  <section>
    <volver></volver>
    <div class="container ">
      <div id="accordion" class="accordion">
        <div class="menu">
          <div class="option collapsed shadow" data-toggle="collapse" href="#usuario">
            <div class="row m-0 p-0">
              <div class="col-6 p-0">
                <img src="./../assets/images/Usuario/infodeusuario.svg" class="img-fluid imagen" />
              </div>
              <div class="col-4">
                <h5 class="text-muted m-0 pt-md-5 font-italic text-title1">Informaci&oacute;n de</h5>
                <h1 class="text-primary font-italic font-weight-bold text-title2">Usuario</h1>
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

                    <!-- input nombre
                    <div class="mb-4">
                      <div class="form-group">
                        <label for="nombre-completo" class="h5 text-primary font-italic font-weight-bold">Nombre Completo</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nombre-completo"
                          aria-describedby="emailHelp"
                          placeholder="Ingrese un nombre"
                          :value="me.name"
                        />
                        <small
                          id="emailHelp"
                          class="form-text text-muted"
                        >We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                    -->

                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Nombre Completo</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{me.name}}</span>
                    </div>
                    <div class="mb-4">
                      <h5
                        class="text-primary font-italic font-weight-bold"
                      >C&eacute;dula de Ciudadania</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{me.identification}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">G&eacute;nero</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{me.gender}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Telefono</h5>
                      <span class="d-inline-block pl-2 text-capitalize">{{me.phone}}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="container px-md-5 mx-md-5">
                    <div class="mb-4">
                      <h5
                        class="text-primary font-italic font-weight-bold"
                      >Correo electr&oacute;nico</h5>
                      <span class="d-inline-block pl-2">{{me.email}}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Departamento/ciudad</h5>
                      <span
                        class="d-inline-block pl-2 text-capitalize"
                      >{{me.addresses| department_city }}</span>
                    </div>
                    <div class="mb-4">
                      <h5 class="text-primary font-italic font-weight-bold">Direcci&oacute;n</h5>
                      <span
                        class="d-inline-block pl-2 text-capitalize"
                      >{{me.addresses.length>0?me.addresses[0].address:''}}</span>
                    </div>
                    <div class="mb-4 d-flex justify-content-end">
                      <button class="btn btn-primary btn-lg text-white" data-toggle="modal" data-target="#modalEditar">Editar</button>
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
                <h5 class="text-muted m-0 pt-md-5 font-italic"></h5>
                <h1 class="text-primary font-italic font-weight-bold text-title3">Descuentos</h1>
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
              <div class="row" v-if="me.discounts.length>0">
                <div class="col-4">
                  <div class="row justify-content-end">
                    <div class="d-inline-block">
                      <h4 class="text-primary font-italic font-weight-bold text-uppercase">Descuento</h4>
                      <h4 class="text-primary font-italic font-weight-bold text-uppercase">De {{me.discounts.length>0?me.discounts[0].name+": "+me.discounts[0].value:0}}%</h4>
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
                <h5 class="text-muted m-0 pt-md-5 font-italic text-title1">M&eacute;todos de</h5>
                <h1 class="text-primary font-italic font-weight-bold text-title2">Pago</h1>
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
                    <p class="mr-md-5 pr-md-5">
                      Debe ser pagado contraentrega en efectivo al domiciliario, revisar la politica de
                      env&iacute;os.
                    </p>
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

    <editar-user></editar-user>

  </section>
</template>
<script>
import volver from '../components/products/volver.vue'
import editarUser from '../components/usuario/editarUser'

export default {
  name: 'usuario',
  metaInfo () {
    return {
      title: 'FEEL FIT | Usuario',
      meta: [
        { name: 'description', content: 'usuario' },
        { name: 'keywords', content: 'usuario, feelfit, venta de productos fitness' }
      ],
      link: [
        { rel: 'canonical', href: 'https://feelfitmarket.com' + this.$route.fullPath }
      ]
    }
  },
  components: {
    volver,
    editarUser
  },
  mounted () {},
  computed: {
    me () {
      return this.$store.state.me
    }
  }
}
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

@media (max-width:517px){
  .text-title1{
    padding-top: 30px;
    font-size: 1rem;
  }
  .text-title3{
    padding-top: 30px;
    font-size: 1.4rem;
  }
  .text-title2{
    font-size: 1.3rem;
  }
}

</style>
