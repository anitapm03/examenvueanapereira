import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import DetalleCubo from './components/DetalleCubo.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegistroComponent from './components/RegistroComponent.vue';
import PerfilComponent from './components/PerfilComponent.vue';
import MarcaComponent from './components/MarcaComponent.vue';
import ComprarComponent from './components/ComprarComponent.vue';

const myRoutes = [
    {
        path: "/", component: HelloWorld
    },
    {
        path: "/cubo/:id", component: DetalleCubo
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/registrarse", component: RegistroComponent
    },
    {
        path: "/perfil", component: PerfilComponent
    },
    {
        path: "/marcas/:marca", component: MarcaComponent
    },
    {
        path: "/comprar", component: ComprarComponent
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;