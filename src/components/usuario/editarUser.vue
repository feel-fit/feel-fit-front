<template>
  <section>
    <!-- Modal -->
    <div
      class="modal fade "
      id="modalEditar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <informacion-cliente class="p-5"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InformacionCliente from '../pagos/informacionCliente';
export default {
    name:'editar-user',
    components: { InformacionCliente },
};
</script>

<style scoped>
</style> 

</style>