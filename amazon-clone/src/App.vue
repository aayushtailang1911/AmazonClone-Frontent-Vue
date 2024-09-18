<template>
  <navbar-component />
 <router-view></router-view>
 <footer-component/>
</template>

<script>
import NavbarComponent from "./components/layout/NavbarComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
