<template>
  <section class="volver mb-2">
    <div class="container">
      <div class="row d-flex justify-conted-around">
        <div class="col-12 mx-auto pl-4">
          <div>
            <ol class="breadcrumb mb-0 bg-white">
              <router-link :to="'/'+breadcrumb.link" tag="li" v-for="(breadcrumb,idx) in breadcrumbList" :key="idx" :class="{'active': !!breadcrumb.link}" class="link breadcrumb-item">
                {{ breadcrumb.name }}
              </router-link>
              <li class="text-primary breadcrumb-item">{{url }}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {split,last,startCase} from 'lodash'
export default {
  name: 'breadcrumb',
  data () {
    return {
      breadcrumbList: []
    }
  },
  mounted () {
    this.updateList()
  },
  computed:{
    url(){
      return startCase(last(split(this.$route.path,'/')))
    }
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
