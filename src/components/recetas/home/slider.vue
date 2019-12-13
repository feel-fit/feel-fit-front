<template>
  <div v-if="recipes.length>0">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators d-none d-lg-flex">
        <li
          data-target="#carouselExampleIndicators"
          :data-slide-to="index"
          class="active"
          v-for="recipe,index in recipes"
        >
          <img :src="recipe.photo" />
        </li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="[index==0 ? 'active' : '']"
          v-for="recipe,index in recipes"
        >
          <img :src="recipe.photo" class="d-block carousel-img" />
          <div class="receta-default d-flex align-items-center">
            <img
              src="../../../assets/images/recetas/pp.png"
              class="img-fluid imagen-receta mr-5 d-none d-md-block"
            />
            <div>
              <label class="etiqueta my-3 p-2">{{recipe.category.name}}</label>
              <h3 class="text-white text-uppercase font-weight-bold">{{recipe.title}}</h3>
              <p
                class="cite text-uppercase"
              >{{recipe.author}} | | {{recipe.created_at|moment("from", "now")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../plugins/api";
export default {
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    $(".carousel").carousel();
    api
      .Recipes()
      .getLatests()
      .then(response => {
        this.recipes = response.data.data;
      });
  }
};
</script>

<style scoped lang="scss">

.carousel-img {
  width: 100%;
  height: 70vmin;
  object-fit: cover;
}
.carousel-indicators {
  list-style: none;
  margin: 0;
  margin-left: 2%;
  justify-content: center;
}

.carousel-indicators li,
.carousel-indicators li.active {
  width: 220px;
  height: 140px;
  background-color: #fff;
  position: relative;
  top: 100px;
  margin: 14px;
  opacity: 1;
}

.carousel-indicators img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10;
  left: 0;
  object-fit: cover;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1400px) {
  .carousel-indicators {
    justify-content: start;
  }
  .informacion-inicio {
    font-size: 0.7rem;
    left: 72%;
    h1 {
      font-size: 1.7rem;
    }
    > img {
      width: 70%;
    }
  }
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1400px) {
  .carousel-indicators {
    justify-content: start;
  }
  .informacion-inicio {
    > img {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>