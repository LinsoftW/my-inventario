<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">TRABAJADORES</h1>
      <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm" v-b-tooltip.hover
        title="Generar resumen diario"><i class="fas fa-plus fa-sm"></i> Agregar trabajador</a> -->
    </div>

    <!-- Usuarios -->
    <div class="row">
      <div class="col-xl-12 col-lg-5">
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
                <a class="dropdown-item" href="#"><span class="fa fa-trash"></span> Eliminar todos</a>
              </div>
            </div>
          </div>
          <!-- Card Body -->
          <div class="card-body">

            <!-- Personas -->
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="10">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>FOTO</th>
                    <th>CORREO</th>
                    <th>NOMBRE</th>
                    <th>ROL</th>
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
                    <td style="text-align: end;"><img class="img-profile rounded-circle img-thumbnail"
                        src="../assets/new/img/undraw_profile_1.svg"> <i class="fas fa-circle text-primary"></i></td>
                    <td>{{ datos.direccion }}</td>
                    <td>{{ datos.codigo }}</td>
                    <td style="text-align: center;">
                      <button class="btn btn-success btn-sm btn-circle" @click="clickEditar(datos.idcorreo)"
                        v-b-tooltip.hover title="Editar"><span class="fas fa-edit"></span></button>&nbsp;
                      <button class="btn btn-danger btn-sm btn-circle" @click="borrarU(datos.idcorreo, datos.direccion)"
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

    </div>



  </div>

</template>
<script setup>

</script>
<style lang="scss"></style>
