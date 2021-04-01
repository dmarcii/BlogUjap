<template>

  <div id="app">

    <nav class="navbar navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Vue + Firebase</a>
    </nav>

  <div class="col-sm-8 text-center">
          <div class="card">
            <div class="card-header">
              <h3>Videos registrados</h3>
              <button class="btn btn-success" data-toggle="modal" data-target="#staticBackdrop">Registrar nuevo video </button>
             
            </div>
            <div class="card-body">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Subcategoria</th>
                    <th>Enlace</th>
                    <th>Operaciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="w in websites" v-bind:key = 'w.id'>
                    <td>
                   {{w.name}}
                    </td>

                    <td>
                      {{w.ca1}}
                    </td>

                     <td>
                      {{w.sca1}}
                    </td>

                     <td>
                      <a v-bind:href="w.url" target="_blank">{{w.url}}</a>
                    </td>

                    <td>
                      <button @click="deleteWebsite(w)" class="btn btn-danger">
                        Eliminar
                      </button>
                       

                       
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
        <h5 class="modal-title" id="staticBackdropLabel">Registrar video</h5>
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
                   <label for="exampleFormControlSelect1">Tipo de contenido</label>
    <select class="form-control" v-model="newWebsite.ca1" id="exampleFormControlSelect1">
      <option>Inteligencia Ártificial</option>
      <option>Programación orientada a objetos</option>
      <option>Internet of things</option>
      <option>Videojuegos</option>
      <option>Front end</option>
    </select>
                </div>


                         <div class="form-group">
                   <label for="exampleFormControlSelect1">Audiencia</label>
    <select class="form-control" v-model="newWebsite.ca2" id="exampleFormControlSelect1">
      <option>Nivel secundaria</option>
      <option>Nivel universitario</option>
      <option>Nivel postgrado</option>
      <option>Nivel doctoral</option>
    </select>
                </div>


  <div class="form-group">
  <label for="exampleFormControlSelect1">Universidad</label>
    <select class="form-control" v-model="newWebsite.ca3" id="exampleFormControlSelect1">
      <option>Standford</option>
      <option>UJAP</option>
      <option>MIT</option>
      <option>Imperial College</option>
    </select>
  </div>


  <div class="form-group">
  <label for="exampleFormControlSelect1">Modo</label>
    <select class="form-control" v-model="newWebsite.sca1" id="exampleFormControlSelect1">
      <option>Clase grabada</option>
      <option>Clase virtual</option>
      <option>Video explicativo</option>
    </select>
  </div>

  <div class="form-group">
  <label for="exampleFormControlSelect1">Plataforma de desarrollo</label>
    <select class="form-control" v-model="newWebsite.sca3" id="exampleFormControlSelect1">
      <option>Flask</option>
      <option>Vue</option>
      <option>IOT ESPIDF</option>
      <option>Tensor flow</option>
      <option>React</option>
      <option>Angular</option>
    </select>
  </div>



  <div class="form-group">
  <label for="exampleFormControlSelect1">Subtitulos</label>
    <select class="form-control" v-model="newWebsite.sca2" id="exampleFormControlSelect1">
      <option>Si</option>
      <option>No</option>
    </select>
  </div>

  
                <div class="form-group">
                   <label for="exampleFormControlSelect1">Enlace</label>
                  <input type="text" class="form-control" v-model="newWebsite.url" placeholder="URL">
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
      websites: [],
      newWebsite: {
        name: '',
        ca1: '',
        ca2: '',
        ca3: '',
        sca1: '',
        sca2: '',
        sca3: '',
        url: '',
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
      websitesRef.push(this.newWebsite);
      this.newWebsite.name = '';
      this.newWebsite.ca1 = '';
      this.newWebsite.ca2 = '';
      this.newWebsite.ca3 = '';
      this.newWebsite.sca1 = '';
      this.newWebsite.sca2 = '';
      this.newWebsite.sca3 = '';
      this.newWebsite.url = '';
    },

    deleteWebsite(websites) {
        websitesRef.child(websites['.key']).remove();
        toastr.success('Website removed');
    },

 

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


