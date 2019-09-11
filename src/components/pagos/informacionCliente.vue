<template>
        <div class="container-fluid informacionClinete">
            <div class="row">
                <div class="col">
                    <span  class="letra_catalogo position-absolute font-italic font-weight-bold font-big">
                        Informacion del cliente
                    </span>
                </div>
            </div>
            <div class="row m-5">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nombreCompleto">NOMBRE COMPLETO</label>
                            <input type="text" class="form-control" id="nombreCompleto" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cedula">CEDULA</label>
                            <input type="text" class="form-control" id="cedula" >
                        </div>

                        <div class="form-group col-md-12">
                            <label for="direccion">DIRECCION</label>
                            <input type="text" class="form-control" id="direccion" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="departamento">DEPARTAMENTO</label>
                            <select id="departamento" class="form-control">
                                <option selected>Ciudad</option>
                                <option v-for="city in cities">{{city.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cidudad">CIUDAD</label>
                            <input type="text" class="form-control" id="cidudad">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="email">CORREO</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="telefono">TELEFONO</label>
                            <input type="text" class="form-control" id="telefono">
                        </div>
                        <div class="col-md-12 text-right">
                            <button type="submit" class="btn btn-primary text-white  btn-lg my-4 w-md-50 ">CONTINUA A ENVIO</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>

    import api from '../../plugins/api'

    export default {
        name: "informacionCliente",
        data() {
            return {
                cities: []
            }
        },
        created: function (){
            api.Departments().getAll().then(result => {
               console.log(result.data.data);
            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
.letra_catalogo{
    color:#00D0D2;
    font-size:20px;
}


.font-big {  font-size: 1.5em; }
.font-medium {  font-size: 0.8em; }
label {  font-size: 0.8em; }

.informacionClinete{
    background-color: white;
}
</style>
