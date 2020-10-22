<template>
   <div id="app">
      <h1>Todo application</h1>
      <v-btn block>
         Hey, I am material-ui button
      </v-btn>
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
