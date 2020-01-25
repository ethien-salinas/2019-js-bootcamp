<template>
  <div>
      <h1>Todo list</h1>
      <TodoItem/>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    name: 'TodoList',
    components: {
        TodoItem
    }
}
</script>

<style>

</style>