import './assets/main.css';
// import '/src/assets/jquery.min.js'
// import '/src/assets/new/vendor/jquery/jquery.min.js'
import '/src/assets/new/vendor/jquery/jquery.min.js';
import '/src/assets/new/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '/src/assets/new/vendor/jquery-easing/jquery.easing.min.js';
import '/src/assets/new/js/sb-admin-2.min.js';
// import { tooltip } from './assets/new/css/bootstrap'
// import Swal from 'sweetalert2';

import { createApp } from 'vue'
import App from './App.vue'

// Importando las rutas
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')

// app.directive('tooltip', tooltip)
