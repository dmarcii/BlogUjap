<template>
  <div class="home">

  <div id="landing">
    <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>


<div id="inicio">
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <div class="parallax">
        </div>
      </div>
</div>

<div id ="Nosotros">

   <div class="parallax2">
        </div>
  <div class="card-body">

   
      </div>
</div>

<div id ="servicios">

<div class="card text-dark bg-light" style="height: 30rem;">
  <div class="card-body">

  <h4>Servicios</h4>

<br>

<div class="card-deck">

  <dir> </dir>
 

  <button type="button" class="btn btn-danger" id="modal1" data-toggle="modal" data-target="#exampleModalCenter"
   style="width:300px;height:300px;"  > 
   <h3>Cuentas de usuario</h3>
</button>

<dir></dir>



<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-danger">
      <div class="modal-header text-white">
        <h5 class="modal-title" id="exampleModalLongTitle">Cuentas presonalizadas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-white">
         <p>Tienes la oportunidad de crear tu propio usuario y conocer más sobre tus compañeros.</p>
      <iframe id="Geeks3" width="450" height="350"
                                    src= 
 "https://www.youtube.com/embed/MGpqFhX7dIA" 
                                    frameborder="0" allowfullscreen> 
                            </iframe> 
      </div>
    </div>
  </div>
</div>




<button type="button" class="btn btn-dark" id="modal1" data-toggle="modal" data-target="#exampleModalCenter2" style="width:300px;height:300px;"  >
 <h3>Registro de videos</h3>
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-dark text-white ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Registro de videos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <p>Tienes la oportunidad de crear tu propio usuario y conocer más sobre tus compañeros.</p>
      <iframe id="Geeks3" width="450" height="350"
                                    src= 
 "https://www.youtube.com/embed/4ktHteOAMdw" 
                                    frameborder="0" allowfullscreen> 
                            </iframe> 
      </div>
    </div>
  </div>
</div>
 


<dir></dir>


 
 
<button type="button" class="btn btn-info" id="modal1" data-toggle="modal" data-target="#exampleModalCenter3" style="width:300px;height:300px;"  >
 <h3>Mensajeria</h3>
</button>


<!-- Modal -->
<div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-info text-white">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Mensajeria</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <p>Tienes la oportunidad de crear tu propio usuario y conocer más sobre tus compañeros.</p>
      <iframe id="Geeks3" width="450" height="350"
                                    src= 
 "https://www.youtube.com/embed/4ktHteOAMdw" 
                                    frameborder="0" allowfullscreen> 
                            </iframe> 
      </div>
    </div>
  </div>
</div>



</div>

</div>
<button type="button" class="btn btn-lg btn-block btn-success" data-toggle="modal" data-target="#exampleModal6" name = 'mensajes'>
  Contactanos
</button>
</div>
</div>


<!-- Formulario -->
<div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content text-dark bg-light ">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Contáctanos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <form @submit.prevent="addWebsite">

 <div class="form-group">
    <label for="exampleFormControlInput1">Nombre</label>
    <input type="text" class="form-control" v-model="newWebsite.name" id="exampleFormControlInput1" placeholder="Juan Castillo">
  </div>


  <div class="form-group">
    <label for="exampleFormControlInput1">Correo electrónico</label>
    <input type="email" class="form-control" v-model="newWebsite.email" id="exampleFormControlInput1" placeholder="ejemplo@gmail.com">
  </div>

   <div class="form-group">
    <label for="exampleFormControlInput1">Teléfono</label>
    <input type="number" class="form-control" v-model="newWebsite.cell" id="exampleFormControlInput1" placeholder="04125557766">
  </div>

<div class="form-group">
    <label for="exampleFormControlTextarea1">Mensaje</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" v-model="newWebsite.sms" rows="5" cols="1" placeholder="Escribe tu mensaje..." ></textarea>
  </div>


