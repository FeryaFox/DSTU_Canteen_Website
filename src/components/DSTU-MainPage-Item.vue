<template>
  <div class="col-sm">
    <h1>
      {{canteen_name}}
    </h1>
    <DSTUMainPageImg v-for="i in img_list" :key="i" :img_path="i"/>
    <p style="font-size: 20px;">
      {{canteen_description}}
    </p>
  </div>
</template>

<script>
import DSTUMainPageImg from "@/components/DSTU-MainPage-Img.vue";

export default {
  name: "DSTU-MainPage-Item",
  components: {DSTUMainPageImg},
  props:{
    canteen_name:{
      type: String,
      require: true
    },
    img_list:{
      type: Object,
      require: true
    },
    canteen_description:{
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>

</style>