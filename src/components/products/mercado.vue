<template>
    <section class="mx-4">
        <div class="container mercado shadow mx-auto">
            <div class="row d-flex justify-conted-around position-relative">
                <div></div>
                <div class="col-8 col-md-6">
                    <img :src="pasta" alt="food" class="img-fluid">
                </div>
                <div class="col-4 col-md-6 mt-5">
                <div class="oval_mercado position-absolute d-none d-md-block">
                    <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
                </div>
                    <h5 class="mb-0 font-italic" style="color: #00D0D2;"><strong>Mercado</strong></h5>
                    <p class="mb-0 font-italic" style="color: #CCCCCD;">Sano</p>
                    <!--<hr class="hr_producto">-->
                <div class="oval2_mercado position-absolute">
                    <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
                </div>
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
.oval_mercado{
    left: 89%;
    top: -15%;
}
.oval2_mercado{
    left: -24%;
    bottom: 21%;
}
.mercado{
    margin-top: 2rem;
    border-radius: .7rem
}

@media(min-width: 768px) {
    .mercado{
        margin: 7rem 10rem;
        
    }
}

    
</style>
