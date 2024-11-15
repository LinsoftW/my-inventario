<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">PÁGINA INICIAL</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-download fa-sm text-white-50"></i> Generar Resumen</a>
    </div>

    <!-- Content Row -->
    <div class="row">

      <!-- Cantidad de Moneda nacional -->
      <div class="col-xl-1"></div>
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  MN</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- USD -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  USD</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EUROS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  EURO</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TRANSFERENCIAS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  TRANSFERENCIAS</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- VUELTOS -->
      <div class="col-xl-2 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                  VUELTOS</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">0</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fila con PEDIDOS -->

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info">LISTADO DE PEDIDOS <img class="img-fluid" style="width:50px;"
            src="../assets/new/img/undraw_posting_photo.svg" alt="..."></h6>
        <!-- <div class="text-right">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width:5rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
      </div>
      <div class="card-body">
        <!-- <div class="text-left">
                            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="../assets/new/img/undraw_posting_photo.svg" alt="...">
                        </div> -->
        <!-- Tabla Pedidos -->
        <div class="table-responsive">
          <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>PRODUCTO</th>
                <th>DIRECCIÓN DE ENTREGA</th>
                <th>MANAGER</th>
                <th>GESTOR</th>
                <th>MÉTODO DE PAGO</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <!-- <tfoot>
                                    <tr>
                                        <th>PRODUCTO</th>
                                        <th>DIRECCIÓN DE ENTREGA</th>
                                        <th>MANAGER</th>
                                        <th>GESTOR</th>
                                        <th>MÉTODO DE PAGO</th>
                                        <th>ESTADO</th>
                                    </tr>
                                </tfoot> -->
            <tbody>
              <tr>
                <th>Tablet</th>
                <th>La Habana Cuba</th>
                <th>Eugenio</th>
                <th>Pepe</th>
                <th>Pendiente</th>
                <th>Pendiente</th>
              </tr>
              <tr>
                <th>Tablet</th>
                <th>La Habana Cuba</th>
                <th>Eugenio</th>
                <th>Pepe</th>
                <th>Pendiente</th>
                <th>Pendiente</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="row">

      <!-- Usuarios -->
      <div class="col-xl-4 col-lg-5">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">LISTADO DE TRABAJADORES</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#"><span class="fa fa-phone"></span> Llamar</a>
                <a class="dropdown-item" href="#"><span class="fa fa-comments"></span> Enviar mensaje</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otras</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <!-- Personas -->
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>FOTO</th>
                    <th>CORREO</th>
                    <th>CODIGO</th>
                    <th>ACCIONES</th>

                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/undraw_profile_1.svg"> <i
                        class="fas fa-circle text-info"></i></th>
                    <th>Moraima</th>
                    <th>Manager</th>
                    <th>100</th>
                  </tr>
                  <tr>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/undraw_profile_2.svg"><i
                        class="fas fa-circle text-success"></i></th>
                    <th>Pepe</th>
                    <th>Gestora</th>
                    <th>59.10</th>
                  </tr> -->
                  <tr v-for="datos in datosPaginados" :key="datos.idcorreo">
                    <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail" src="../assets/new/img/undraw_profile_1.svg"> <i
                        class="fas fa-circle text-primary"></i></td>
                    <td>{{ datos.direccion }}</td>
                    <td>{{ datos.codigo }}</td>
                    <td style="text-align: center;">
                      <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.idcorreo)" v-b-tooltip.hover title="Editar"><span
                          class="fas fa-edit"></span></button>&nbsp;
                      <button class="btn btn-danger btn-sm btn-circle"
                        @click="borrarU(datos.idcorreo, datos.direccion)" v-b-tooltip.hover title="Eliminar"><span
                          class="fas fa-trash"></span></button>
                    </td>
                  </tr>

                </tbody>
              </table>
              <div class="text-center">
                <nav aria-label="Page navigation example" style="text-align: center;">
                <label>Mostrando </label>
                <select style="width: 60px" @change="consultar()" v-model="elementPagina">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>

                <label>registros </label>
                <ul class="pagination Mestilo btn-sm">

                  <li class="page-item" :class="`${disableA}`" @click="obtenerAnterior"><a class="page-link"
                      href="#">Anterior</a></li>
                  <li v-for="pagina in cantidad" class="page-item" v-bind:class="isActivo(pagina)" :key="pagina"
                    @click="obtenerPagina(pagina)"><a class="page-link" href="#">{{ pagina
                      }}</a></li>
                  <li class="page-item" :class="`${disableS}`" @click="obtenerSiguiente"><a class="page-link"
                      href="#">Siguiente</a></li>
                </ul>
              </nav>
              </div>

            </div>

            <div class="mt-4 text-center small">
              <span class="mr-2">
                <i class="fas fa-circle text-primary"></i> Activo
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-success"></i> En espera
              </span>
              <span class="mr-2">
                <i class="fas fa-circle text-info"></i> Baja
              </span>
            </div>
          </div>
        </div>
      </div>

      <!--Listado de productos -->
      <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
            <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#"><span class="fa fa-cog"></span> Administrar</a>
                <a class="dropdown-item" href="#"><span class="fa fa-check"></span> Conformar pedidos</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otros</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>FOTO</th>
                    <th>CÓDIGO</th>
                    <th>DESCRIPCIÓN</th>
                    <th>PRECIO</th>
                    <th>DESCUENTO</th>
                    <th>ANTICIPO</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th><img class="img-profile rounded-circle img-thumbnail" src="../assets/new/img/tablet.jpg"
                        style="width: 50px; height:50px"> </th>
                    <th>F0093</th>
                    <th>Tablet Samsung</th>
                    <th>100usd</th>
                    <th>5%</th>
                    <th>0</th>
                    <th>En Stock</th>
                  </tr>
                  <tr>
                    <th>2</th>
                    <th><img class="img-profile rounded-circle img-thumbnail" src="../assets/new/img/mochila.jpg"
                        style="width: 50px; height:50px"></th>
                    <th>300562</th>
                    <th>Mochila</th>
                    <th>60usd</th>
                    <th>5%</th>
                    <th>0</th>
                    <th>Entregado al mensajero</th>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import router from '@/router';

