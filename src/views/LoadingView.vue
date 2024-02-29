<template>
    <div id="loading_view_container" :class="{hide: hide || $route.name != 'welcome'}">
    <!-- <div id="loading_view_container" @click="ggg()" class="hover_pointer"> -->
        로딩화면
    </div>
</template>

<script>
import * as httpUtil from '@/util/httpUtil';
import { useMyInfoStore } from '@/stores/myInfo';
import hat_image from '@/img/hat.svg';

export default {
    data() {
        return {
            myInfoStore: useMyInfoStore(),
            hide: false,
            vh: 0,
        };
    },
    async created() {
        window.addEventListener('resize', this.setScreenSize);

        this.myInfoStore.pending = true;

        let queryParams = new URLSearchParams(window.location.search);
        let code = queryParams.get('code');
        if (code != null) {
            console.log("뭔가 있음! 코드를 서버로 보낼게요");
            let user_info = await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/google/takeUserInfoWithCode`, {code: code, redirect_url: `${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`}, this.$header).then(res => res.data);
            if (user_info == "") {
                console.log("유효하지 않은 코드를 통한 접근");
            } else {
                console.log("!!!!", user_info);
                this.myInfoStore.myInfo = user_info;
                this.myInfoStore.pending = false;
                setTimeout(() => {
                    this.myInfoStore.keepLogin = httpUtil.getCookie("keep_login");
                }, 1000)

                this.myInfoStore.pending = false;
                this.hide = true;
                return;
            }
        }

        let keep_login = httpUtil.getCookie("keep_login");
        let user_info = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/token/getUserInfo`).then(res => res.data);
        console.log(user_info);
        console.log(keep_login);

        if (user_info == "") {
            this.$axios.delete(`${import.meta.env.VITE_API_SERVER}/auth/deleteToken`);
            let anonymousNumber = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/getAnonymousNumber`).then(res => res.data);
            console.log(anonymousNumber + "번 째의 익명유저")
            this.myInfoStore.myInfo = {
                anonymous: true,
                name: "익명유저 " + anonymousNumber,
                profile_url: hat_image,
            }
            this.myInfoStore.pending = false;
            this.hide = true;
        }

        else {
            this.myInfoStore.myInfo = user_info;
            this.myInfoStore.pending = false;
            this.hide = true;
            this.$router.push("/mainPage");
        }
        
    },
    mounted() {
        this.setScreenSize();
    }, 
    methods: {
        setScreenSize() {
            this.vh = window.innerHeight * 0.01 + 'px';
        },
    },
}
</script>

<style scoped>
#loading_view_container {
    position: fixed;
    z-index: 1;
    width: 100vw;
    background: rgb(255, 255, 255);
    height:calc(v-bind(vh) * 100);
}
</style>
