import Vue from 'vue';
import App from './App.vue';
import ElementUi from 'element-ui';
import router from './router';
import axios from 'axios';
import Constants from './Constans';
axios.defaults.baseURL = Constants.remoteHost;
Vue.use(ElementUi);
new Vue({
el: '#app',
    router,
    render: h => h(App, {})
});
