<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">INVENTARIO</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a>
      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->
      <!--Opciones de busqueda -->
      <!-- <div class=""> -->
      <div class="col-xl-12 col-lg-12">
        <div class="mb-2">
          <!-- Card Header - Dropdown -->
          <div class=" justify-content-between">
            <h6 class="m-0 text-info">Opciones de búsqueda</h6>
          </div>
          <!-- Card Body -->
          <div class="card-body ">
            <div class="container-fluid row">
              <div class="col-xl-4 col-lg-4">
                <label>Por Sucursal</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                  <option value="">Sucursal 1</option>
                  <option value="">Sucursal 2</option>
                </select>
              </div>
              <div class="col-xl-4 col-lg-4">
                <label>Por código</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                  <option value="">Código 1</option>
                  <option value="">Código 2</option>
                </select>
              </div>
              <div class="col-xl-4 col-lg-4">
                <label>Por cantidad</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">5</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- </div> -->

        <!-- Elementos a mostrar en las columnas de la tabla -->
        <!-- <div class="col-xl-6 col-lg-12">
        <div class="mb-2">

          <div class=" justify-content-between">
            <h6 class="m-0 text-info">Columnas a mostrar</h6>
          </div>

          <div class="card-body shadow">
            <div class="container-fluid row">
              <div class="col-xl-3 col-lg-4">
                <label>Por Sucursal</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por Sucursales">
                  <option value="">Sucursal 1</option>
                  <option value="">Sucursal 2</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-4">
                <label>Por código</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por codigos">
                  <option value="">Código 1</option>
                  <option value="">Código 2</option>
                </select>
              </div>
              <div class="col-xl-3 col-lg-4">
                <label>Por cantidad</label>
                <select class="form-control form-control-sm" name="" id="" placeholder="Por cantidades">
                  <option value="">5</option>
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      </div>

      <!--Listado de productos -->
        <div class="col-xl-12 col-lg-7">
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
                <!-- <a class="dropdown-item" href="#"><span class="fa fa-bars"></span> Agregar o quitar columnas</a> -->
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#filasColumnas">
                  <span class="fa fa-bars"></span> Agregar o quitar columnas
                </a>

                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otros</a> -->
              </div>
            </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <!-- <b-button id="button-2" variant="outline-success">Html chat</b-button> -->

              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr style="text-align: center;">
                      <th>No</th>
                      <!-- <th v-if="siFoto">FOTO</th>
                    <th v-if="sicodigo">CÓDIGO</th>
                    <th v-if="sisucursal">SUCURSAL</th>
                    <th v-if="sidescripcion">DESCRIPCION</th>
                    <th v-if="siobservaciones">OBSERVACIONES</th>
                    <th v-if="siestado">ESTADO</th>
                    <th v-if="siacciones">ACCIONES</th> -->
                      <!-- <th>FOTO</th> -->
                      <th v-if="sicodigo">CÓDIGO</th>
                      <th v-if="sisucursal">SUCURSAL</th>
                      <th v-if="sidescripcion">DESCRIPCION</th>
                      <th v-if="siobservaciones">OBSERVACIONES</th>
                      <th v-if="siacciones">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="datos in datosPaginados" :key="datos.id">
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>
                      <!-- <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                          src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td> -->
                      <td v-if="datos.attributes.deleted_at == null && sicodigo">{{ datos.attributes.codigo }}</td>
                      <td v-if="datos.attributes.deleted_at == null && sisucursal">Sucursal</td>
                      <td v-if="datos.attributes.deleted_at == null && sidescripcion">{{ datos.attributes.descripcion }}</td>
                      <td v-if="datos.attributes.deleted_at == null && siobservaciones">{{ datos.attributes.observacion }}</td>
                      <td v-if="datos.attributes.deleted_at == null && siacciones" style="text-align: center;">
                        <button class="btn btn-info btn-sm btn-circle"
                          v-b-tooltip.hover title="Conformar pedido"><span class="fas fa-check"></span></button>&nbsp;
                        <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                          v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;
                          <!-- <button class="btn btn-success btn-sm btn-circle" @click="editarUModel"
                          v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp; -->
                        <button class="btn btn-danger btn-sm btn-circle"
                          @click="borrarU(datos.id, datos.attributes.codigo)" v-b-tooltip.hover title="Eliminar"><span
                            class="fas fa-trash"></span></button>
                      </td>
                    </tr>


                  </tbody>
                </table>

                <div class="text-center">
                  <nav aria-label="Page navigation example" style="text-align: center;">
                    <label>Mostrando &nbsp;</label>
                    <select style="width: 60px" @change="cambiarLimite()" v-model="elementPagina">
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>

                    <label>&nbsp;registros </label>
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

            </div>
          </div>
        </div>
        <!-- FIN -->
    </div>
    <!-- Logout Modal-->
    <div class="modal fade" id="filasColumnas" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Seleccione las columnas que desea visualizar</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
             <h3 style="text-align: center;">Columnas a mostrar</h3>

              <ol>
                <!-- <li><input type="checkbox" name="foto" :checked="siFoto" @change="quitarFoto"> Foto</li> -->
                 <li><input type="checkbox" name="codigo" :checked="sicodigo" @change="quitarcodigo"> Código</li>
                <li><input type="checkbox" name="sucursal" :checked="sisucursal" @change="quitarSucursal"> Sucursal</li>
                <li><input type="checkbox" name="descripcion" :checked="sidescripcion" @change="quitardescripcion"> Descripción</li>
                <li><input type="checkbox" name="observaciones" :checked="siobservaciones" @change="quitarobservacion"> Observaciones</li>
                <!-- <li><input type="checkbox" name="estado" :checked="siestado" @change="quitarestado"> Estado</li> -->
                <li><input type="checkbox" name="acciones" :checked="siacciones" @change="quitaracciones"> Acciones</li>
              </ol>

          </div>
          <div class="modal-footer">
            <!-- <a class="btn btn-info" @click="AColumnas">Aceptar</a> -->
             <a class="btn btn-primary btn-sm" @click="AColumnas">Ninguna</a>
              <a class="btn btn-info btn-sm" @click="MostrarTodas">Todas</a>
            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const siFoto = ref(true);
