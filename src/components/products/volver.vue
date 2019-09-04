<template>
  <section class="volver mb-3">
    <div class="container">
      <div class="row d-flex justify-conted-around">
        <div class="col-12 mx-auto pl-4">
          <div>
            <ol class="breadcrumb mb-0 bg-white">
              <li v-for="(breadcrumb,idx) in breadcrumbList" :key="idx" :class="{'active': !!breadcrumb.link}" class="breadcrumb-item">
                {{ breadcrumb.name }}
              </li>
            </ol>
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
    return {
      breadcrumbList: []
    }
  },
  mounted () {
    this.updateList()
  },
  methods: {
    updateList () {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }
}
</script>
<style scoped>
  .volver{
    margin-top:   5rem;
    margin-left:  1rem;
    margin-right: 1rem;
  }
</style>
