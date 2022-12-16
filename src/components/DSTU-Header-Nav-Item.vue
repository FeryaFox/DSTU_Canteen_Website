<template>
  <li class="nav-item">
    <router-link :to="{ path: '/canteen/'+canteen_id }" class="nav-link" href="#" style="font-size: 25px;" replace>{{ canteen_name }}</router-link>
  </li>
</template>

<script>
export default {
  name: "DSTU-Header-Nav-Item",
  props: {
    canteen_name: {
      type: String,
    },
    canteen_id:{
      type: Number,
    }
  }
}
</script>

<style scoped>

</style>