<template>
    <div id="friend_list_container" @scroll="scrolling()">
        <div v-if="friend_list.length == 0">친구 없음</div>
        <div v-else>
            <div class="flex flex_vertical_center" style="height: 20px;">
                <span>친구 목록</span>
                <span class="hover_pointer" v-if="!edit_mode" style="margin-left: 10px; padding: 4px; color: white; font-size: 12px; background-color: rgba(2, 57, 255, 0.445);" @click="toggle_edit_mode()">수정 ></span>
                <span class="hover_pointer" v-else style="margin-left: 10px; padding: 4px; color: white; font-size: 12px; background-color: rgba(92, 155, 110, 0.445)" @click="toggle_edit_mode()">완료 ></span>
            </div>
            <div id="friend_list_box">
                <div v-for="(friend, index) in friend_list" :key="index" class="flex flex_vertical_center" style="margin-top: 16px; justify-content: space-between;">
                    <div class="flex flex_vertical_center">
                        <div style="position: relative">
                            <img :src="friend.friend_profile_url" alt="" style="width: 45px; aspect-ratio: 1/1; object-fit: cover; border-radius: 100px;">
                            <div class="flex flex_vertical_center flex_horizontal_center" style="padding: 2px; position: absolute; top:0; right: 0; width: 16px; height: 16px; background-color: white; border-radius: 20px;">
                                <div v-if="friend.friend_login" style="width: 100%; height: 100%; background-color: rgb(100, 210, 124); border-radius: 10px;"></div>
                                <div v-else style="width: 100%; height: 100%; background-color: rgb(197, 197, 197); border-radius: 10px;"></div>
                            </div>
                        </div>
                        <div style="margin-left: 10px;">{{ friend.friend_name }}</div>
                    </div>
                    <div>
                        <div id="dialog_type_box" v-if="!edit_mode" class="flex flex_vertical_center">
                            <div class="dialog_type_card dialog_chat">
                                <span class="material-symbols-outlined">
                                    sms 
                                </span>
                            </div>
                            <div style="margin-left: 10px;"></div>
                            <div class="dialog_type_card dialog_phone">
                                <span class="material-symbols-outlined">
                                    mic
                                </span>
                            </div>
                            <div style="margin-left: 10px;"></div>
                            <div class="dialog_type_card dialog_camera">
                                <span class="material-symbols-outlined">
                                    videocam
                                </span>
                            </div>
                        </div>
                        <div class="hover_pointer flex flex_vertical_center flex_horizontal_center" v-if="edit_mode" style="margin-left: 10px; width: 40px; height: 40px; color: white; font-size: 12px; background-color: rgba(255, 0, 0, 0.445); border-radius: 100px">
                            <img src="@/img/trash.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            edit_mode: false,
            friend_list: [
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                }
            ]
        }
    },
    methods: {
        scrolling() {
            event.stopPropagation();
        },
        toggle_edit_mode() {
            this.edit_mode = !this.edit_mode;
        }
    }
}
</script>

<style scoped>
/* 모바일 */
@media (max-width: 600px) { 
    #friend_list_container {
        width: 100%;
    }
}

@media (min-width: 600px) { 
    #friend_list_container {
        width: 500px;
    }
}

#friend_list_container {
    padding: 24px;
    padding-right: 12px;
    padding-bottom: 10px;
    position: fixed;
    bottom: var(--nav-bar-height);
    left: 50%;
    background: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.2);
    transform: translateX(-50%)
}   

#friend_list_box {
    margin-top: 10px;
    padding-right: 12px;
    padding-bottom: 24px;
    max-height: 70vh;
    overflow-y: auto;
}

#friend_list_box::-webkit-scrollbar {
    width: 4px;
}
#friend_list_box::-webkit-scrollbar-thumb {
    background-color: #8aadfb;
    border-radius: 10px;
}
#friend_list_box::-webkit-scrollbar-track {
    background-color: rgb(155, 155, 155);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}
.dialog_type_card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    opacity: 0.8;
    transition: all 0.2s;
}
.dialog_type_card > span {
    font-size: 20px;
    color: white;
}

.dialog_chat {
    background-color: #6e93e2;
}
.dialog_phone {
    background-color: #6dc2a7;
}
.dialog_camera {
    background-color: #9ec86c;

}
@media (hover: hover) {
    
    .dialog_type_card:hover {
        opacity: 1;
        cursor: pointer;
    }
}
</style>
