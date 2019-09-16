<template>
        <div class="container" id="informacion-cliente">
            <div class="row">
                <span  class="h3 font-italic text-primary font-weight-bold titulo">
                    Informaci&oacute;n del cliente
                </span>
            </div>
            <div class="row mb-5">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nombreCompleto" >NOMBRE COMPLETO</label>
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
                        <div class="form-group col-md-12">
                            <div class="row">
                                <div class="col-sm-6  align-self-center ">
                                    <span class="text-dark "><font-awesome-icon icon="arrow-left" size="xs"/> Regresa a comprar</span>
                                </div>
                                <div class="col-sm-6  text-right">
                                    <button type="submit" class="btn btn-primary text-white  btn-lg w-md-100 ">CONTINUA A ENVIO</button>
                                </div>
                            </div>
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
               this.cities = result.data.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>

<style scoped>
    .caja{
        border:solid red;
    }

    label{
        font-size: 0.7em;
    }

    .titulo{
        margin-top: 5rem;
        margin-bottom: 2.5rem ;
    }
</style>
