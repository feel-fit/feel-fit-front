<template>
    <div>
        <receta :category="'Desayunos'" />
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