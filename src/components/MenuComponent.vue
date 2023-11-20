<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="./../assets/images/logo.png" alt="Cubos" width="30" height="30">
        Cubos</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marcas
                </a>
                <ul class="dropdown-menu">
                  <li v-for="marca in marcas" :key="marca"
                  ><router-link class="dropdown-item" :to="'/marcas/'+marca">{{marca}}</router-link></li>
                </ul>
              </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/login">Log-in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/registrarse">Registro</router-link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
    
    export default{
        name: 'MenuComponent',
        data(){
            return{
                marcas: []
            }
        },
        mounted(){
            service.getMarcas().then(response => {
                this.marcas = response;
            })
        }
    }

</script>