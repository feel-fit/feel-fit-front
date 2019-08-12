<template>
    <section class="mt-4 position-relative"> 
        <!-- TODO:Ejemplo Item -->
        <div class="container d-flex justify-content-center">
            <div class="row line-background bg-primary"></div>
            <div class="media position-relative">
                
                <div class="shadow position-relative bg-white">
                    <img :src="pasta" class="d-none d-md-block m-md-3 m-lg-5">         
                </div>
                <div class="media-body">
                    <div class="d-flex justify-content-center">    
                            <items></items>
                            <items></items>            
                    </div>
                    <div class="d-flex justify-content-center">    
                            <items></items>
                            <items></items>              
                    </div>
                </div>
             </div>
        </div>
        
    </section>
</template>

<script>
    import pasta from './../../assets/images/product/pasta.png'
    import items from './items.vue'
    import item from './item.vue'

    export default {
        name: "producto",
        data() {
            return {
                pasta:pasta
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

@media(min-width: 768px) {
        .mercado_letra{
        font-size: 32px;
    }
}

    
</style>