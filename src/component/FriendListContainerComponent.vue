<template>
    <div id="friend_list_container">
        <div v-if="friend_list.length == 0">친구 없음</div>
        <div v-else>
            <div>
                <span>친구 목록</span>
            </div>
            <div id="friend_list_box">
                <div v-for="(friend, index) in friend_list" :key="index" class="flex flex_vertical_center" style="margin-top: 10px; justify-content: space-between;">
                    <div class="flex flex_vertical_center">
                        <img :src="friend.friend_profile_url" alt="" style="width: 45px; aspect-ratio: 1/1; object-fit: cover; border-radius: 100px;">
                        <div style="margin-left: 10px;">{{ friend.friend_name }}</div>
                    </div>
                    <div class="flex flex_vertical_center">
                        <div>
                            채팅
                        </div>
                        <div>
                            음성
                        </div>
                        <div>
                            화상
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
            friend_list: [
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                },
                {
                    friend_id: 123,
                    friend_name: "ffffff",
                    friend_profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                }
            ]
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
    max-height: 200px;
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
</style>
