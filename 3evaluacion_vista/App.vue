<template>

  <div id="app">

    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Vue + Firebase</a>
    </nav>

  <div class="col-sm-8 text-center">
          <div class="card">
            <div class="card-header">
              <h3>Mensajes</h3>  
              <button class="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Nuevo Mensaje </button>
                <button type="button" class="btn btn-danger"><span class="badge badge-light">{{cont}}</span></button>
           
             
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Contacto</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Mensaje</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="w in websites" v-bind:key = 'w.id'>
                    <td>
                   {{w.name}}
                    </td>

                    <td>
                      {{w.cell}}
                    </td>

                     <td>
                      {{w.email}}
                    </td>

                     <td>
                      {{w.sms}}
                    </td>

                    <td>
                      <button @click="deleteWebsite(w)" class="btn btn-danger">
                        Eliminar
                      </button>

                      <div v-if=" w.leido == false">
                       <button @click="leer(w)" class="btn btn-success">
                        no leido
                      </button>
                      </div>
                      <div v-else>
                        <button class="btn btn-secondary">¡Leido!</button>
                      </div>

                       
                    </td>

                  </tr>
                </tbody>
              </table>
            </div>

          </div>
    
     </div>






<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Mensaje</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

      
              <form @submit.prevent="addWebsite">

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Nombre</label>
                  <input type="text" class="form-control" v-model="newWebsite.name" placeholder="Nombre">
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Teléfono</label>
                  <input type="phone" class="form-control" v-model="newWebsite.cell" placeholder="04123452342">
                </div>


                   <div class="form-group">
                  <label for="exampleFormControlSelect1">Correo</label>
                  <input type="email" class="form-control" v-model="newWebsite.email" placeholder="aaa@gmail.com">
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Mensaje</label>
                   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="newWebsite.sms"  placeholder="Escribe aqui"></textarea>
               
                </div>



                  <div>
                    <br>
                  </div>

                <button type="submit" class="btn btn-primary">
                  Guardar
                </button>
              </form>





        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>






  </div>
</template>



<script>
// Firebase
import Vue from 'vue'
import Firebase from 'firebase';
import config from './config';
let app = Firebase.initializeApp(config);
let db = app.database();
let websitesRef = db.ref('websites');
import { rtdbPlugin as VueFire } from 'vuefire'
  Vue.use(VueFire)


// toast
import toastr from 'toastr';
export default {

  name: 'App',

  firebase: {
  websites: websitesRef,
  },

  data () {
    return {
      cont: 0,
      websites: [],
      newWebsite: {
        name: '',
        cell: '',
        email: '',
        sms: '',
        leido: false
      },
        isOpen: false,
    }
  },
  methods: {
    toggle () {
      const status = !this.isOpen
      this.isOpen = status
    },

    addWebsite() { 
      this.cont = this.cont + 1
      websitesRef.push(this.newWebsite);
      this.newWebsite.name = '';
      this.newWebsite.cell = '';
      this.newWebsite.email = '';
      this.newWebsite.sms = '';
    },

    deleteWebsite(websites) {
        websitesRef.child(websites['.key']).remove();
        toastr.success('Website removed');
        this.cont = this.cont - 1
    },

    leer(websites) {
      
      websitesRef.child(websites['.key']).set( this.newWebsite.leido = true,
      );
      this.cont = this.cont - 1
    }

  }
}

</script>

<style>
#app {
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
}
</style>


