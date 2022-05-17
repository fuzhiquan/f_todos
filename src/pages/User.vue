<template>
    <div class="users">
        <router-link v-for="item in users"
        :key="item.id"
        :to="{
            name: 'salary',
            params: {
                name: item.name
            }
        }">
            {{item.name}}
        </router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "User",
        data() {
            return {
                users: [
                    {id: crypto.randomUUID(), name: "Tom"},
                    {id: crypto.randomUUID(), name: "Su"},
                    {id: crypto.randomUUID(), name: "David"},
                    {id: crypto.randomUUID(), name: "Lina"}
                ]
            }
        }
    }
</script>
<style scoped>
    .users {
        display: flex;
        flex-direction: column;
    }
</style>