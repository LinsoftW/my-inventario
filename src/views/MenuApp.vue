<template>
  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <ul :class="'navbar-nav bg-gradient-' + Cosc_Clar + ' sidebar sidebar-dark accordion ' + Ctoggled"
      id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon rotate-n-15">
          <!-- <i class="fas fa-laugh-wink"></i> -->
          <img width="40" height="40" src="/clipboard-list.png" alt="clipboard-list" />
        </div>
        <!-- <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.jpg" style="width: 30px; height:30px" alt="..."> -->
        <div class="sidebar-brand-text mx-3">MyInventario <sup>1.0</sup></div>
      </a>

      <!-- Divider -->
      <hr class="sidebar-divider my-0">

      <!-- Nav Item - Dashboard -->
      <li class="nav-item active">

        <router-link class="button" to="/inicio">
          <a class="nav-link">
            <i class="fas fa-fw fa-home"></i>
            <span>INICIO</span></a>

        </router-link>

      </li>
      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Gestión
      </div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
          aria-controls="collapseTwo">
          <i class="fas fa-fw fa-eye"></i>
          <span>CONSULTAS
          </span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Consultar:</h6>
            <!-- <a class="collapse-item" @click="click_inventario">Inventario</a>
            <a class="collapse-item" @click="click_pedidos">Pedidos</a> -->
            <router-link class="button" to="/user">
              <a class="collapse-item" v-bind:class="ActivaLink(1)" :key="1" @click="obtenerLinkA(1)"><i
                  class="fas fa-fw fa-eye"></i> Usuarios</a>
            </router-link>
            <router-link class="button" to="/inventario">
              <a class="collapse-item" v-bind:class="ActivaLink(2)" :key="2" @click="obtenerLinkA(2)"> <i class="fas fa-fw fa-eye"></i>
                Productos</a>
            </router-link>
            <router-link class="button" to="/pedidos">
              <a class="collapse-item" v-bind:class="ActivaLink(3)" :key="3" @click="obtenerLinkA(3)"> <i class="fas fa-fw fa-eye"></i> Pedidos</a>
            </router-link>
            <router-link class="button" to="/sucursales">
              <a class="collapse-item" v-bind:class="ActivaLink(4)" :key="4" @click="obtenerLinkA(4)"> <i class="fas fa-fw fa-eye"></i> Sucursales</a>
            </router-link>
            <!-- <a class="collapse-item" href="cards.html">Cards</a> -->
          </div>
        </div>
      </li>

      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
          aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fas fa-fw fa-cog"></i>
          <span>GESTIÓN</span>
        </a>
        <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Gestionar:</h6>
            <!-- <a class="collapse-item button" @click="click_sucursales">Sucursales</a> -->
            <router-link class="button" to="/gest_user">
              <a class="collapse-item" v-bind:class="ActivaLink(5)" :key="5" @click="obtenerLinkA(5)"> <i class="fas fa-fw fa-cogs"></i> Usuarios</a>
            </router-link>
            <router-link class="button" to="/gest_inventario">
              <a class="collapse-item" v-bind:class="ActivaLink(6)" :key="6" @click="obtenerLinkA(6)"> <i class="fas fa-fw fa-cogs"></i> Productos</a>
            </router-link>
            <router-link class="button" to="/gest_pedidos">
              <a class="collapse-item" v-bind:class="ActivaLink(7)" :key="7" @click="obtenerLinkA(7)"> <i class="fas fa-fw fa-cogs"></i> Pedidos</a>
            </router-link>
            <router-link class="button" to="/gest_sucursal">
              <a class="collapse-item" v-bind:class="ActivaLink(8)" :key="8" @click="obtenerLinkA(8)"> <i class="fas fa-fw fa-cogs"></i> Sucursales</a>
            </router-link>
            <!-- https://ervchldgqphohvvkotag.supabase.co/storage/v1/object/sign/DiskTwinTecnology/ImgUsuarios/MOTOS.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEaXNrVHdpblRlY25vbG9neS9JbWdVc3Vhcmlvcy9NT1RPUy5wbmciLCJpYXQiOjE3MzE4Njc4MDksImV4cCI6MTczMjQ3MjYwOX0.qEfY5yBMSPd55zzgJdYPmiphc6oXjHlbMbmBLyl6b0M&t=2024-11-17T18%3A26%3A48.194Z -->
            <!-- <a class="collapse-item" @click="click_productos"> Productos</a> -->
            <!-- <router-link class="button" to="/productos">
              <a class="collapse-item">Productos</a>
            </router-link> -->
            <!-- <a class="collapse-item" href="#">Otros</a> -->
            <!-- <a class="collapse-item" href="utilities-border.html">Borders</a>
                        <a class="collapse-item" href="utilities-animation.html">Animations</a>
                        <a class="collapse-item" href="utilities-other.html">Other</a> -->
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider">

      <!-- Heading -->
      <!-- <div class="sidebar-heading">
                Addons
            </div> -->

      <!-- Nav Item - Pages Collapse Menu -->
      <!-- <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                    aria-expanded="true" aria-controls="collapsePages">
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Login Screens:</h6>
                        <a class="collapse-item" href="login.html">Login</a>
                        <a class="collapse-item" href="register.html">Register</a>
                        <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                        <div class="collapse-divider"></div>
                        <h6 class="collapse-header">Other Pages:</h6>
                        <a class="collapse-item" href="404.html">404 Page</a>
                        <a class="collapse-item" href="blank.html">Blank Page</a>
                    </div>
                </div>
            </li> -->

      <!-- Nav Item - Charts -->
      <!-- <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Charts</span></a>
            </li> -->

      <!-- Nav Item - Tables -->
      <!-- <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <i class="fas fa-fw fa-table"></i>
                    <span>Tables</span></a>
            </li> -->

      <!-- Divider -->
      <!-- <hr class="sidebar-divider d-none d-md-block"> -->

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle" @click="MueveMenu"></button>
      </div>

      <!-- Sidebar Message -->
      <!-- <div class="sidebar-card d-none d-lg-flex">
        <img class="sidebar-card-illustration mb-2" src="../assets/new/img/inventario.svg" alt="...">
        <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!
        </p>
        <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
      </div> -->

    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <!-- Sidebar Toggle (Topbar) -->
          <button id="sidebarToggleTop" @click="MueveMenu" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          <!-- Topbar Search -->
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Que desea buscar..."
                aria-label="Search" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button :class="'btn btn-' + Cosc_Clar" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Que desea buscar..."
                      aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button :class="'btn btn-' + Cosc_Clar" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <!-- Nav Item - Alerts -->
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-bell fa-fw"></i>
                <!-- Counter - Alerts -->
                <span class="badge badge-danger badge-counter">0</span>
              </a>
              <!-- Dropdown - Alerts -->
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Notificaciones
                </h6>
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a> -->
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                      <i class="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a> -->
                <!-- <a class="dropdown-item d-flex align-items-center" href="#">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We've noticed unusually high spending for your account.
                  </div>
                </a> -->
                <a class="dropdown-item text-center small text-gray-500" href="#">Mostrar todas las alertas</a>
              </div>
            </li>

            <!-- Nav Item - Messages -->
            <!-- <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>

                                <span class="badge badge-danger badge-counter">7</span>
                            </a>

                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_1.svg"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_2.svg"
                                            alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="../assets/new/img/undraw_profile_3.svg"
                                            alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src=""
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li> -->

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ userName }}</span>
                <img v-if="imgPerfil" class="img-profile rounded-circle" v-bind:src="imgPerfil">
                <img v-else class="img-profile rounded-circle" src="/src/assets/new/img/undraw_profile.svg">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#" @click="cargarImagen">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Cambiar imagen de perfil
                </a>
                <!-- <a class="dropdown-item" href="#" @click="Cambia_Color">
                  <i class="fas fa-edit fa-sm fa-fw mr-2 text-gray-400"></i>
                  Oscuro / Default
                </a> -->
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configuración
                </a>
                <!-- <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a> -->
                <div class="dropdown-divider"></div>
                <!--<a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal" @click="salir">-->
                <a class="dropdown-item" @click="salir">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Salir
                </a>
              </div>
            </li>

          </ul>

        </nav>
        <!-- End of Topbar -->

        <!-- Begin Page Content -->
        <div v-if="route.path == '/inicio'">
          <InicioApp :key="Kinicio" />
          <!-- <InicioApp /> -->
        </div>
        <div v-if="route.path == '/pedidos'">
          <PedidosApp :key="Kpedidos" />
        </div>
        <div v-if="route.path == '/sucursales'">
          <SucursalApp :key="Ksucursales" />
        </div>
        <div v-if="route.path == '/gest_inventario'">
          <ProductosApp :key="Kgest_inventario" />
        </div>
        <div v-if="route.path == '/inventario'">
          <InventarioApp :key="Kinventario" />
        </div>
        <div v-if="route.path == '/user'">
          <UserApp :key="Kuser" />
        </div>
        <div v-if="route.path == '/gest_user'">
          <GestUserApp :key="Kgest_user" />
        </div>
        <div v-if="route.path == '/gest_sucursal'">
          <GetSucursalesApp :key="Kgest_sucursal" />
        </div>

        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">

        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Todos los derechos reservados. &nbsp; 2024</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Salir del sistema</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Esta seguro que desea salir?</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
          <a :class="'btn btn-' + Cosc_Clar" href="/login">Salir</a>
        </div>
      </div>
    </div>
  </div>

  <!-- </body> -->
