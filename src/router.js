import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home'
import Login from './components/Login'
import HomeNew from './components/HomeNew'
import StanjeElektrane from './components/StanjeElektrane'
import Vrijeme from './components/Vrijeme'
import Proizvodnja from './components/Proizvodnja'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/homenew',
      name: 'HomeNew',
      component: HomeNew
    },
    {
      path: '/stanje',
      name: 'StanjeElektrane',
      component: StanjeElektrane
    },
    {
      path: '/vrijeme',
      name: 'Vrijeme',
      component: Vrijeme
    },
    {
      path: '/proizvodnja',
      name: 'Proizvodnja',
      component: Proizvodnja
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
