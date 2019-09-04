<template>
    <section class="bienvenidos d-flex align-items-center flex-column justify-content-center "
             :style="{ backgroundImage: `url('${background}')` }">
        <img :src="logo" alt="logo" class=""><br/>
        <button class="btn btn-primary text-white  btn-lg my-4 w-md-50"><i>Comprar ahora </i>&nbsp;&nbsp;<font-awesome-icon
                icon="arrow-right" size="xs"/>
        </button>

        <a class="mt-1" href="#"><img :src="scroll" alt="Scroll" class="d-none d-md-inline-block"
                                      data-target="#section1"></a>
    </section>
</template>

<script>
    import logo from './../../assets/images/conocenos/logo_conocenos.svg'
    import scroll from './../../assets/images/scroll.svg'
    import background from './../../assets/images/img_bienvenido.png'

    export default {
        name: "portada",
        data() {
            return {
                background: background,
                logo: logo, scroll: scroll
            }
        },
    }
</script>

<style scoped>
    .bienvenidos {
        background-size: cover;
        height: 100vh;
        overflow: hidden;
        width: 100vw;
    }
</style>
