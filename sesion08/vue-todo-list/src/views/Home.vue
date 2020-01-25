<template>
  <section>
      <h1>Todo list</h1>
      <AddTodo
        v-on:add-todo="addTodo"
      />
      <TodoList
        v-bind:todos='filteredTodos'
        v-on:mark-complete="markComplete"
        v-on:delete-todo="deleteTodo"
        />
      <FilterTodos
        v-on:all-todo="allTodo"
        v-on:active-todo="activeTodo"
        v-on:completed-todo="completedTodo"
      />
  </section>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import FilterTodos from '@/components/FilterTodos'

export default {
    name: 'Home',
    components:{
      AddTodo,
      TodoList,
      FilterTodos
    },
    data(){
        return{
            todos: [],
            filteredTodos: [],
            itemsCounter: 0
        }
    },
    methods:{
      addTodo(newTodoTask){
        const { title, completed } = newTodoTask
        this.todos.push({
          id: this.itemsCounter++,
          title,
          completed
        })
      },
      markComplete(id){
        this.todos.forEach(el => {
          if(el.id === id){
            el.completed = !el.completed  
            return
          }
        })
      },
      deleteTodo(id){
        let index = this.todos.findIndex(el=>{
          return el.id === id
        })
        this.todos.splice(index, 1)
      },
      allTodo(){
        this.filteredTodos = this.todos
      },
      activeTodo(){
        this.filteredTodos = this.todos.filter(todo => !todo.completed)
      },
      completedTodo(){
        this.filteredTodos = this.todos.filter(todo => todo.completed)
      }
    },
    created(){
       this.todos = [
           {"id": 0, "title": "Learn Vue", "completed": false},
           {"id": 1, "title": "Learn Vuex", "completed": false},
           {"id": 2, "title": "Learn Vue CLI", "completed": false},
       ]
       this.filteredTodos = this.todos
       this.itemsCounter = this.todos.length
    }
}
</script>

<style>

</style>