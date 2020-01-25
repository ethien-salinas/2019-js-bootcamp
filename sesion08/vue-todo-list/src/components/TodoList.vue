<template>
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:class="{'completed':todo.completed}"
      >
      <TodoItem
        v-bind:todo='todo'
        v-on:mark-complete="$emit('mark-complete', todo.id)"
        v-on:delete-todo="$emit('delete-todo', todo.id)"
      />
    </li>
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
    name: 'TodoList',
    props: ["todos"],
    components: {
        TodoItem
    },
    methods:{

    }
}
</script>

<style>

</style>