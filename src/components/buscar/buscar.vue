<template>
    <div>
        <div class="container">
            <div class="row justify-content-center row">
                <div class="col-12 col-sm-12 col-md-10">
                    <div class="float-right">
                        <!-- <whatsapp></whatsapp> -->
                    </div>
                    <div class="row justify-content-center mt-5">
                        <div class=" col-sm-10">
                            <div class="text-center mb-3">
                                <div class="mb-5">
                                    <span class="buscar h2 font-italic font-weight-bold">Buscar</span>
                                    <!-- <hr class="border-dark d-md-none mt-0 w-25"> -->
                                </div>
                                <div class="shadow caja_buscar">
                                	<div class="row justify-content-center">
                                		<div class="col-10">
                                			<div class="row">
                                			    <div class="col-12">
                                			        <input class="inputBuscar form-control border-0" type="search" placeholder="Que te apetece?">
                                			    </div>
                                			    <div class="col-12 text-right">
                                			        <span class="font-weight-bold text-dark"><small>PRODUCTOS</small></span>
                                			    </div>
                                			    <div class="col-12">
                                			        <div class="row align-items-center">
                                			            <div class="col"><img src="../../assets/images/catalogo/wakeup.png" alt="Papas" class="card-img-top p-3"></div>
                                			            <div class="col"><span>Choco One Pack</span></div>
                                			            <div class="col-3"><button type="button" class="close p-2" aria-label="Close">
                                			                <span aria-hidden="true">&times;</span>
                                			            </button></div>
                                			        </div>
                                			    </div>
                                                <div class="col-12">
                                			        <div class="row align-items-center">
                                			            <div class="col"><img src="../../assets/images/catalogo/wakeup.png" alt="Papas" class="card-img-top p-3"></div>
                                			            <div class="col"><span>Choco One Pack</span></div>
                                			            <div class="col-3"><button type="button" class="close p-2" aria-label="Close">
                                			                <span aria-hidden="true">&times;</span>
                                			            </button></div>
                                			        </div>
                                			    </div>
                                                <div class="col-12">
                                			        <div class="row align-items-center">
                                			            <div class="col"><img src="../../assets/images/catalogo/wakeup.png" alt="Papas" class="card-img-top p-3"></div>
                                			            <div class="col"><span>Choco One Pack</span></div>
                                			            <div class="col-3"><button type="button" class="close p-2" aria-label="Close">
                                			                <span aria-hidden="true">&times;</span>
                                			            </button></div>
                                			        </div>
                                			    </div>
                                			</div>
                                		</div>
                                	</div>
                                </div>
                            </div>
                            <div class="objeto">
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
    },
    // mounted(){
    //     function mouseOver() {
    //     document.getElementById("demo").style.color = "red";
    //     }

    //     function mouseOut() {
    //     document.getElementById("demo").style.color = "black";
    //     }
    // }
}
</script>
<style scoped>
.caja_buscar{
    border-radius: 1rem;
}
.inputBuscar:focus{
    border-color: white;
}



</style>