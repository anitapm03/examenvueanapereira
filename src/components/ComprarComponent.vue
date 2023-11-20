<template>
  <div>
    <h1 >Nueva compra:</h1>

    <form v-on:submit.prevent="crearCompra()" style="margin: 0 auto; width: 70%;">
        <label>Elige el cubo:</label>
        <select class="form-control"
        name="selectcubo" v-model="idCubo">
            <option v-for="cubo in cubos" :key="cubo"
            value="{{cubo.idCubo}}" >{{cubo.nombre}}</option>
        </select>
        <br>
        
        <button class="btn btn-dark" 
        >Comprar!</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: 'ComprarComponent',
    data(){
        return{
            cubos: [],
            idCubo: ""
        }
    },
    mounted(){
        service.getCubos().then(response => {
            this.cubos = response;
        })
    },
    methods: {
        crearCompra(){
            service.hacerCompra(this.idCubo).then(result =>{
                console.log(result);
                this.$router.push("/perfil");
            })

        }
    }

}
</script>

<style>

</style>