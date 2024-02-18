<template>
    <div id="app_container">
        <router-view />
    </div>
</template>
<script>
export default {
    created() {
        console.log(import.meta.env.VITE_API_SERVER);
    },
}
</script>
<style>
</style>