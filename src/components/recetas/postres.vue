<template>
    <div class="tab-pane fade" id="postres" role="tabpanel">
        <receta :category="'Postres'" />
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