<template>
   <div id="app">
      <!--
         Analogue of Router component from react
         Routing logic is in src/router.js
       -->
      <router-view/>
   </div>
</template>

<script>

/**
 * Instead of react-props we have directive v-bind:<propName>="<state.value>"
 * v-on: === @ (alias)
 * */
export default {
   name: 'App',
}
</script>

<style>
#app {
   font-family: Roboto, sans-serif;
}
</style>
