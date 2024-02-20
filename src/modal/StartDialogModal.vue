<template lang="">
    <div id="modal_content_container" class="flex flex_horizontal_center flex_vertical_center">
        <div v-if="!started" id="option_box" style="width: 100%;"> 
            <div style="text-align:center; margin-bottom: 24px; font-weight:900;">새로운 만남이 기다려요!</div>
            <div id="people_option_container" class="flex flex_horizontal_center">
                <div class="people_option_card" @click="toggle_selecting_mode(1)">
                    <img v-if="sex==0" src="@/img/male_female.png" alt="">
                    <img v-else-if="sex==1" src="@/img/male.png" alt="">
                    <img v-else src="@/img/female.png" alt="">
                    <div>
                        <span v-if="sex==0">남녀모두</span>
                        <span v-else-if="sex==1">남자만</span>
                        <span v-else>여자만</span>
                    </div>
                </div>
                <div class="people_option_card" @click="toggle_selecting_mode(2)">
                    <img src="@/img/age.png" alt="">
                    <div>
                        17세 ~ 45세
                    </div>
                </div>
                <div class="people_option_card" @click="toggle_selecting_mode(3)">
                    <img src="@/img/earth.png" alt="">
                    <div>
                        모든지역
                    </div>
                </div>
            </div>
            <div v-if="selecting > 0" id="option_select_container">
                <div v-if="selecting == 1">
                    <div id="sex_selecting_card_box" class="flex flex_horizontal_center">
                        <div class="sex_selecting_card" :class="{selected_sex_card : sex==0}" @click="change_sex(0)">
                            <div>
                                <img src="@/img/male_female.png" alt="">
                                <div>남녀모두</div>
                            </div>
                        </div>
                        <div class="sex_selecting_card" :class="{selected_sex_card : sex==1}" @click="change_sex(1)">
                            <div>
                                <img src="@/img/male.png" alt="">
                                <div>남자만</div>
                            </div>
                        </div>
                        <div class="sex_selecting_card" :class="{selected_sex_card : sex==2}" @click="change_sex(2)">
                            <div>
                                <img src="@/img/female.png" alt="">
                                <div>여자만</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="selecting == 2">
                    <div @click="exit_selecting_mode()">확인</div>
                </div>
                <div v-else>
                    <div @click="exit_selecting_mode()">확인</div>
                </div>
            </div>
            <div id="dialog_type_container" class="flex flex_horizontal_center">
                <div @click="selecting_type(0)" class="hover_pointer dialog_type_card flex flex_vertical_center flex_horizontal_center" :class="{selected_type : dialog_type==0}">
                    <span class="material-symbols-outlined">
                        sms 
                    </span>
                    <span>채팅</span>
                </div>
                <div @click="selecting_type(1)" class="hover_pointer dialog_type_card flex flex_vertical_center flex_horizontal_center" :class="{selected_type : dialog_type==1}">
                    <span class="material-symbols-outlined">
                        mic
                    </span>
                    <span>음성</span>
                </div>
                <div @click="selecting_type(2)" class="hover_pointer dialog_type_card flex flex_vertical_center flex_horizontal_center" :class="{selected_type : dialog_type==2}">
                    <span class="material-symbols-outlined">
                        videocam
                    </span>
                    <span>영상</span>
                </div>
            </div>
            <div id="real_start_button" class="hover_pointer" @click="real_start_button_click()">
                대화를 시작해요!
            </div>
        </div>
        <div v-else id="waiting_box" style="width: 100%;">
            <div id="dialog_candidate_container" class="flex flex_vertical_center flex_horizontal_center">
                <div style="width: 100%; margin: 0 12px;">
                    <div v-if="dialog_candidate==null" class="flex flex_vertical_center">
                        <img src="@/img/pending.svg" alt="" style="width: 30px; margin-right: 10px;">
                        <span>대화상대를 찾고 있어요!</span>
                    </div>
                    <div v-else>
                        <div class="flex flex_horizontal_center flex_vertical_center" style="margin-bottom: 20px">
                            <div>
                                <img id="dialog_candidate_profile" :src="dialog_candidate.profile_url" alt="">
                            </div>
                            <div style="margin-left: 20px;">
                                <div>
                                    {{dialog_candidate.nickname}}
                                </div>
                                <div>
                                    {{dialog_candidate.age}}
                                </div>
                                <div>
                                    {{dialog_candidate.sex}}
                                </div>
                                <div>
                                    {{dialog_candidate.nation}}
                                </div>
                                <div>
                                    <div v-for="h in dialog_candidate.hobby">
                                        {{h}}
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div style="text-align: center; margin-bottom: 5px;">
                            남은 시간 : {{candidate_timer}}초
                        </div>
                        <div style="width: 100%; height: 12px; border-radius:100px; background-color: gray; margin-bottom: 24px;">
                            <div style="width: 60%; height: 100%; border-radius:100px; background-color: blue"></div>
                        </div>
                        <div class="flex flex_horizontal_center">
                            <div class="hover_pointer candidate_accept_reject_button candidate_accept">수락</div>
                            <div style="width: 20px;"></div>
                            <div class="hover_pointer candidate_accept_reject_button candidate_reject">거절</div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="stop_find_button_click()" id="stop_find_button" class="hover_pointer flex flex_vertical_center flex_horizontal_center">
                <span class="material-symbols-outlined">
                    cancel
                </span>
                <span>중지</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            started: true,
            selecting: 0,
            sex: 0,
            dialog_type: 0,
            content_width: '500px',
            dialog_candidate: {
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
            candidate_timer: 7,

            dialog_candidate_q: [
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
                }
            ],
        }
    },
    methods: {
        enter_selecting_mode(e) {
            this.selecting = e;
        },
        exit_selecting_mode() {
            this.selecting = 0;
        },
        toggle_selecting_mode(s) {
            if (this.selecting > 0 && s == this.selecting) this.exit_selecting_mode();
            else this.enter_selecting_mode(s);
        },
        change_sex(s){
            this.sex = s;
            this.exit_selecting_mode();
        },
        selecting_type(s) {
            this.dialog_type = s;
        },
        real_start_button_click() {
            this.started = true;
        },
        stop_find_button_click() {
            this.$router.back();
        }
    }
}
</script>
<style scoped>

