import { TodoInterface } from "@/interfaces/todo.interface";
import { createStore } from "vuex";

const store = createStore({
    state: {
        title: 'VUEX',
        todos: []
    },
    getters: {},
    mutations: {
        ADD_TODO(state: any, todo: TodoInterface[]) {
            state.todos.unshift(...todo);
            localStorage.setItem('TODOS_VUE', JSON.stringify(state.todos));
        },
        CHECK_TODO(state: any, id: any) {
            state.todos[id].check = !state.todos[id].check;
            localStorage.setItem('TODOS_VUE', JSON.stringify(state.todos));
        },
        DELETE_TODO(state: any, id: any) {
            state.todos.splice(id, 1)
            localStorage.setItem('TODOS_VUE', JSON.stringify(state.todos));
        },
        UPDATE_TODO(state: any, todoInfo: { id: number, todo: TodoInterface }) {
            state.todos[todoInfo.id] = todoInfo.todo;
            localStorage.setItem('TODOS_VUE', JSON.stringify(state.todos));
        },
        UPDATE_ALL_TODO(state: any, todos: TodoInterface[]) {
            state.todos = todos;
            localStorage.setItem('TODOS_VUE', JSON.stringify(state.todos));
        },
    },
    actions: {
        GET_TODOS({ commit, state }) {
            const lS: any = localStorage;
            const todos: TodoInterface[] = lS.hasOwnProperty('TODOS_VUE') ? JSON.parse(lS.getItem('TODOS_VUE')) : [];
            // commit('ADD_TODO', todos);
            state.todos = todos;
        }
    }
});

export default store;