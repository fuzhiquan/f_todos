<template>
    <div>
        <div @click="clickHandler">{{userName}}-{{salary}}</div>
    </div>
</template>
<script>
    export default {
        name: "Salary",
        props: ["userName"],
        data() {
            return {
                salary: "",
                users: [
                    {id: crypto.randomUUID(), name: "Tom", salary: 5000},
                    {id: crypto.randomUUID(), name: "Su", salary: 8000},
                    {id: crypto.randomUUID(), name: "David", salary: 3000},
                    {id: crypto.randomUUID(), name: "Lina", salary: 6000}
                ]
            }
        },
        methods: {
            clickHandler(e) {
                this.$router.back()
            }
        },
        mounted() {
            if(!!!this.userName) {
                return
            }
            const user = this.users.find(user => user.name === this.userName)
            this.salary = user.salary
        }
    }
</script>