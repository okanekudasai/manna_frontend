<template>
    <div :class="{ hide: $route.name=='welcome' }">
        <div id="profile_notification_container">
            <div class="flex flex_vertical_center">
                <div class="hover_pointer" style="position:relative; margin-right: 20px;" @click="toggle_notification_content()">
                    <img src="@/img/bell.svg" alt="" style="width: 32px;">
                    <div id="notification_badge">
                        1
                    </div>
                </div>
                <div class="hover_pointer flex flex_vertical_center flex_horizontal_center" id="profile_container" style="overflow: hidden" @click="toggle_profile_menu()">
                    <div v-if="!myInfoStore.pending && myInfoStore.myInfo.profile_url != undefined" style="height: 100%; padding: 0px;">
                        <img :src="myInfoStore.myInfo.profile_url" alt="" style="width: 100%; height: 100%; object-fit: cover; border-radius: 100px;">
                    </div>
                </div>
            </div>
            <div :class="{hide: profile_menu_hidden && notification_content_hidden}">
                <div style="position: fixed; top:0; left:0; width: 100vw; height: 100vh; z-index: -1;" @click="close_menu()"></div>
                <div style="position: relative; top: 10px;">
                    <NotificationContentComponent class="profile_notification_context" :class="{hide: notification_content_hidden}" @close_this_modal="close_menu"/>
                    <ProfileMenuComponent class="profile_notification_context" :class="{hide: profile_menu_hidden}" @close_this_modal="close_menu"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<script>
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
            myInfoStore: useMyInfoStore(),
            profile_height: "45px",
            profile_menu_hidden: true,
            notification_content_hidden: true,
        }
    },
    methods: {
        toggle_profile_menu() {
            this.profile_menu_hidden = !this.profile_menu_hidden;
            if (!this.profile_menu_hidden) {
                this.notification_content_hidden = true;
            }
        },
        toggle_notification_content() {
            this.notification_content_hidden = !this.notification_content_hidden;
            if (!this.notification_content_hidden) {
                this.profile_menu_hidden = true;
            }
        },
        close_menu() {
            this.profile_menu_hidden = true;
            this.notification_content_hidden = true;
        },
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

.profile_notification_context {
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.18);
}
</style>

