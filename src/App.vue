<!--
    홈화면에서 채팅, 게시판 말고 피드
-->

<template>
    <div id="app_container">
        <LoadingView></LoadingView>
        <router-view></router-view>
        <NavbarComponent></NavbarComponent>
        <ProfileNotificationContainerComponent></ProfileNotificationContainerComponent>
    </div>
</template>
<script>
import LoadingView from './views/LoadingView.vue';
import NavbarComponent from '@/component/NavbarComponent.vue'
import ProfileNotificationContainerComponent from '@/component/ProfileNotificationContainerComponent.vue';

export default {
    components: {
        LoadingView,
        NavbarComponent,
        ProfileNotificationContainerComponent,
    },
    async created() {
        console.log(`${import.meta.env.VITE_API_SERVER}/test/hello`);
        let test = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/test/hello`).then(res => res.data);
        console.log(test);
    },
}
</script>