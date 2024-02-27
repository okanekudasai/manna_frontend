<template>
    <div id="loading_view_container" :class="{hide: hide}">
        로딩화면
    </div>
</template>

<script>
import * as httpUtil from '@/util/httpUtil';
import { useMyInfoStore } from '@/stores/myInfo';

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
        let user_info = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/token/getUserInfo`).then(res => res.data);
        let keep_login = httpUtil.getCookie("keep_login");
        if (user_info != "" || keep_login == "true") {
            if (keep_login == "true") {
                this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/token/changeTokenAge`, {keep: true}, this.$header);
            }
            this.myInfoStore.myInfo = user_info;
            this.myInfoStore.pending = false;
            this.$router.push("/mainPage");
        }
        this.hide = true;
    },
    mounted() {
        this.setScreenSize();
    }, 
    methods: {
        setScreenSize() {
            this.vh = window.innerHeight * 0.01 + 'px';
        }
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
