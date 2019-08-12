<template>
           
    <div>
        <div class="col-6">
            <img :src="pasta" alt="food" class="img-fluid w-100">
            
        </div>
        <div class="col-6">
            <spam>Refigerados & canaelados</spam>
        </div>
    </div>
    
</template>

<script>
    import pasta from './../../assets/images/product/pasta.png'

    export default {
        name: "item",
        data() {
            return {
                pasta:pasta
            }
        }
    
    }
</script>

<style scoped lang="scss">
.fondo_catalogo{
    height: 78%;
    width: 4rem;
    top: 12%;
    border-radius: .7rem;
    right: -22px;
}
.oval_mercado{
    left: 89%;
    top: 9%;
}

</style>

