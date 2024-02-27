<template lang="">
    <div :class="{ hide: uriStore.uri=='welcomePage' }">
        <div id="nav_bar_space"></div>
        <div id="nav_bar" style="z-index: 1000000">
            <div class="flex flex_vertical_center flex_horizontal_center" id="nav_bar_box">
                <router-link to="/mainPage">
                    <div class="nav_card">
                        <div v-if="uriStore.uri == 'mainPage'"><img src="@/img/home_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/home_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>홈</div>
                    </div>
                </router-link>    
                <div class="nav_card">
                    <div v-if="uriStore.uri == 'friendPage'"><img src="@/img/friend_selected.svg" alt="" class="selected_icon"></div>
                    <div v-else><img src="@/img/friend_not_selected.svg" alt="" class="not_selected_icon"></div>
                    <div>친구</div>
                </div>
                <div class="nav_card">
                    <div v-if="uriStore.uri == 'chatPage'"><img src="@/img/chat_selected.svg" alt="" class="selected_icon"></div>
                    <div v-else><img src="@/img/chat_not_selected.svg" alt="" class="not_selected_icon"></div>
                    <div>지난대화</div>
                </div>
                <router-link to="/bulletinBoard">
                    <div class="nav_card">
                        <div v-if="uriStore.uri == 'bulletinBoardPage'"><img src="@/img/bullet_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/bullet_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>게시판</div>
                    </div>
                </router-link>
                <router-link to="/noticePage">
                    <div class="nav_card">
                        <div v-if="uriStore.uri == 'noticePage'"><img src="@/img/notice_selected.svg" alt="" class="selected_icon"></div>
                        <div v-else><img src="@/img/notice_not_selected.svg" alt="" class="not_selected_icon"></div>
                        <div>공지</div>
                    </div>
                </router-link>
            </div>
        </div>
        <FriendListContainerComponent />
    </div>
</template>

<script setup>
import { useUriStore } from '@/stores/uri'
const uriStore = useUriStore();
</script>


<script>
import FriendListContainerComponent from './FriendListContainerComponent.vue';
export default {
    components: {
        FriendListContainerComponent
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
    bottom: 0;
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

</style>