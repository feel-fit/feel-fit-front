import axios from 'axios'
import { setAxiosHeader } from './auth'

import map from 'lodash/map'

setAxiosHeader()


function Addresses (url = 'addresses') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

function ResetPassword(url = 'password/email'){
  return {
    getReset: (email) => axios.post(url,email,{
      headers: {
        'Content-Type': 'application/json',
      }})
  }
}

function Categories (url = 'categories') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    getBySlug: (slug) => axios.get(`${url}?url=${slug}`),
    products: (id) => {
      return {
        getAll: () => axios.get(`${url}/${id}/products?pagination=false`),
        getPaginate: () => axios.get(`${url}/${id}/products`)
      }
    },
    getProductsPagination: (url_pagination) => axios.get(url_pagination)
  }
}

function CheckUpdate (value, old) {
  if (typeof old !== 'undefined' && old != value) return true
  return false
}

function Products (url = 'products') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    search: (tosearch) => axios.post(`${url}/search?search=${tosearch}`)
  }
}

function Messages (url = 'messages') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

function Any (url) {
  return {
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url)
  }
}

function Token (url = 'oauth/token') {
  return {
    getOne: (credentials) => axios.post(url, credentials),
    checkToken: () => axios.get('oauth/check-token')
  }
}

function Users (url = 'users') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    checkEmail: (toCheck) => axios.post(`${url}/check-email`, toCheck),
    checkDocumento: (toCheck) => axios.get(`${url}?identification=${toCheck}`),
    login: (toLogin) => axios.post('oauth/login', toLogin),
    register: (toRegister) => axios.post('oauth/register', toRegister),
    facebook: (toLogin) => axios.post('oauth/facebook', toLogin),
    getMe: () => axios.get(`${url}/me`)
  }
}

function Shopping (url = 'shoppings') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

function DetailShopping (url = 'detail-shoppings') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

// responders

function SuccessResponse (response) {
  notifier.success(response.data.message)
}

function ErrorResponse (response) {
  if (typeof response.response.data.error === 'string') {
    return response.response.data.error
  } else {
    return map(response.response.data.error, (item, index) => {
      return item
    })
  }
}

function Cities (url = 'cities') {
  return {
    getAll: () => axios.get(`${url}?pagination=false`)
  }
}

function Departments (url = 'departments') {
  return {
    getAll: () => axios.get(`${url}?pagination=false`)
  }
}

function Discounts (url = 'discounts') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`),
    Users: (id) => {
      return {
        getAll: () => axios.get(`${url}/${id}/users?pagination=false`),
        getPaginate: () => axios.get(`${url}/${id}/users`),
        sync: (toSync) => axios.post(`${url}/${id}/users`, toSync),
        delete: (toSync) => axios.delete(`${url}/${id}/users/${toSync}`)

      }
    }
  }
}

function Sliders (url = 'sliders') {
  return {
    getOne: (id) => axios.get(`${url}/${id}`),
    getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
    getAll: () => axios.get(`${url}?pagination=false`),
    getPaginate: () => axios.get(url),
    update: (id, toUpdate) => axios.put(`${url}/${id}`, toUpdate),
    create: (toCreate) => axios.post(url, toCreate),
    delete: (id) => axios.delete(`${url}/${id}`)
  }
}

function Recipes(url = 'recipe') {
  return {
      getOne: (id) => axios.get(`${url}/${id}`),
      getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
      getAll: () => axios.get(`${url}?pagination=false`),
      getPaginate: () => axios.get(url),
  }
}

function Blog(url = 'blog') {
  return {
      getOne: (id) => axios.get(`${url}/${id}`),
      getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
      getAll: () => axios.get(`${url}?pagination=false`),
      getPaginate: () => axios.get(url),
      getLatest: () => axios.get(`${url}/latest`)
  }
}

function PositiveMessage(url = 'positive-message') {
  return {
      getOne: (id) => axios.get(`${url}/${id}`),
      getBySlug: (slug) => axios.get(`${url}?slug=${slug}`),
      getAll: () => axios.get(`${url}?pagination=false`),
      getPaginate: () => axios.get(url),
      getLatest: () => axios.get(`${url}/latest`)
  }
}

export default {
  Addresses,
  CheckUpdate,
  Categories,
  Discounts,
  ErrorResponse,
  Products,
  Messages,
  Departments,
  Cities,
  Any,
  Shopping,
  Sliders,
  DetailShopping,
  SuccessResponse,
  Token,
  Users,
  ResetPassword,
  Recipes,
  Blog,
  PositiveMessage
}
