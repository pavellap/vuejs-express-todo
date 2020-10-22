<template>
   <v-main>
      <div class="d-flex justify-start mb-6">
         <v-card class="d-flex height justify-center">
            <slot/>
         </v-card>
      </div>
   </v-main>
</template>

<script>
export default {
name: "Auth"
}
</script>

<style>
   .height {
      height: 100vh;
      min-height: 100vh;
      max-height: 100vh;
      overflow: hidden;
   }
</style>
