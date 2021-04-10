<template>

 <div class="containter mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <form action="#" @submit.prevent="login">
          <div class="notification is-danger mt-10" v-if="error">
            {{ error }}
          </div>


  <div class="containter">
    <div class="columns">
      <div class="column is-6 is-offset-3">
          <h3 class = "tittle is-3"> Correo</h3>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Correo electrónico" v-model="email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
            <h3 class = "tittle is-3"> Contraseña</h3>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Contraseña" v-model="password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button type ="submit" class="button is-primary">
               Iniciar sesión
              </button>
            </p>
          </div>
      </div>
    </div>
  </div>
  </form>
  </div>
  </div>
  </div>
</template>


<script>
import db from '@/firebase/init'
import firebase from 'firebase'

export default {

      data() {
    return {
      email: "",
      password: "",
      error: "",
    }
  },

  name: "Login",
  methods: {
    login() {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user =>{ 
            this.$router.push({name: 'dashboard'})
        }).catch(err =>{

            this.error = err.message
        })
       
        
      }else {
        this.error = "Todos los campos son requeridos.";
      }
    },
  },

};
</script>
