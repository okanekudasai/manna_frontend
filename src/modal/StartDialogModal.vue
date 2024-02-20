<template lang="">
    <div id="modal_content_container" class="flex flex_horizontal_center flex_vertical_center">
        <div v-if="!started" id="option_box" style="width: 100%;"> 
            <div style="text-align:center; margin-bottom: 24px; font-weight:900;">새로운 만남이 기다려요!</div>
            <div id="people_option_container" class="flex flex_horizontal_center">
                <div class="people_option_card" @click="enter_selecting_mode(1)">
                    <img v-if="sex==0" src="@/img/male_female.png" alt="">
                    <img v-else-if="sex==1" src="@/img/male.png" alt="">
                    <img v-else src="@/img/female.png" alt="">
                    <div>
                        <span v-if="sex==0">남녀모두</span>
                        <span v-else-if="sex==1">남자만</span>
                        <span v-else>여자만</span>
                    </div>
                </div>
                <div class="people_option_card" @click="enter_selecting_mode(2)">
                    <img src="@/img/age.png" alt="">
                    <div>
                        17세 ~ 45세
                    </div>
                </div>
                <div class="people_option_card" @click="enter_selecting_mode(3)">
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
                            <div >
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
                <div>
                    채팅
                </div>
                <div>
                    음성
                </div>
                <div>
                    영상
                </div>
            </div>
        </div>
        <div v-else id="waiting_box">
            <div>
                대화상대를 찾고 있어요!
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            started: false,
            selecting: 1,
            sex: 0,
            content_width: '500px',
        }
    },
    methods: {
        enter_selecting_mode(e) {
            this.selecting = e;
        },
        exit_selecting_mode() {
            this.selecting = 0;
        },
        change_sex(s){
            this.sex = s;
            this.exit_selecting_mode();
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
</style>