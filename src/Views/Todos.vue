<template>
   <div>
      <h2>Todo application</h2>
      <AddTodo
          @add-todo="addTodo"
      />
      <TodoList
          v-bind:todos="getTodos"
          v-if="getTodos.length"
          @remove-todo="removeTodo"
      />
      <p v-else>No todos</p>
   </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import {mapGetters, mapActions} from 'vuex'

/**
 * Вместо props у нас директива v-bind:<propName>="<state.value>"
 * v-on: === @ (alias)
 * */
export default {
   name: 'App',
   /**
   * Here we register components
   * */
   components: {
      TodoList,
      AddTodo
   },
   computed: mapGetters(['getTodos', 'todosCount']),
   async mounted() {
      await this.fetchTodos({test: "Hey"})
   },
   methods: {
      ...mapActions(['fetchTodos', "removeTodo", "addTodo"])
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
