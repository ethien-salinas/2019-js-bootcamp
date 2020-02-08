import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Dashboard from '@/views/Dashboard'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // ruta requiere authentication
  if(to.matched.some(record => record.meta.requiresAuth)){
    // aún no hay jwt, lo enviamos a /login
    if(localStorage.getItem('jwt') === null){
      next({
        path: '/login',
        params: { nextUrl: to.fullPath}
      })
    } else {
      // recuperamos user de localStorage
      let user = JSON.parse(localStorage.getItem('user'))
      // ¿es vista excluisiva de administradores?
      if(to.matched.some(record => record.meta.is_admin)){
        if(user.is_admin === true){
          next()
        } else {
          next({ name: 'dashboard'})
        }
      } else {
        next()
      }
    }
  }
  // ruta visible para invitados
  else if(to.matched.some(record => record.meta.guest)){
    // invitado que no tiene jwt almacenado
    if(localStorage.getItem('jwt') === null){
      next()
    } else {
      next({ name: 'dashboard'})
    }
  }
  // en general
  else {
    next()
  }
})


export default router