<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h1 class="md-headline">Todo App</h1>
    </md-app-toolbar>
    <md-app-content>
      <md-list class="todos">
        <md-list-item>
          <md-field>
            <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
            <i class="material-icons" @click="addTodo()">{{this.currentTodo ? "add" : ""}}</i>
          </md-field>
        </md-list-item>
        <draggable v-model="todos" @start="drag=true" @end="drag=false">
          <div v-for="todo in todos" :key="todo.id">
            <todoItem
              :todo="todo"
              @toggle-completed="toggleTodo(todo)"
              @remove="removeTodo(todo)"
              @toggle-editing="toggleEditing(todo)"
              @finish-editing="pushEditChanges"
            ></todoItem>
          </div>
        </draggable>
      </md-list>
    </md-app-content>
  </md-app>
</template>

<script>
import todoItem from "./components/todo-item";
import draggable from "vuedraggable";

export default {
  name: "app",
  components: {
    todoItem,
    draggable
  },
  data() {
    return {
      todos: [],
      currentTodo: ""
    };
  },
  created: function() {
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos);
    }
  },
  updated: function() {
    if (this.todos) {
      localStorage.todos = JSON.stringify(this.todos);
    }
  },
  methods: {
    addTodo() {
      if (this.currentTodo) {
        this.todos.push({
          id: this.todos.length,
          label: this.currentTodo,
          completed: false,
          isEditing: false
        });
        this.currentTodo = "";
      }
    },

    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },

    toggleEditing(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].isEditing = !this.todos[index].isEditing;
    },

    pushEditChanges(payload) {
      const [todo, newLabel] = payload;
      const index = this.todos.indexOf(todo);
      this.todos[index].label = newLabel;
      this.toggleEditing(todo);
    },

    toggleTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].completed = !this.todos[index].completed;

      localStorage.todos = JSON.stringify(this.todos);
    }
  }
};
</script>

<style>


</style>
