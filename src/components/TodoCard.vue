<template>
    <div class="container-card">
        <div v-for="todo in todoList" :key="todo.id">
            <div>
                <span><input type="checkbox"></span>
                <span>{{todo.text}}</span>
            </div>
            <div>
                <button>删除</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TodoCard",
        props: {
            todoList: Array
        }
    }
</script>
<style scoped>
    .container-card {
        margin-top: 10px;
        text-align: left;
        border: 1px solid gray;
    }
</style>