// let recarga = ref(false);

// const Cosc_Clar = ref('info');

const route = useRoute();
const bodyLogin = document.getElementById('page-top');

onMounted(async () => {
  // if (route.path == '/inicio') {
    bodyLogin.classList.remove('bg-gradient-info');
    // bodyLogin.classList.add('sidebar-toggled');
    // console.log("INICIO")
  // }
  // Cosc_Clar.value = localStorage.getItem('background');
  // consultar();

})

// CRUD completo

let errors = ref([]);

let listado = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

const form = reactive({
  direccion: "",
  password: "",
  activo: false,
  codigo: "",
  fecharegistro: "2024-06-05"
})

const clickEditar = async (idSelect) => {
  editar.value = true;
  localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  let response = await axios.get(`http://localhost:8000/correos/${id.value}`)
    .then((response) => {
      form.direccion = response.data.direccion;
      form.codigo = response.data.codigo;
    })
}

const cancelarU = () => {
  editar.value = false;
  form.direccion = '';
  form.codigo = '';
}

const agregarU = () => {
  axios.post('http://localhost:8000/correos', form)
    .then((response) => {
      // console.log(response)
      consultar();
      form.direccion = ''
      form.password = '';
      form.codigo = '';
      toast.fire({
        icon: "success",
        title: "Agregado satisfactoriamente."
      })
      editar.value = false;
      localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
    })
}

const editarU = () => {
  axios.put(`http://localhost:8000/correos/${id.value}`, form)
    .then((response) => {
      // console.log(response)
      consultar();
      form.direccion = ''
      form.password = '';
      form.codigo = '';
      toast.fire({
        icon: "success",
        title: "Editado satisfactoriamente."
      })
      editar.value = false;
      localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
    })
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el correo: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar //
      axios.delete(`http://localhost:8000/correos/${id}`)
        .then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Elemento eliminado satisfactoriamente.",
            icon: "success"
          });
          consultar();
        })


    }
  });
}
// Fin CRUD

// Paginado
const obtenerPagina = (nopage) => {
  paginaActual.value = nopage;
  inicio = (nopage * elementPagina.value) - elementPagina.value;
  fin = (nopage * elementPagina.value);
  datosPaginados.value = [];
  datosPaginados.value = datosSinPaginar.value.slice(inicio, fin);

}

const obtenerAnterior = () => {
  if (paginaActual.value > 1) {
    paginaActual.value--;
    disableA.value = '';
    disableS.value = '';
  } else {
    disableA.value = 'disabled';
    disableS.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const obtenerSiguiente = () => {
  if (paginaActual.value < cantidad.value) {
    paginaActual.value++;
    disableS.value = '';
    disableA.value = '';
  } else {
    disableS.value = 'disabled';
    disableA.value = '';
  }
  obtenerPagina(paginaActual.value);
}

const isActivo = (nopage) => {
  if (nopage == paginaActual.value) {
    if (nopage == 1) {
      disableA.value = 'disabled';
      disableS.value = '';
    } else {
      if (nopage == cantidad.value) {
        disableS.value = 'disabled';
        disableA.value = '';
      } else {
        if ((nopage != 1) && (nopage != cantidad.value)) {
          disableS.value = '';
          disableA.value = '';
        }
      }
    }

    return 'active';
  } else {
    return '';
  }
}

const consultar = async () => {
  let response = await axios.get('http://localhost:8000/correos?&searchQuery=' + buscando.value)
    .then((response) => {
      listado.value = response.data;
      datosSinPaginar.value = response.data;
      cantidad.value = Math.ceil(response.data.length / elementPagina.value);
      obtenerPagina(1);
      // router.go();
    });

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

// Fin paginado


</script>

<style lang="scss" scoped></style>
