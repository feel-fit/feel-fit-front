<template>
  <div class="container-fluid py-5 my-3 px-0" v-if="recipe">
    <div class="row m-0">
      <div class="col-12 p-0">
        <img :src="recipe.photo" class="header-image" />
      </div>
    </div>

    <div class="row p-0 m-0 blog">
      <div class="row margen-receta">
      <div class="col-12">
        <div class="container-fluid my-5">
          <div class="d-flex">
            <img
              src="../../../assets/images/recetas/pp.png"
              class="img-fluid imagen-receta mr-5 d-none d-md-block"
            />
            <div>
              <label class="etiqueta my-3 p-2">Blog</label>
              <h3>{{recipe.title}}</h3>
              <p class="cite mt-5">{{recipe.author}} | {{recipe.created_at|moment("from", "now")}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row margen-receta">
      <div class="col-12 pt-5">
        <div class="row justify-content-center info-receta">
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/fork.png" class="img-fluid" />
            <h6 class="my-2 text-body">Tipo de Receta</h6>
            <h6 class="text-uppercase font-weight-bold text-body">{{recipe.category.name}}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/clock.png" class="img-fluid" />
            <h6 class="my-2 text-body">Duración</h6>
            <h6
              class="text-uppercase font-weight-bold text-body"
            >{{ 'PT'+createTime(recipe.duration)+'S' | duration('humanize') }}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/layers.png" class="img-fluid" />
            <h6 class="my-2 text-body">Porciones</h6>
            <h6 class="text-uppercase font-weight-bold text-body">{{recipe.portions}}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/chef.png" class="img-fluid" />
            <h6 class="my-2 text-body">Dificultad</h6>
            <h6 class="text-uppercase font-weight-bold text-body">{{recipe.difficult}}</h6>
          </div>
        </div>
      </div>
      <div class="col-12 pt-5">
        <p>{{recipe.description}}</p>
      </div>
      <div class="col-12 pt-5">
        <div class="row receta-lista" v-if="recipe.ingredients.length>0">
          <div class="col-6 p-0">
            <img
              src="../../../assets/images/recetas/detallereceta/monika-grabkowska-neu4T59mTcY-unsplash.png"
              class="w-100"
            />
          </div>
          <div class="col-6 p-5">
            <h3>INGREDIENTES:</h3>
            <ul>
              <li v-for="item in recipe.ingredients">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="row receta-lista" v-if="recipe.supplys.length>0">
          <div class="col-6 p-5">
            <h3>SUMINISTROS:</h3>
            <ul>
              <li v-for="item in recipe.supplys">{{item.name}}</li>
            </ul>
          </div>
          <div class="col-6 p-0">
            <img
              src="../../../assets/images/recetas/detallereceta/gaelle-marcel-qMIGJmx41EM-unsplash.png"
              class="w-100"
            />
          </div>
        </div>
      </div>
      <div class="col-12 pt-5 receta-preparacion" v-if="recipe.preparations.length>0">
        <h3>PREPARACIÓN:</h3>
        <div class="ml-5">
          <div v-for="item,index in recipe.preparations" class="d-flex">
            <div class="index">{{index+1}}</div>
            <div class="title">
              <h2 v-if="item.title" class="m-0">{{item.title}}:</h2>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mt-5 text-sugestion">
        <h3>Sugerencias:</h3>
        <p>{{recipe.suggestion}}</p>
      </div>
      <div class="col-12 pt-5" v-if="recipe.url_video">
        <div class="container-fluid">
          <iframe :src="'https://www.youtube.com/embed/'+recipe.url_video" class="video-receta"></iframe>
        </div>
      </div>
      <div class="col-12 text-center mt-5">
        <h5>Compártelo</h5>
        <div class="mt-4">
          <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://feelfitmarket.com/recetas/receta/'+recipe.id">
          <img src="../../../assets/images/recetas/redessociales/fa.png" class="img-fluid" />
          </a>
          <a :href="'https://twitter.com/home?status=https://feelfitmarket.com/recetas/receta/'+recipe.id+'/ '+recipe.title">
            <img
            src="../../../assets/images/recetas/redessociales/tw.png"
            class="img-fluid mx-3"
          />
          </a>
          <a :href="'https://plus.google.com/share?url=https://feelfitmarket.com/recetas/receta/'+recipe.id" class="mr-3">
            <img src="../../../assets/images/recetas/redessociales/go.png" class="img-fluid" />
          </a>
          <a href="">
            <img src="../../../assets/images/recetas/redessociales/ig.png" class="img-fluid" />
          </a>
        </div>
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
      recipe: null
    };
  },
  beforeRouteEnter(to, from, next) {
    api
      .Recipes()
      .getOne(to.params.id)
      .then(response => {
        next(vm => {
          vm.recipe = response.data.data;
        });
      });
  },
  methods: {
    createTime(time) {
      let formaTime = time.split(":");
      let hora = parseInt(formaTime[0], 10);
      let minutos = parseInt(formaTime[1], 10);
      let segundos = parseInt(formaTime[2], 10);
      return hora * 60 * 60 + minutos * 60 + segundos * 1000;
    }
  }
};
</script>

<style scoped lang="scss">
.blog{
  min-width: 700px;
  background-image: url('../../../assets/images/recetas/blog/ffmda.png');
  background-repeat: no-repeat;
  background-position: top right;
}
.margen-receta {
  margin-left: 10%;
  margin-right: 10%;
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
.info-receta {
  h6 {
    color: black;
    font-family: "CircularStd-Book";
  }
}
h3 {
  color: black;
  font-family: "CircularStd-Book";
  font-size: 1.8rem;
  &:first-letter {
    text-transform: uppercase;
  }
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
.video-receta {
  width: 100%;
  height: 450px;
}

.receta-lista {
  height: 500px;
  overflow: hidden;
  background: #f7f6f6;
  h3 {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 40px;
  }
  ul {
    list-style-type: none;
    li {
      margin-bottom: 10px;
    }
  }
}
.receta-preparacion {
  h3 {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 40px;
  }
  .index {
    color: #20d6d9;
    font-weight: bold;
    font-size: 3rem;
    font-style: italic;
  }
  .title {
    color: black;
    margin-left: 40px;
    h2 {
      color: black;
    }
  }
}

.text-sugestion {
  h3 {
    font-weight: bold;
    font-style: italic;
    margin-bottom: 40px;
  }
}
</style>