<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">PRODUCTOS</h1>
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario" @click="agregarU"><i class="fas fa-plus fa-sm "></i> Agregar productos</a> -->
      </div>

      <!-- Datos del producto a agregar -->
      <div class="row">

        <!--Listado de productos -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
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
                      <th>SUCURSAL</th>
                      <th>DESCRIPCION</th>
                      <th>OBSERVACIONES</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="datos in datosPaginados" :key="datos.codigo">
                      <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                          src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td>
                      <td>{{ datos.codigo }}</td>
                      <td>Sucursal</td>
                      <td>{{ datos.descripcion }}</td>
                      <td>{{ datos.observacion }}</td>
                      <td style="text-align: center;">
                        <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                          v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;
                        <button class="btn btn-danger btn-sm btn-circle" @click="borrarU(datos.id, datos.descripcion)"
                          v-b-tooltip.hover title="Eliminar"><span class="fas fa-trash"></span></button>
                      </td>
                    </tr>


                  </tbody>
                </table>

                <div class="text-center">
                  <nav aria-label="Page navigation example" style="text-align: center;">
                    <label>Mostrando &nbsp;</label>
                    <select style="width: 60px" @change="consultar()" v-model="elementPagina">
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

        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-info">DATOS DEL NUEVO PRODUCTO</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">

              <!-- Personas -->
              <div class="col-lg-12">
                <div class="">
                  <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-4">DEBE LLENAR TODOS LOS CAMPOS</h1>
                  </div>
                  <form class="user">

                    <div class="row">
                      <div class="form-group col-lg-4">
                        <label>Código:</label>
                        <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                          v-model="formProductos.codigo" placeholder="Código">
                      </div>
                      <div class="form-group col-lg-8">
                        <label>Descripción:</label>
                        <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                          v-model="formProductos.descripcion" placeholder="Descripción del producto">
                      </div>

                    </div>
                    <div class="form-group ">
                      <label>Observaciones:</label>
                      <textarea class="form-control" id="observaciones" v-model="formProductos.observacion"
                        placeholder="Observaciones acerca del producto"></textarea>
                      <!-- <input type="text" class="form-control" id="observaciones"
                        aria-describedby="emailHelp" v-model="form.apellido1" placeholder="Observaciones acerca del producto"> -->
                    </div>
                    <div class="row">
                      <div class="form-group col-lg-12">
                        <label>Sucursal:</label>
                      <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal" class="text-gray-900 form-control">
                        <option value="Habana">Habana</option>
                        <option value="Matanzas">Matanzas</option>
                        <!-- <option value="Mensajero">Mensajero</option> -->
                      </select>
                    </div>
                    </div>
                    <div class="form-group">
                      <label>Imagen:</label>
                    <input type="file" class="form-control" id="foto"> Seleccione una foto para el producto...
                  </div>


                    <div class="row">
                      <div class="col-lg-3"></div>
                      <div class="form-group h4 col-lg-6">
                        <a @click="agregarU" class="btn btn-info btn-user btn-block">
                          Agregar producto
                        </a>
                      </div>
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
      <!-- elementos de busqueda -->
      <!-- por Sucursal -->
      <!-- por codigo -->
      <!-- por cantidad -->

    </div>

  </div>
</template>
<script setup>

import axios from 'axios';
import router from '@/router';
import Swal from 'sweetalert2';
import { onMounted, reactive, ref } from 'vue';

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

const formProductos = reactive({
  codigo: "",
  descripcion: "",
  observacion: "",
})

const agregarU = () => {
  axios.post('http://localhost:8000/public/api/nom/productos', formProductos)
    .then((response) => {
      // console.log(response)
      // consultar();
      formProductos.observacion = ''
      formProductos.descripcion = '';
      formProductos.codigo = '';
      Swal.fire({
        icon: "success",
        title: "Producto agregado satisfactoriamente."
      })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      if (error.response.status === 400) {
        errors.value = error.response.data;
      }
      Swal.fire({
        icon: "error",
        title: error.message
      })
      // console.log(error.message)
    })
}

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
  let response = await axios.get('http://localhost:8000/public/api/nom/productos')
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

const editarU = () => {
  axios.put(`http://localhost:8000/public/api/nom/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      consultar();
      formProductos.descripcion = ''
      formProductos.observacion = '';
      formProductos.codigo = '';
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

const clickEditar = async (idSelect) => {
  editar.value = true;
  localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  let response = await axios.get(`http://localhost:8000/public/api/nom/productos/${id.value}`)
    .then((response) => {
      formProductos.descripcion = response.data.descripcion;
      formProductos.codigo = response.data.codigo;
      formProductos.observacion = response.data.observacion;
    })
}

const cancelarU = () => {
  editar.value = false;
  formProductos.descripcion = '';
  formProductos.codigo = '';
  formProductos.observacion = '';
}

onMounted(async => {
  consultar();
})
</script>
<style lang="scss" scoped></style>
