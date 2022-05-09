<template>
    <div class="container-list">
        <p v-show="todoList.length <= 0">暂无数据</p>
        <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
    </div>
</template>
<script>
import TodoItem from "./TodoItem"

export default {
    name: "TodoList",
    props: {
        todoList: Array
    },
    components: {
        TodoItem
    }
}
</script>
<style scoped>
    .container-list {
        margin-top: 20px;
        padding: 10px 5px;
        font-size: 18px;
        border: 1px solid gray;
        border-radius: 5px;
    }
</style>