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
                <a class="dropdown-item" href="#"><span class="fa fa-bars"></span> Agregar o quitar columnas</a>
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
                    <th>FOTO</th>
                    <th>CÓDIGO</th>
                    <th>SUCURSAL</th>
                    <th>DESCRIPCION</th>
                    <th>OBSERVACIONES</th>
                    <th>ESTADO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <th><img class="img-profile rounded-circle" src="../assets/new/img/tablet.jpg"
                        style="width: 50px; height:50px"> </th>
                    <th>F0093</th>
                    <th>Tablet Samsung</th>
                    <th>100usd</th>
                    <th>Defecto en el chasi</th>
                    <th>En Stock</th>
                    <th>
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

  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped></style>
