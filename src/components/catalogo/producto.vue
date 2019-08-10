<template>
    <section class="mx-4 "> 
        <div class="container mercado mb-5 mx-auto position-relative bg-white">
           <div class="row">
               <div class="col-md-9 mx-auto">
                    <div class="fondo position-absolute bg-info d-md-block shadow"></div>
                    <div class="row d-flex justify-conted-around position-relative bg-white border" style="border-radius:1rem;">
                        <div class="col shadow">
                            <div class="col-8 col-md-6">
                                <img :src="pasta" alt="food" class="img-fluid w-75 w-md-100">
                            </div>
                            <div class="col-4 col-md-6 mt-5">
                            <div class="oval_mercado position-absolute d-md-block">
                                <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
                            </div>
                                <h3 class="mercado_letra mb-0 font-italic mt-5" style="color: #00D0D2;"><strong>Mercado</strong></h3>
                                <span class="mercado_letra h5 mb-0 font-italic" style="color: #CCCCCD;"><strong>Sano</strong></span>
                                <hr class="hr_mercado ml-0 mt-1 border-info">
                            </div>
                        </div>
                        <div class="col shadow">
                            <div class="col-3 col-md-6">
                                <img :src="pasta" alt="food" class="img-fluid w-75 w-md-100">
                            </div>
                            <div class="col-2 col-md-6 mt-5">
                            <div class="oval_mercado position-absolute d-md-block">
                                <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
                            </div>
                                <h3 class="mercado_letra mb-0 font-italic mt-5" style="color: #00D0D2;"><strong>Mercado</strong></h3>
                                <span class="mercado_letra h5 mb-0 font-italic" style="color: #CCCCCD;"><strong>Sano</strong></span>
                                <hr class="hr_mercado ml-0 mt-1 border-info">
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
        <!-- TODO:Ejemplo Item -->
        <div class="container">
            <div class="row">
                <div class="col-8 col-md-6">
                    <img :src="pasta" alt="food" class="img-fluid w-75 w-md-100">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import pasta from './../../assets/images/product/pasta.png'

    export default {
        name: "mercado",
        data() {
            return {
                pasta:pasta
            }
        },
    }
</script>

<style scoped>
.mercado_letra{
    font-family: "Varela Round" Bold Italic;
    font-size: 22px;
}
.hr_mercado{
    width: 1.5rem;
}
.fondo{
    height: 78%;
    width: 4rem;
    top: 12%;
    border-radius: .7rem;
    right: -6px;
}
.oval_mercado{
    left: 89%;
    top: -15%;
}
.mercado{
    margin-top: 2rem;
}

@media(min-width: 768px) {
        .mercado_letra{
        font-size: 32px;
    }
}

    
</style>