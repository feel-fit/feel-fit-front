<template>
  <div class="row suscribirte bg-primary">
    <div class="col-12 col-lg-4 col-xl-5 col align-self-center">
      <h1>¡nunca te pierdas nada de lo que pase por aquí!</h1>
      <p>
        Introduce tu dirección de correo electrónico para seguir este Blog y recibir las notificaciones de las nuevas publicaciones en tu buzón
        de correo electrónico.
      </p>
    </div>
    <div class="col-12 col-lg-5 col-xl-5 align-self-center py-5">
      <div class="input-group">
        <input
          v-model="subscribe.email"
          type="text"
          class="form-control"
          placeholder="Ingresa tu correo Electronico"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <!--imagen icon-->
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-3 col-xl-2 align-self-center text-center">
      <button type="button" class="btn boton-suscribir px-5 py-2" @click="suscribe">Suscribete</button>
    </div>
  </div>
</template>

<script>
import api from "../../../plugins/api";
export default {
  data() {
    return {
      subscribe: {
        email: ""
      }
    };
  },
  methods: {
    suscribe() {
      api
        .Subscribe()
        .create(this.subscribe)
        .then(response => {
          this.$awn.success('Tu email se encuentra registrado!',{durations: {success:2000}})
        }).catch(error=>{
          this.$awn.alert('Tu email se encuentra registrado!',{durations: {alert:2000}})
        });
    }
  }
};
</script>

<style scoped lang="scss">

.suscribirte {
  margin: 0;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 80px;
  padding-bottom: 80px;
  h1 {
    font-family: "CircularStd-Bold";
    color: black;
    text-align: left;
    font-size: 25px;
    text-transform: uppercase;
  }
  p {
    color: #ffffff;
  }
  .boton-suscribir {
    background-color: #006b6d;
    border-radius: 25px;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "CircularStd-Bold";
  }
  input[type="text"] {
    background: none;
    border: 0px;
    border-bottom: #ffffff 2px solid;
    &::placeholder {
      color: #ffffff;
    }
  }
}
</style>