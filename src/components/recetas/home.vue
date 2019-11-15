<template>
    <div class="tab-pane fade in show active position-relative" id="home" role="tabpanel">
            <img src="../../assets/images/recetas/18.png" class="img-fluid w-100">
            <div class="informacion-inicio p-5 d-none d-lg-block">
                <img src="../../assets/images/recetas/pp.png" class="img-fluid"/>
                <h1 class="text-dark mt-5">Estefania C.</h1>
                <h6 class="text-muted">ADMINISTRADORA FEEL FIT</h6>
                <p class="text-dark mt-4">
                    Hola, me llamo Estefania. Soy apasionada de la cocina. La pasión por la gastronomía despertó en mí y ya no hubo
                    marcha atrás
                </p>
                <img src="../../assets/images/recetas/firma.png" class="img-fluid mt-5"/>
                <div>
                    <img src="../../assets/images/recetas/iconos_redes/group_12.svg" class="img-fluid"/>
                    <img src="../../assets/images/recetas/iconos_redes/group_13.svg" class="img-fluid mx-2"/>
                    <img src="../../assets/images/recetas/iconos_redes/group_18.svg" class="img-fluid"/>
                </div>
            </div>

            <div class="receta-default d-flex align-items-center">
                <img src="../../assets/images/recetas/pp.png" class="img-fluid imagen-receta mr-5">
                <div>
                    <button class="btn bg-white mb-3">Postres</button>
                    <h3 class="text-white">Postre con OREO y SIN HORNO</h3>
                    <h3 class="text-white">(Para los  verdaderos amantes de las oreaos)</h3>
                    <h6 class="text-white">ESTEFANIA C. | PUBLICADO HACE 8 MINT</h6>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>

.imagen-receta{
    width: 100px;
    height: 100px;
}

.informacion-inicio{
    width: 360px;
    position:absolute;
    z-index: 200;
    top: 10%;
    left:70%;
    background-color: white;
    border-radius: 1rem;
}

.receta-default{
    position: absolute;
    z-index: 200;
    top: 60%;
    left: 10%;
    color: white;
}

</style>