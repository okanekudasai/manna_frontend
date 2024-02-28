<template lang="">
    <div id="main_page_container" ref="main_page_container">
        <StartContainerComponent></StartContainerComponent>
        <InformationContainerComponent></InformationContainerComponent>
        <WaitingPeopleIconComponent></WaitingPeopleIconComponent>
        <router-view />
    </div>
</template>

<script>
import StartContainerComponent from '@/component/StartContainerComponent.vue';
import InformationContainerComponent from '@/component/InformationContainerComponent.vue';
import WaitingPeopleIconComponent from '@/component/WaitingPeopleIconComponent.vue';

import { useMyInfoStore } from '@/stores/myInfo'
import { useUriStore } from '@/stores/uri'

import * as httpUtil from '@/util/httpUtil';

export default {
    components: {
        StartContainerComponent,
        InformationContainerComponent,
        WaitingPeopleIconComponent,
    },
    data() {
        return {
            state: "mainPage",
            myInfoStore: useMyInfoStore()
        }
    },
    created() {
        this.init();
    },
    mounted() {
        let vh = window.innerHeight * 0.01;
        this.$refs.main_page_container.style.setProperty('--vh', `${vh}px`);
    },
    methods: {
        async init() {
            let queryParams = new URLSearchParams(window.location.search);
            let code = queryParams.get('code');
            this.myInfoStore.pending = true;
            if (code != undefined) {
                console.log("뭔가 있음! 코드를 서버로 보낼게요");
                let res = await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/google/takeUserInfoWithCode`, {code: code, redirect_url: `${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`}, this.$header).then(res => res.data);
                if (res == "") {
                    console.log("잘못된 접근");
                    this.myInfoStore.pending = false;
                } else {
                    console.log(res);
                    let user_info = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/token/getUserInfo`).then(res => res.data);
                    console.log(user_info);
                
                    this.myInfoStore.myInfo = user_info;
                    this.myInfoStore.pending = false;
                    // if (res == 'noobie') this.myInfoStore.keepLogin = true;
                    setTimeout(() => {
                        console.log("!!!!@@@", httpUtil.getCookie("keep_login"));
                        this.myInfoStore.keepLogin = httpUtil.getCookie("keep_login");
                    }, 1000)
                    // myInfoStore.setMyInfo(this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/getUserInfo`, {header: {Authorization: ""}}));
                }
            } else {
                console.log("암것도 없음");
                this.myInfoStore.pending = false;
            }
        },
    },
    setup() {
        const store = useUriStore();
        store.uri = "mainPage";
    }
}
</script>
<style scoped>

#main_page_container {
    min-height:calc(var(--vh, 1vh) * 100);
    position: relative;
}


</style>