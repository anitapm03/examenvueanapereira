<template>
  <div>
    
    <div v-if="status == true">
      <h1>Bienvenido {{usuario.nombre}}</h1>

      <p>Email: {{usuario.email}}</p>

      <router-link class="btn btn-success" to="/comprar">Hacer una compra</router-link>

      <button class="btn btn-danger" @click="logout()"
    >Log out</button>

      <h3>Tu historial de compras:</h3>
      <table class="table table-dark">
          <thead>
              <tr>
                  <th>ID Cubo</th>
                  <th>ID Pedido</th>
                  <th>Fecha</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="compra in compras" :key="compra">
                  <td>{{compra.idCubo}}</td>
                  <td>{{compra.idPedido}}</td>
                  <td>{{compra.fechaPedido}}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Global from '@/Global';
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: 'PerfilComponent',
    data(){
      return{
        status: false,
        usuario: {},
        compras: [],
        token: null
      }
    },
    mounted(){
      
      service.getPerfil().then(result => {
        this.usuario = result.data;
        console.log(this.usuario)
        this.status = true;
      })

      service.getCompras().then(result => {
        this.compras = result.data;
        console.log(this.compras)
      })
      
    },
    methods:{
      logout(){
        Global.token = "";
        this.$router.push("/");
      }
    }

}
</script>

<style>

</style>