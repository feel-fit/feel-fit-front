<template>
    <!--footer-->
    <section class="footer  h-auto">
        <div class="container-fluid position-relative">
            <img src="../assets/images/conocenos/logo2.svg" class="d-block mb-n4 mx-auto" alt="logo" >
            <div class="row justify-content-around pt-md-4" style="background-color: #F6F6F6">

                <div class="d-none d-md-block col-md-2 text-dark">

                    <h6 class="footer_h6 mb-0 text-dark"><strong>TELÉFONO:</strong></h6>
                    <p class="mb-0">(311) 374 55 88</p>
                    <h6 class="footer_h6 mb-0 text-dark"><strong>DIRECCIÓN:</strong></h6>
                    <p>Calle 5ta A norte #18A-88 local 32</p>

                </div>
                <div class="d-none d-md-block col-md-3 text-md-center my-auto">

                    <a target="_blank" href="https://facebook.com/feelfitmarket"><img src="../assets/images/facebook.svg" alt="Facebook" class="footer_facebook mr-3"></a>
                    <a target="_blank" href="https://instagram.com/feelfitmarket"><img src="../assets/images/instagram.svg" alt="Instagram" class="footer_instagram ml-3 mx-4"></a>
                    <a  href="mailto:feelfitmarket@gmail.com"><img src="../assets/images/mail.svg" alt="Email" class="footer_mail ml-3"></a>

                </div>
                <div class="col-12 text-center mt-5 mt-md-0 text-md-right col-md-2 mb-3">
                    <ul style="list-style:none;" class="pl-0">
                        <router-link  class="text-dark" to="/conocenos"><li class="text-dark">Conócenos</li></router-link>
                        <router-link  class="text-dark" to="/contactanos"><li class="text-dark">Contacto</li></router-link>
                        <a href="#" data-toggle="modal" data-target="#terminosModal" ><li class="text-dark">Términos y condiciones</li></a>
                        <a href="#" data-toggle="modal" data-target="#politicasEnvioModal"><li class="text-dark">Políticas de envio</li></a>
                        <a href="#" data-toggle="modal" data-target="#politicasCalidadModal"><li class="text-dark">Políticas de calidad</li></a>
                    </ul>
                </div>
            </div>
            <div class="justify-content-around pt-3 row text-center text-md-left">
                <div class="col-12 col-md-6">
                    <a href="#"><img src="../assets/images/tarjetas.svg" class="w-50"></a>
                </div>
                <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end mr-md-2">
                    <p class="align-self-end text-dark"><small>Copyright 2019. LUSUAU S.A.S</small></p>
                </div>
            </div>
            <img src="../assets/images/fresa_home.png" class="fresa_home_footer w-25  d-none position-absolute">
        </div>
    </section>
</template>

<script>
export default {
  name: 'foot'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer{
  padding-top: 0;
  &>.container-fluid>img{
    margin-top: -2.1rem !important;
  }
}

</style>
