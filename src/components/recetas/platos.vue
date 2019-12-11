<template>
    <div class="tab-pane fade" id="platos" role="tabpanel">
        <receta :category="'Platos fuertes'" />
    </div>
</template>

<script>
import receta from './receta/receta.vue';
export default {
    components:{
        receta
    }
}
</script>

<style scoped>

</style>