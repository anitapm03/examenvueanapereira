<template>
  <div>
    <h1 >Registrarse:</h1>

    <form v-on:submit.prevent="hacerRegistro()" style="margin: 0 auto; width: 70%;">
        <label>Nombre:</label>
        <input type="text" v-model="usuario.nombre" class="form-control" />
        <br>
        <label>Email:</label>
        <input type="text" v-model="usuario.email" class="form-control" />
        <br>
        <label>Contraseña:</label>
        <input type="password" v-model="usuario.pass" class="form-control" />
        <br>
        <button class="btn btn-dark" 
        >Registrarme!</button>
    </form>

  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name: 'RegistroComponent',
    data(){
        return{
            usuario: {
                idUsuario: 886,
                nombre: "",
                email: "",
                pass: ""
            }
        }
    },
    methods:{
        hacerRegistro(){
            service.doRegistro(this.usuario).then(result => {
                console.log(result);
                this.$router.push("/login");
                
            })

        }
    }
}
</script>

<style>

</style>