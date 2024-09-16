import { createApp } from 'vue'
import App from './App.vue'
import { BootstrapVue} from "bootstrap-vue";
import router from "./router";
import store from "./store"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(BootstrapVue).use(router).use(store).mount("#app");
