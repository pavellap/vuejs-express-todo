<template>
   <form @submit.prevent="onSubmit">
      <input type="text" v-model="title"/>
      <button type="submit">Create todo</button>
   </form>
</template>

<script>
export default {
   name: "AddTodo",
   data() {
      return {
         title: ""
      }
   },
   methods: {
      onSubmit() {
         console.log("Submit", this.title)
         if (this.title.trim()) {
            const newTodo = {
               title: this.title,
               id: Date.now(),
               completed: false
            };
            this.$emit('add-todo', newTodo)
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
