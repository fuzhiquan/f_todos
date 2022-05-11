<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <TodoInput @addTodo="addTodo"/>
	  <TodoContent>
		  <template v-slot:list>
			  <TodoList :todoList="$store.state.todos"/>
		  </template>
		  <template v-slot:card>
			  <TodoCard :todoList="$store.state.todos"/>
		  </template>
	  </TodoContent>
      <TodoFooter :checkedNum="$store.getters.todoCheckedLen" :totalNum="$store.getters.todoLen" @toggleAllHandler="toggleAllHandler"/>
    </div>
  </div>
</template>

<script>
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
		addTodo(todo) {
			this.$store.dispatch("addTodo", todo)
		},
		delTodo(id) {
			this.$store.dispatch("delTodo", id)
		},
		toggleTodoHandler(id) {
			const index = this.$store.state.todos.findIndex(todo => todo.id === id)
			index > -1 && (this.$store.state.todos[index]["checked"] = !this.$store.state.todos[index]["checked"])
		},
		toggleAllHandler(checked) {
			this.$store.state.todos.forEach(todo => {
				todo.checked = checked
			})
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
