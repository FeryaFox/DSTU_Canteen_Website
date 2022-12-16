<template>
  <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #5CB3FF;">
    <div class="container">
      <router-link class="navbar-brand p-0" to="/">
        <img src="http://127.0.0.1:8000/img/dstu_logo.png" width="70" height="70" alt="DSTU">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page" style="font-family: Helvetica; font-size: 25px;">Главная</router-link>
          </li>
          <DSTUHeaderNavItem v-for="item in canteen_list" :key="item" :canteen_name="item.name" :canteen_id="item.id"/>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DSTUHeaderNavItem from "@/components/DSTU-Header-Nav-Item.vue";
import axios from "axios";

export default {
  async beforeMount() {
    try {
      const r = await axios.get("http://127.0.0.1:8000/api/canteen/")
      this.canteen_list = r.data
    } catch (e) {
      console.log(e)
    }
  },
  name: "DSTU-Header",
  components: {DSTUHeaderNavItem},
  data(){
    return{
      canteen_list:[],
    }
  }
}
</script>

<style scoped>

</style>