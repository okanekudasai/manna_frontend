<template lang="">
    <div :class="{ hide: $route.name=='welcome' }">
        <div id="nav_bar_space"></div>
        <div id="nav_bar" style="z-index: 1000000">
            <div class="flex flex_vertical_center flex_horizontal_center" id="nav_bar_box">
                <router-link to="/mainPage">
                    <div class="nav_card" @click="close_modal">
                        <div v-if="$route.name == 'mainPage'"><img src="@/img/home_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/home_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>홈</div>
                    </div>
                </router-link>    
                <div class="nav_card" @click="toggle_show_friend_list()">
                    <div v-if="show_friend_list"><img src="@/img/friend_selected.svg" alt="" class="selected_icon"></div>
                    <div v-else><img src="@/img/friend_not_selected.svg" alt="" class="not_selected_icon"></div>
                    <div>친구</div>
                </div>
                <div class="nav_card" @click="toggle_show_chat_list()">
                    <div v-if="show_chat_list"><img src="@/img/chat_selected.svg" alt="" class="selected_icon"></div>
                    <div v-else><img src="@/img/chat_not_selected.svg" alt="" class="not_selected_icon"></div>
                    <div>지난대화</div>
                </div>
                <router-link to="/bulletinBoard">
                    <div class="nav_card" @click="close_modal">
                        <div v-if="$route.name == 'bulletinBoard'"><img src="@/img/bullet_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/bullet_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>게시판</div>
                    </div>
                </router-link>
                <router-link to="/noticePage">
                    <div class="nav_card" @click="close_modal">
                        <div v-if="$route.name == 'noticePage'"><img src="@/img/notice_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/notice_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>공지</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-if="show_friend_list||show_chat_list">
            <div id="modal_close_area" @click="close_modal()"></div>
            <FriendListContainerComponent v-if="show_friend_list" />
            <ChatListComponent v-if="show_chat_list"/>
        </div>
    </div>
</template>

<script>
import FriendListContainerComponent from './FriendListContainerComponent.vue';
import ChatListComponent from './ChatListComponent.vue';
import { useVhStore } from '@/stores/vh';

export default {
    components: {
        FriendListContainerComponent,
        ChatListComponent
    },
    data() {
        return {
            show_friend_list: false,
            show_chat_list: false,
            vh: useVhStore().vh,
        }
    },
    mounted() {
        useVhStore().$subscribe((mutation, state) => {
            this.vh = useVhStore().vh;
        })
    },
    methods: {
        toggle_show_friend_list() {
            console.log("!!!!!");
            this.show_friend_list = !this.show_friend_list;
            if (this.show_friend_list) this.show_chat_list = false;
        },
        toggle_show_chat_list() {
            this.show_chat_list = !this.show_chat_list;
            if (this.show_chat_list) this.show_friend_list = false;
        },
        close_modal() {
            this.show_friend_list = false;
            this.show_chat_list = false;
        }
    }
}
</script>

<style scoped>
    
/* 모바일 */
@media (max-width: 576px) { 
    #nav_bar_box {
        justify-content: space-evenly;
    }
}


#nav_bar_space {height: var(--nav-bar-height);}

#nav_bar {
    background-color: rgb(244, 244, 244);
    height: var(--nav-bar-height);
    position: fixed;
    top: calc(v-bind(vh) - var(--nav-bar-height));
    width: 100%;
    box-shadow: 0 -3px 8px 2px rgba(0, 0, 0, 0.08);
    transition: all 0.2s;
}

#nav_bar_box {
    height: 100%;
}

.nav_card {
    width: 70px;
    text-align: center;
    margin: 0 3px;
    transition: all 0.2s;
    padding: 5px;
}

@media (hover: hover) {
    .nav_card:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.2);
    }
}

.nav_card > div:last-child {
    margin-top: 4px;
    font-size: 0.7em;
}

.selected_icon {
    width: 30px;
}
.not_selected_icon {
    width: 30px;
}
#modal_close_area {
    width: 100vw;
    height: calc(v-bind(vh) * 100 - var(--nav-bar-height));
    position: fixed;
    top:0; left: 0;
}
</style>