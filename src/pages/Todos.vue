<template>
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
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex"
import TodoInput from "../components/TodoInput"
import TodoContent from "../components/TodoContent"
import TodoFooter from "../components/TodoFooter"
import TodoList from "../components/TodoList"
import TodoCard from "../components/TodoCard"

export default {
	name: 'Todos',
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
	},
	beforeDestroy() {
		this.$bus.$off("delTodo")
		this.$bus.$off("checkedTodo")
	},
	activated() {
		console.log("活了，只有组件被缓存时才调用")
	},
	deactivated() {
		console.log("凉了，只有组件被缓存时才调用")
	},
	beforeRouteEnter(to, from, next) {
		console.log("路由配置来了", to, from)
		next()
	},
	beforeRouteLeave(to, from, next) {
		console.log("路由配置bye")
		next()
	}
}
</script>

<style scoped>
	input[type=checkbox]:disabled {
		cursor: default;
	}
</style>
