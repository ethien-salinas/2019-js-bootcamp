<template>
  <section>
      <h1>Home view</h1>
      <TodoList
        v-bind:todos='todos'
        v-on:mark-complete="markComplete"
        />
  </section>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
    name: 'Home',
    components:{
        TodoList
    },
    data(){
        return{
            todos: []
        }
    },
    methods:{
      markComplete(id){
        this.todos.forEach(el => {
          if(el.id === id){
            el.completed = !el.completed  
            return
          }
        })
      }
    },
    created(){
       this.todos = [
           {"id": 0, "title": "Learn Vue", "completed": false},
           {"id": 1, "title": "Learn Vuex", "completed": false},
           {"id": 2, "title": "Learn Vue CLI", "completed": false},
       ] 
    }
}
</script>

<style>

</style>