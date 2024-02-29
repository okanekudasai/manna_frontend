<template>
    <div id="profile_menu_container">
        <div v-if="!myInfoStore.pending">
            <div class="flex flex_vertical_center flex_horizontal_center">
                <img :src="myInfoStore.myInfo.profile_url" alt=""
                    style="width: 45px; aspect-ratio: 1/1; margin-right: 10px; border-radius: 100px;">
                <div style="font-weight: 900">{{ myInfoStore.myInfo.name }}</div>
            </div>
            <hr style="border-color: rgba(0, 0, 0, 0.434); margin-top: 5px">
            <div v-if="!myInfoStore.myInfo.anonymous">
                <ul>
                    <label>
                        <div class="menu_card hover_pointer flex flex_vertical_center">
                            <img src="@/img/lock.svg" alt="" style="margin-right: 6px; width: 18px;">
                            <span>로그인 유지하기</span>
                            <input type="checkbox" v-model="myInfoStore.keepLogin" :disabled="keep_login_pending"
                                @change="keep_login_button_click();">
                        </div>
                    </label>

                    <hr>
                    <router-link to="/editProfilePage">
                        <div class="menu_card hover_pointer flex flex_vertical_center" @click="edit_profile()">
                            <img src="@/img/edit_profile.svg" alt="" style="margin-right: 6px; width: 18px;">
                            <span>내 정보 수정</span>
                        </div>
                    </router-link>
                    <hr>
                    <div class="menu_card flex flex_vertical_center hover_pointer" @click="logout()">
                        <img src="@/img/logout.svg" alt="" style="margin-right: 6px; width: 18px;">
                        <span>로그아웃</span>
                    </div>
                </ul>
            </div>
            <a v-else :href="google_login_url">
                <div class="menu_card flex flex_vertical_center flex_horizontal_center">
                    <img src="@/img/google.svg" alt="" style="width: 32px; margin-right: 4px">
                    <span style="font-size: 1em; font-weight: 900;">구글로그인</span>
                </div>
            </a>
        </div>
        <div v-else>
            <img src="@/img/spinning1.svg" alt="" style="width: 50px; object-fit: cover;">
        </div>
    </div>
</template>

<script>
import * as httpUtil from '@/util/httpUtil';
import { useMyInfoStore } from '@/stores/myInfo';
import hat_image from '@/img/hat.svg';

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
            this.$axios.post(`${import.meta.env.VITE_API_SERVER}/auth/token/changeTokenAge`, { keep: keep }, this.$header).then(() => { this.keep_login_pending = false; });
        },
        edit_profile() {
            this.$emit('close_this_modal');
        },
        async logout() {
            this.myInfoStore.myInfo = {};
            this.$axios.delete(`${import.meta.env.VITE_API_SERVER}/auth/deleteToken`).then(res => {
                if (res.data == "OK") {
                    this.$router.push("/mainPage");
                }
            });
            document.cookie = `keep_login=${encodeURIComponent("false")}; max-age=31536000;`;

            let anonymousNumber = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/auth/getAnonymousNumber`).then(res => res.data);
            console.log(anonymousNumber + "번 째의 익명유저")
            this.myInfoStore.myInfo = {
                anonymous: true,
                name: "익명유저 " + anonymousNumber,
                profile_url: hat_image,
            }
            this.$emit('close_this_modal');
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
    margin: 1px;
}

.menu_card {
    font-size: 14px;
}

.menu_card {
    padding: 8px;
    background-color: rgb(255, 255, 255);
}

@media (hover: hover) {
    .menu_card:hover {
        background-color: rgba(0, 0, 0, 0.13);
    }
}
</style>
