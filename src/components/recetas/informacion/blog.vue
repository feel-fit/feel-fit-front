<template>
  <div class="container-fluid py-5 my-3 px-0">
    <div class="row align-items-center" >
      <div class="col-12">
        <img src="../../../assets/images/recetas/blog/18.png" alt class="header-image" />
      </div>
      <div class="row margen-receta articulo">
        <div class="col-12">
          <div class="container-fluid my-5">
            <div class="d-flex">
              <img
                src="../../../assets/images/recetas/pp.png"
                class="img-fluid imagen-receta mr-5 d-none d-md-block"
              />
              <div>
                <label class="etiqueta my-3 p-2">Blog</label>
                <h3>{{articulo.title}}</h3>
                <p
                  class="cite mt-5"
                >{{articulo.author}} | {{articulo.created_at|moment("from", "now")}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <p>
            {{articulo.text_header}}
          </p>
        </div>
        <div class="col-12 p-0">
          <h4 class="m-4 float-left">{{articulo.subtitle}}</h4>
          <p class="m-0">{{articulo.text_right}}</p>
        </div>
        <div class="col-12">
          <p>{{articulo.text_body}}</p>
        </div>
        <div class="col-12">
          <img :src="articulo.photo" alt class="text-image" />
        </div>
        <div>
          <p>{{articulo.text_footer}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./../../../plugins/api";
export default {
  components: {},
  data() {
    return {
      articulo: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    api
      .Blog()
      .getOne(to.params.id)
      .then(response => {
        next(vm => {
          vm.articulo = response.data.data;
        });
      });
  }
};
</script>

<style scoped lang="scss">
.articulo{
  min-width: 700px;
  background-image: url('../../../assets/images/recetas/blog/ffmda.png');
  background-repeat: no-repeat;
  background-position: center right;
}
.margen-receta {
  padding-left: 10%;
  padding-right: 10%;
}
.header-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.text-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
h3 {
  color: black;
  font-family: "CircularStd-Book";
  font-size: 1.8rem;
}
h4{
  color: black;
  font-family: "CircularStd-Book";
  font-size: 1.5rem;
}
h6 {
  color: black;
  font-family: "CircularStd-Book";
}
h2 {
  margin-top: 20px;
}
p {
  margin-top: 20px;
}
.etiqueta {
  background: #f7f6f6;
  border-radius: 3px;
  text-transform: uppercase;
  font-family: "CircularStd-Book";
  font-size: 11px;
  color: #2b2b2b;
  letter-spacing: 5px;
  font-weight: 900;
}
.cite {
  text-transform: uppercase;
  font-family: "CircularStd-Book";
  color: #27d8db;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 auto;
}
</style>