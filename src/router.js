import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/conocenos',
      name: 'conocenos',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/conocenos.vue')
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
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
          { name: 'Inicio', link: '' },
          { name: 'Categoria', link: 'catalogo' }
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
          { name: 'Inicio', link: '' },
          { name: 'Productos', link: 'catalogo' }
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
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
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
          { name: 'Inicio', link: '' }
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
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Buscar.vue')
    },
    {
      path: '/informacion',
      name: 'informacion',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Informacion.vue')
    },
    {
      path: '/deseos',
      name: 'deseos',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Deseos.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Registro.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/thankyou',
      name: 'thankyou',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/GraciasPago.vue')
    },
    {
      path: '/usuario',
      name: 'usuario',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Usuario.vue')
    },
    {
      path: '/caja-sorpresa',
      name: 'caja-sorpresa',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CajaSorpresa.vue')
    },
    {
      path: '/recetas',
      name: 'recetas',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      children:[
        { path: '/', component:() => import(/* webpackChunkName: "about" */ './components/recetas/home/home') },
        { path: 'desayunos', component: () =>import(/* webpackChunkName: "about" */ './components/recetas/desayunos') },
        { path: 'platos', component:() => import(/* webpackChunkName: "about" */ './components/recetas/platos') },
        { path: 'postres', component:() => import(/* webpackChunkName: "about" */ './components/recetas/postres') },
        { path: 'batidos', component: () =>import(/* webpackChunkName: "about" */ './components/recetas/batidos') },
        { path: 'interes', component:() => import(/* webpackChunkName: "about" */ './components/recetas/interes')},
        { path: 'articulo/:id', component:() => import(/* webpackChunkName: "about" */ './components/recetas/informacion/blog') },
        { path: 'receta/:id', component:() => import(/* webpackChunkName: "about" */ './components/recetas/informacion/receta')},
      ],
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Recetas.vue')
    },
    {
      path: '*',
      name: 'not-found-product',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/404-productos.vue')
    },
    {
      path: '/404-box',
      name: 'not-found-box',
      meta: {
        breadcrumb: [
          { name: 'Inicio', link: '' }
        ]
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/404-cajas.vue')
    }
  ]
})
