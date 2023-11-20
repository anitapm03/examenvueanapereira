<template>
  <div>
    <div class="card" style="width: 18rem; margin: 0 auto">
        <img :src="cubo.imagen" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">{{cubo.nombre}}</h4>
          <h5>Precio: {{cubo.precio}}€</h5>
          <p class="card-text">{{cubo.modelo}}, {{cubo.marca}}</p>
          <p>Color: {{cubo.color}}</p>
          <h5 style="color: yellowgreen">Valoración: {{cubo.valoracion}} estrellas</h5>
        </div>
    </div>
    <br>
    <h3>Comentarios:</h3>
    <table class="table table-hover">
        <thead>
            <tr>
                
                <th>Comentario</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for=" comentario in comentarios" :key="comentario">
                <td>{{comentario.comentario}}</td>
                <td>{{comentario.fechaComentario}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {

    name: 'DetalleCubo',
    data(){
        return{
            comentarios: [],
            cubo: {}
        }
    },
    mounted(){
        service.getComentarios(this.$route.params.id).then(response =>{
            this.comentarios = response;
        })
        service.getCuboId(this.$route.params.id).then(response => {
            this.cubo = response;
        })
    }

}
</script>

<style>

</style>