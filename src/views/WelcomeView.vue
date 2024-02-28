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
export default {
    data() {
        return {
            vh: 0,
        };
    },
    created() {
        window.addEventListener('resize', this.setScreenSize);
    },
    mounted() {
        this.setScreenSize();
        //prompt=consent 쿼리는 최초 로그인 이후 같은 계정으로 로그인해도 해당계정에서 동의를 눌러줄거냐 여부를 결정한다. 이게있어야 refresh토큰을 얻을 수가 있는데,, 사실 최초 1회시 정보만 받고 그 이후에는 우리서버에서 토큰을 만들어 줘야 되기 때문에 실질적으로 사용자 경험에 악영향이다. 따라서 로그인 시 정보만 적용하고 토큰은 자체토큰을 발행하는 방향으로 바꾸는 것이 좋다.
        // this.$refs.google_login_button.href=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&access_type=offline&include_granted_scopes=true&prompt=consent&response_type=code&client_id=499447616014-auh4g0dedet0p6b7l7n8d8728lronivh.apps.googleusercontent.com&redirect_uri=${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`;
        this.$refs.google_login_button.href=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&include_granted_scopes=true&response_type=code&client_id=499447616014-auh4g0dedet0p6b7l7n8d8728lronivh.apps.googleusercontent.com&redirect_uri=${import.meta.env.VITE_API_LOGIN_REDIRECT}/mainPage`;
    }, 
    methods: {
        setScreenSize() {
            this.vh = window.innerHeight * 0.01 + 'px';
        }
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