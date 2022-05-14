import {actionType} from "../constants"

export default {
    namespaced: true,
    state: {
        todos: []
    },
    getters: {
        todoLen(state) {
            return state.todos.length
        },
        todoCheckedLen(state) {
            return state.todos.filter(todo => todo.checked).length
        }
    },
    actions: {
        fetchTodo(context) {
            fetch("http://localhost:8080/api/todos").then(res => {
                return res.json()
            }).then(data => {
                if(data.code == 200) {
                    context.commit(actionType.fetchTodo, data.data)
                }
            })
        },
        addTodo(context, todo) {
            const todoObj = {id: crypto.randomUUID(), text: todo, checked: false}
            context.commit(actionType.addTodo, todoObj)
        },
        delTodo(context, id) {
            const index = context.state.todos.findIndex(todo => todo.id === id)
            index > -1 && context.commit(actionType.delTodo, index)
        },
        checkedTodo(context, id) {
            context.commit(actionType.checkedTodo, id)
        },
        checkedAllTodo(context, checked) {
            context.commit(actionType.checkedAllTodo, checked)
        }
    },
    mutations: {
        [actionType.fetchTodo](state, todos) {
            state.todos = todos
        },
        [actionType.addTodo](state, todo) {
            state.todos.unshift(todo)
        },
        [actionType.delTodo](state, index) {
            state.todos.splice(index, 1)
        },
        [actionType.checkedTodo](state, id) {
            const index = state.todos.findIndex(todo => todo.id === id)
            index > -1 && (state.todos[index]["checked"] = !state.todos[index]["checked"])
        },
        [actionType.checkedAllTodo](state, checked) {
            state.todos.forEach(todo => {
                todo.checked = checked
            })
        }
    }
}