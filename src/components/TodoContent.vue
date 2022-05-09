<template>
    <div>
        <slot name="list"></slot>
        <slot name="card"></slot>
    </div>
</template>
<script>
export default {
    name: "TodoContent"
}
</script>