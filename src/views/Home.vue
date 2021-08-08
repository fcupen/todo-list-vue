<template>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input v-model="todo" type="text" :disabled="isEdit !== -1" />
          <label>To do</label>
        </div>
        <div class="col s12">
          <button
            :class="{ disabled: isEdit !== -1 }"
            @click="isEdit === -1 ? save() : ''"
            class="waves-effect waves-light btn"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
  <ul class="collection">
    <li class="collection-header"><h4>ToDo List</h4></li>
    <li
      class="collection-item"
      :class="{ 'teal darken-1 white-text': t.check }"
      v-for="(t, index) in todos"
      :key="index"
    >
      <div v-if="isEdit !== index">
        <div class="flex">
          <i
            @click="move(-1, index)"
            class="cursor-pointer material-icons"
            :class="{ 'white-text': t.check }"
          >
            arrow_upward
          </i>
          <i
            @click="move(1, index)"
            class="cursor-pointer material-icons"
            :class="{ 'white-text': t.check }"
          >
            arrow_downward
          </i>
          <div class="cursor-pointer w100" @click="check(index)">
            {{ t.todo }}
          </div>
          <a class="secondary-content flex">
            <i
              @click="
                isEdit = index;
                todoToUpdate = t;
              "
              class="cursor-pointer material-icons"
              :class="{ 'white-text': t.check }"
            >
              edit
            </i>
            <i
              @click="deleteTodo(index)"
              class="cursor-pointer material-icons"
              :class="{ 'white-text': t.check }"
            >
              delete
            </i>
          </a>
        </div>
      </div>
      <div v-if="isEdit === index">
        <div class="w100 input-field col s12">
          <input
            :placeholder="todoToUpdate.todo"
            v-model="todoToUpdate.todo"
            type="text"
            class="validate"
          />
        </div>
        <button @click="updateTodo(index)" class="waves-effect waves-light btn">
          Update
        </button>
        <button
          style="margin-left: 1em"
          @click="isEdit = -1"
          class="waves-effect waves-light btn red lighten-4"
        >
          Close
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed } from "vue";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";

declare var M: any;

@Options({
  components: {},
})
export default class Home extends Vue {
  todos: any = [];
  todo = "";
  todoToUpdate = {};

  isEdit = -1;

  store = useStore();
  save() {
    this.store.commit("ADD_TODO", [{ todo: this.todo, check: false }]);
    this.todo = "";
    this.showToast("Created");
  }
  check(id: any) {
    if (this.isEdit === -1) {
      this.store.commit("CHECK_TODO", id);
      this.showToast("Updated");
    }
  }
  deleteTodo(id: any) {
    this.store.commit("DELETE_TODO", id);
    this.showToast("Deleted");
  }
  updateTodo(id: number) {
    this.store.commit("UPDATE_TODO", {
      todo: this.todoToUpdate,
      id,
    });
    this.isEdit = -1;
    this.showToast("Updated");
    this.todoToUpdate = {};
  }
  move(direction: number, id: number) { 
    var todo = this.todos.splice(id, 1);
    this.todos.splice(Math.abs(id + 1 * direction), 0, todo[0]); 
    this.store.commit("UPDATE_ALL_TODO", this.todos);
    this.showToast("Item moved");
  }
  created() {
    this.todos = computed(() => this.store.state.todos);
    this.store.dispatch("GET_TODOS");
  }

  showToast(msg: string) {
    M.toast({ html: msg });
  }
}
</script>
