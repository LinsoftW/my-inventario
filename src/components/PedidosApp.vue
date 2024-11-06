<template>
  <div class="container-fluid">

    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">PEDIDOS</h1>
      <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generar Resumen</a> -->
    </div>

    <!-- Fila con PEDIDOS -->

    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-info">PRODUCTOS EN STOCK </h6>
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
                <th>No</th>
                <th>FOTO</th>
                <th>CÓDIGO</th>
                <th>DESCRIPCIÓN</th>
                <th>PRECIO</th>
                <th>DESCUENTO</th>
                <th>ANTICIPO</th>
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
                <th>5%</th>
                <th>0</th>
                <th>En Stock</th>
                <th>
                  <a class="btn btn-info btn-icon-split" v-b-tooltip.hover title="Conformar pedidos">
                    <span class="icon text-white-50">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Conformar pedido</span>
                  </a>
                  <!-- <button class="btn btn-info"> Conformar pedido</button> -->
                </th>
              </tr>
              <tr>
                <th>2</th>
                <th><img class="img-profile rounded-circle" src="../assets/new/img/mochila.jpg"
                    style="width: 50px; height:50px"></th>
                <th>300562</th>
                <th>Mochila</th>
                <th>60usd</th>
                <th>5%</th>
                <th>0</th>
                <th>Entregado al mensajero</th>
                <th>
                  <a class="btn btn-info btn-icon-split" v-b-tooltip.hover title="Conformar pedidos">
                    <span class="icon text-white-50">
                      <i class="fas fa-check"></i>
                    </span>
                    <span class="text">Conformar pedido</span>
                  </a>
                  <!-- <button class="btn btn-info"> Conformar pedido</button>-->
                  </th>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Content Row -->

    <div class="container-fluid">
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


    </div>

  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped></style>
