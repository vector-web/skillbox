<template>
  <h1>Counter: {{ counter }}</h1>
</template>
<script>
import {eventEmitter} from './main'

export default {
  data(){
    return {
      counter: 0
    }
  },
  created(){
    console.log(eventEmitter);

    eventEmitter.$on('counterUpdated', (num) => {
      this.counter += num
    })
  }
}
</script>

<style scoped>
  h1{
    color: green
  }
</style>
