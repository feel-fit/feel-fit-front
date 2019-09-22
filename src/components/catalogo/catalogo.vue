<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-12 ml-n3 pl-4 contenido shadow">
          <div class="row p-3 p-md-5">
            <div class="col-md-12 col-sm-6 d-flex align-items-center">
              <span class="h3 font-italic titulo font-weight-bold">Catálogo</span>
            </div>
            <div class="col-md-12 col-sm-6">
              <hr class="border-warning hr_catalogo ml-4 mt-1 mb-2 d-none d-sm-block ml-sm-0" />
              <p class="h5 ml-4 font-italic text-primary">
                <small>
                  Categorias
                  <br />de productos
                </small>
              </p>
              <hr class="border-warning hr_catalogo ml-4 mt-1 ml-sm-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'portada',
  data () {
    return {}
  }
}
</script>

<style scoped>

.caja{
    border:2px solid blue;
}

.contenido{
    border-top-right-radius: 4rem;
    border-bottom-right-radius: 4rem;
}

.titulo{
    color:#91d351;
}
.hr_catalogo {
  width: 1.5rem;
}
</style>
