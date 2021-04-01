import Vue from 'vue'
import Router from 'vue-router'
import starter from '../AdminLTE-master'
Vue.use(Router)

const router = new Router({

 routes: [
  {
    path: '/src/AdminLTE-master/starter.html',
    name: 'Home',
    component: starter
  },
  {
    path: '/src/App',
    name: 'app',
  },
  
]

});

export default router
