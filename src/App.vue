<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <span class="md-title">Todo App</span>
    </md-app-toolbar>
    <md-app-content>
      <md-list class="todos">
        <md-list-item>
          <md-field>
            <md-input v-model="currentTodo" @keydown.enter="addTodo()" placeholder="Add a todo"></md-input>
          </md-field>
        </md-list-item>
        <md-list-item v-for="todo in todos" @dblclick="editTodo(todo)" :key="todo.id" >
          <i class="material-icons" @click="toggleTodo(todo)">
            {{ todo.completed ? "check_box" : "check_box_outline_blank" }}
          </i>
            <span :class="{ isComplete: todo.completed}">{{ todo.label }}</span>
          <i class="material-icons" @click="removeTodo(todo)">
            close
          </i>
        </md-list-item>
      </md-list>
    </md-app-content>
  </md-app>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      currentTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length,
        label: this.currentTodo,
        completed: false
      });
      this.currentTodo = "";
    },

    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },

    editTodo(todo) {
      console.log("editing todo");
    },

    toggleTodo(todo) {
      const index = this.todos.indexOf(todo);
      this.todos[index].completed = !this.todos[index].completed;
    }
  }
};
</script>

<style>
.isComplete {
  text-decoration: line-through;
}
</style>