#modal_content_container {
    max-width: 92%;
    width: v-bind(content_width);
    padding: 60px 0;
    background: rgb(253, 253, 253);
    border-radius: 15px;
    transition: all 0.2s;
}
.people_option_card {
    margin: 0 4px;
    width: 28%;
    height: 150px;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0,0,0,0.05);
    border-radius: 10px;
}

@media (hover: hover) {
    .people_option_card:hover, .sex_selecting_card:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0.2);
    }
    #real_start_button:hover {
        background-color: rgb(90, 128, 254);
    }
    #stop_find_button:hover {
        background-color: rgb(226, 91, 91)
    }
    .candidate_accept:hover {
        background-color: rgb(114, 114, 222);
    }
    .candidate_reject:hover {
        background-color: rgb(168, 168, 168);
    }
}

.people_option_card > img {
    transition: all 0.2s;
}
/* 모바일 */
@media (max-width: 576px) { 
    .people_option_card > img {
        width: 60px;
    }
}

/* PC */
@media (min-width: 576px) { 
    .people_option_card > img {
        width: 80px;
    }
}
.people_option_card > div {
    margin-top: 8px;
}

#option_select_container {
    margin-top: 24px;
}

#dialog_type_container {
    margin-top: 24px;
}

#sex_selecting_card_box {
    text-align: center;
}
#sex_selecting_card_box img {
    width: 60px;
}
.selecting_confirm_cancel_button {
    width: 100px;
    padding: 16px 0px;
    border-radius: 10px;
    margin-top: 24px;
    text-align: center;
    opacity: 0.8;
    color: white;
    transition: all 0.2s;
}
.selecting_confirm_cancel_button:hover {
    opacity: 1;
}
.selecting_confirm {
    background-color: rgb(106, 106, 232);
}

.selecting_cancel {
    background-color: rgb(232, 106, 106);
}

.sex_selecting_card {
    padding: 10px 20px;
    border-radius: 10px;
    margin: 0 4px;
    transition: all 0.2s;
    border: solid rgba(0, 0, 0, 0.15) 0.2px;
}

.selected_sex_card {
    background-color: rgba(0, 0, 0, 0.06);
}

.dialog_type_card {
    margin: 0 5px;
    padding: 10px 18px;
    border-radius: 20px;
    
    background-color: rgba(0, 0, 0, 0.05);
}
.dialog_type_card > span:first-child {
    margin-right: 3px;
}
.selected_type {
    background-color: rgb(118, 118, 238);
    color: white;
}
#real_start_button {
    width: 80%;
    margin: 30px auto 0;
    text-align: center;
    padding: 20px 0;
    border-radius: 20px;
    background: rgb(124, 155, 255);
    color: white;
    font-weight: 900;
    transition: all 0.2s;
}
#stop_find_button {
    width: 150px;
    margin: 30px auto 0;
    padding: 10px 0;
    background-color: rgb(252, 121, 121);
    color: white;
    border-radius: 100px;
    transition: all 0.2s;
}
#stop_find_button > span:first-child {
    margin-right: 4px;
}

#dialog_candidate_container {
    width: 90%;
    height: 360px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.119);
    background-color: rgb(246, 246, 246);
}

#dialog_candidate_profile {
    width: 180px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 180px;
    border: solid 10px rgba(0, 0, 0, 0.08);
}
.candidate_accept_reject_button {
    padding: 15px 30px;
    border-radius: 14px;
    color: white;
    border: solid 1px rgb(224, 224, 224);
    transition: all 0.2s;
}
.candidate_accept {
    background-color: rgb(148, 148, 255);
}
.candidate_reject {
    background-color: rgb(192, 192, 192);
}
</style>

