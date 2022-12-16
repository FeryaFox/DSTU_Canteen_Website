<template>
  <div style="margin-top: 30px;">
    <h2 class="text-center">
      {{ category_name }}
    </h2>

    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Блюдо или что там</th>
        <th scope="col">Его цена</th>
      </tr>
      </thead>
      <tbody>
        <DSTUDisheBlock v-for="i in dishes_list" :key="i" :dish_name="i.name" :dish_price="i.price" :dish_number="i.number"/>
      </tbody>
    </table>

  </div>

</template>

<script>
import DSTUDisheBlock from "@/components/DSTU-DishBlock.vue";

export default {
  name: "DSTU-DishesBlock",
  components: {DSTUDisheBlock},
  props:{
    category_name :{
      require: true,
      type: String
    },
    dishes_list :{
      require: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>