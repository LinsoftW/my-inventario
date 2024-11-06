// import './assets/main.css'
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
