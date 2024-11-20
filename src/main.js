import './assets/main.css';
// import $ from 'jquery';
// window.$ = $;
// window.jQuery = $;

// import '/src/assets/new/vendor/jquery/jquery';
// import '/src/assets/new/vendor/bootstrap/js/bootstrap.bundle';
// import '/src/assets/jquery.easing.min';
// import '/src/assets/sb-admin-2.min';

// import { tooltip } from './assets/new/css/bootstrap'
// import Swal from 'sweetalert2';

import { createApp } from 'vue'
import App from './App.vue'

// Importando las rutas
import router from './router'

const app = createApp(App);

app.use(router).mount('#app')

// app.directive('tooltip', tooltip)
