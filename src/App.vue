<template>
  <div id="app">
    <TodoList
      v-bind:todos="todos"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
/**
* Вместо props у нас директива v-bind:<propName>="<state.value>"
* */
export default {
  name: 'App',
  /*
  * Here we register components
  * */
  data: () => {
    return {
      todos: [
        {id: 1, title: "Выучить Vue.js", completed: false},
        {id: 2, title: "Выучить Express.js", completed: false},
        {id: 3, title: "Написать fullstack todo в связке vue.js + express.js", completed: false},
      ]
    }
  },
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
