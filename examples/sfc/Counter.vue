<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>

<script type="module">
    import { ref } from 'vue'
    const count = ref(0)
</script>

<template>
    <button @click="count++">
        Count is: {{ count }}
    </button>
</template>

<style scoped>
    button {
        font-weight: bold;
    }
</style>