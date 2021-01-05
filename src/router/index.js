import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import NewsRoom from '../views/NewsRoom.vue'
import Products from '../views/Products.vue'
import Button from '../views/Button.vue'
import Card from '../views/Card.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/newsroom',
    name: 'NewsRoom',
    component: NewsRoom
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
