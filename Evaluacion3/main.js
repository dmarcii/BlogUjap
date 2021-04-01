/*

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
//import firebase from 'firebase'

Vue.config.productionTip = false

Firebase
import VueFire from 'vuefire';
Vue.use(VueFire);


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

*/


import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
Vue.config.productionTip = false
import { rtdbPlugin as VueFire } from 'vuefire'
  Vue.use(VueFire)

//import VueFire from 'vuefire';
//Vue.use(VueFire);


firebase.auth().onAuthStateChanged(() => {

  
    new Vue({
      render: h => h(App)
    }).$mount('#app')


})
 