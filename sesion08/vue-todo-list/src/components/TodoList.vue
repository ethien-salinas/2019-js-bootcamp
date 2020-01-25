<template>
  <div>
      <h1>Todo list {{injectedProp}}</h1>
      <ul>
        <li
          v-for="todo in todos"
          v-bind:key="todo.id"
          >
          <TodoItem
            v-bind:todo='todo'
            v-on:mark-complete="$emit('mark-complete', todo.id)"
            v-on:evento-personalizado="metodoParaEventoPersonalizado"
          />
        </li>
      </ul>
  </div>
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
        metodoParaEventoPersonalizado(receivedValue){
            // eslint-disable-next-line no-console
            console.log('***metodoParaEventoPersonalizado***')
            // eslint-disable-next-line no-console
            console.log(receivedValue)
        }
    }
}
</script>

<style>

</style>