<template>
  <div class="columns">
    <div class="column">
      <nav class="panel">
        <p class="panel-heading">
          Blog estudiantil
        </p>

        <a class="panel-block is-active">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          Universidad Jose Antonio Paez
        </a>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
          </span>
          <textarea
            class="textarea is-info"
            placeholder="Info textarea"
            value = "Hola soy Alejandro, soy estudiante ingenieria y me gusta programar en python."
          ></textarea>
        </a>
      </nav>
    </div>

    <div class="column">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-45x45">
                <img
                  :src='user.photoURL'  
                  alt = ""
                  style="width:80px;height:80px;"
                />
              </figure>
            </div>
           

            
            <div class="media-content">
              <p class="title is-4">{{user.displayName}} </p>
              <p class="subtitle is-6">{{ user.email }}</p>
            </div>
          </div>

     
          
           
          <div class="content">
            <h4>Información</h4>
           Teléfono: 04123456789
            <br />
            Carrera: computacion
              <br />
            Semestre: 8
          </div>
               
           <div class="content">
             <h4>Redes sociales</h4>
         
              <img src="https://i.postimg.cc/xdtJk7HB/facebook.png" style="width:20px;height:20px;"> ale77
               <br />
              <img src="https://i.postimg.cc/Y9M5Pns2/instagram.png" style="width:20px;height:20px;"> ale77
               <br />
              <img src=" https://i.postimg.cc/G2mMYZfD/twitter.png" style="width:20px;height:20px;"> ale77
            </div>
  
             <div class="control">
        <button class="button is-primary" :class="{'is-active': isOpen}" @click.prevent="toggle">Editar perfil</button>
      </div>


  <div class="modal" :class="{'is-active': isOpen}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Cambiar Información</p>
      <button class="delete" aria-label="close" @click.prevent="toggle"></button>
    </header>
    <section class="modal-card-body">


<form action="#" @submit.prevent="change">

          <div class="field">
            <label class="label">Nombre de usuario</label> <input
                class="input"
                type="text"  
                v-bind:placeholder='{name: user.dysplayName}'          
                v-model="name">
          </div>

           <div class="field">
            <label class="label">Foto de usuario</label> <input
                class="input"
                type="text"
                v-bind:placeholder='{img: user.photoURL}'                 
                v-model="img">
          </div>

          <div class="field">
            <label class="label">Correo</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="email"
                placeholder=""
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
            <label class="label">Numero telefonico</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="number "
                min="111111"
                 max="9999999"
                :placeholder='newWebsite.phone' 
                value=""
                v-model="newWebsite.phone"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

        <div class="field">
            <label class="label">Carrera</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                :placeholder="newWebsite.carrera"
                value=""
                v-model="newWebsite.carrera"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>


           <div class="field">
            <label class="label">Semestre</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                :placeholder="newWebsite.semestre"
                value=""
                v-model="newWebsite.semestre"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </div>
          </div>

           <label class="label">Redes sociales</label>

              <input
                class="input"
                type="text"
                placeholder="Twitter"
                value=""
                v-model="newWebsite.twitter"
              />
                 <input
                class="input"
                type="text"
                placeholder="facebook"
                value=""
                v-model="newWebsite.facebook"
              />
                 <input
                class="input"
                type="text"
                placeholder="instagram"
                value=""
                v-model="newWebsite.ig"
              />

                 <label class="label">Nueva Contraseña </label>
                 <input
                class="input"
                type="password"
                placeholder="nueva contraseña"
                value=""
                v-model="password"
              />
        </form>

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click.prevent="change">Guardar cambios</button>
      <button class="button" @click.prevent="toggle">Cancelar</button>
    </footer>
  </div>
</div>


        </div>

      </div>
    </div>

    <div class="column"></div>
  </div>
</template>

<script>
import firebase from "firebase";

const db = firebase.database()
const websitesRef = db.ref("websites")

export default {
firebase:{
  websites: websitesRef

},
  data () {
    return {
      
  websites: websitesRef,
  password: "",  
  user: firebase.auth().currentUser,
  isOpen: false,
  name: firebase.auth().currentUser.displayName,
  email: firebase.auth().currentUser.email,
  newWebsite: {
     websites: [],
    phone:"" ,
    semestre: "",
    carrera: "",
    twitter: "",
    facebook: "",
    ig: "",
  },
  img: firebase.auth().currentUser.photoURL
  }
  },
  name: "change",

   methods: {
    toggle () {
      const status = !this.isOpen
      this.isOpen = status
    },

    change() {

    const user = firebase.auth().currentUser
    const status = !this.isOpen
    this.isOpen = status

    websitesRef.push(this.newWebsite)
    this.newWebsite.phone = ""
    this.newWebsite.carrera = ""
    this.newWebsite.semestre = ""
    this.newWebsite.facebook = ""
    this.newWebsite.ig = ""
    this.newWebsite.twitter = ""
      user.updateProfile({
                displayName: this.name,
                photoURL: this.img,    
                

      });

      user.updatePassword({

        newPassword: this.password

      })

      user.updateEmail({
        newEmail: this.email
      })

 },
 },
}

</script>


