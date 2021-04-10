<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">


      <a class="navbar-item" href="https://bulma.io">
      <img src="https://i.postimg.cc/5thwb0g4/logo.jpg" width="40" height="40">
    </a>

    
      <a role="button" class="navbar-burger burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

      <a class="navbar-item">
      <router-link class="navbar-item" to="/">
        <h4 class="title is-4">Blog UJAP</h4>
      </router-link>
      </a>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                {{user.displayName || user.email }}
              </a>
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to="/dashboard">
                  Dashboard
                </router-link>
                <a class="navbar-item" @click.prevent="logout">
                  Cerrar sesion
                </a>               
              </div>
            </div>
          </template>
          <template v-else>
          <div class="buttons">
            <router-link class="button is-link" to="/register">
              <strong>Registrarme</strong>
            </router-link>
            <router-link class="button is-light" to="/login">
              Iniciar sesion
            </router-link>
          </div>  
          </template>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
  data () {
    return {
      isOpen: false,
      user: null
    }
  },  
  methods: {
    toggleMenu () {
      const status = !this.isOpen
      this.isOpen = status
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'login'})
      })
    },    
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user        
      } else {
        this.user = null
      }
    })
  },

      




}
</script>


























<!--

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <router-link class="navbar-item" to="/">
          <h3 class="title is -3">Topicos especiales</h3>
        </router-link>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': isOpen }"
        @click.prevent="toggleMenu"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isOpen }"
    >
      <div class="navbar-start">
        <a class="navbar-item">
         
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                 {{ user.displayName || user.email  }}
              </a>
              <div class="navbar-dropdown">
                <router-link class="navbar-item" to='/dashboard'>
                  Dashboard
                </router-link>
                <a class="navbar-item" @click.prevent='logout'>
                  Cerrar Sessión
                </a>
              </div>
            </div>
          </template>

          <template v-else>
            <div class="buttons">
              <router-link class="navbar-item" to="/Register">
                <a class="button is-primary">
                  <strong>Registrarse</strong>
                </a>
              </router-link>
              <router-link class="navbar-item" to="/Login">
                <a class="button is-light">
                  Entrar
                </a>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import firebase from 'firebase'


export default {
  data() {
    return {
      isOpen: false,
      user : null
    };
  },

  methods: {
    toggleMenu() {
      const status = !this.isOpen;
      this.isOpen = status;
    },
    logout() {

      firebase.auth().signOut().then( () => {

        this.$router.push({name: 'login'})

      })

    },
  },

  created(){

    firebase.auth().onAuthStateChanged(user => {

      if (user) {
        this.user = user
      } else{
        this.user = null
      }
    })
  }
};
</script>


-->