<template lang="">
    <div id="main_page_container" ref="main_page_container">
        <div ref="info_box">
            <StartContainerComponent></StartContainerComponent>
        </div>
        <InformationContainerComponent></InformationContainerComponent>
        <WaitingPeopleIconComponent></WaitingPeopleIconComponent>
        <router-view />
        <div id="to_top_button" class="flex flex_vertical_center flex_horizontal_center" :class="{ 'scale_0': isScrolled }" @click="go_to_top_button_click()">
            <img src="@/img/arrow_up.svg" alt="" style="width: 80%;">
        </div>
    </div>
</template>

<script>
import StartContainerComponent from '@/component/StartContainerComponent.vue';
import InformationContainerComponent from '@/component/InformationContainerComponent.vue';
import WaitingPeopleIconComponent from '@/component/WaitingPeopleIconComponent.vue';
import { useVhStore } from '@/stores/vh';


import { useMyInfoStore } from '@/stores/myInfo'

export default {
    components: {
        StartContainerComponent,
        InformationContainerComponent,
        WaitingPeopleIconComponent,
    },
    data() {
        return {
            state: "mainPage",
            isScrolled: false,
            myInfoStore: useMyInfoStore(),
            scroll_needed_position: 400,
            vh: useVhStore().vh,
        }
    },
    mounted() {
        
        useVhStore().$subscribe((mutation, state) => {
            this.vh = useVhStore().vh;
        })

        window.addEventListener('scroll', this.handleScroll);
        this.scroll_needed_position = this.$refs.info_box.offsetHeight;
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY < this.scroll_needed_position;
        },
        go_to_top_button_click() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>
<style scoped>
#main_page_container {
    min-height: calc(v-bind(vh) * 100);
    position: relative;
}

#to_top_button {
    position: fixed;
    bottom: var(--nav-bar-height);
    right: 0;
    margin: 8px;
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.189);
    border-radius: 100px;
    transition: all 0.2s
}

@media (hover: hover) {
    #to_top_button:hover {
        background-color: rgba(0, 0, 0, 0.459);
        cursor: pointer;
    }
}
</style>