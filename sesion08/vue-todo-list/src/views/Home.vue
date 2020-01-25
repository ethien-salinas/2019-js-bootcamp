<template>
  <section>
      <h1>Home view</h1>
      <TodoList/>
  </section>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
    name: 'Home',
    components:{
        TodoList
    }
}
</script>

<style>

</style>