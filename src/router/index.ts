import Vue from 'vue'
import Router from 'vue-router';
import Login from "../App/pages/Login.vue";
import Task from "../App/pages/Task.vue";
import Tagging from "../App/pages/Tagging.vue";
import EcgTagging from "../App/pages/EcgTagging.vue";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Task
        },
        {
            path: '/Task',
            name: 'Task',
            component: Task
        },
        {
            path: '/Tagging',
            name: 'Tagging',
            component: Tagging
        },
        {
            path: '/EcgTagging',
            name: 'EcgTagging',
            component: EcgTagging
        },
        {
            path: '/Login',
            name: 'Login',
            redirect:'/Task',
            component: Login
        }
    ]
})
