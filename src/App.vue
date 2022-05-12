<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <TodoInput @addTodo="addTodo"/>
	  <TodoContent>
		  <template v-slot:list>
			  <TodoList :todoList="todos"/>
		  </template>
		  <template v-slot:card>
			  <TodoCard :todoList="todos"/>
		  </template>
	  </TodoContent>
      <TodoFooter :checkedNum="todoCheckedLen" :totalNum="todoLen" @toggleAllHandler="toggleAllHandler"/>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
import TodoInput from "./components/TodoInput"
import TodoContent from "./components/TodoContent"
import TodoFooter from "./components/TodoFooter"
import TodoList from "./components/TodoList"
import TodoCard from "./components/TodoCard"

export default {
	name: 'App',
	components: {
		TodoInput,
		TodoContent,
		TodoList,
		TodoCard,
		TodoFooter
	},
	methods: {
		...mapActions(["addTodo", "delTodo"]),
		toggleTodoHandler(id) {
			const index = this.todos.findIndex(todo => todo.id === id)
			index > -1 && (this.todos[index]["checked"] = !this.todos[index]["checked"])
		},
		toggleAllHandler(checked) {
			this.todos.forEach(todo => {
				todo.checked = checked
			})
		}
	},
	computed: {
		...mapState(["todos"]),
		...mapGetters(["todoCheckedLen", "todoLen"])
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
		fetch("http://localhost:8080/api/todos").then(res => {
			return res.json()
		}).then(data => {
			if(data.code == 200) {
				//this.todoList = data.data
			}
		})
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
	input[type=checkbox]:disabled {
		cursor: default;
	}
</style>
