<template>
    <div id="content_container">
        <div>
            취미가 비슷한 사람
        </div>
        <div style="position:relative;">
            <div id="person_card_box" ref="person_card_box" class="flex">
                <div v-for="(person, index) in recommend_people" class="person_card" :key="index">
                    <div style="position: relative;">
                        <img :src="person.profile_url" alt="" class="person_card_profile">
                        <div
                            style="position: absolute; bottom: 0; width: 100%; height: 50%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.687))">
                        </div>
                    </div>
                    <div class="flex flex_vertical_center">
                        <div style="font-weight: 900;">{{ person.nickname }}</div>
                        <router-link :to="`/profile/${person.person_id}`">
                            <div class="visit_profile_box">프로필 방문 &gt;</div>
                        </router-link>
                    </div>
                    <div class="flex">
                        <div>
                            {{ person.age }}
                        </div>
                        <div>
                            <img class="sex_icon" v-if="person.sex == 'male'" src="@/img/male.svg" alt="">
                            <img class="sex_icon" v-else-if="person.sex == 'female'" src="@/img/female.svg" alt="">
                        </div>
                        <div>
                            {{ person.nation }}
                        </div>
                    </div>
                    <div class="flex flex_vertical_center">
                        <img src="@/img/hobby.svg" alt="" style="width: 24px;">
                        <div v-for="(h, index) in person.hobby" :key="index">
                            {{ h }}
                        </div>
                    </div>
                    <div>
                        쪽지 보내기111
                    </div>
                </div>
                <div v-if="recommend_people_loading" class="flex flex_vertical_center">
                    <img src="@/img/pending.svg" alt="" style="width: 30px; margin-right: 20px;">
                </div>
            </div>
            <div class="arrow_box left_arrow flex flex_vertical_center flex_horizontal_center">
                <div class="hover_pointer flex flex_vertical_center flex_horizontal_center arrow_inner_box" @click="smoothScroll(-1)">
                    <span>&lt;</span>
                </div>
            </div>
            <div class="arrow_box right_arrow flex flex_vertical_center flex_horizontal_center">
                <div class="hover_pointer flex flex_vertical_center flex_horizontal_center arrow_inner_box" @click="smoothScroll(1)">
                    <span>&gt;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recommend_people_loading: false,
            recommend_people: [
                {
                    person_id: 123,
                    nickname: "닉네임",
                    profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    age: 24,
                    sex: "male",
                    city: "daegu",
                    nation: "kr",
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                },
                {
                    person_id: 123,
                    nickname: "닉네임2222",
                    profile_url: "https://img.hankyung.com/photo/201811/01.18271154.1.jpg",
                    age: null,
                    sex: null,
                    city: null,
                    nation: null,
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                },
                {
                    person_id: 123,
                    nickname: "닉네임3333",
                    profile_url: "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    age: 25,
                    sex: "female",
                    city: "hiroshima",
                    nation: "jp",
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                }, 
                {
                    person_id: 123,
                    nickname: "닉네임",
                    profile_url: "https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/13/sbsnoriter/20230313145738118regu.jpg",
                    age: 24,
                    sex: "female",
                    city: "daegu",
                    nation: "kr",
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                },
                {
                    person_id: 123,
                    nickname: "닉네임2222",
                    profile_url: "https://img.hankyung.com/photo/201811/01.18271154.1.jpg",
                    age: null,
                    sex: null,
                    city: null,
                    nation: null,
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                },
                {
                    person_id: 123,
                    nickname: "닉네임3333",
                    profile_url: "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
                    age: 25,
                    sex: "female",
                    city: "hiroshima",
                    nation: "jp",
                    hobby: [
                        "유튜브",
                        "운동",
                        "그림"
                    ]
                }
            ]
        }
    },
    mounted() {
        this.$refs.person_card_box.addEventListener("wheel", this.handle_x_scroll);
        const personCardBox = this.$refs.person_card_box;

        personCardBox.addEventListener('scroll', () => {
            
            const currentScrollLeft = personCardBox.scrollLeft;
            const maxScrollLeft = personCardBox.scrollWidth - personCardBox.clientWidth;

            // console.log(currentScrollLeft);
            if (currentScrollLeft + 1>= maxScrollLeft) {
                this.onScrollEnd();
            }
        });
    },
    beforeDestroy() {
        document.removeEventListener("wheel", this.handleScroll);
    },
    methods: {
        handle_x_scroll() {
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            this.$refs.person_card_box.scrollLeft -= delta * 40;
            event.preventDefault();
        },
        smoothScroll(e) {
            const duration = 500; // 애니메이션 기간 (밀리초)

            this.smoothScrollTo(this.$refs.person_card_box, duration, e);
        },
        smoothScrollTo(element, duration, e) {
            const startScrollLeft = element.scrollLeft;
            const targetScrollLeft = startScrollLeft + 500 * e; // 목표 scrollLeft 값
            const startTime = performance.now();

            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < duration) {
                    const easing = easeInOutQuad(elapsedTime / duration);
                    const newScrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easing;
                    element.scrollLeft = newScrollLeft;
                    requestAnimationFrame(scrollAnimation);
                } else {
                    element.scrollLeft = targetScrollLeft;
                }
            }

            function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }

            requestAnimationFrame(scrollAnimation);
        },
        async onScrollEnd() {
            if (this.recommend_people_loading) return;
            this.recommend_people_loading = true;
            let res = await new Promise((resolve, reject) => {setTimeout(() => {
                resolve(1);
            },1000)})
            console.log(res);
            this.$refs.person_card_box.scrollLeft -= 70;
            this.recommend_people_loading = false;
        }
    }
}
</script>

<style scoped>

/* 모바일 */
@media (max-width: 576px) {
    .person_card {
        width: 160px;
        height: 240px;
    }
    .arrow_box {
        display: none;
    }
}

@media (min-width: 576px) {
    .person_card {
        width: 200px;
        height: 300px;
    }
}

#person_card_box {
    padding: 14px;
    padding-right: 0;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    /*IE, Edge*/
    scrollbar-width: none;
    /*Firefox*/
}

.person_card {
    flex: 0 0 auto;
    margin-right: 30px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.228)
}

.person_card_profile {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}

.sex_icon {
    width: 20px;
}

.visit_profile_box {
    font-size: 12px;
    background: rgb(130, 130, 228);
    color: white;
    padding: 4px 8px;
    border-radius: 50px;
}

.arrow_box {
    position: absolute;
    top: 0;
    height: 100%;
}
.left_arrow {
    left: -20px;
}
.right_arrow {
    right: -20px;
}

.arrow_inner_box {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: rgba(244, 244, 244, 0.518);
    box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.194);
}
</style>
