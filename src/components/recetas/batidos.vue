<template>
    <div class="tab-pane fade" id="batidos" role="tabpanel">
        <receta :category="'Batidos'" />
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