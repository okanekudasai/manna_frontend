<template>
    <div id="content_container">
        <div>
            취미가 비슷한 사람
        </div>
        <div id="person_card_box" ref="person_card_box" class="flex">
            <div v-for="person in recomment_people" class="person_card">
                <div style="position: relative;">
                    <img :src="person.profile_url" alt="" class="person_card_profile">
                    <div style="position: absolute; bottom: 0; width: 100%; height: 50%; background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.687))">
                        
                    </div>
                </div>
                <div>
                    {{ person.nickname }}
                </div>
                <div>
                    {{ person.age }}
                </div>
                <div>
                    {{ person.sex }}
                </div>
                <div>
                    {{ person.nation }}
                </div>
                <div v-for="h in person.hobby">
                    {{ h }}
                </div>
                <div>
                    쪽지 보내기
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recomment_people: [
                {
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
                },{
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
    },
    beforeDestroy() {
        document.removeEventListener("wheel", this.handleScroll);
    },
    methods: {
        handle_x_scroll() {
            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
            this.$refs.person_card_box.scrollLeft -= delta * 40;
            event.preventDefault();
        }
    }
}
</script>

<style scoped>
#content_container {
    padding: 10px;
}
#person_card_box {
    padding-bottom: 10px;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;  /*IE, Edge*/
    scrollbar-width: none; /*Firefox*/
}
.person_card {
    flex: 0 0 auto;
    width: 200px;
    height: 300px;
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
</style>
