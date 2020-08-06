<template>
  <section>
    <div class="container-fluid top-header">
      <div class="row">
        <div
          class="col-12 col-lg-7 conocenos d-flex flex-fill justify-content-around position-relative"
        >
          <img
            src="../assets/images/conocenos/logo_conocenos.svg"
            alt="Feel Fit"
            class="mx-auto img-fluid mt-4 img-contact"
          />

          <img
            class="fresa position-absolute"
            src="../assets/images/conocenos/fresa_copy.svg"
            alt="Fresa"
          />
        </div>
        <div class="col-12 col-lg-5 flex-fill conocenos_col bg-white text-center position-relative">
          <img
            src="../assets/images/conocenos/fresa2.png"
            class="fresa2_conocenos d-none d-md-inline-block position-absolute"
          />

          <h4
            class="letra text-warning text-center font-italic font-weight-bold pt-xl-5"
            style="margin-top: 7%;"
          >Conócenos</h4>
          <hr class="hr_conocenos" />

          <img
            src="../assets/images/conocenos/circulo.svg"
            class="circulo float-right float-md-left"
          />
          <!--<img class="fresa position-absolute d-none" src="images/conocenos/fresa2.png" alt="Fresa">-->

          <p class="text-center parrafo font-italic text-justify py-xl-5">
            En feel flit queremos que te olvides de las dietas y empieces a adoptar un estilo de vida saludable donde consumas alimentos que realmente nutran tu cuerpo y te hagan sentir que tu alma y tu corazón se encuentren felices.
            Es por eso que eres nuestra razón de ser y buscamos acompañarte en tu estilo de vida saludable ofreciéndote productos de excelente calidad.
          </p>

          <img
            src="../assets/images/conocenos/circulo.svg"
            class="circulo float-left float-md-right d-none d-md-block"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "conocenos",
  metaInfo() {
    return {
      title: "FEEL FIT | Conocenos",
      meta: [
        {
          name: "description",
          content: "toda la información acerca de nosotros",
        },
        {
          name: "keywords",
          content: "catalogo saludable, feelfit, venta de productos saludable",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://feelfitmarket.com" + this.$route.fullPath,
        },
      ],
    };
  },
  mounted() {
    this.$store.commit("open_menu", false);
  },
};
</script>
<style scoped lang="scss">
.top-header {
  margin-top: 72px;
}

.parrafo {
  margin: 50px 60px;
}

.img-contact {
  object-fit: cover;
  width: 500px;
}

.conocenos {
  background-size: cover !important;
  background: url("../assets/images/conocenos/image.png");
}
</style>
