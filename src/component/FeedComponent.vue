<template>
    <div>
        <span>피드</span>
        <div v-for="(feed, index) in feed_q" :key="index">

            <div class="article_content_container">
                <div class="article_content_box">
                    <div>
                        <div class="article_title" v-if="feed.article_title != null">
                            {{ feed.article_title }}
                        </div>
                        <div class="content_box">
                            {{ feed.article_content }}
                        </div>
                    </div>
                    <div class="content_gradient"></div>
                </div>
                <div v-if="feed.article_thumbnail != null" style="position: relative">
                    <img class="article_thumbnail" :src="feed.article_thumbnail" alt="" />
                    <div class="article_picture_count_badge">
                        {{ feed.article_picture_count }}
                    </div>
                </div>
            </div>
            <div class="flex" style="justify-content: space-between;">
                <div id="profile_box" class="flex flex_vertical_center">
                    <div>
                        <img class="profile_box_img" :src="feed.writer_profile_url" alt="" />
                    </div>
                    <div>
                        <div>{{ feed.writer }}</div>
                        <router-link :to="`/profile/${feed.writer_id}`">
                            <div class="visit_profile_box">프로필 방문 &gt;</div>
                        </router-link>
                    </div>
                </div>
                <div class="flex">
                    <div class="flex flex_vertical_center">
                        <div>
                            <img class="like_reply_icon" src="@/img/article_like.svg" alt="" />
                        </div>
                        <div>
                            {{ feed.heart_count }}
                        </div>
                    </div>
                    <div class="flex flex_vertical_center">
                        <div>
                            <img class="like_reply_icon" src="@/img/article_reply.svg" alt="" />
                        </div>
                        <div>
                            {{ feed.reply_count }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!no_data" style="text-align: center; margin: 30px 0;">
            <img src="@/img/pending.svg" alt="" style="width: 30px;">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thumbnail_height: '160px',
            data_loading: false,
            no_data: false,
            feed_q: [
                {
                    article_id: 777,
                    writer_id: 123,
                    writer: "ffffff",
                    writer_profile_url:
                        "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    article_title: "안녕하세요",
                    article_content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla maiores ipsum accusantium corrupti repudiandae distinctio facere eligendi, reiciendis eaque quae rerum debitis molestias blanditiis voluptatem odit itaque sed consequatur.",
                    article_thumbnail:
                        "https://i.ytimg.com/vi/HHCGkGA-Sis/maxresdefault.jpg",
                    article_picture_count: 7,
                    heart_count: 5,
                    reply_count: 6,
                },
                {
                    article_id: 777,
                    writer_id: 123,
                    writer: "ffffff",
                    writer_profile_url:
                        "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    article_title: "안녕하세요",
                    article_content: "s voluptatem odit itaque sed consequatur.",
                    article_thumbnail:
                        "https://i.ytimg.com/vi/HHCGkGA-Sis/maxresdefault.jpg",
                    article_picture_count: 7,
                    heart_count: 5,
                    reply_count: 6,
                },
                {
                    article_id: 777,
                    writer_id: 123,
                    writer: "ffffff",
                    writer_profile_url:
                        "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    article_title: "안녕하세요",
                    article_content: "luptatem odit itaque sed consequatur.\n",
                    heart_count: 5,
                    reply_count: 6,
                },
                {
                    article_id: 777,
                    writer_id: 123,
                    writer: "ffffff",
                    writer_profile_url:
                        "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    article_title: "안녕하세요",
                    article_content: "s voluptatem odit itaque sed consequatur.",
                    article_thumbnail:
                        "https://i.ytimg.com/vi/HHCGkGA-Sis/maxresdefault.jpg",
                    article_picture_count: 7,
                    heart_count: 5,
                    reply_count: 6,
                },
            ],
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const isAtBottom = window.innerHeight + window.scrollY + 1 > document.body.offsetHeight - 50;

            // console.log(window.innerHeight + window.scrollY, document.body.offsetHeight )
            if (isAtBottom && !this.data_loading) {
                this.scrollToBottom();
            }
        },
        async scrollToBottom() {
            this.data_loading = true;
            let res = await new Promise((resolve, reject) => {setTimeout(() => {
                resolve(1);
            },2000)})
            console.log(res);
            // window.scrollBy(0, -60);

            // 현재 스크롤 위치 가져오기
            const currentScrollPosition = window.scrollY || window.pageYOffset;

            // -60px 스크롤 올린 지점 계산
            const scrollUpPosition = document.body.offsetHeight - window.scrollY - 130;

            // 더 작은 값을 선택
            const smallerPosition = Math.min(currentScrollPosition, scrollUpPosition);

            // 해당 위치로 스크롤 이동
            window.scrollTo({
            top: smallerPosition,
            behavior: 'smooth' // 부드러운 스크롤 효과를 위해 추가 (optional)
            });

            setTimeout(() => {
                this.data_loading = false;
            }, 600)
        },
    }
};
</script>

<style scoped>
/* 모바일 */
@media (max-width: 576px) {
    .article_content_container {
        flex-direction: column-reverse;
    }
    .article_thumbnail {
        width: 100%;
        aspect-ratio: 1/1;
    }
}

@media (min-width: 576px) {
    .article_thumbnail {
        height: v-bind(thumbnail_height);
        aspect-ratio: 1/1;
    }
}

.profile_box_img {
    width: 36px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 40px;
}

.article_content_container {
    display: flex;
    justify-content: space-between;
}

.article_content_box {
    max-height: v-bind(thumbnail_height);
    overflow-y: hidden;
    position: relative
}

.article_title {
    margin-bottom: 10px;
    font-weight: 900
}

.content_gradient {
    position: absolute;
    top: 0;
    width: 100%;
    height: v-bind(thumbnail_height);
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0) 50%,
            rgb(255, 255, 255, 1) 100%)
}

.article_picture_count_badge {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    color: white;
    background-color: rgba(0, 0, 0, 0.459);
}

.article_thumbnail {
    object-fit: cover
}

.like_reply_icon {
    width: 25px;
}
.visit_profile_box {
    font-size: 12px;
    background: rgb(130, 130, 228);
    color: white;
    padding: 4px 8px;
    border-radius: 50px;
}

</style>