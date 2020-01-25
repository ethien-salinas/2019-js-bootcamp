<template>
  <div>
      <button v-on:click="$emit('all-todo')">All</button>
      <button v-on:click="$emit('active-todo')">Active</button>
      <button v-on:click="$emit('completed-todo')">Completed</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>