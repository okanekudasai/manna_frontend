<template>
    <div id="chat_list_container" @scroll="scrolling()">
        <div v-if="chat_list.length == 0">지난 채팅 없음</div>
        <div v-else>
            <div class="flex flex_vertical_center" style="height: 20px;">
                <span>채팅 목록</span>
            </div>
            <div id="chat_list_box">
                <div v-for="(chat, index) in chat_list" :key="index" class="flex flex_vertical_center" style="width: 100%">
                    <div class="flex flex_vertical_center" style="max-width: 70%;">
                        <div style="position: relative">
                            <img :src="chat.friend_profile_url" alt="" style="width: 45px; aspect-ratio: 1/1; object-fit: cover; border-radius: 100px;">
                            <div class="flex flex_vertical_center flex_horizontal_center" style="padding: 2px; position: absolute; top:0; right: 0; width: 16px; height: 16px; background-color: white; border-radius: 20px;">
                                <div v-if="chat.friend_login" style="width: 100%; height: 100%; background-color: rgb(100, 210, 124); border-radius: 10px;"></div>
                                <div v-else style="width: 100%; height: 100%; background-color: rgb(197, 197, 197); border-radius: 10px;"></div>
                            </div>
                        </div>
                        <div style="margin-left: 10px; width: 100%;">
                            <div style="font-weight: 900;">{{ chat.friend_name }}</div>
                            <div class="line_box">{{ chat.last_line }}</div>
                        </div>
                    </div>
                    
                    <div style="padding: 4px 0; width: 32px; font-size: 12px; text-align: center; background-color: rgba(255, 0, 0, 0.42); color: white; border-radius: 10px;">
                        1
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
            chat_list: [
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                    last_line: "ffffsfjeifjsiefsfaesfsaefasefasefaesfaegaegaegegasegsaegsaegsaegsaegsaegasgargragrgsargsrgsargsargsargsragarsasrgrsagarses",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: true,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes\nsefjsiefjseif",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
                {
                    chat_id: 124,
                    friend_name: "ffesfesf",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    friend_login: false,
                    last_line: "ffffsfjeifjsiefes",
                },
            ]
        }
    },
    method: {
        scrolling() {
            event.stopPropagation();
        },
    }
}
</script>

<style scoped>

/* 모바일 */
@media (max-width: 600px) { 
    #chat_list_container {
        width: 100%;
    }
}

@media (min-width: 600px) { 
    #chat_list_container {
        width: 500px;
    }
}

#chat_list_container {
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

#chat_list_box {
    margin-top: 10px;
    padding-right: 12px;
    padding-bottom: 24px;
    max-height: 70vh;
    overflow-y: auto;
}

#chat_list_box::-webkit-scrollbar {
    width: 4px;
}
#chat_list_box::-webkit-scrollbar-thumb {
    background-color: #8aadfb;
    border-radius: 10px;
    width: 6px;
}
#chat_list_box::-webkit-scrollbar-track {
    background-color: rgb(155, 155, 155);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}

#chat_list_box > div {
    background-color: rgba(0, 0, 0, 0.034);
    padding: 10px;
    margin-top: 6px;
    justify-content: space-between;
    border-radius: 10px;
    transition: all 0.2s;

    
}

@media (hover: hover) {
    #chat_list_box > div:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.13);
    }
}

.line_box {
    white-space: nowrap; 
    overflow: hidden;  
    text-overflow: ellipsis;  
}
</style>
