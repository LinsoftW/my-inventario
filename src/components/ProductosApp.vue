<template>
  <div>
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">PRODUCTOS</h1>
      </div>

      <!-- TABLA INVENTARIOS -->
      <!-- codigo, descripcion, cantidad -->
      <!-- permitir seleccionar que quiere mostrar -->
      <!-- poner todos los datos en la tabla inventario -->
       <!-- elementos de busqueda -->
        <!-- por Sucursal -->
         <!-- por codigo -->
         <!-- por cantidad -->

         <!--Listado de productos -->
      <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
          <!-- Card Header - Dropdown -->
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK</h6>
            <!-- <div class="dropdown no-arrow">
              <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink">
                <div class="dropdown-header">Acciones:</div>
                <a class="dropdown-item" href="#">Administrar</a>
                <a class="dropdown-item" href="#">Conformar pedidos</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Otros</a>
              </div>
            </div> -->
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
                  <tr>
                    <th>1</th>
                    <th><img class="img-profile rounded-circle img-thumbnail" src="../assets/new/img/tablet.jpg"
                        style="width: 50px; height:50px"> </th>
                    <th>F0093</th>
                    <th>Tablet Samsung</th>
                    <th>100usd</th>
                    <th>Defecto en el chasi</th>
                    <th style="text-align: center;"><a class="btn btn-success btn-circle" v-b-tooltip.hover title="Editar">
                      <i class="fa fa-edit"></i>
                    </a>&nbsp;
                    <a class="btn btn-danger btn-circle" v-b-tooltip.hover title="Eliminar">
                      <i class="fas fa-trash"></i>
                    </a>
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

  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>

</style>
