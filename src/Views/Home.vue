<template>
   <div :is="layout">
      <h2>Start page</h2>
      <p>Lorem ipsum dolor sit amet, co</p>
      <router-link to="/todos">Todos</router-link>
   </div>
</template>

<script>
export default {
   name: "Home",
   computed: {
      layout() {
         return 'auth-layout'
      }
   }
}
</script>

<style scoped>

</style>
