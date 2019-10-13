import axios from 'axios'

const USER_TOKEN = 'UserToken'
const GUEST_TOKEN = 'GuestToken'

export function isLoggedIn () {
  const Token = getUserToken()
  setAxiosHeader(Token)
  return !!Token
}

export function getUserToken () {
  let token = sessionStorage.getItem(USER_TOKEN)
  if (token) setAxiosHeader(token)
  return token
}

export function getGuestToken () {
  let token = sessionStorage.getItem(GUEST_TOKEN)
  if (token) setAxiosHeader(token)
  return token
}

export function GuestToken (token) {
  setAxiosHeader(token)
  return sessionStorage.setItem(GUEST_TOKEN, token)
}

export function setUserToken (token) {
  setAxiosHeader(token)
  return sessionStorage.setItem(USER_TOKEN, token)
}

export function noAuth (to, from, next) {
  if (isLoggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}

export function logout () {
  clearUserToken()
}

export function login (token) {
  sessionStorage.setItem(USER_TOKEN, token)
  setAxiosHeader(token)
}

export function credentialsGuestToken () {
  return {
    grant_type: 'client_credentials',
    client_id: process.env.PERSONAL_CLIENT_ID,
    client_secret: process.env.PERSONAL_CLIENT_SECRET
  }
}

export function clearUserToken () {
  sessionStorage.removeItem(USER_TOKEN)
}

export function clearGuestToken () {
  sessionStorage.removeItem(GUEST_TOKEN)
}

export function setAxiosHeader (token) {
  axios.defaults.headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

  axios.defaults.withCredentials = true

  if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = process.env.API_URL_DEV
  } else {
    axios.defaults.baseURL = process.env.API_URL
  }
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
