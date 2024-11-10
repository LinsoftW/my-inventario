<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">INVENTARIO</h1>
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

            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>No</th>
                    <th v-if="siFoto">FOTO</th>
                    <th v-if="sicodigo">CÓDIGO</th>
                    <th v-if="sisucursal">SUCURSAL</th>
                    <th v-if="sidescripcion">DESCRIPCION</th>
                    <th v-if="siobservaciones">OBSERVACIONES</th>
                    <th v-if="siestado">ESTADO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th v-if="siFoto"><img class="img-profile rounded-circle img-thumbnail" src="../assets/new/img/tablet.jpg"
                        style="width: 50px; height:50px"> </th>
                    <th v-if="sicodigo">F0093</th>
                    <th v-if="sisucursal">Tablet Samsung</th>
                    <th v-if="sidescripcion">100usd</th>
                    <th v-if="siobservaciones">Defecto en el chasi</th>
                    <th v-if="siestado">En Stock</th>
                    <th style="text-align: center;">
                      <div class="dropdown mb-4">
                        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Acciones
                        </button>
                        <div class="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#"><span class="fa fa-plus-circle"></span> Incrementar</a>
                          <a class="dropdown-item" href="#"><span class="fa fa-minus-circle"></span> Decrementar</a>
                          <a class="dropdown-item" href="#">Otras</a>

                        </div>
                      </div>
                    </th>
                  </tr>


                </tbody>
              </table>
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
                <li><input type="checkbox" name="foto" :checked="siFoto" @change="quitarFoto"> Foto</li>
                <li><input type="checkbox" name="sucursal" :checked="sisucursal" @change="quitarSucursal"> Sucursal</li>
                <li><input type="checkbox" name="codigo" :checked="sicodigo" @change="quitarcodigo"> Código</li>
                <li><input type="checkbox" name="descripcion" :checked="sidescripcion" @change="quitardescripcion"> Descripción</li>
                <li><input type="checkbox" name="observaciones" :checked="siobservaciones" @change="quitarobservacion"> Observaciones</li>
                <li><input type="checkbox" name="estado" :checked="siestado" @change="quitarestado"> Estado</li>

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
import { ref } from 'vue';

const siFoto = ref(true);
const sicodigo = ref(true);
const sidescripcion = ref(true);
const siestado = ref(true);
const siobservaciones = ref(true);
const sisucursal = ref(true);

const AColumnas = () => {
    siFoto.value = false;
    sisucursal.value = false;
    sicodigo.value = false;
    siobservaciones.value = false;
    siestado.value = false;
    sidescripcion.value = false;
}

const MostrarTodas = () => {
    siFoto.value = true;
    sisucursal.value = true;
    sicodigo.value = true;
    siobservaciones.value = true;
    siestado.value = true;
    sidescripcion.value = true;
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

</script>
<style lang="scss" scoped></style>
