<template>
  <div class="modal" tabindex="-1" role="dialog" id="modal-olvide">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Recuperar contraseña</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group col-md-12">
            <label>CORREO</label>
            <input
              v-validate="'required|email'"
              :class="{'is-invalid':errors.first('email')}"
              name="email"
              type="email"
              class="form-control"
              v-model="client.email"
            />
            <div class="invalid-feedback">Se requiere de un correo válido</div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="enviarEmail">Enviar Email</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../plugins/api";

export default {
  name: "recuperar-contrasena",
  data() {
    return {
      client:{
        email:''
      }
    };
  },
  methods: {
    enviarEmail() {
      this.$validator.validateAll().then(result => {
        this.$store.state.loading = true
        api.ResetPassword().getReset(this.client).then(result=>{
            $('#modal-olvide').modal('hide')
            this.$store.state.loading = false
        }).catch(error=>{
            this.$validator.errors.add({
                  field: 'email',
                  msg: 'email no se encuentra registrado.',
                  rule: "email"
                })
            this.$store.state.loading = false
        });
      });
    }
  }
};
</script>

<style scoped>
</style>