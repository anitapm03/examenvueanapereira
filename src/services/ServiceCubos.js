import Global from './../Global';
import axios from 'axios';

export default class ServiceCubos {
    getCubos(){
        return new Promise(function(resolve){

            var request = "api/cubos";
            var url = Global.urlApi + request;

            var cubos = [];

            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getCuboId(id){
        return new Promise(function(resolve){

            var request = "api/cubos/"+id;
            var url = Global.urlApi + request;

            var cubo = {};

            axios.get(url).then(response => {
                cubo = response.data;
                resolve(cubo);
            })
        })
    }

    getMarcas(){
        return new Promise(function(resolve){

            var request = "api/cubos/marcas";
            var url = Global.urlApi + request;

            var marcas = [];

            axios.get(url).then(response => {
                marcas = response.data;
                resolve(marcas);
            })
        })
    }

    getCubosMarcas(marca){
        return new Promise(function(resolve){

            var request = "api/cubos/cubosmarca/"+ marca;
            var url = Global.urlApi + request;

            var cubos = [];

            axios.get(url).then(response => {
                cubos = response.data;
                resolve(cubos);
            })
        })
    }

    getComentarios(id){
        return new Promise(function(resolve){

            var request = "api/comentarioscubo/getcomentarioscubo/"+id;
            var url = Global.urlApi + request;

            var comentarios = [];

            axios.get(url).then(response => {
                comentarios = response.data;
                resolve(comentarios);
            })
        })
    }
    
    doLogin(login){
        return new Promise(function(resolve){

            var request = "api/manage/login";
            var url = Global.urlApi + request;

            axios.post(url, login).then(response => {
                
                resolve(response);
            })
        })
    }

    doRegistro(usuario){
        return new Promise(function(resolve){

            var request = "api/manage/registrousuario";
            var url = Global.urlApi + request;

            axios.post(url, usuario).then(response => {
                
                resolve(response);
            })
        })
    }

    getPerfil(){
        return new Promise(function(resolve){

            var request = "api/manage/perfilusuario";
            var url = Global.urlApi + request;

            var headers = {
                'Authorization': `Bearer ${Global.token}`
              };

            axios.get(url, {headers}).then(response => {
                
                resolve(response);
            })

        })
    }

    getCompras(){
        return new Promise(function(resolve){

            var request = "api/compra/comprasusuario";
            var url = Global.urlApi + request;

            var headers = {
                'Authorization': `Bearer ${Global.token}`
              };

            axios.get(url, {headers}).then(response => {
                resolve(response);
            })

        })
    }

    hacerCompra(id){

        return new Promise(function(resolve){
            var request = "api/compra/insertarpedido/"+id;
            var url = Global.urlApi + request;
            //var compra = {};
            var headers = {
                'Authorization': `Bearer ${Global.token}`,
                'Content-Type': 'application/json'
            };

            axios.post(url, null, {headers}).then(response => {
                resolve(response);
            })
            //apereiramolinero@gmail.comm
        })

    }
}