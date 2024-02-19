<template>
    <div id="welcome_background" ref="welcome_background">
        <div id="center_container">
            <div id="logo_circle">

            </div>
        </div>
        <div id="login_button_container">
            <div class="hover_pointer" id="login_button" @click="login_button_click">
                로그인은 글로그인만
            </div>
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
        };
    },
    created() {
        window.addEventListener('resize', this.setScreenSize);
    },
    mounted() {
        this.setScreenSize();
    },
    methods: {
        login_button_click: () => {
            alert("fffff");
        },
        setScreenSize() {
            let vh = window.innerHeight * 0.01;
            this.$refs.welcome_background.style.setProperty('--vh', `${vh}px`);
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
        height:calc(var(--vh, 1vh) * 100);
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