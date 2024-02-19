<template>
    <div id="app_container">
        <router-view />
        <NavbarComponent></NavbarComponent>
    </div>
</template>
<script>
import NavbarComponent from '@/component/NavbarComponent.vue'

export default {
    components: {
        NavbarComponent,
    },
    created() {
        console.log(import.meta.env.VITE_API_SERVER);
    },
}
</script>