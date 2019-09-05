<template>
 <div>
   <div :class="{'open':open}" class="bg-white shadow" id="sidebarCar-wrapper">
     <div class="container">
       <div class="row">
         <div class="col">
           <div class="mb-5 mt-5">
             <span class="h1 font-italic font-weight-bold text-center pb-1 text-primary">Tu carrito</span>
             <p class="font-weight-bold text-dark">Tiene 4 productos</p>
           </div>
         </div>
         <div class="col-auto">
           <a @click="open_menu" href="#" class="toggle text-body">
             <font-awesome-icon class="m-4 icon" icon="times"></font-awesome-icon>
           </a>
         </div>
       </div>
     </div>
     <div class="list-group list-group-flush">
       <div class="container">
         <div class="row bg-light">
           <div class="col-11 ml-3 mt-3">
             <!-- Fila de carrito - producto adquirido -->
             <div v-for="item in cart.items" :key="item.id" class="row align-items-center bg-white justify-content-between shadow mb-4" style="border-radius:1rem;">
               <div class="col-4 px-0">
                 <div class="card border-0">
                   <v-lazy-image  class="img-fluid card-img-top rounded-left"
                                  :src="item.images.length > 0 ? item.images[0].url : imageDefault"
                                  :src-placeholder="imageDefault"
                   />
                 </div>
               </div>
               <div class="col-8">
                 <div class="row align-items-center">
                   <div class="col-7 mt-n3">
                     <span class="h6 font-weight-bold font-italic text-primary">{{item.name}}</span>
                   </div>
                   <div class="col-5 d-none d-md-block">
                     <button type="button" class="close p-2" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="col-6">
                     <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                       <div class="btn-group mr-2" role="group" aria-label="Second group">
                         <button type="button" class="bg-white border">-</button>
                         <button type="button" class="bg-white border">{{ item.quantity }}</button>
                         <button type="button" class="bg-white border">+</button>
                       </div>
                     </div>
                   </div>
                   <div class="col-6"><span class="h6 font-weight-bold text-dark">{{ item.price }}</span></div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <!-- <div class="car_footer" style="height: 432px;"></div> -->
         <div class="row h-50 overflow-auto">
           <div class="col-12 mt-5">
             <span class="h4 font-weight-bold font-italic text-dark">Politícas de envío</span><br><br>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil voluptatum quas harum a
               esse nulla libero dolorem hic consequatur, sit mollitia eaque. Recusandae ea esse saepe quia incidunt.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
             <ul>
               <li>
                 Dolores aut blanditiis reprehenderit, aperiam praesentium eos! Dolore, repellendus. Vero hic distinctio,
                 perspiciatis at esse eius dolor, ipsum perferendis nesciunt omnis optio?
               </li>
               <li>
                 Dolores aut blanditiis reprehenderit, aperiam praesentium eos! Dolore, repellendus. Vero hic distinctio,
                 perspiciatis at esse eius dolor, ipsum perferendis nesciunt omnis optio?
               </li>
             </ul>
           </div>
         </div>
         <div class="row border-top pt-4">
           <div class="col-6">
             <span class="font-italic d-block mb-2 font-weight-bold" style="color:#CCCCCD;">Precio Total</span>
             <span class=" font-weight-bold font-italic text-dark d-block h4">{{total | money}}</span>
           </div>
           <div class="col-6">
             <span class="btn btn-primary p-3 text-white font-italic font-weight-bold" style="border-radius:30px;">Ir a Pagar</span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
import logo from './../assets/images/logo_menu.svg'
import sumBy from 'lodash/sumBy'
import imageDefault from './../assets/images/producto.png'

export default {
  name: 'slider',
  data () {
    return {
      images: {
        logo: logo,
      },
      imageDefault
    }
  },
  mounted () {
  
  },
  computed: {
    open () {
      return this.$store.state.open_cart
    },
    cart(){
      return this.$store.state.cart
    },
    total(){
      return sumBy(this.cart,item=>{
        return item.quantity * item.price
      })
    }
  },
  methods:{
    open_menu () {
      this.$store.commit('open_cart', !this.open)
    },
  }
}
</script>
<style scoped lang="scss">
  #sidebarCar-wrapper {
    min-height: 95vh;
    margin-right: 0;
    -webkit-transition: margin .25s ease-out;
    -moz-transition: margin .25s ease-out;
    -o-transition: margin .25s ease-out;
    transition: margin .25s ease-out;
    display: none;
    position: fixed;
    background: white;
    z-index: 100000;
  }
  #sidebarCar-wrapper .sidebar-heading {
  }
  #sidebarCar-wrapper .list-group {
    width: 20rem;
  }
  #sidebarCar-wrapper {
    margin-right: -20rem;
    &.open {
      margin-right: 0;
      display:block
    }
  }
  @media (min-width: 768px) {
    #sidebarCar-wrapper {
      margin-right: -20rem;
      &.open {
        margin-right: 0;
      }
    }
  }
</style>
