<template>
    <div>
        <div class="row position-relative bg-white mx-4 my-2">
            <div class="fondo_catalogo position-absolute bg-info"></div>        
            <div class="bg-white position-relative row shadow">
                <div class="oval_mercado position-absolute d-md-block"><img src="./../../assets/images/conocenos/oval.svg" class="w-50"></div>
                <item></item>
            </div>
        </div>
    </div>
</template>

<script>
    import pasta from './../../assets/images/product/pasta.png'
    import item from './item.vue'

    export default {
        name: "items",
        data() {
            return {
                pasta:pasta
            }
        },
        components: {
            item
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

