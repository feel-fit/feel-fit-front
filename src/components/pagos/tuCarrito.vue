<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 bg-white p-5 ">
                <h1 class="h1 font-italic font-weight-bold text-left text-primary">Tu carrito</h1>
                <span class="texto-resumen text-dark font-weight-bold">Resumen del pedido</span>
            </div>
        </div>
        <div class="row list-car">
            <div class="col-sm-12 mt-3">
                <div class="row my-li-own mb-3" v-for="item in cart.items" :key="item.id">
                    <div class="col-sm-2 px-0">
                        <div class="card border-0">
                            <v-lazy-image class="img-fluid card-img-top rounded-left"
                                          :src="item.images.length > 0 ? item.images[0].url : imageDefault"
                                          :src-placeholder="imageDefault"/>
                        </div>
                    </div>
                    <div class="col-sm-4 div-va" align="right">
                        <p class="m-0 font-weight-bold">
                            {{item.name}}
                        </p>
                    </div>
                    <div class="col-sm-2 div-va">
                        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-secondary rounded-0 br-left"
                                    @click="item.quantity--">-
                            </button>
                            <button class="btn btn-outline-secondary">{{item.quantity}}</button>
                            <button type="button" class="btn btn-outline-secondary rounded-0 br-right"
                                    @click="item.quantity++">+
                            </button>
                        </div>
                    </div>
                    <div class="col-sm-3 div-va">
                        <p class="m-0 price font-weight-bold">
                            {{item.price | money}}
                        </p>
                    </div>
                    <div class="col-sm-1 div-va pl-0">
                        <button type="button" class="close" aria-label="Close"
                                @click="remove_product_cart(item)">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row bg-white mt-4">
            <div class="col-sm-12 p-4">
                <div class="row pt-3 pb-1 px-5">
                    <div class="col-6">
                        <span class="text-right font-weight-bold">Subtotal</span>
                    </div>
                    <div class="col-6 text-right">
                        <span class="text-left  font-weight-bold">{{total | money}}</span>
                    </div>
                </div>
                <div class="row pb-1 px-5">
                    <div class="col-6">
                        <span class="text-right  font-weight-bold">Costo envio</span>
                    </div>
                    <div class="col-6 text-right">
                        <span class="text-left  font-weight-bold">{{total | money}}</span>
                    </div>
                </div>
                <div class="row pb-1 px-5">
                    <div class="col-6">
                        <span class="text-right  font-weight-bold">Descuento</span>
                    </div>
                    <div class="col-6 text-right">
                        <span class="text-left  font-weight-bold">{{total | money}}</span>
                    </div>
                </div>
                <div class="row pb-1 px-5">
                    <div class="col-6">
                        <span class="text-right  font-weight-bold">Precio Total</span>
                    </div>
                    <div class="col-6 text-right">
                        <span class="text-left font-italic  font-weight-bold h5 text-dark">{{total | money}}</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import imageDefault from '../../assets/images/producto.png';
    import sumBy from 'lodash/sumBy';

    export default {
        name: "tuCarrito",
        data: function () {
            return {
                listaCarrito: [],
                imageDefault,
            };
        },
        computed: {
            open() {
                return this.$store.state.open_cart
            },
            cart() {
                return this.$store.state.cart
            },
            total() {
                return sumBy(this.cart.items, item => {
                    return item.quantity * item.price
                })
            },
            quantityCart() {
                return sumBy(this.$store.state.cart.items, item => {
                    return item.quantity
                })
            }
        },
        methods: {
            open_menu() {
                this.$store.commit('open_cart', !this.open)
            },
            remove_product_cart(item) {
                this.$store.commit('removeProductCart', item)
            }

        }
    }
</script>

<style scoped>

    .caja {
        background-color: #ffc215;
        border: red solid;
    }

    .my-li-own {
        background-color: white;
        border-radius: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    }

    .my-li-own div {
        color: #20d6d9;
    }

    .div-va {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .br-left {
        border-top-left-radius: 1.5rem !important;
        border-bottom-left-radius: 1.5rem !important;
    }

    .br-right {
        border-top-right-radius: 20rem !important;
        border-bottom-right-radius: 20rem !important;
    }

    .price {
        color: black;
    }

    .list-car {
        height: 30rem;
        overflow-y: scroll;
    }

</style>
