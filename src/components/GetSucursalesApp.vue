<template>
  <div>

    <div class="container-fluid">

      <div class="d-sm-flex align-items-center justify-content-between mb-4">

        <h1 class="h3 mb-0 text-gray-800">SUCURSALES</h1>

        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
          title="Generar resumen diario" @click="clickEditar"><i class="fas fa-plus fa-sm "></i> Agregar sucursal</a> -->

      </div>



      <!-- Datos del producto a agregar -->

      <div class="row">



        <!--Listado de sucursals -->

        <div class="col-xl-8 col-lg-7">

          <div class="card shadow mb-4">

            <!-- Card Header - Dropdown -->

            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">

              <h6 class="m-0 font-weight-bold text-info">LISTADO DE SUCURSALES</h6>

            </div>

            <!-- Card Body -->

            <div class="card-body">



              <div class="table-responsive">

                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

                  <thead>

                    <tr>

                      <th>No</th>

                      <!-- <th>FOTO</th> -->

                      <th>NOMBRE</th>

                      <th>ABREVIATURA</th>

                      <th>DESCRIPCION</th>

                      <th>OBSERVACIONES</th>

                      <th>ACCIONES</th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr v-for="datos in datosPaginados" :key="datos.id">

                      <td>{{ datos.id }}</td>

                      <!-- <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"

                              src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td> -->

                      <td>{{ datos.attributes.nombre }}</td>

                      <td>{{ datos.attributes.abreviatura }}</td>

                      <td>{{ datos.attributes.descripcion }}</td>

                      <td>{{ datos.attributes.observacion }}</td>

                      <td style="text-align: center;">

                        <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.id)"
                          v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;

                        <button class="btn btn-danger btn-sm btn-circle"
                          @click="borrarU(datos.id, datos.attributes.abreviatura)" v-b-tooltip.hover
                          title="Eliminar"><span class="fas fa-trash"></span></button>

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

            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between" style="text-align: center;">

              <h6 class="m-0 font-weight-bold text-info" v-if="editar == false"><span class="fa fa-plus"></span> AGREGAR
                NUEVA SUCURSAL </h6>

              <h6 class="m-0 font-weight-bold text-info" v-if="editar == true"><span class="fa fa-edit"></span>
                MODIFICAR LOS DATOS DE LA SUCURSAL <br>(<label style="color: red;">{{ formSucursal.data.attributes.abreviatura }}</label>)</h6>

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

                      <div class="form-group col-lg-6">

                        <label class="text-info">Nombre: <label style="color: red;">*</label></label>

                        <input type="text" class="form-control" id="codigo" aria-describedby="emailHelp"
                          v-model="formSucursal.data.attributes.nombre" placeholder="Nombre...">

                      </div>

                      <div class="form-group col-lg-6">

                        <label class="text-info">Abreviatura: <label style="color: red;">*</label></label>

                        <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                          v-model="formSucursal.data.attributes.abreviatura" placeholder="Abreviatura...">

                      </div>



                    </div>

                    <div class="row">

                      <div class="form-group col-lg-12">

                        <label class="text-info">Descripción: <label style="color: red;">*</label></label>

                        <input type="text" class="form-control" id="descripcion" aria-describedby="emailHelp"
                          v-model="formSucursal.data.attributes.descripcion" placeholder="Descripción de la sucursal">

                      </div>

                    </div>





                    <div class="row">

                      <div class="form-group col-lg-12">

                        <label class="text-info">Observaciones:</label>

                        <textarea class="form-control" id="observaciones"
                          v-model="formSucursal.data.attributes.observacion"
                          placeholder="Observaciones acerca de la sucursal"></textarea>

                        <!-- <input type="text" class="form-control" id="observaciones"

                            aria-describedby="emailHelp" v-model="form.apellido1" placeholder="Observaciones acerca del producto"> -->

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

                          Agregar Sucursal

                        </a>

                      </div>

                      <div v-if="editar" class="form-group h4 col-lg-6">

                        <a @click="editarU" class="btn btn-info btn-user btn-block">

                          Modificar sucursal

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
import { onMounted, reactive, ref } from 'vue';

// CRUD completo

let errors = ref([]);

let listado = ref([]);

let datosPaginados = ref([]);

let datosSinPaginar = ref([]);

