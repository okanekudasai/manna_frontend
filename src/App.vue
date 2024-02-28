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
import { useSocketStore } from '@/stores/socket'

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
    setup() {
        const socket = useSocketStore();
        socket.conn = new WebSocket(`${import.meta.env.VITE_API_SOCKET_SERVER}`);

        socket.conn.onopen = () => {
            console.log("get connected to socket!");
        }
        socket.conn.onclose = () => {
            console.log("lost connection from socket!");
        }

        setInterval(() => {
            socket.conn.send(JSON.stringify({event: "ping", data: {}}));
        }, 3000)
    }
}
</script>