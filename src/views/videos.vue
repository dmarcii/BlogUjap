<template>

  <div id="videos">

    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">videos</a>
    </nav>

          <div class="card">
            <div class="card-title">
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
                  <tr v-for="w in videos" v-bind:key = 'w.id'>
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
                      <button @click="deletevideo(w)" class="btn btn-danger">
                        Eliminar
                      </button>
                       

                       
                    </td>





                  </tr>
                </tbody>
              </table>
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

      
              <form @submit.prevent="addvideo">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Nombre</label>
                  <input type="text" class="form-control" v-model="newvideos.name" placeholder="Nombre">
                </div>

                <div class="form-group">
                   <label for="exampleFormControlSelect1">Tipo de contenido</label>
    <select class="form-control" v-model="newvideos.ca1" id="exampleFormControlSelect1">
      <option>Inteligencia Ártificial</option>
      <option>Programación orientada a objetos</option>
      <option>Internet of things</option>
      <option>Videojuegos</option>
      <option>Front end</option>
    </select>
                </div>


                         <div class="form-group">
                   <label for="exampleFormControlSelect1">Audiencia</label>
    <select class="form-control" v-model="newvideos.ca2" id="exampleFormControlSelect1">
      <option>Nivel secundaria</option>
      <option>Nivel universitario</option>
      <option>Nivel postgrado</option>
      <option>Nivel doctoral</option>
    </select>
                </div>


  <div class="form-group">
  <label for="exampleFormControlSelect1">Universidad</label>
    <select class="form-control" v-model="newvideos.ca3" id="exampleFormControlSelect1">
      <option>Standford</option>
      <option>UJAP</option>
      <option>MIT</option>
      <option>Imperial College</option>
    </select>
  </div>


  <div class="form-group">
  <label for="exampleFormControlSelect1">Modo</label>
    <select class="form-control" v-model="newvideos.sca1" id="exampleFormControlSelect1">
      <option>Clase grabada</option>
      <option>Clase virtual</option>
      <option>Video explicativo</option>
    </select>
  </div>

  <div class="form-group">
  <label for="exampleFormControlSelect1">Plataforma de desarrollo</label>
    <select class="form-control" v-model="newvideos.sca3" id="exampleFormControlSelect1">
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
    <select class="form-control" v-model="newvideos.sca2" id="exampleFormControlSelect1">
      <option>Si</option>
      <option>No</option>
    </select>
  </div>

  
                <div class="form-group">
                   <label for="exampleFormControlSelect1">Enlace</label>
                  <input type="text" class="form-control" v-model="newvideos.url" placeholder="URL">
                </div>

  <div class="form-group">
                   <label for="exampleFormControlSelect1">Imagen</label>
                  <input type="text" class="form-control" v-model="newvideos.img" placeholder="link">
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

























  <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Mensajes</a>
    </nav>

 
          <div class="card">
            <div class="card-header">
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
                      <button @click="deletevideo(w)" class="btn btn-danger">
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
const db = Firebase.database();
const videoRef = db.ref('videos');
const websitesRef = db.ref('websites');
import { rtdbPlugin as VueFire } from 'vuefire'
  Vue.use(VueFire)


export default {

  name: 'videos',

  firebase: {
  videos: videoRef,
   websites: websitesRef,
  },

  data () {
    return {
      videos: [],
      newvideos: {
        name: '',
        ca1: '',
        ca2: '',
        ca3: '',
        sca1: '',
        sca2: '',
        sca3: '',
        url: '',
        img: '',
        
      },
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

    addvideo() {
      videoRef.push(this.newvideos);
      this.newvideos.name = '';
      this.newvideos.ca1 = '';
      this.newvideos.ca2 = '';
      this.newvideos.ca3 = '';
      this.newvideos.sca1 = '';
      this.newvideos.sca2 = '';
      this.newvideos.sca3 = '';
      this.newvideos.url = '';
      this.newvideos.img = '';
    },

    deletevideo(videos) {
        videoRef.child(videos['.key']).remove();
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
#videos {
  background: #485563;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
}
</style>


