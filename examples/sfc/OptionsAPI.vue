<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    mounted() {
        console.log(`The initial count is ${this.count}`)
    }
}
</script>

<template>
    <button @click="increment">Count is: {{ count }}</button>
</template>