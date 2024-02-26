<template lang="">
    <div id="main_page_container" ref="main_page_container">
        <StartContainerComponent></StartContainerComponent>
        <InformationContainerComponent></InformationContainerComponent>
        <WaitingPeopleIconComponent></WaitingPeopleIconComponent>
        <router-view />
    </div>
</template>

<script setup>
import { useMyInfoStore } from '@/stores/myInfo'
const myInfoStore = useMyInfoStore();
</script>

<script>
import StartContainerComponent from '@/component/StartContainerComponent.vue';
import InformationContainerComponent from '@/component/InformationContainerComponent.vue';
import WaitingPeopleIconComponent from '@/component/WaitingPeopleIconComponent.vue';

import { useUriStore } from '@/stores/uri'

export default {
    components: {
        StartContainerComponent,
        InformationContainerComponent,
        WaitingPeopleIconComponent,
    },
    data() {
        return {
            state: "mainPage",
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
            // let header = {headers:{"Content-Type": "application/x-www-form-urlencoded"}};
            let code = this.checkCode();
            if (code != undefined) {
                console.log("뭔가 있음! 코드를 서버로 보낼게요");
                let token = await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/google/takeUserInfoWithCode`, {code: code, redirect_url: `${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`}, this.$header).then(res => res.data);
                if (token == "") {
                    console.log("잘못된 접근");
                } else {
                    console.log(token);
                    // 유저 정보를 Store에 저장;
                    myInfoStore.setMyInfo();
                }

                // 받아온 유저 정보를 브라우저에 저장시켜요 
                

                // 토큰 생성을 요청해요

                // 시리얼 넘버를 넘겨서 db에 해당 유저가 있는지 확인해요

                // let user_info;
                // await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/getUserInfoFromToken`, token, header).then(res => {
                //     if (res.data == 'expired') {
                //         // 리프레시토큰 조차 만료되었다는 뜻
                //         // 하지만 여기서는 code를 통해 들어온 곳이니 만료되어있을리는 없음
                //     }
                //     else user_info = res.data;
                // });
                // console.log(user_info);
                
            } else {
                console.log("암것도 없음");
            }
        },
        checkCode() {
            let queryString = window.location.search;
            let queryParams = new URLSearchParams(queryString);
            return queryParams.get('code');
        }
    },
    setup() {
        const store = useUriStore();
        store.setUri("mainPage");
    }
}
</script>
<style scoped>

#main_page_container {
    min-height:calc(var(--vh, 1vh) * 100);
    position: relative;
}


</style>