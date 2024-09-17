import RegistrationForm from "@/components/RegistrationForm.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{
  path:'/register',
  component:RegistrationForm
}, {}];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
