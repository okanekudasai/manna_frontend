<template>
    <div>
        <span>피드</span>
        <div v-for="(feed, index) in feed_q" :key="index" style="margin: 60px 0;">

            <div class="article_content_container">
                
                <div class="article_content_box">
                    
                <div id="profile_box" class="flex flex_vertical_center">
                    <div>
                        <img class="profile_box_img" :src="feed.writer.profile_url" alt="" />
                    </div>
                    <div>
                        <div>{{ feed.writer.name }}</div>
                        <router-link :to="`/profile/${feed.writer_id}`">
                            <div class="visit_profile_box">프로필 방문 &gt;</div>
                        </router-link>
                    </div>
                </div>
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
        <div ref="last_element">
            <div class="last_element_box" v-if="!no_data">
                <img v-if="data_loading" src="@/img/pending.svg" alt="" style="width: 30px;">
            </div>
            <div class="last_element_box" v-else="">
                더 이상 데이터가 없어요;;
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            feed_page: 0,
            thumbnail_height: '200px',
            data_loading: true,
            no_data: false,
            feed_q: undefined,
        };
    },
    async created() {
        // await new Promise((resolve, reject) => {setTimeout(() => {
        //     console.log("기다림 끝");
        //     resolve(1);
        // }, 10000)})
        this.feed_q = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/feed/getFeedPage/${this.feed_page++}`).then(res => res.data.content)
        this.data_loading = false;
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
            if (isAtBottom && !this.data_loading && !this.no_data) {
                this.scrollToBottom();
            }
        },
        async scrollToBottom() {
            this.data_loading = true;
            let new_data = await this.$axios.get(`${import.meta.env.VITE_API_SERVER}/feed/getFeedPage/${this.feed_page++}`).then(res => res.data.content)
            let res = await new Promise((resolve, reject) => {setTimeout(() => {
                resolve(1);
            }, 1800)})
            if (new_data.length == 0) {
                this.no_data = true;
                return;
            }
            this.feed_q.push(...new_data);
            console.log("피드 데이터 받아옴");
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

.last_element_box {
    text-align: center; margin: 30px 0; height: 32px;
}
</style>