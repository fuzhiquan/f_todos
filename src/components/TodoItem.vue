<template>
    <div class="container-item">
        <span>
            <span>
                <input type="checkbox" :checked="todo.checked" @change="changeHandler(todo.id)"/>&nbsp;
            </span>
            <span>
                <span>{{todo.text}}</span>
            </span>
        </span>
        <span class="del">
            <button @click="delHandler(todo.id)">删除</button>
        </span>
    </div>
</template>
<script>
export default {
    name: "TodoItem",
    props: {
        todo: Object
    },
    methods: {
        delHandler(id) {
            this.$bus.$emit("delTodo", id)
        },
        changeHandler(id) {
            this.$bus.$emit("checkedTodo", id)
        }
    }
}
</script>
<style scoped>
    .container-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        height: 40px;
        padding-right: 10px;
        border: 1px solid rgba(128,128,128,0.7);
    }
    .container-item:not(:first-child) {
        margin-top: 2px;
    }
    .container-item:hover {
        background-color: #ccc;
    }
    .container-item:hover .del button {
        display: inline-block;
    }
    .container-item .del button {
        display: none;
        color: #fff;
        background-color: palevioletred;
        border: none;
        cursor: pointer;
    }
</style>