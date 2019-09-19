import Vue from 'vue'
import Vuex from 'vuex'
import api from './plugins/api'
import { login, credentialsGuestToken, GuestToken, clearUserToken, clearGuestToken } from './plugins/auth'
import createPersistedState from 'vuex-persistedstate'
import sortBy from 'lodash/sortBy'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // =data
    me: {},
    categories: [],
    departments: [],
    cities: [],
    brands: [],
    slides: [],
    products_in_cart: [],
    open_cart: false,
    open_menu: false,
    cart: {
      items: [],
    },
    data_paying:{
      cliente:{},
      address:{},
      

    },
    tool_paying:{
      costSend:0,
      discount:0,
    }
  },
  getters: {
    // =computed
  },
  actions: {
    // =methods
    // login
    getMe ({ state, commit }) {
      api.Users().getOne('me').then(response => {
          commit('set_me', response.data.data)
        }
      ).catch(() => {
        clearUserToken()
      })
    },
    getLoginFacebook ({ state, commit, dispatch }, data) {
      api.Users().facebook(data).then(response => {
          login(response.data.data.access_token)
          dispatch('getMe')
        }
      )
    },
    getLogin ({ state, commit, dispatch }, token) {
      login(token)
      dispatch('getMe')
    },
    getSlides ({ state, commit }) {
      api.Sliders().getAll().then(response => {
        commit('set_slides', response.data.data)
      })
    },
    getDepartments({ state, commit }){
      api.Departments().getAll().then(response => {
        commit('set_departments', response.data.data)
      })
    },
    getCities({ state, commit }){
      api.Cities().getAll().then(response => {
        commit('set_cities', response.data.data)
      })
    },
    checkToken ({ state, commit, dispatch }) {
      api.Token().checkToken().then(() => {
        console.log('valid token')
      }).catch(() => {
        clearGuestToken()
        clearUserToken()
        dispatch('setGuestToken')
      })
    },
    setGuestToken ({ state, commit, dispatch }) {
      api.Token().getOne(credentialsGuestToken()).then(response => {
        GuestToken(response.data.access_token)
        dispatch('checkToken')
      })
    },
    // categorias
    getAllCategories ({ state, commit, dispatch }) {
      api.Categories().getAll().then(response => {
        commit('set_categories', response.data.data)
      })
    },
  },
  mutations: {
    open_cart (state, data) {
      state.open_cart = data
    },
    open_menu (state, data) {
      state.open_menu = data
    },
    set_me (state, data) {
      state.me = data
    },
    set_products_in_cart (state, data) {
      //data = data.filter(product => product.id)
      state.products_in_cart = data
    },
    setCart(state, data){
      state.cart = data
    },
    addToCart (state, data) {
      let product = state.cart.items.find(item => {
        if (item.id === data.id) return item
      })
      if (product) {
        // producto existe ya en el carrito
        if (!data.quantity) {
          product.quantity++
        } else {
          product.quantity = data.quantity
        }
      } else {
        Vue.set(data, 'quantity', ( data.quantity || 1 ))
        state.cart.items.push(data)
      }
      state.open_cart = true
    },
    removeProductCart (state, data) {
      state.cart.items = state.cart.items.filter(item => {
        return item.id !== data.id
      })
    },
    set_slides (state, data) {
      state.slides = data
    },
    set_departments(state, data){
      state.departments = data
    },
    set_cities(state, data){
      state.cities = data
    },
    set_categories (state, data) {
      state.brands = sortBy(data.filter(item => item.type_category_id === 2), 'name')
      state.categories = data.filter(item => item.type_category_id === 1)
    },
    dataPaying (state, data) {
      state.data_paying = data
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
