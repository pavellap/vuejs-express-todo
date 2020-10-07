<template>
  <div>
    <ul>
      <TodoItem
        v-for="item of todos"
        v-bind:todo="item"
        v-bind:key="item.id"
      />

    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  components: {
    TodoItem
  },
  /* Так регистрируем пропсы в компоненте*/
  props: ['todos']
}

</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>