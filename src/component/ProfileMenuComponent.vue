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
                        <router-link to="/editProfilePage">
                            <span class="hover_pointer" @click="edit_profile()">프로필 수정</span>
                        </router-link>
                    </div>
                    <hr>
                    <div>
                        <span class="hover_pointer" @click="logout()">로그아웃</span>
                    </div>
                </ul>
            </div>
            <div v-else>
                <a :href="google_login_url">구글로그인</a>
            </div>
        </div>
        <div v-else>
            <img src="@/img/spinning1.svg" alt="" style="width: 50px; object-fit: cover;">
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
            myInfoStore: useMyInfoStore(),
            google_login_url: `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=code&client_id=499447616014-auh4g0dedet0p6b7l7n8d8728lronivh.apps.googleusercontent.com&redirect_uri=${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`
        }
    },
    created() {
        let check = httpUtil.getCookie("keep_login");
        if (httpUtil.getCookie("keep_login") == "") {
            document.cookie = `keep_login=${encodeURIComponent('false')}; max-age=31536000;`;
        } else {
            this.myInfoStore.keepLogin = check;
        }
    },
    mounted() {
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
            this.$axios.delete(`${import.meta.env.VITE_API_SERVER}/auth/deleteToken`).then(res => {
                if (res.data == "OK") {
                    this.$router.push("/mainPage");
                }
            });

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
