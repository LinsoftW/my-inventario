<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">PRODUCTOS </h1>
        <!-- {{ listado }} -->
        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-plus fa-sm "></i> Agregar productos</a> -->
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
                    <tr style="text-align: center;">
                      <th>No</th>
                      <!-- <th>FOTO</th> -->
                      <th>CÓDIGO</th>
                      <th>SUCURSAL</th>
                      <th>DESCRIPCION</th>
                      <th>OBSERVACIONES</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="datos in datosPaginados" :key="datos.id">
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.id }}</td>
                      <!-- <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                          src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td> -->
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.codigo }}</td>
                      <td v-if="datos.attributes.deleted_at == null">Sucursal</td>
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.descripcion }}</td>
                      <td v-if="datos.attributes.deleted_at == null">{{ datos.attributes.observacion }}</td>
                      <td v-if="datos.attributes.deleted_at == null" style="text-align: center;">
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

        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
              style="text-align: center;">
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span> AGREGAR
                NUEVO PRODUCTO </h6>
              <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
                MODIFICAR LOS DATOS DEL PRODUCTO <br>(<label style="color: red;">{{ formProductos.data.attributes.codigo
                  }}</label>)</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">

              <!-- Personas -->
              <div class="col-lg-12">
                <div class="">
                  <div class="text-center">
                    <h1 class="h6 text-gray-900 mb-4">CAMPOS OBLIGATORIOS (<label style="color: red;">*</label>)</h1>
                  </div>
                  <form class="user">

                    <div class="row">
                      <div class="form-group col-lg-4">
                        <label class="text-info">Código: <label style="color: red;">*</label></label>
                        <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                          v-model="formProductos.data.attributes.codigo" placeholder="Código" required>
                      </div>
                      <div class="form-group col-lg-8">
                        <label class="text-info">Descripción: <label style="color: red;">*</label></label>
                        <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                          v-model="formProductos.data.attributes.descripcion" placeholder="Descripción del producto">
                      </div>

                    </div>
                    <div class="form-group ">
                      <label class="text-info">Observaciones:</label>
                      <textarea class="form-control" id="observaciones"
                        v-model="formProductos.data.attributes.observacion"
                        placeholder="Observaciones acerca del producto"></textarea>
                      <!-- <input type="text" class="form-control" id="observaciones"
                        aria-describedby="emailHelp" v-model="form.apellido1" placeholder="Observaciones acerca del producto"> -->
                    </div>
                    <div class="row">
                      <div class="form-group col-lg-12">
                        <label class="text-info">Sucursal: <label style="color: red;">*</label></label>
                        <select name="rol" id="rol" style="width: 100%; text-align:center" placeholder="Sucursal"
                          class="text-gray-900 form-control">
                          <option v-for="dato in listadoSucursales" :key="dato.id" :value="dato.attributes.nombre">{{
                            dato.attributes.nombre }}</option>
                          <!-- <option value="Matanzas">Matanzas</option> -->
                          <!-- <option value="Mensajero">Mensajero</option> -->
                        </select>
                      </div>
                    </div>
                    <!-- <div class="form-group">
                      <label class="text-info">Imagen:</label>
                      <input type="file" class="form-control" id="foto"> Seleccione una foto para el producto...
                    </div> -->


                    <div class="row">
                      <div v-if="editar == false" class="col-lg-3"></div>
                      <div v-if="editar == false" class="form-group h4 col-lg-6">
                        <a @click="agregarU" class="btn btn-info btn-user btn-block">
                          Agregar producto
                        </a>
                      </div>
                      <div v-if="editar" class="form-group h4 col-lg-6">
                        <a @click="editarU" class="btn btn-info btn-user btn-block">
                          Modificar producto
                        </a>
                      </div>
                      <div v-if="editar" class="form-group h4 col-lg-6">
                        <a @click="cancelarU" class="btn btn-danger btn-user btn-block">
                          Cancelar
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
import { onActivated, onMounted, reactive, ref } from 'vue';

// Definicion de props
// defineProps({
//  datosPaginados1 : {
//   type : []
// },
// listado : {
//   type : []
// },
// });
// Fin definicion

// CRUD completo

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

const ipPublica = ref('192.168.63.123');

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

