<template>
  <div class="d-flex justify-content-between linea">
    <span class="font-weight-bold">
      {{name}}
    </span>
    <hr class="border border-dark mx-3 align-items-center" />
    <span>VER TODAS</span>
  </div>
</template>

<script>
export default {
  props:{
    name
  }
};
</script>

<style scoped lang="scss">
.linea {
  color: #2b2b2b;
  span {
    display: inline-block;
    font-family: "CircularStd-Medium";
    text-transform: capitalize;
    width: 12%;
    font-size: 0.9rem;
    letter-spacing: 3px;
  }
  b {
    font-size: 1rem;
  }
  hr {
    width: 78%;
  }
}

@media (max-width: 1180px) {
  .linea {
    span {
      width: 20%;
      letter-spacing: 2px;
    }
    b {
      font-size: 1rem;
    }
    hr {
      width: 60%;
    }
  }
}
</style>