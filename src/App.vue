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
import { useVhStore } from '@/stores/vh';

export default {
    components: {
        LoadingView,
        NavbarComponent,
        ProfileNotificationContainerComponent,
    },
    data() {
        return {
            vhStore: useVhStore(),
        }
    },
    async created() {
        console.log(`${import.meta.env.VITE_API_SERVER}/test/hello`);
        let test = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/test/hello`).then(res => res.data);
        console.log(test);

        
        this.vhStore.vh = window.innerHeight * 0.01 + 'px';
        // window.addEventListener('resize', this.setScreenSize);
    },
    
    beforeDestroy() {
        window.visualViewport.removeEventListener('resize', this.setScreenSize);
    },
    mounted() {
        window.visualViewport.onresize = () => {
            this.changeHeight();
        }
    },
    methods: {
        
        changeHeight() {
            let viewportHeight = window.visualViewport.height; // viewport 의 높이
            console.log("바뀜!!!" + viewportHeight);
            useVhStore().vh = (viewportHeight * 0.01) + "px";
            document.querySelector("body").style.height = viewportHeight + "px";
        },
        setScreenSize() {
            if (window.innerHeight != window.visualViewport.height) return;
            console.log("스크린사이즈도 바뀜");
            this.vhStore.vh = window.innerHeight * 0.01 + 'px';
        }
    },
    setup() {
        const socket = useSocketStore();
        socket.conn = new WebSocket(`${import.meta.env.VITE_API_SOCKET_SERVER}`);

        socket.conn.onopen = () => {
            console.log("get connected to socket!");
        }
        socket.conn.onclose = () => {
            console.log("lost connection from socket!!");
        }
        socket.conn.onmessage = async (msg) => {
            let dto = JSON.parse(msg.data);
            let code = dto.code;
            let value = dto.value;
            if (code == "existing_people_list") {
                socket.people_list = value.people_list;
            } else if (code == "new_person_come") {
                socket.people_list.push(value.person);
            } else if (code == "person_leaved") {
                for (let i = 0; socket.people_list.length; i++) {
                    if (socket.people_list[i].session_id == value.person.session_id) {
                        socket.people_list.splice(i, 1);
                        break;
                    }
                }
            }
        }

        setInterval(() => {
            socket.conn.send(JSON.stringify({event: "ping", data: {}}));
        }, 30000)

    }
}
</script>