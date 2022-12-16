<template>
  <tr>
    <th scope="row">{{dish_number}}</th>
    <td>{{dish_name}}</td>
    <td>{{dish_price}}.00 руб</td>
  </tr>
</template>

<script>
export default {
  name: "DSTU-DisheBlock",
  props:{
    dish_number:{
      require: true,
      type: Number
    },
    dish_name:{
      require: true,
      type: String
    },
    dish_price:{
      require: true,
      type: Number
    }
  }
}
</script>

<style scoped>

</style>