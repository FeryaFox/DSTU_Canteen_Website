<template>
  <DSTUHeader/>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <router-view/>
  <DSTUFooter/>
</template>

<script>
import DSTUHeader from "@/components/DSTU-Header.vue";
import DSTUFooter from "@/components/DSTU-Footer.vue";

export default {
  name: 'App',
  components: {
    DSTUFooter,
    DSTUHeader
  },

}
</script>

<style>
body {
  background-color: #e0e0e0;
  font-family: Helvetica;
}

</style>
