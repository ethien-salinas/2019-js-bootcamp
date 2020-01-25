<template>
  <form v-on:submit="addTodo" >
      <div>
          <input
            type="text"
            name="addTodo"
            placeholder="Add ToDo task..."
            v-model="title">
      </div>
  </form>
</template>

<script>
export default {
    name: 'AddTodo',
    data(){
        return {
            title: ''
        }
    },
    methods: {
      addTodo(e){
        e.preventDefault();
        const newTodoTask = {
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodoTask)
        this.title = ''
      }
    }
}
</script>

<style>

</style>