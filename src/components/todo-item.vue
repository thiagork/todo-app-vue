<template>
  <span>
    <md-list-item v-if="!todo.isEditing">
      <i
        class="material-icons"
        @click="$emit('toggle-completed')"
      >{{ todo.completed ? "check_box" : "check_box_outline_blank" }}</i>
      <span
        class="todo-item"
        :class="{ isComplete: todo.completed}"
        @dblclick="$emit('toggle-editing')"
      >{{ this.todo.label }}</span>
      <i class="material-icons" @click="$emit('remove')">close</i>
    </md-list-item>
    <md-list-item v-if="todo.isEditing">
      <md-field>
        <md-input v-model="newLabel" @keydown.enter="$emit('finish-editing', [todo, newLabel])"></md-input>
        <i class="material-icons" @click="$emit('finish-editing', [todo, newLabel])">done</i>
      </md-field>
    </md-list-item>
  </span>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data: function() {
    return {
      newLabel: this.todo.label
    };
  },
  name: "todoItem"
};
</script>

<style>
.todo-item {
  flex-grow: 2;
  margin-left: 10px;
}

.isComplete {
  text-decoration: line-through;
}
</style>


