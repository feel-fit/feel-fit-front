import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumb: [
          { name: 'Inicio' }
        ]
      }
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/conocenos.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/contactanos.vue')
    },
    {
      path: '/categorias/:category',
      name: 'category',
      props: true,
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: 'home' },
          { name: 'Categoria', link: 'catalogo' },
          { name: 'Categoria' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categories.vue')
    },
    {
      path: '/productos/:slug',
      props: true,
      name: 'producto',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: 'home' },
          { name: 'Categoria', link: 'catalogo' },
          { name: 'Categoria' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Informacion.vue')
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Catalogo.vue')
    },
    {
      path: '/pagos',
      name: 'pagos',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: 'home' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "checkout" */ './views/pagos.vue')
    },
    {
      path: '/buscar',
      name: 'buscar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Buscar.vue')
    },
    {
      path: '/informacion',
      name: 'informacion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Informacion.vue')
    },
    {
      path: '/deseos',
      name: 'deseos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Deseos.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Registro.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/GraciasPago.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Usuario.vue')
    },
    {
      path: '/caja-sorpresa',
      name: 'caja-sorpresa',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CajaSorpresa.vue')
    },{
      path: '/404-product',
      name: 'not-found-product',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/404-productos.vue')
    },
    {
      path: '/404-box',
      name: 'not-found-box',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/404-cajas.vue')
    }
  ]
})
