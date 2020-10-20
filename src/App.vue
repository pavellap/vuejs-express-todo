<template>
   <div id="app">
      <h1>Todo application</h1>
      <hr/>
      <!-- Аналог Router в React  -->
      <router-view />
   </div>
</template>

<script>


/**
 * Вместо props у нас директива v-bind:<propName>="<state.value>"
 * v-on: === @ (alias)
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
   mounted() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json()).then(data => this.todos.push(data))
   },
   methods: {
      removeTodo(id) {
         this.todos = this.todos.filter(item => item.id !== id)
      },
      addTodo(todo) {
         this.todos = this.todos.concat([todo])
      }
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
