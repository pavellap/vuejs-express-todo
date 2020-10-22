<template>
   <form @submit.prevent="onSubmit">
      <!--<input type="text" v-model="title"/>-->
      <v-text-field type="text" label="New todo" v-model="title" color="primary"/>
      <button type="submit">Create todo</button>
   </form>
</template>

<script>

import {mapActions} from 'vuex'

export default {
   name: "AddTodo",
   data() {
      return {
         title: ""
      }
   },
   methods: {
      ...mapActions(['addTodo']),
      onSubmit() {
         console.log("Submit", this.title)
         if (this.title.trim()) {
            this.addTodo(this.title);
            this.title = "";
         }
      }
   }
}
</script>

<style scoped>
form {
   display: flex;
   justify-content: space-around;
}

input {
   width: 450px;
}
</style>
