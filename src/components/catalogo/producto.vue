<template>
    <div>
        <section class="mt-4 position-relative"> 
            <!-- TODO:Ejemplo Item -->
            <div class="container d-flex justify-content-center">
                
                <div class="row line-background bg-primary"></div>
                <div class="row">
                    <div class="col-auto col-md-4 col-lg-auto">
                        <div class="bg-white card d-md-block d-none h-100 position-relative shadow">
                            <div class="fondo_catalogo position-absolute bg-info"></div>
                            <div class="align-items-center bg-white d-flex h-100 position-relative">
                                <img :src="refrigerados" class="refri card-img-top img-fluid">
                            </div>   
                        </div>                      
                    </div>
                    <div class="col">
                        <div class="row d-flex">
                            <div class="col">
                                <div class="card mb-3 mt-5 mt-md-0 position-relative shadow">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                               <div class="card shadow mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3  bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
        
                            <div class="w-100"></div>
        
                            <div class="col">
                                <div class="card shadow mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow mb-3 mt-n5 mt-md-0 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-6">
                                <div class="shadow mb-3 position-relative d-md-none">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </section>
            
            <!-- TODO:Ejemplo Item -->
            
     <section class="mt-4 position-relative">   
            <div class="container d-flex justify-content-center">  
                <div class="row line-background line-background2"></div>
                <div class="row">
                    <div class="col">
                        <div class="row d-flex">
                            <div class="col">
                                <div class="card mb-3 mt-5 mt-md-0 position-relative shadow">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                               <div class="card shadow mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3  bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
        
                            <div class="w-100"></div>
        
                            <div class="col">
                                <div class="card shadow mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card shadow mb-3 mt-n5 mt-md-0 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-6">
                                <div class="shadow mb-3 position-relative d-md-none">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto col-md-4 col-lg-auto">
                        <div class="bg-white card d-md-block d-none h-100 position-relative shadow">
                            <div class="fondo_catalogo position-absolute bg-info"></div>
                            <div class="align-items-center bg-white d-flex h-100 position-relative">
                                <img :src="refrigerados" class="refri card-img-top img-fluid">
                            </div>   
                        </div>                      
                    </div>
                </div>  
            </div>
        </section>
    </div>
</template>

<script>
    import pasta from './../../assets/images/product/pasta.png'
    import refrigerados from './../../assets/images/catalogo/refrigerados.png'
    import items from './items.vue'
    import item from './item.vue'

    export default {
        name: "producto",
        data() {
            return {
                pasta:pasta,
                refrigerados:refrigerados
            }
        },
        components: {
            items,item
        }
    }
</script>

<style scoped>
.mercado_letra{
    font-family: "Varela Round" Bold Italic;
    font-size: 22px;
}
.fondo_catalogo{
    height: 86%;
    width: 3rem;
    top: 7%;
    border-radius: .7rem;
    right: -6px;
}

.hr_mercado{
    width: 1.5rem;
}
.mercado{
    margin-top: 2rem;
}
.line-background{
    position: absolute;
    width: 100%;
    height: 33px;
    top: 71%;
}
.line-background2{
    background-color: rgba(242, 240, 242, 1);

}

@media(min-width: 768px) {
        .mercado_letra{
        font-size: 32px;
    }
}
@media(min-width: 992px) {
        .refri{
        width: 75%;
    }
}

    
</style>