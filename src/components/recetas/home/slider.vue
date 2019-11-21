<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators d-none d-lg-flex">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
          <img src="../../../assets/images/recetas/18.png" />
        </li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1">
          <img :src="imageDefault" />
        </li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2">
          <img src="../../../assets/images/recetas/18.png" />
        </li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../../assets/images/recetas/18.png" class="d-block carousel-img" />
        </div>
        <div class="carousel-item">
          <img :src="imageDefault" class="d-block carousel-img" />
        </div>
        <div class="carousel-item">
          <img src="../../../assets/images/recetas/18.png" class="d-block carousel-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageDefault from "../../../assets/images/recetas/Part 2/person.png";
export default {
  data() {
    return {
      imageDefault
    };
  },
  mounted() {
    $(".carousel").carousel();
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