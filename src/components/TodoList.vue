<template>
    <div class="container-list">
        <p v-show="todoList.length <= 0">暂无数据</p>
        <transition-group name="todo">
            <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo"/>
        </transition-group>
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
    .todo-enter-active, .todo-leave-active {
        transition: all 0.6s;
    }
    .todo-enter, .todo-leave-to {
        transform: translateX(-100%);
    }
    .todo-leave, .todo-enter-to {
        transform: translateX(0);
    }
</style>