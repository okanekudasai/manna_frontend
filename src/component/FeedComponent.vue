<template>
    <div>
        <span>피드</span>
        <div v-for="feed in feed_q" :key="feed.article_id">
            <div id="profile_box" class="flex flex_vertical_center">
                <div>
                    <img :src="feed.writer_profile_url" alt="" style="width: 40px; aspect-ratio: 1/1; object-fit: cover; border-radius: 40px;">
                </div>
                <div>
                    <div>{{ feed.writer }}</div>
                    <div>프로필 방문 ></div>
                </div>
            </div>
            <hr>
            <div class="flex">
                <div style="height: 160px; overflow-y: hidden; position: relative;">
                    <div>
                        <div v-if="feed.article_title != null" style="margin-bottom: 10px; font-weight: 900;">
                            {{ feed.article_title }}
                        </div>
                        <div>
                            {{ feed.article_content }}
                        </div>
                    </div>
                    <div style="position: absolute; bottom: 0; width: 100%; height: 100px; background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgb(255, 255, 255));"></div>
                </div>
                <div style="position: relative;">
                    <img :src="feed.article_thumbnail" alt="" style="height: 160px; aspect-ratio: 1/1; object-fit: cover;">
                    <div style="position: absolute; right: 0; bottom: 0; width: 18px; height: 18px; text-align: center; line-height: 18px; color: white; background-color: rgba(0, 0, 0, 0.459);">
                        {{ feed.article_picture_count }}
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="flex flex_vertical_center">
                    <div>
                        <img src="@/img/article_like.svg" alt="" style="width: 25px;">
                    </div>
                    <div>
                        {{ feed.heart_count }}
                    </div>
                </div>
                <div class="flex flex_vertical_center">
                    <div>
                        <img src="@/img/article_reply.svg" alt="" style="width: 25px;">
                    </div>
                    <div>
                        {{ feed.reply_count }}
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
            feed_q: [
                {
                    article_id: 777,
                    writer: "ffffff",
                    writer_profile_url: "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    article_title: "안녕하세요",
                    article_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur.",
                    article_thumbnail: "https://i.ytimg.com/vi/HHCGkGA-Sis/maxresdefault.jpg",
                    article_picture_count: 7,
                    heart_count: 5,
                    reply_count: 6,
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
