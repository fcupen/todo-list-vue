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
    <draggable
      v-model="todos"
      @start="drag = true"
      @end="drag = false"
      item-key="todo"
      @change="log"
    >
      <template #item="{ element, index }">
        <li
          class="collection-item"
          :class="{ 'teal darken-1 white-text': element.check }"
        >
          <div v-if="isEdit !== index">
            <div class="flex">
              <div class="cursor-pointer w100" @click="check(index)">
                {{ element.todo }}
              </div>
              <a class="secondary-content flex">
                <i
                  @click="
                    isEdit = index;
                    todoToUpdate = element;
                  "
                  class="cursor-pointer material-icons"
                  :class="{ 'white-text': element.check }"
                >
                  edit
                </i>
                <i
                  @click="deleteTodo(index)"
                  class="cursor-pointer material-icons"
                  :class="{ 'white-text': element.check }"
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
            <button
              @click="updateTodo(index)"
              class="waves-effect waves-light btn"
            >
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
      </template>
    </draggable>
  </ul>
</template>

<script lang="ts">
import { computed } from "vue";
import { Options, Vue } from "vue-class-component";
import { useStore } from "vuex";
import draggable from "vuedraggable";

declare var M: any;

@Options({
  components: {
    draggable,
  },
})
export default class Home extends Vue {
  drag = false;

  todos: any = []
  todo = "";
  todoToUpdate = {};

  isEdit = -1;

  store = useStore();
  log() {
    this.store.commit("UPDATE_ALL_TODO", this.todos);
    this.showToast("Item moved");
  }
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
  created() {
    this.store.dispatch("GET_TODOS");
  }

  mounted() {
    this.todos = JSON.parse(JSON.stringify(this.store.state.todos));
  }

  showToast(msg: string) {
    M.toast({ html: msg });
  }
}
</script>
