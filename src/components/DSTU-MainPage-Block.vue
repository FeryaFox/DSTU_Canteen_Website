<template>
  <div class="container-sm text-center" style="padding-top: 20px">

    <h1> Основная информация </h1>

    <div class="container" style="margin-top: 50px;">

      <DSTUMainPageItems v-for="i in canteen_list_" :key="i" :canteen_info="i"/>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import DSTUMainPageItems from "@/components/DSTU-MainPage-Items.vue";

export default {
  name: "DSTU-MainPage-Block",
  components: {DSTUMainPageItems},
  data(){
    return {
      canteen_info: [],
    }
  },
  // TODO я знаю, что делаю 2 запроса, но мне влом это переписывать
  async beforeMount() {
    try {
      const r = await axios.get("http://127.0.0.1:8000/api/canteen")
      this.canteen_info = r.data
    } catch (e) {
      console.log(e)
    }
  },
  computed:{
    canteen_list_(){
      let l = [[]]
      let i = 0
      let j = 1
      let c = 0

      while (i < this.canteen_info.length ){
        if (j !== 3) {
          l[c].push(this.canteen_info[i])
          j++
          i++
        }
        else {
          l.push([])
          c++
          j = 1
        }
      }
      return l
    },
  }
}
</script>

<style scoped>
.container-sm {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 50px;
}
p {
   margin-top: 20px;
 }
</style>