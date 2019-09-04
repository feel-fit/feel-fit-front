import axios from 'axios'
import {setAxiosHeader} from './auth'
import AWN from 'awesome-notifications'
import map from 'lodash/map'


let notifier = new AWN({position: 'top-rigth'})

setAxiosHeader()

console.log(axios.defaults.baseURL)

function Categories(url = 'categories') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    getBySlug:(slug)=> axios.get(`${url}?url=${slug}`),
    products: (id) => {
      return {
        getAll: () => axios.get(`${url}/${id}/products?pagination=false`),
        getPaginate: () => axios.get(`${url}/${id}/products`),
      }
    }
  }
}

function CheckUpdate(value, old) {
  if (typeof old !== 'undefined' && old != value) return true
  return false
}

function Products(url = 'products') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getBySlug:(slug)=> axios.get(`${url}?slug=${slug}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

function Any(url) {
  return {
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
  }
}

function Token(url = 'oauth/token') {
  return {
    getOne: (credentials) => axios.post(url, credentials),
    checkToken: () => axios.get('oauth/check-token')
  }
}

function Users(url = 'users') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    checkEmail: (toCheck) => axios.post(`${url}/check-email`, toCheck),
    login: (toLogin) => axios.post('oauth/login', toLogin),
    register: (toRegister) => axios.post('oauth/register', toRegister),
    facebook: (toLogin) => axios.post('oauth/facebook', toLogin)
  }
}

// responders

function SuccessResponse(response) {
  notifier.success(response.data.message)
}

function ErrorResponse(response) {
  if (typeof response.response.data.error === 'string') {
    notifier.alert(response.response.data.error)
  } else {
    map(response.response.data.error, (item, index) => {
      notifier.alert(index + ': ' + item[0])
    })
  }
}

export default {
  CheckUpdate,
  Categories,
  ErrorResponse,
  Products,
  Any,
  SuccessResponse,
  Token,
  Users
}
