<template>
  <div class="position-relative">
    <img :src="blog.photo" class="enlace-blog rounded" />
    <div class="receta-default d-flex align-items-center">
      <img
        src="../../../assets/images/recetas/pp.png"
        class="img-fluid imagen-receta mr-5 d-none d-md-block"
      />
      <div>
        <label class="etiqueta my-3 p-2">Blog</label>
        <h3 class="text-white">{{blog.title}}</h3>
        <p class="cite text-uppercase">{{blog.author}} | {{blog.created_at}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../../plugins/api'
export default {
  data(){
    return {
      blog:{}
    }
  },
  beforeMount(){
    api
      .Blog()
      .getLatest()
      .then(response => {
        console.log(response.data.data);
        this.blog = response.data.data;
      });
  }
};
</script>

<style lang="scss">
.enlace-blog {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.receta-default {
  position: absolute;
  z-index: 200;
  margin: 0;
  width: 80%;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: "CircularStd-Book";
  h3 {
    font-family: "CircularStd-Book";
    font-size: 1.8rem;
  }
  h6 {
    font-family: "CircularStd-Book";
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
    font-family: "CircularStd-Bold";
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0 auto;
  }
}

.imagen-receta {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>