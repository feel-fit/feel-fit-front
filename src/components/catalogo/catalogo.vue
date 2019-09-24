<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 ml-n3 pl-4 contenido shadow bg-white border-blue">
          <div class="row py-4 pl-2 pr-0">
            <div class="col-md-12 col-sm-6" align="center">
              <span class="h3 font-italic titulo font-weight-bold">Catálogo</span>
            </div>
            <div class="col-md-12 col-sm-6" align="center">
              <p class="h5 ml-4 font-italic text-primary">
                <small>
                  <div class="inner">&nbsp;</div>
                  Categorias
                  <br/>de productos
                  <div class="inner">&nbsp;</div>
                </small>
              </p>
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