</template>

<script setup>
import InicioApp from '@/components/InicioApp.vue';
import axios from 'axios';
import InventarioApp from '@/components/InventarioApp.vue';
import PedidosApp from '@/components/PedidosApp.vue';
import router from '@/router';
import { onUpdated, ref } from 'vue';
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
import SucursalApp from '@/components/SucursalApp.vue';
import ProductosApp from '@/components/ProductosApp.vue';
import Swal from 'sweetalert2';
import UserApp from '@/components/UserApp.vue';
import GestUserApp from '@/components/GestUserApp.vue';
import GetSucursalesApp from '@/components/GetSucursalesApp.vue';

const Kinicio = ref(0);
const Kpedidos = ref(0);
const Kinventario = ref(0);
const Kproductos = ref(0);
const Ksucursales = ref(0);

const activalo = ref('');

const link = ref(0);

const Cosc_Clar = ref('info');

const Ctoggled = ref('');

const bodyLogin = document.getElementById('page-top');

const ulBody = document.getElementById('accordionSidebar');

const obtenerLinkA = (alink) => {
   link.value = alink;
}

const MueveMenu = () => {
  if (Ctoggled.value == '') {
    Ctoggled.value = 'toggled';
  } else {
    Ctoggled.value = '';
  }

  // router.go()
  // console.log("OKK")
  // bodyLogin.classList.add('sidebar-toggled');
  // ulBody.classList.add('toggled');
}

