<template>
    <div id="welcome_background" ref="welcome_background">
        <div id="center_container">
            <div id="logo_circle">

            </div>
        </div>
        <div id="login_button_container">
            <a ref="google_login_button">
                <div class="hover_pointer" id="login_button">
                    로그인은 구글로그인만!
                </div>
            </a>
            <router-link to="/mainPage">
                <div id="browsing_button">
                    <span class="hover_pointer">둘러보기</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { useUriStore } from '@/stores/uri'

export default {
    data() {
        return {
            inputed_id: "",
            vh: 0,
        };
    },
    created() {
        window.addEventListener('resize', this.setScreenSize);
    },
    mounted() {
        this.setScreenSize();
        this.$refs.google_login_button.href=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&prompt=consent&response_type=code&client_id=499447616014-auh4g0dedet0p6b7l7n8d8728lronivh.apps.googleusercontent.com&redirect_uri=${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`;
    }, 
    methods: {
        setScreenSize() {
            this.vh = window.innerHeight * 0.01 + 'px';
        }
    },
    setup() {
        const store = useUriStore();
        store.setUri("welcomePage");
    }
}
</script>
<style scoped>
    #welcome_background {
        background: linear-gradient(180deg, rgba(132,179,213,1) 0%, rgba(206,247,255,1) 100%);
        height:calc(v-bind(vh) * 100);
        overflow: hidden;
    }
    #center_container {
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        max-width: 380px;
        width: 50%;
    }
    #logo_circle {
        background: white;
        aspect-ratio: 1 / 1;
        border-radius: 190px;
    }
    #login_button_container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        max-width: 380px;
        width: 100%;
        padding: 0 10px;
        text-align: center;
    }
    #login_button {
        background-color: white;
        height: 50px;
        line-height: 50px;
        margin: 0 20px 30px;
    }
    #browsing_button {
        text-decoration : underline;
    }
</style>