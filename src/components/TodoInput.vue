<template>
    <div class="container">
        <input type="text" placeholder="输入内容后，按Enter添加" v-model.trim="todo" @keyup.enter="enterHandler">
    </div>
</template>
<script>
export default {
    name: "TodoInput",
    data() {
        return {
            todo: ""
        }
    },
    methods: {
        enterHandler() {
            if(this.todo) {
                this.$emit("addTodo", this.todo)
            }
            this.todo = ""
        }
    }
}
</script>
<style scoped>
    .container {
        padding: 5px 10px;
        overflow: hidden;
        border: 1px solid gray;
        border-radius: 5px;
    }
    .container input {
        width: 100%;
        height: 30px;
        font-size: 20px;
        border: none;
        outline: none;
    }
</style>