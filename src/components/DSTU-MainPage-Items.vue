<template>

  <div class="row">
    <DSTUMainPageItem v-for="i in canteen_info" :key="i" :img_list="i.photo" :canteen_name="i.name" :canteen_description="i.description"/>
  </div>
</template>

<script>
import DSTUMainPageItem from "@/components/DSTU-MainPage-Item.vue";

export default {
  name: "DSTU-MainPage-Items",
  components: {DSTUMainPageItem},
  props:{
    canteen_info: {
      type: Object,
      require: true
    }
  },
}
</script>

<style scoped>

</style>