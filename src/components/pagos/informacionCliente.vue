<template>
        <div class="container" id="informacion-cliente">
            <div class="row">
                <span  class="h3 font-italic text-primary font-weight-bold titulo">
                    Informaci&oacute;n del cliente
                </span>
            </div>
            <div class="row mb-5">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nombreCompleto" >NOMBRE COMPLETO</label>
                            <input type="text" class="form-control" id="nombreCompleto" v-model="name"  name="name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cedula">CEDULA</label>
                            <input type="text" class="form-control" id="cedula" v-model="identification" name="identification">
                        </div>

                        <div class="form-group col-md-12">
                            <label for="direccion">DIRECCION</label>
                            <input type="text" class="form-control" id="direccion" v-model="address" name="address">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="departamento">DEPARTAMENTO</label>
                            <select id="departamento" class="form-control" v-model="department" name="department">
                                <option v-for="department in departments">{{department.name}}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="cidudad">CIUDAD</label>
                            <input type="text" class="form-control" id="cidudad" v-model="city" name="city">
                        </div>
                        <div class="form-group col-md-12">
                            <label for="email">CORREO</label>
                            <input type="email" class="form-control" id="email" v-model="email" name="email">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="telefono">TELEFONO</label>
                            <input type="text" class="form-control" id="telefono" v-model="phone" name="photo">
                        </div>
                        <div class="form-group col-md-12">
                            <div class="row">
                                <div class="col-sm-6  align-self-center ">
                                    <a href="#" @click="back" class="text-dark text-decoration-none"><font-awesome-icon icon="arrow-left" size="xs"/> Regresa a comprar</a>
                                </div>
                                <div class="col-sm-6  text-right">
                                    <button @click="next" type="submit" class="btn btn-primary text-white  btn-lg w-md-100 ">CONTINUA A ENVIO</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

</template>

<script>

    import api from '../../plugins/api'

    export default {
        name: "informacionCliente",
        data() {
            return {
                departments: [],
                name:'',
                identification:'',
                address:'',
                department:'',
                city:'',
                email:'',
                phone:'',
            }
        },
        created: function (){
            api.Departments().getAll().then(result => {
               this.departments = result.data.data;
            }).catch(error => {
                console.log(error);
            });
        },
        methods:{
            next(){
                $('#envios-tab').tab('show');
            },
            back(){

            }
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
