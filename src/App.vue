<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <TodoInput @addTodo="addTodo"/>
      <TodoList :todoList="todoList"/>
      <TodoFooter :checkedNum="checkedNum" :totalNum="totalNum" @toggleAllHandler="toggleAllHandler"/>
    </div>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter"

export default {
	name: 'App',
	components: {
		TodoInput,
		TodoList,
		TodoFooter
	},
	data() {
		return {
			todoList: []
		}
	},
	methods: {
		addTodo(todo) {
			const todoObj = {id: crypto.randomUUID(), text: todo, checked: false}
			this.todoList.unshift(todoObj)
		},
		delTodo(id) {
			const index = this.todoList.findIndex(todo => todo.id === id)
			index > -1 && this.todoList.splice(index, 1)
		},
		toggleTodoHandler(id) {
			const index = this.todoList.findIndex(todo => todo.id === id)
			index > -1 && (this.todoList[index]["checked"] = !this.todoList[index]["checked"])
		},
		toggleAllHandler(checked) {
			this.todoList.forEach(todo => {
				todo.checked = checked
			})
		}
	},
	computed: {
		checkedNum() {
			return this.todoList.filter(todo => todo.checked).length
		},
		totalNum() {
			return this.todoList.length
		}
	},
	watch: {
		todoList: {
			deep: true,
			handler(value) {
				//localStorage.setItem("todoList", JSON.stringify(value))
			}
		}
	},
	mounted() {
		this.$bus.$on("delTodo", this.delTodo)
		this.$bus.$on("toggleTodoHandler", this.toggleTodoHandler)
	},
	beforeDestroy() {
		this.$bus.$off("delTodo")
		this.$bus.$off("toggleTodoHandler")
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	input[type=checkbox] {
		cursor: pointer;
	}
	input[type=checkbox]:disabled {
		cursor: default;
	}
</style>
