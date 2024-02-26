<template>
    <div :class="{ hide: uriStore.uri=='welcomePage' }">
        <div id="profile_notification_container" class="flex flex_vertical_center">
            <div class="hover_pointer" style="position:relative; margin-right: 20px;">
                <img src="@/img/bell.svg" alt="" style="width: 32px;">
                <div id="notification_badge">
                    1
                </div>
                <NotificationContentComponent />
            </div>
            <div class="hover_pointer" id="profile_container" style="overflow: hidden">
                <img :src="myInfoStore.myInfo.profile_url" alt="" style="width: 100%; aspect-ratio: 1/1; object-fit: cover;">
                
                <ProfileMenuComponent class="profile_menu"/>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<script>
import { useUriStore } from '@/stores/uri'
import { useMyInfoStore } from '@/stores/myInfo';
import ProfileMenuComponent from '@/component/ProfileMenuComponent.vue'
import NotificationContentComponent from './NotificationContentComponent.vue';

export default {
    components: {
        ProfileMenuComponent,
        NotificationContentComponent
    },
    data() {
        return {
            uriStore: useUriStore(),
            myInfoStore: useMyInfoStore(),
            profile_height: "45px",
        }
    },
}
</script>
<style scoped>
    
#profile_notification_container {
    position: fixed;
    top: 12px;
    right: 12px;
}

#notification_badge {
    width: 18px;
    height: 18px;
    background: blue;
    position: absolute;
    top: 0;
    right: -3px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
}

#profile_container {
    height: v-bind(profile_height);
    aspect-ratio: 1/1;
    background: white;
    border-radius: 40px;
    box-shadow: 0 2px 4px 1px rgba(0,0,0,0.1);
}

.profile_menu {
    border: dashed;
}
</style>

