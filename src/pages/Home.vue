<template>
    <div>
        <h2>welcome Home</h2>
        <router-link replace :to="{
            path: '/home/user'
        }">User</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Home"
    }
</script>