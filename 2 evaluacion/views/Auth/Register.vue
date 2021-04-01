<style lang="css">
.mt-10{

    margin-top: 10px;
}

.mt-50{

    margin-top: 50px;
}
</style>

 <template>
  <div class="containter mt-50">
    <div class="columns">
      <div class="column is-6 is-offset-3">
          <div class="notification is-danger mt-10" v-if="error">
            {{ error }}
          </div>

        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Nombre de usuario</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Nombre de usuario"
                value = ""
                v-model="name">
            </div>
          </div>

          <div class="field">
            <label class="label">Correo</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder="Correo Electrónico"
                value=""
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
        
          </div>

          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="password"
                placeholder="Contraseña"
                value=""
                v-model="password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Registrarme</button>
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
      name: "",
      email: "",
      password: "",
      error: "",
    }
  },

  name: "Register",
  
  methods: {
    register() {
        this.error = ''
      if (this.name && this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {    
           //actualizar el usuario
            if (user) {
              user.user.updateProfile({
                displayName: this.name              
              }).then((u) => {
                this.name = ''
                this.email = ''
                this.password = ''
                this.$router.push({name: 'dashboard'})
              //const displayName = user.displayName;                              
              }).catch((err) => {
                this.error = err.message
              })             
            }            
            }).catch(err => {
            this.error = err.message
        })    
        
      }else {
        this.error = "Todos los campos son requeridos.";
      }
    }
  }

}
</script>
 