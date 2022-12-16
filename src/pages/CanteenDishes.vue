<template>
<!--  {{$route.params.id}}-->
  <div class="container-sm">
    <h1 class="text-center"> Меню </h1>
    <DSTUDishesBlock v-for="i in dishes_category" :key="i" :category_name="i" :dishes_list="dishes_list[i]"/>
  </div>
<!--  {{dishes_list}}-->
</template>

<script>
import axios from "axios";
import DSTUDishesBlock from "@/components/DSTU-DishesBlock.vue";

export default {
  name: "CanteenDishes",
  // computed:{
  //   dishes_list(){
  //     let g = []
  //     console.log(this.dishes_info.length-1)
  //     for (let i = 0; i < this.dishes_info.length; i++){
  //       console.log(i)
  //       g.push(i)
  //     }
  //     return g
  //   }
  // },
  computed:{
    dishes_list: function (){
      //   сразу говорю, костыль лютый, но мне так лень что-то адекватное писать.
      // let temp_ = {}
      let category_list = {}


      let dish_info = []

      for (let i of this.dishes_info){
        // console.log(this.$route.params.id)
        console.log(i.canteen_id == this.$route.params.id)
        if (i.canteen_id == this.$route.params.id){
          dish_info.push(i)
        }
      }

      for (let i of dish_info){
        if (typeof category_list[i.category] === "undefined") {
          category_list[i.category] = []
        }
        // if (!(category_list.includes(i.category))){
        //   category_list.push(i.category)
        // }
      }

      for (let i of dish_info){
        let temp_num = 1
        if (category_list[i.category].length > 0){
          temp_num = category_list[i.category][category_list[i.category].length-1].number + 1
        }
        category_list[i.category].push({"name": i.name, "price": i.price, "number": temp_num})
      }

      // for (let i in category_list){
      //   temp_[i] = []
      // }
      //
      // for (let i in this.dishes_info){
      //   let temp_num = 1
      //   if (typeof temp_[i.category][temp_[i.category].length-1] !== 'undefined') {
      //     temp_num = temp_[i.category][temp_[i.category].length - 1].number + 1
      //   }
      //
      //   temp_[i.category][temp_[i.category].length] = {"name": i.name, "category": i.category, "price": i.price, "number": temp_num}
      // }
      return category_list

    },
    dishes_category: function (){
      let category_list = []
      let dish_info = []

      for (let i of this.dishes_info){
        // console.log(this.$route.params.id)
        console.log(i.canteen_id == this.$route.params.id)
        if (i.canteen_id == this.$route.params.id){
          dish_info.push(i)
        }
      }
      console.log(dish_info)

      for (let i of dish_info){
        if (!(category_list.includes(i.category))) {
          category_list.push(i.category)
        }
      }
      return category_list
    }
  },
  components: {DSTUDishesBlock},
  data(){
    return {
      dishes_info: [],
    }
  },
  // TODO переделать в функции

  // async mounted() {
  //   try {
  //     const r = await axios.get("http://127.0.0.1:8000/api/dish/?canteen_id="+this.$route.params.id)
  //     this.dishes_info = r.data
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  async created(){
    try {
      const r = await axios.get("http://127.0.0.1:8000/api/dish/")
      this.dishes_info = r.data
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
body {
  background-color: #e0e0e0;
  font-family: Helvetica;
}
.container-sm {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 50px;
  padding: 5px 16px;
}
p {
  margin-top: 20px;
}

</style>