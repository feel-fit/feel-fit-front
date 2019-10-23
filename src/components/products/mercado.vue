<template>
  <section class="mx-4 ">
    <div class="container mercado mb-5 mx-auto position-relative bg-white">
      <div class="row">
        <div class="col-md-9 mx-auto">
          <div class="fondo position-absolute bg-info d-none d-md-block shadow"></div>
          <div class="row d-flex justify-conted-around position-relative bg-white shadow" style="border-radius:1rem;">
            <div></div>
            <div class="col-8 col-md-6">
              <img :src="getImagen" alt="food" class="img-fluid">
            </div>
            <div class="col-4 col-md-6 mt-5">
              <div class="oval_mercado position-absolute d-none d-md-block">
                <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
              </div>
              <h3 class="mercado_letra mb-0 font-italic mt-5 text-capitalize" style="color: #00D0D2;"><strong>{{first}}</strong></h3>
              <span class="mercado_letra h5 mb-0 font-italic text-capitalize" style="color: #CCCCCD;"><strong>{{second}}</strong></span>
              <hr class="hr_mercado ml-0 mt-1 border-info">
              <!--<hr class="hr_producto">-->
              <div class="ml-md-0 ml-md-5 oval2_mercado position-absolute">
                <img src="./../../assets/images/conocenos/oval.svg" class="w-50">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import aceites from './../../assets/images/catalogo/aceites.png'
import chocolates from './../../assets/images/catalogo/chocolates.png'
import granolas from './../../assets/images/catalogo/granolas.png'
import mercado from './../../assets/images/catalogo/mercado.png'
import ninos from './../../assets/images/catalogo/ninos.png'
import panaderia from './../../assets/images/catalogo/panaderia.png'
import refrigerados from './../../assets/images/catalogo/refrigerados.png'
import snacks from './../../assets/images/catalogo/snacks.png'
import suplementos from './../../assets/images/catalogo/suplementos.png'
import vinagres from './../../assets/images/catalogo/vinagres.png'

import words from 'lodash/words'

export default {
  name: 'mercado',
  props: ['title'],
  data () {
    return {
      aceites,
      chocolates,
      granolas,
      mercado,
      ninos,
      panaderia,
      refrigerados,
      snacks,
      suplementos,
      vinagres,
      imgDefault:aceites,
      first: '',
      second: ''
    }
  },
    computed: {
       getImagen(){
         switch(this.first){
           case 'aceites':
            return this.imgDefault = this.aceites;
           break
           case 'chocolates':
           return this.imgDefault = this.chocolates;
           break
           case 'granolas':
           return this.imgDefault = this.granolas;
           break
           case 'mercado':
           return this.imgDefault = this.mercado;
           break
           case 'niños':
           return this.imgDefault = this.ninos;
           break
           case 'panadería':
           return this.imgDefault = this.panaderia;
           break
           case 'refrigerados':
           return this.imgDefault = this.refrigerados;
           break
           case 'snacks':
           return this.imgDefault = this.snacks;
           break
           case 'suplementos':
           return this.imgDefault = this.suplementos;
           break
           case 'vinagres':
           return this.imgDefault = this.vinagres;
           break
           default:
           return this.imgDefault
         }
       }
    },
  watch: {
    title (value) {
      let names = value.split(" y ");
      if (names.length > 1) {
        this.second = '& '+names[1]
      }
      this.first = names[0]
      return value
    },
  },
}
</script>
<style scoped>
  .mercado_letra{
    font-family: "Varela Round", serif;
    font-size:   22px;
  }

  .hr_mercado{
    width: 1.5rem;
  }

  .fondo{
    height:        78%;
    width:         4rem;
    top:           12%;
    border-radius: .7rem;
    right:         -16px;
  }

  .oval_mercado{
    left: 89%;
    top:  -15%;
  }

  .oval2_mercado{
    left:   -24%;
    bottom: 21%;
  }

  .mercado{
    margin-top: 2rem;
  }

  @media (min-width: 768px){
    .mercado_letra{
      font-size: 32px;
    }
  }
</style>