const ActivaLink = (valor) => {
  if (valor == link.value) {
    return 'active'
  }else{
    return ''
  }
}

// const click_inicio = () => {
//   window.location = '/inicio';
// }

// const click_pedidos = () => {
//   window.location = '/pedidos';
// }

// const click_inventario = () => {
//   window.location = '/inventario';
// }

// const click_sucursales = () => {
//   window.location = '/sucursales';
// }

// const click_productos = () => {
//   window.location = '/productos';
// }

// onUpdated(() => {
//   // text content should be the same as current `count.value`
//   console.log('Actual')
//   Kinicio.value += 1;
// })

const consultar = async () => {
  let response = await axios.get('http://localhost/fullstack/public/api/nom/productos')
    .then((response) => {
      listado.value = response.data.data;
      // console.log(response.data)
      datosSinPaginar.value = response.data.data;
      cantidad.value = Math.ceil(response.data.data.length / elementPagina.value);
      obtenerPagina(1);
      // router.go();
    });

}

// onMounted( () => {
//   consultar();
// })

const Cambia_Color = () => {
  if (Cosc_Clar.value == 'info') {
    Cosc_Clar.value = 'dark';
  } else {
    Cosc_Clar.value = 'info';
  }
}

const Vpaginas = ref(false);

const paginas = () => {
  if (route.path == "/inicio") {
    Vpaginas.value = 1;
  }
  if (route.path == "/inventario") {
    Vpaginas.value = 2;
  }
  if (route.path == "/pedidos") {
    Vpaginas.value = 3;
  }
  if (route.path == "/sucursales") {
    Vpaginas.value = 4;
  }
  if (route.path == "/productos") {
    Vpaginas.value = 5;
  }
}

const route = useRoute();

const userName = ref(localStorage.getItem("userName"));

const successFull = (mensaje, posicion) => {

  const toast = Swal.mixin({
    toast: true,
    position: posicion,
    showConfirmButton: false,
    timer: 1500,
    //timerProgressBar: true,
  })
  toast.fire({
    icon: "success",
    title: mensaje
  })
}

const salir = () => {
  Swal.fire({
    title: "Salir del sistema!!!",
    text: "Está seguro que desea salir del sistema.",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Salir"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('userName');
      localStorage.removeItem('ListadoCache');
      localStorage.removeItem('ListadoCacheSucursal');
      router.push('/login')
    }
  });
}

let imgPerfil = ref("");

const cargarImagen = async () => {
  const { value: file } = await Swal.fire({
    title: "Seleciona una imagen",
    input: "file",
    inputAttributes: {
      "accept": "image/*",
      "aria-label": "Selecciona una imagen..."
    }
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // Swal.fire({
      //   title: "Imagen cargada",
      //   imageUrl: e.target.result,
      //   imageAlt: "The uploaded picture",
      // });
      imgPerfil.value = e.target.result;
    };
    reader.readAsDataURL(file);
    successFull("Imagen cambiada satisfactoriamente.", "top-start");
  }
}

</script>

<style lang="scss" scoped></style>
