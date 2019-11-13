<template>
  <section>
    <div class="container-fluid">
       <h1 class="title-recetas text-primary font-italic">Nuetras Recetas</h1>
       <nav class="navbar navbar-expand-lg nav-pills">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <font-awesome-icon icon="bars" class="icon"></font-awesome-icon>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#desayunos">BRUNCH Y DESAYUNOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#entradas">ENTRADAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#platos">PLATOS FUERTES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">POSTRES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ENSALADAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ARTICULOS DE INTERÉS</a>
                    </li>
                </ul>
            </div>
        </nav>
    
        <div id="home">
            home
        </div>

        <div id="desayunos">
            home
        </div>

        <div id="entradas">
            home
        </div>

        <div id="platos">
            home
        </div>

    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.title-recetas{
    font-size: 2.3rem;
    margin-top:110px;
    margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}

.nav-item{
    margin: 5px;
    font-size: 12px;
    letter-spacing: 5px;
}

.nav-item{
    color: #7f7f7f;
}

.active{
    text-decoration: line-through ;
    color: #27D8DB !important;
}

</style>