<template>
    <section>
        <div class="container-fluid">
            <div class="row d-flex justify-conted-start">
                <div class="col-11 col-lg-3 col-md-3 col-sm-4 col-xl-2 ml-n3 pl-4 shadow" style="border-top-right-radius: 4rem;border-bottom-right-radius: 4rem;">
                    <div class="row align-items-center">
                        <div class="col-5 col-sm-12">
                            <span class="h3 font-italic text-warning font-weight-bold">Catálogo</span>
                        </div>
                        <div class="col-5 col-sm-12 pt-4 pt-sm-0 mt-sm-3"> 
                            <hr class="border-warning hr_catalogo ml-4 mt-1 mb-2 d-none d-sm-block ml-sm-0">
                            <p class="h5 ml-4 font-italic"><small>Categorias<br>de productos</small></p>
                            <hr class="border-warning hr_catalogo ml-4 mt-1 ml-sm-0">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    

    export default {
        name: "portada",
        data() {
            return {
                
            }
        },
    }
</script>

<style scoped>

.hr_catalogo{
    width: 1.5rem;
}


    
</style>
