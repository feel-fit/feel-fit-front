<template>
    <div>
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