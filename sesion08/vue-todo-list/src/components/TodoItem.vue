<template>
  <div>
      <input
        type="checkbox"
        v-bind:checked="todo.completed"
        v-on:change="$emit('mark-complete', todo.id)"
        />
        <label>{{todo.title}}</label>
      <button v-on:click="$emit('evento-personalizado', 'valor que lo acompaña')">Emit event</button>
  </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ["todo"]
}
</script>

<style>

</style>