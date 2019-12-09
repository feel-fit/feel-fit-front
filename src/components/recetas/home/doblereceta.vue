<template>
  <!--doble recetas -->
  <div class="row receta">
    <div class="col-lg-5 pr-lg-5" v-if="receta1">
      <div class="row h-100 pb-5">
        <div class="col-12 p-0 alto" :class="{'order-lg-1':!inverso}">
          <img :src="receta1.photo" class="rounded" v-if="!receta1.url_video" />
          <iframe height="97%" width="100%" v-else
            :src="receta1.url_video"
          ></iframe>
        </div>
        <div class="col-12 p-0 bajo" :class="{'order-lg-0':!inverso}">
          <label class="etiqueta my-3 mt-lg-0 p-2 text-uppercase">{{receta1.category.name}}</label>
          <h4 class="title mb-3 text-capitalize">{{receta1.title}}</h4>
          <p class="cite text-uppercase">{{receta1.author}}| {{receta1.duration}}</p>
        </div>
      </div>
    </div>
    <div class="col-lg-7" v-if="receta2">
      <div class="row h-100 pb-5">
        <div class="col-12 p-0 alto" :class="{'order-lg-1':inverso}">
          <img :src="receta2.photo" class="rounded" v-if="!receta2.url_video" />
          <iframe height="100%" width="100%" v-else
            :src="receta2.url_video"
          ></iframe>
        </div>
        <div class="col-12 p-0 bajo" :class="{'order-lg-0':inverso}">
          <label class="etiqueta my-3 p-2 text-uppercase">{{receta2.category.name}}</label>
          <h4 class="title mb-3 text-capitalize">{{receta2.title}}</h4>
          <p class="cite text-uppercase">{{receta2.author}} | {{receta2.duration}}</p>
        </div>
      </div>
    </div>
  </div>
  <!--doble recetas -->
</template>

<script>
import imageDefault from "../../../assets/images/recetas/Part 2/person.png";
export default {
  props: {
    inverso: {
      type: Boolean,
      default: false
    },
    receta1: {},
    receta2: {}
  },
  data() {
    return {
      imageDefault
    };
  }
};
</script>

<style scoped lang="scss">
.receta {
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .alto {
    height: 65%;
    min-height: 290px;
    max-height: 320px;
  }
  .bajo {
    height: 35%;
  }
  .etiqueta {
    background: #f7f6f6;
    border-radius: 3px;
    font-family: "CircularStd-Book";
    font-size: 11px;
    color: #2b2b2b;
    letter-spacing: 5px;
    font-weight: 900;
  }
  .title {
    font-family: "CircularStd-Medium";
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    line-height: 32px;
  }
  .cite {
    font-family: "CircularStd-Bold";
    color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    letter-spacing: 1px;
    margin: 0 auto;
  }
}
</style>