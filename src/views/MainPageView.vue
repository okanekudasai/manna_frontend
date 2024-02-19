<template lang="">
    <div id="main_page_container" ref="main_page_container">
        <StartContainerComponent></StartContainerComponent>
        <InformationContainerComponent></InformationContainerComponent>
        <WaitingPeopleIconComponent></WaitingPeopleIconComponent>
        <ProfileNotificationContainerComponent></ProfileNotificationContainerComponent>
    </div>
</template>
<script>
import StartContainerComponent from '@/component/StartContainerComponent.vue';
import InformationContainerComponent from '@/component/InformationContainerComponent.vue';
import WaitingPeopleIconComponent from '@/component/WaitingPeopleIconComponent.vue';
import ProfileNotificationContainerComponent from '@/component/ProfileNotificationContainerComponent.vue';

import { useUriStore } from '@/stores/uri'

export default {
    components: {
        StartContainerComponent,
        InformationContainerComponent,
        WaitingPeopleIconComponent,
        ProfileNotificationContainerComponent,
    },
    data() {
        return {
            state: "mainPage",
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