const agregarU = () => {
  // console.log(formProductos.object)
  axios.post(`http://`+ ipPublica.value +`/fullstack/public/productos`, formProductos)
    .then((response) => {
      cargado.value = false;
      // almacenDatosProductos()
      consultar();
      formProductos.data.attributes.observacion = ''
      formProductos.data.attributes.descripcion = '';
      formProductos.data.attributes.codigo = '';
      Swal.fire({
        icon: "success",
        title: "Producto agregado satisfactoriamente."
      })
      // editar.value = false;
      // localStorage.setItem("editar", editar.value);
    })
    .catch((error) => {
      // console.log(error.response.data.message)
      if (error.response.status === 400) {
        errors.value = error.response.data.message;
      }
      Swal.fire({
        icon: "error",
        title: error.response.data.message
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

let newListado = ref([]);

let newListadoSucursal = ref([]);

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

const obtenerListadoLimpioSucursales = () => {
  let i = 0;
  // if (cargado.value = false) {
  newListadoSucursal.value = [];
  for (let index = 0; index < listadoSucursales.value.length; index++) {
    const element = listadoSucursales.value[index];
    if (element.attributes.deleted_at == null) {
      newListadoSucursal.value[i] = element;
      i++;
    }
  }
  return newListadoSucursal;
  // }

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
    let response = await axios.get(`http://`+ ipPublica.value +`/fullstack/public/productos`)
      .then((response) => {
        listado.value = response.data.data;
        // console.log(listado.value)
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
    // console.log(listado.value)
    almacenDatosProductos(listado.value);
    obtenerListadoLimpio();
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const editarUModel = async () => {
  await Swal.fire({

    input: "textarea",
    inputLabel: `Modificar datos del producto: ` + `${formProductos.data.attributes.codigo}`,
    inputPlaceholder: "Observaciones del producto",
    inputAttributes: {
      "aria-label": "Observaciones del producto"
    },
    showCancelButton: true,
    confirmButtonText: "Modificar"
  });
  if (text) {
    Swal.fire(text);
  }
}

const consultarSucursales = async () => {
  // if (cargado.value == false) {
  let response = await axios.get(`http://`+ ipPublica.value +`/fullstack/public/sucursals`)
    .then((response) => {
      listadoSucursales.value = response.data.data;
      // console.log(response.data)
      // datosSinPaginar.value = response.data.data;
      // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
      // obtenerPagina(1);
      // cargado.value = true;
      // router.go();
      listadoSucursales = obtenerListadoLimpioSucursales();
    });

  // }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

const editarU = () => {
  axios.put(`http://${ipPublica.value}/public/productos/${id.value}`, formProductos)
    .then((response) => {
      // console.log(response)
      consultar();
      formProductos.data.attributes.descripcion = ''
      formProductos.data.attributes.observacion = '';
      formProductos.data.attributes.codigo = '';
      toast.fire({
        icon: "success",
        title: "Editado satisfactoriamente."
      })
      editar.value = false;
      // localStorage.setItem("editar", editar.value);
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
    text: `Está a punto de eliminar el producto: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar //
      axios.delete(`http://${ipPublica.value}/fullstack/public/productos/${id}`)
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
// Fin CRUD

const clickEditar = async (idSelect) => {
  editar.value = true;
  // localStorage.setItem("editar", editar.value);
  id.value = idSelect;

  for (let index = 0; index < listado.value.length; index++) {
    const element = listado.value[index].id;
    if (element == idSelect) {
      formProductos.data.attributes.descripcion = listado.value[index].attributes.descripcion;
      formProductos.data.attributes.codigo = listado.value[index].attributes.codigo;
      formProductos.data.attributes.observacion = listado.value[index].attributes.observacion;
      break;
    }
    // console.log(element)
  }

  // editarUModel()

  // let response = await axios.get(`http://localhost/fullstack/public/api/nom/productos/${id.value}`)
  //   .then((response) => {
  //     formProductos.data.attributes.descripcion = response.data.data.attributes.descripcion;
  //     formProductos.data.attributes.codigo = response.data.data.attributes.codigo;
  //     formProductos.data.attributes.observacion = response.data.data.attributes.observacion;
  //   })
}

const cancelarU = () => {
  editar.value = false;
  formProductos.data.attributes.descripcion = '';
  formProductos.data.attributes.codigo = '';
  formProductos.data.attributes.observacion = '';
}

onMounted(async () => {
  listado.value = JSON.parse(localStorage.getItem('ListadoCache'));
  obtenerListadoLimpio();
  listadoSucursales.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  listadoSucursales = obtenerListadoLimpioSucursales();
  // console.log(datosPaginados1)
  // if (cargado.value == false) {
  //   consultar();
  //   consultarSucursales();
  // }

})
</script>
<style lang="scss" scoped></style>