let buscando = ref('');

let editar = ref(false);

let cargado = ref(false);

let id = ref('');

let cantidad = ref(0);

let elementPagina = ref(5);

let inicio = ref(0);

let fin = ref(0);

let paginaActual = ref(1);

let disableA = ref('');
let disableS = ref('');

let setTiempoBusca = '';

const formSucursal = reactive({
  data: {
    type: 'Sucursals',
    attributes: {
      nombre: "",
      abreviatura: "",
      descripcion: "",
      observacion: "",
    }
  }
})

const almacenDatosSucursales = (Lista) => {
  // if (localStorage.getItem('ListadoCacheSucursal')) {
  //       localStorage.removeItem('ListadoCacheSucursal');
  //   }else{
      const parsed = JSON.stringify(Lista);
      localStorage.setItem('ListadoCacheSucursal', parsed);
      // dataCache.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
    // }
}

const agregarU = () => {
  // console.log(formSucursal.object)
  axios.post('http://localhost/fullstack/public/api/nom/sucursals', formSucursal)
    .then((response) => {
      cargado.value = false;
      consultar();
      formSucursal.data.attributes.observacion = ''
      formSucursal.data.attributes.descripcion = '';
      formSucursal.data.attributes.nombre = '';
      formSucursal.data.attributes.abreviatura = '';
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

let newListado = ref([]);

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

const consultar = async () => {
  if (cargado.value == false) {
    let response = await axios.get('http://localhost/fullstack/public/api/nom/sucursals')
      .then((response) => {
        listado.value = response.data.data;
        almacenDatosSucursales(listado.value);
        // console.log(response.data)
        obtenerListadoLimpio()
        // datosSinPaginar.value = response.data.data;
        // cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
        // obtenerPagina(1);
        // cargado.value = true;
        // router.go();
      });
  } else {
    almacenDatosSucursales(listado.value);
    obtenerListadoLimpio()
    // datosSinPaginar.value = listado.value;
    // cantidad.value = Math.ceil(listado.value.length / elementPagina.value);
    // obtenerPagina(1);
  }

}

const buscandoElemento = () => {
  clearTimeout(setTiempoBusca);
  setTiempoBusca = setTimeout(consultar, 360);
}

const editarU = () => {
  axios.put(`http://localhost:8000/public/api/nom/sucursals/${id.value}`, formSucursal)
    .then((response) => {
      // console.log(response)
      consultar();
      formSucursal.data.attributes.descripcion = ''
      formSucursal.data.attributes.observacion = '';
      formSucursal.data.attributes.codigo = '';
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
    text: `Está a punto de eliminar la sucursal: ${correo}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      // Eliminar //
      axios.delete(`http://localhost/fullstack/public/api/nom/sucursals/${id}`)
        .then(() => {
          Swal.fire({
            title: "Eliminado",
            text: "Sucursal eliminado satisfactoriamente.",
            icon: "success"
          });
          cargado.value = false;
          consultar();
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
      formSucursal.data.attributes.descripcion = listado.value[index].attributes.descripcion;
      formSucursal.data.attributes.nombre = listado.value[index].attributes.nombre;
      formSucursal.data.attributes.observacion = listado.value[index].attributes.observacion;
      formSucursal.data.attributes.abreviatura = listado.value[index].attributes.abreviatura;
      break;
    }
    // console.log(element)
  }

  // let response = await axios.get(`http://localhost/fullstack/public/api/nom/sucursals/${id.value}`)
  //   .then((response) => {
  //     formSucursal.data.attributes.descripcion = response.data.data.attributes.descripcion;
  //     formSucursal.data.attributes.codigo = response.data.data.attributes.codigo;
  //     formSucursal.data.attributes.observacion = response.data.data.attributes.observacion;
  //   })
}

const cancelarU = () => {
  editar.value = false;
  formSucursal.data.attributes.descripcion = '';
  formSucursal.data.attributes.nombre = '';
  formSucursal.data.attributes.observacion = '';
  formSucursal.data.attributes.abreviatura = '';
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
  listado.value = JSON.parse(localStorage.getItem('ListadoCacheSucursal'));
  obtenerListadoLimpio();
  // if (cargado.value == false) {
  //   consultar();
  // }

})
</script>
<style lang="scss" scoped></style>