<div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Estoy deacuerdo con las normas de convivencia de Blog UJAP.
      </label>
      <div class="invalid-feedback">
        Debes aceptar para enviar el mensaje
      </div>
    </div>
  </div>
  <button class="btn btn-lg btn-block btn-warning" type="submit">
    <div class = "text-white"> <h5>enviar</h5></div> </button>



</form>
        
      </div>
    </div>
  </div>
</div>




<div class="gallery">


<div class="card text-light bg-info" style="height: 30rem;">
  <div class="card-body">

  <h4>Galeria</h4>

<br>



<div class="card-deck">

<dir></dir>
 
       <tr v-for="v in videos" v-bind:key = 'v.id'>

<td>
  <button type="button" class="btn btn-info" id="modal1" data-toggle="modal" data-target="#exampleModalCenter5"
   style="width:340px;height:340px;"> 
  <img v-bind:src='v.img' alt="">
  
</button>

<dir></dir>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-dark">
      <div class="modal-header text-white">
        <h5 class="modal-title" id="exampleModalLongTitle">{{v.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-white">
      <h6>categoria: {{v.ca1}}</h6>  
      <h6>Nivel estudiantil: {{v.ca2}}</h6>  
      <h6>Tipo de clase: {{v.sca1}}</h6>  
      <h6>Subtítulos: {{v.sca2}}</h6>  
      
      <iframe id="Geeks3" width="450" height="350"
                                    v-bind:src= 'v.url' 
                                    frameborder="0" allowfullscreen> 
                            </iframe> 
      </div>
    </div>
  </div>
</div>

</td>
       </tr>




</div>

</div>

  </div>
  </div>


<footer class="bg-dark text-center text-white">

  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">


      <!-- Facebook -->
      <a class="btn btn-floating m-1" href="#!" role="button" >
         <img src="https://i.postimg.cc/PqyfWRgZ/facebook-1.png" alt="" height="40" width="40">
      </a>


      <!-- Twitter -->
    <a class="btn btn-floating m-1" href="#!" role="button" >
         <img src="https://i.postimg.cc/65879tDP/twitter-1.png" alt="" height="40" width="40">
      </a>

      <!-- Instagram -->
       <a class="btn btn-floating m-1" href="#!" role="button" >
         <img src="https://i.postimg.cc/fTdw2y4M/instagram.png" alt="" height="40" width="40">
      </a>

      <!-- Youtube -->
      <a class="btn btn-floating m-1" href="#!" role="button" >
         <img src="https://i.postimg.cc/SxDN85F9/youtube.png" alt="" height="40" width="40">
      </a>
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>¡Suscribete!</strong>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Correo electrónico</label>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn btn-outline-light mb-4">
              Suscribirse
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <p>
        Nuestra misión es dar a la universidad una oportunidad de expresarse y
        discutir de temas resaltantes sobre el acontecer estudiantil.
      </p>
    </section>
    <!-- Section: Text -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">blogujap.com</a>
  </div>
  <!-- Copyright -->
</footer>


</div>
</div>
</template>



<style lang="scss">

</style>

<style>

.parallax {
  /* The image used */
  background-image: url("https://i.postimg.cc/0Q0c6VGC/Target-Market-Mind-Map-1.png");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.parallax2 {
  /* The image used */
  background-image: url("https://i.postimg.cc/j5Xq8JYh/Quienes-somos-1.png");

  /* Set a specific height */
  min-height: 1000px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>

<script>
// Firebase
import Vue from 'vue'
import Firebase from 'firebase';
const db = Firebase.database()
const websitesRef = db.ref('websites');
const videoref = db.ref('videos');
import { rtdbPlugin as VueFire } from 'vuefire'
Vue.use(VueFire)

export default {

  name: 'home',

  firebase: {
  websites: websitesRef,
  videos: videoref,
  },

  data () {
    return {
      cont: 0,
      videos: [],
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

  }
}

</script>
