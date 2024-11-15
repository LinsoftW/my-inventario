import './assets/main.css';
<<<<<<< HEAD
// import '/src/assets/jquery.min.js'
=======
// import '/src/assets/new/vendor/jquery/jquery.min.js'
>>>>>>> 38da2720865536ec89f2d413806d292a1fae147f
import '/src/assets/new/vendor/jquery/jquery.min.js';
import '/src/assets/new/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '/src/assets/new/vendor/jquery-easing/jquery.easing.min.js';
import '/src/assets/new/js/sb-admin-2.min.js';
// import Swal from 'sweetalert2';

import { createApp } from 'vue'
import App from './App.vue'

<<<<<<< HEAD
// window.Swal = Swal;
// const toast = Swal.mixin({
//    toast: true,
//    position: 'top-end',
//    showConfirmButton: false,
//    timer: 1500,
//    //timerProgressBar: true,
// })

// window.toast = toast;
=======
//window.Swal = Swal;
/*const toast = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 1500,
   //timerProgressBar: true,
})

window.toast = toast;*/
>>>>>>> 38da2720865536ec89f2d413806d292a1fae147f

// Importando las rutas
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')
