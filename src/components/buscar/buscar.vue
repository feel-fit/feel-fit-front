<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-sm-12 col-md-8 col-lg-6">
          <div class="row justify-content-center mt-5">
            <div class=" col-sm-12 ">
              <div class="text-center mb-3">
                <div class="mb-5">
                  <span class="buscar h2 font-italic font-weight-bold">Buscar</span>
                  <!-- <hr class="border-dark d-md-none mt-0 w-25"> -->
                </div>
                <div class="shadow caja_buscar">
                  <div class="row justify-content-center">
                    <div class="col-12">
                      <div class="row">
                        <div class="col m-2">
                          <input @keyup="searchTimeOut" v-model="search" class="inputBuscar form-control border-0"
                                 type="search" placeholder="Que te apetece?">
                        </div>
                        <div class="p-3">
                          <div class="col-12 text-right h5 text-body pr-md-5">
                            <small>PRODUCTOS</small>
                          </div>
                          <item-search v-for="item in products" :key="item.id" :product="item"></item-search>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import whatsapp from '../../components/home/whatsapp'
    import itemSearch from './item-search'
    import api from '../../plugins/api'

    let timeout = null;
    export default {
        name: "buscar",
        data() {
            return {
                search: '',
                products: []
            }
        },
        components: {
            whatsapp, itemSearch
        },
        methods: {
            searchTimeOut() {
                clearTimeout(timeout);
                // Make a new timeout set to go off in 800ms
                timeout = setTimeout(() => {
                    this.searching();
                }, 600);
            },
            searching() {
                console.log('hola');
                api.Products().search(this.search).then(result => {
                    this.products = result.data.data
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style scoped>
  .caja_buscar {
    border-radius: 1rem;
  }

  .inputBuscar:focus {
    border-color: white;
  }


</style>
