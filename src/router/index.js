import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/paises',
    name: 'countries',
    component: () => import(/* webpackChunkName: "countries" */ '../views/countries.vue')
  },
  {
    path: '/paises/agregar',
    name: 'countries-add',
    component: () => import(/* webpackChunkName: "countries-add" */ '../views/countries-add.vue')
  },
  {
    path: '/paises/editar/:id',
    name: 'countries-edit',
    component: () => import(/* webpackChunkName: "countries-edit" */ '../views/countries-edit.vue')
  },
  {
    path: '/provincias',
    name: 'provinces',
    component: () => import(/* webpackChunkName: "provinces" */ '../views/provinces.vue')
  },
  {
    path: '/provincias/agregar',
    name: 'provinces-add',
    component: () => import(/* webpackChunkName: "provinces-add" */ '../views/provinces-add.vue')
  },
  {
    path: '/provincias/editar/:id',
    name: 'provinces-edit',
    component: () => import(/* webpackChunkName: "provinces-edit" */ '../views/provinces-edit.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
