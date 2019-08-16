<template>
    <div>
        <div class="container">
            <div class="row justify-content-center row">
                <div class="col-12 col-sm-12 col-md-10">
                    <div class="float-right">
                        <!-- <whatsapp></whatsapp> -->
                    </div>
                    <div class="row justify-content-center">
                        
                        <div class=" col-sm-10">
                            <div class="text-center mb-3">
                                <div class="mb-5">
                                    <span class="h2 font-italic">Buscar</span>
                                    <hr class="border-dark d-md-none mt-0 w-25">
                                </div>
                                <input class="form-control" type="search" placeholder="Que te apetece?">
                            </div>
                            <div class="card shadow bg-white  rounded d-flex">
                                <img src="../../assets/images/catalogo/wakeup.png" alt="Papas" class="card-img-top p-3">
                                <div class="card-body">
                                <h6 class="Card-title font-italic font-weight-bold h6">Crema de maní(Wake up)</h6>
                                <p class="card-text"><small>Choco One Pack</small></p>
                                <p class="card-text"><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga ullam saepe, in ad dolorem autem ab culpa.</small></p>
                                <p class="card-text h6 text-right mr-3 small"><strong>$15.000</strong></p>
                                <p class="card-text h6 text-left mt-n4 mr-3 mb-1 small"><a href="#">Ver detalles</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import whatsapp from '../../components/home/whatsapp'

export default {
    name:"buscar",
    data(){
        return{

        }
    },
    components:{
        whatsapp
    }
}
</script>
<style scoped>

</style>