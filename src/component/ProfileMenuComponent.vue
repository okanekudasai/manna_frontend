<template>
    <div id="profile_menu_container">
        <div v-if="!myInfoStore.pending">
            <div v-if="Object.keys(myInfoStore.myInfo).length > 0" style="text-align: center;">
                <ul>
                    <div>
                        <label class="hover_pointer flex flex_vertical_center">
                            <span>로그인 유지하기</span> <input type="checkbox" v-model="myInfoStore.keepLogin" :disabled="keep_login_pending" @change="keep_login_button_click();">
                        </label>
                    </div>
                    <hr>
                    <div>
                        <span class="hover_pointer" @click="edit_profile()">프로필 수정</span>
                    </div>
                    <hr>
                    <div>
                        <span class="hover_pointer" @click="logout()">로그아웃</span>
                    </div>
                </ul>
            </div>
            <div v-else>
                구글 로그인
            </div>
        </div>
        <div v-else>
            펜딩중
        </div>
    </div>
</template>

<script>
import * as httpUtil from '@/util/httpUtil';
import { useMyInfoStore } from '@/stores/myInfo';

export default {
    data() {
        return {
            keep_login_pending: false,
            myInfoStore: useMyInfoStore()
        }
    },
    created() {
        let check = httpUtil.getCookie("keep_login");
        if (httpUtil.getCookie("keep_login") == "") {
            document.cookie = `keep_login=${encodeURIComponent('false')}; max-age=31536000;`;
        } else {
            this.myInfoStore.keepLogin = Boolean(check);
        }
    },
    methods: {
        keep_login_button_click() {
            this.keep_login_pending = true;
            let keep = this.myInfoStore.keepLogin.toString();
            document.cookie = `keep_login=${encodeURIComponent(keep)}; max-age=31536000;`;
            this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/token/changeTokenAge`, {keep: keep}, this.$header).then(() => {this.keep_login_pending = false;});
        },
        edit_profile() {

        },
        logout() {
            this.myInfoStore.myInfo = {};
            this.$axios.delete(`${import.meta.env.VITE_API_SERVER}/auth/deleteToken`).then(res => res.data);
        }
    }
}
</script>

<style scoped>
#profile_menu_container {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgb(255, 255, 255);
    padding: 8px 16px;
    border-radius: 10px;
    width: auto;
    white-space: nowrap;
}
hr {
    border-color: rgba(0, 0, 0, 0.096);
}
ul > div {
    margin: 8px 0;
    font-size: 14px;
}
</style>
