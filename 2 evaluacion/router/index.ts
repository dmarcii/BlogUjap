import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Auth/Login.vue"
import Register from "../views/Auth/Register.vue"
import Dashboard from "../views/Auth/Dashboard.vue"
import firebase from 'firebase'


Vue.use(Router)

const router = new Router({

 routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component:Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component:Dashboard,
    meta:{requiresAuth: true}
  }

]

});

router.beforeEach((to, from, next) =>{
  if (to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
    }else{
      next({
        name: 'Login'
      });
    }
  } else{
    next();
  }
  
  })

export default router
