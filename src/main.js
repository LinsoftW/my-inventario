import './assets/main.css';
// import '/src/assets/new/vendor/jquery/jquery.min.js'
import '@/assets/new/vendor/jquery/jquery.min.js';
import '@/assets/new/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '@/assets/new/vendor/jquery-easing/jquery.easing.min.js';
import '@/assets/new/js/sb-admin-2.min.js';
import Swal from 'sweetalert2';

import { createApp } from 'vue'
import App from './App.vue'

window.Swal = Swal;
const toast = Swal.mixin({
   toast: true,
   position: 'top-end',
   showConfirmButton: false,
   timer: 1500,
   //timerProgressBar: true,
})

window.toast = toast;

// Importando las rutas
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')
