<script setup>
  import { ref } from 'vue'
  const counter = ref(0)

  function count() {
    counter.value++
  }
</script>

<template style="width: 100vh; background-color: red;">
  <header class="container-fluid fixed-top mt-5 text-center">
    <h1>Stopwatch</h1>
  </header>
  <div class="text-center">
    <h3>{{ counter }}</h3>
    <button 
      @click="count" 
      type="button" 
      class="btn btn-primary" 
    >
      Count
    </button>
  </div>
</template>

<style scoped>
  
</style>