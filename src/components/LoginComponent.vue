<template>
  <div>
    <h1 >Iniciar sesión:</h1>

    <form v-on:submit.prevent="hacerLogin()" style="margin: 0 auto; width: 70%;">
        <label>Email:</label>
        <input type="text" v-model="login.email" class="form-control" />
        <br>
        <label>Contraseña:</label>
        <input type="password" v-model="login.password" class="form-control" />
        <br>
        <button class="btn btn-dark" >Entrar!</button>
    </form>

    

  </div>
</template>

<script>
import Global from '@/Global';
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();

export default {
    name: 'LoginComponent',
    data(){
        return{
            login: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        hacerLogin(){
            service.doLogin(this.login).then(result=>{
                Global.token = result.data.response;
                console.log(Global.token)
                this.$router.push("/perfil");
            })
        }
    }

}
</script>

<style>

</style>