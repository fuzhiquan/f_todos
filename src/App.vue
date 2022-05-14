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
      <TodoFooter :checkedNum="todoCheckedLen" :totalNum="todoLen" @toggleAllHandler="checkedAllTodo"/>
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
		...mapActions("todosAbout", ["fetchTodo", "addTodo", "delTodo", "checkedTodo", "checkedAllTodo"])
	},
	computed: {
		...mapState("todosAbout", ["todos"]),
		...mapGetters("todosAbout", ["todoCheckedLen", "todoLen"])
	},
	mounted() {
		this.$bus.$on("delTodo", this.delTodo)
		this.$bus.$on("checkedTodo", this.checkedTodo)
		this.fetchTodo()
		console.log(this)
	},
	beforeDestroy() {
		this.$bus.$off("delTodo")
		this.$bus.$off("checkedTodo")
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
