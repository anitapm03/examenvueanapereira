<template>
  <div>
    <h1>Cubos de la marca: {{marca}}</h1>
    
    <div v-for="cubo in cubos" :key="cubo" >
        <div class="card" style="width: 18rem;">
            <img :src="cubo.imagen" class="card-img-top" >
            <div class="card-body">
              <h4 class="card-title">{{cubo.nombre}}</h4>
              <h5>Precio: {{cubo.precio}}€</h5>
              <p class="card-text">{{cubo.modelo}}, {{cubo.marca}}</p>
              <router-link :to="'/cubo/'+ cubo.idCubo" class="btn btn-primary">Detalles</router-link>
            </div>
          </div>
          <br>
    </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {

    name: 'MarcaComponent',
    data(){
        return{
            cubos: []
        }
    },
    mounted(){
        service.getCubosMarcas(this.$route.params.marca).then(result =>{
            this.cubos=result;
        })
    }

}
</script>

<style>

</style>