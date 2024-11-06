<template>
  <div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block">
                <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.jpg"
                  style="width: 100%; height:90%" alt="...">
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">BIENVENIDOS!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input type="text" class="form-control form-control-user" id="exampleInputEmail"
                        aria-describedby="emailHelp" v-model="form.nombre"
                        placeholder="Nombre de usuario o correo electrónico">
                      <!--<input type="email" class="form-control form-control-user" id="exampleInputEmail"
                          aria-describedby="emailHelp" placeholder="Nombre de usuario o correo electrónico">-->
                    </div>
                    <div class="form-group">
                      <input type="password" v-model="form.passw" class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Contraseña">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Recuerdáme</label>
                      </div>
                    </div>
                    <a @click="autenticate" class="btn btn-info btn-user btn-block">
                      Entrar
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <router-link to="/"><a class="small">Olvidaste la contraseña</a></router-link>
                  </div>
                  <div class="text-center">
                    <router-link to="/"><a class="small">Registrarme</a></router-link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>
<script setup>
import router from '@/router';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';

let listado = ref([]);

const consultar = async () => {
  let response = await axios.get('http://localhost:8000/correos')
    .then((response) => {
      listado.value = response.data;
    })

}

const form = reactive({
  nombre: '',
  passw: ''
})

let bodyLogin1 = document.getElementById('page-top');

onMounted(async () => {
  bodyLogin1.classList.add('bg-gradient-info');
  bodyLogin1.classList.remove('sidebar-toggled');
  consultar();
})

const successFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 1500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "success",
    title: mensaje
  })
}

const autenticate = () => {
  // for (let index = 0; index < listado.value.length; index++) {
  //   if (form.nombre == listado.value[index].direccion && form.passw == listado.value[index].password) {
  //     localStorage.setItem("userName", form.nombre);
  //     successFull('Bienvenido al sistema', 'top-end');
  //     router.push('/inicio');
  //     break
  //   }else {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Error de autenticación",
  //   });
  // }

  // }
  if (form.nombre == 'admin' && form.passw == '123') {
    localStorage.setItem("userName", form.nombre);
    successFull('Bienvenido al sistema', 'top-end');
    router.push('/inicio')
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error de autenticación",
    });
  }
}
</script>
<style lang="scss" scoped></style>
