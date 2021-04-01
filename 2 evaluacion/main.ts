import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false
import { rtdbPlugin as VueFire } from 'vuefire'
  Vue.use(VueFire)

/*
let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
*/


firebase.auth().onAuthStateChanged(() => {

  
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')


})
 