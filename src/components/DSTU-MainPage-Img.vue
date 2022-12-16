<template>
  <img :src=img_path_fixed width="100" height="100" alt="" style="margin-left: 5px; margin-right: 5px">
</template>

<script>
export default {
  name: "DSTU-MainPage-Img",
  props:{
    img_path:{
      type: String,
      require: true
    }
  },
  computed:{
    img_path_fixed(){
      return "http://127.0.0.1:8000"+this.img_path
    }
  }
}
</script>

<style scoped>

</style>