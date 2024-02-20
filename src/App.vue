<!--
    홈화면에서 채팅, 게시판 말고 피드
-->

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