<template>
    <section class="mercado">
        <div class="contain border">
            <div class="row d-flex justify-conted-around">
                <div class="col-6">
                    <img :src="food" alt="food">
                </div>
                <div class="col-6">
                    <h2>Mercado sano</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import food from './../../assets/images/product/image.svg'

    export default {
        name: "portada",
        data() {
            return {
                food:food,
            }
        },
    }
</script>

<style scoped>

    
</style>
