<template>
    <div class="container-footer">
        <span>
            <input type="checkbox" :disabled="totalNum <= 0" @change="changeHandler">&nbsp;
        </span>
        <span>
            <span>已选: {{checkedNum}}</span>&nbsp;
            <span>总计: {{totalNum}}</span>
        </span>
    </div>
</template>
<script>
export default {
    name: "TodoFooter",
    props: {
        checkedNum: Number,
        totalNum: Number
    },
    methods: {
        changeHandler(e) {
            this.$emit("toggleAllHandler", e.target.checked)
        }
    }
}
</script>

<style scoped>
    .container-footer {
        margin-top: 20px;
        padding: 10px 5px;
        text-align: left;
        border: 1px solid gray;
        border-radius: 5px;
    }
</style>