const sicodigo = ref(true);
const sidescripcion = ref(true);
const siestado = ref(true);
const siobservaciones = ref(true);
const sisucursal = ref(true);
const siacciones = ref(true);

const AColumnas = () => {
    siFoto.value = false;
    sisucursal.value = false;
    sicodigo.value = false;
    siobservaciones.value = false;
    siestado.value = false;
    sidescripcion.value = false;
    siacciones.value = false;
}

const MostrarTodas = () => {
    siFoto.value = true;
    sisucursal.value = true;
    sicodigo.value = true;
    siobservaciones.value = true;
    siestado.value = true;
    sidescripcion.value = true;
    siacciones.value = true;
}

const quitarFoto = () => {
  siFoto.value = !siFoto.value;
}

const quitarSucursal = () => {
  sisucursal.value = !sisucursal.value;
}

const quitarestado = () => {
  siestado.value = !siestado.value;
}

const quitardescripcion = () => {
  sidescripcion.value = !sidescripcion.value;
}

const quitarobservacion = () => {
  siobservaciones.value = !siobservaciones.value;
}

const quitarcodigo = () => {
  sicodigo.value = !sicodigo.value;
}

const quitaracciones = () => {
  siacciones.value = !siacciones.value;
}

// CRUD
let errors = ref([]);

let listado = ref([]);

let listadoSucursales = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let cargado = ref(false);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

const formProductos = reactive({
  data: {
    type: 'Productos',
    attributes: {
      codigo: "",
      descripcion: "",
      observacion: "",
    }
  }
})

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

let newListado = ref([]);

let newListadoSucursal = ref([]);

const obtenerListadoLimpio = () => {
  let i = 0;
  if (cargado.value = false) {
    newListado.value = [];
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
    cargado.value = true;
  } else {
    newListado.value = []
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
    datosSinPaginar.value = newListado.value;
    cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
    obtenerPagina(1);
  }

}

const almacenDatosProductos = (Lista) => {
  // if (localStorage.getItem('ListadoCache')) {
      localStorage.removeItem('ListadoCache');
  //   }else{
      const parsed = JSON.stringify(Lista);
      localStorage.setItem('ListadoCache', parsed);
      // dataCache.value = JSON.parse(localStorage.getItem('ListadoCache'));
    // }
}

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get('http://localhost/fullstack/public/api/nom/productos')
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosProductos(listado.value);
        obtenerListadoLimpio();
        // console.log(response.data.data)
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
}

const borrarU = (id, correo) => {
  Swal.fire({
    title: "Confirmación",
    text: `Está a punto de eliminar el producto: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar //
      axios.delete(`http://localhost/fullstack/public/api/nom/productos/${id}`)
        .then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Producto eliminado satisfactoriamente.",
            icon: "success"
          });
          cargado.value = false;
          consultar();
          cancelarU();
        })


    }
  });
}

const cambiarLimite = () => {
  let i = 0;
  newListado.value = [];
    for (let index = 0; index < listado.value.length; index++) {
      const element = listado.value[index];
      if (element.attributes.deleted_at == null) {
        newListado.value[i] = element;
        i++;
      }
    }
  datosSinPaginar.value = newListado.value;
  cantidad.value = Math.ceil(newListado.value.length / elementPagina.value);
  obtenerPagina(1);
}

onMounted(async => {
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  // if (cargado.value == false) {
  //   consultar();
  //   // consultarSucursales();
  // }

})

</script>
<style lang="scss" scoped></style>
