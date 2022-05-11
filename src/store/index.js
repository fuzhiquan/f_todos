import Vue from "vue"
import Vuex, {Store} from "vuex"
import {actionType} from "../constants"

Vue.use(Vuex)

const state = {
    todos: []
}
const getters = {
    todoLen(state) {
        return state.todos.length
    },
    todoCheckedLen(state) {
        return state.todos.filter(todo => todo.checked).length
    }
}
const actions = {
    addTodo(context, todo) {
        const todoObj = {id: crypto.randomUUID(), text: todo, checked: false}
		context.commit(actionType.addTodo, todoObj)
    },
    delTodo(context, id) {
        const index = context.state.todos.findIndex(todo => todo.id === id)
		index > -1 && context.commit(actionType.delTodo, index)
    }
}
const mutations = {
    [actionType.addTodo](state, todo) {
        state.todos.unshift(todo)
    },
    [actionType.delTodo](state, index) {
        state.todos.splice(index, 1)
    }
}

export default new Store({
    actions,
    mutations,
    state,
    getters
})