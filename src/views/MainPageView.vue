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
    async created() {
        let queryString = window.location.search;
        let queryParams = new URLSearchParams(queryString);
        let value = queryParams.get('code');
        let header = {headers:{"Content-Type": "application/x-www-form-urlencoded"}};
        console.log(value)
        if (value != undefined) {
            console.log("뭔가 있음! 코드를 서버로 보낼게요");
            let token = await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/takeCodeFromClient`, {code: value, redirect_url: `${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`}, header).then(res => res.data);
            console.log(token);
            let user_info = await this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/getUserInfoFromToken`, token, header).then(res => res.data);
            console.log(user_info);
        } else {
            console.log("암것도 없음");
        }
    },
    mounted() {
        let vh = window.innerHeight * 0.01;
        this.$refs.main_page_container.style.setProperty('--vh', `${vh}px`);
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