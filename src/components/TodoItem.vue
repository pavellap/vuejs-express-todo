<template>
   <li>
      <!--Это называется интерполяцией-->
      <span v-bind:class="{done: todo.completed}">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed">
      <strong>ID: {{ todo.id }}</strong>
         {{ todo.title }}
    </span>
      <button v-on:click="$emit('remove-todo', todo.id)" class="rm">&times;</button>
   </li>
</template>

<script>
export default {
   props: {
      todo: {
         type: Object,
         required: true
      }
   }
}
</script>


<style scoped>
li {
   border: 1px solid #ccc;
   display: flex;
   justify-content: space-between;
   padding: .5rem 2rem;
   margin-bottom: 1rem;
}

.rm {
   background-color: red;
   color: #fff;
   border-radius: 50%;
   font-weight: bold;
   outline: none;
}

.done {
   text-decoration: line-through;
}
</style>
