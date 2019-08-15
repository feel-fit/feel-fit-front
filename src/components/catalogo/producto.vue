<template>
    <div>
        <section class="mt-4 position-relative"> 
            <!-- TODO:Ejemplo Item -->
            <div class="container d-flex justify-content-center">
                
                <div class="row line-background bg-primary"></div>
                <div class="row">
                    <div class="col-auto col-md-4 col-lg-auto d-md-block d-none">
                        <div class="bg-white card h-100 position-relative shadow">
                            <div class="fondo_catalogo position-absolute bg-info"></div>
                            <div class="align-items-center bg-white d-flex h-100 position-relative">
                                <img :src="refrigerados" class="refri card-img-top img-fluid">
                                <span class="letra_catalogo position-absolute font-italic font-weight-bold">Refigerados</br> & Canaelados</span>
                            </div>   
                        </div>                      
                    </div>
                    <div class="col">
                        <div class="row d-flex">
                             <div class="col-sm-6 d-md-none">
                                <div class="mb-3 mt-md-0 respon_mas position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white catalogo_border shadow">
                                        <img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Refigerados</br> & Canaelados</span>  
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3 mt-md-0 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white catalogo_border shadow">
                                        <img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Aceites</br> & Mantequillas</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                               <div class="position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="bg-white catalogo_border mb-3 mb-sm-0 pb-3 position-relative shadow">
                                        <img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Panaderia</br> & Pastas</span>   
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-sm-6">
                                <div class="mb-3 position-relative respon_menos">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Chocolates</br> & Cacao</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 offset-md-0 offset-sm-6">
                                <div class="mb-3 mt-md-0 position-relative res_mas">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Granolas</br> & Cereales</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>
            
            <!-- TODO:Ejemplo Item dos -->
            
        <section class="position-relative"> 
            <!-- TODO:Ejemplo Item dos-->
            <div class="container d-flex justify-content-center">
                
                <div class="row line-background line-background2"></div>
                <div class="row">                   
                    <div class="col">
                        <div class="row d-flex mt-md-4">
                            <div class="col-sm-6">
                                <div class="mb-3 position-relative res_menos" >
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Mercado</br>Sano</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                               <div class="mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3  bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Niños</span>
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-sm-6">
                                <div class="mb-3 position-relative res_menos" >
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Suplementos</br> & Proteinas</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-3 position-relative">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative  pb-3 bg-white catalogo_border shadow">
                                    	<img :src="refrigerados" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Vinagres</br> & Aderezos</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 d-md-none">
                                <div class="mb-3 mt-md-0 position-relative res_menos">
                                    <div class="fondo_catalogo position-absolute bg-info"></div>
                                    <div class="position-relative pb-3 bg-white catalogo_border shadow">
                                    	<img :src="snacks" class="img-fluid w-50">
                                        <span class="letra_catalogo position-absolute font-italic font-weight-bold">Snacks</br> & Postres</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto col-md-4 col-lg-auto d-md-block d-none">
                        <div class="bg-white h-100 position-relative shadow">
                            <div class="fondo_catalogo position-absolute bg-info"></div>
                            <div class="align-items-center bg-white d-flex h-100 position-relative">
                                <img :src="snacks" class="refri card-img-top img-fluid">
                                <span class="letra_catalogo position-absolute font-italic font-weight-bold">Snacks</br> & Postres</span>
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
    import aceites from './../../assets/images/catalogo/aceites.png'
    import chocolates from './../../assets/images/catalogo/chocolates.png'
    import granolas from './../../assets/images/catalogo/granolas.png'
    import mercado from './../../assets/images/catalogo/mercado.png'
    import ninos from './../../assets/images/catalogo/ninos.png'
    import panaderia from './../../assets/images/catalogo/panaderia.png'
    import snacks from './../../assets/images/catalogo/snacks.png'
    import suplementos from './../../assets/images/catalogo/suplementos.png'
    import vinagres from './../../assets/images/catalogo/vinagres.png'
    import items from './items.vue'
    import item from './item.vue'

    export default {
        name: "producto",
        data() {
            return {
                pasta:pasta,
                refrigerados:refrigerados,
                aceites:aceites,
                chocolates:chocolates,
                granolas:granolas,
                mercado:mercado,
                ninos:ninos,
                panaderia:panaderia,
                snacks:snacks,
                suplementos:suplementos,
                vinagres:vinagres

            }
        },
        components: {
            items,item
        }
    }
</script>

<style scoped>
/* .back{
    background-image: url(/img/refrigerados.fa2de2ba.png);
    width: 21rem;
    background-size: contain;
    background-repeat: no-repeat;
} */
.letra_catalogo{
    top: 47%;
    left: 49%;
    color:#00D0D2;
    font-size:20px;
}
.catalogo_border{
    border-radius: 12px;
}
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
    top: 54%;
}
.line-background2{
    background-color: rgba(242, 240, 242, 1);

}
@media(min-width: 576px) and (max-width: 767px) {
    .respon_mas{
        margin-top: 50px;
    }
    .respon_menos{
        margin-top: -50px;
    }
    .res_mas{
        margin-top: -30px;
    }
    .res_menos{
        margin-top: -137px;
    }
    .letra_catalogo{
        top: 35%;
        font-size:15px;
    }
}
@media(min-width: 768px) {
        .mercado_letra{
        font-size: 32px;
    }
        .letra_catalogo{
        top: 39%;
        font-size:16px;
    }
}
@media(min-width: 992px) {
        .refri{
        width: 75%;
    }
    .letra_catalogo{
        font-size:20px;
    }
}

    
</style>