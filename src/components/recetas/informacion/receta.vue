<template>
  <div class="container-fluid py-5 my-3 px-0" v-if="recipe">
    <div class="row">
      <div class="col-12">
        <img :src="recipe.photo" class="header-image" />
      </div>
    </div>
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
      <div class="col-12">
        <div class="row justify-content-center info-receta">
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/fork.png" class="img-fluid" />
            <h6>Tipo de Receta</h6>
            <h6 class="text-uppercase font-weight-bold">{{recipe.category.name}}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/clock.png" class="img-fluid" />
            <h6>Duración</h6>
            <h6
              class="text-uppercase font-weight-bold"
            >{{ 'PT'+createTime(recipe.duration)+'S' | duration('humanize') }}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/layers.png" class="img-fluid" />
            <h6>Porciones</h6>
            <h6 class="text-uppercase font-weight-bold">{{recipe.portions}}</h6>
          </div>
          <div class="col-2 text-center">
            <img src="../../../assets/images/recetas/elementosdetalle/chef.png" class="img-fluid" />
            <h6>Dificultad</h6>
            <h6 class="text-uppercase font-weight-bold">{{recipe.difficult}}</h6>
          </div>
        </div>
      </div>
      <div class="col-12">
        <p>
          {{recipe.description}}
        </p>
      </div>
      <div class="col-12">
        <div class="row" v-if="recipe.ingredients.length>0">
          <div class="col-6 p-0">
            <img src="../../../assets/images/recetas/detallereceta/monika-grabkowska-neu4T59mTcY-unsplash.png" class="w-100">
          </div>
          <div class="col-6 p-5">
            <h3>INGREDIENTES:</h3>
            <ul>
              <li v-for="item in recipe.ingredients">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="row" v-if="recipe.supplys.length>0">
          <div class="col-6 p-5">
            <h3>SUMINISTROS:</h3>
            <ul>
              <li v-for="item in recipe.supplys">{{item.name}}</li>
            </ul>
          </div>
          <div class="col-6 p-0">
            <img src="../../../assets/images/recetas/detallereceta/gaelle-marcel-qMIGJmx41EM-unsplash.png" class="w-100">
          </div>
        </div>
      </div>
      <div class="col-12" v-if="recipe.preparations.length>0">
        <ol>
          <li v-for="item in recipe.preparations">
            <h2 v-if="item.title">{{item.title}}:</h2>
            <p>
              {{item.description}}
            </p>
          </li>
        </ol>
      </div>
      <div class="col-12" v-if="recipe.url_video">
        <div class="container-fluid">
          <iframe 
            :src="'https://www.youtube.com/embed/'+recipe.url_video"
          ></iframe>
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