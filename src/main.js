import { createApp } from 'vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vuex from "vuex";
import App from './App.vue'
import router from "./router"
import store from "./store";
const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(store);
vueApp.use(Vuex);
vueApp.mount('#app');
