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
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        padding: 10px 5px;
        text-align: left;
        overflow: hidden;
        border: 1px solid gray;
        border-radius: 5px;
    }
    .container-card > div {
        border: 1px solid gray;
        border-radius: 5px;
    }
</style>