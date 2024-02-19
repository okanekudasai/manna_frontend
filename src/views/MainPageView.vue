<template lang="">
    <div id="main_page_container" ref="main_page_container">
        <div id="nav_bar">
            <div class="flex flex_vertical_center" id="nav_bar_box">
                <div class="flex">
                    <div>
                        공지사항
                    </div>
                    <!--ai로 관심분야가 비슷한 사람들의 소식을 업로드하고싶어요-->
                    <div>
                        피드
                    </div>
                    <!--상태메세지, 대화신청 등을 할 수 있어요-->
                    <div>
                        친구
                    </div>
                </div>
                <div class="flex flex_vertical_center">
                    <div class="hover_pointer" style="position:relative">
                        <span class="material-symbols-outlined" style="font-size: 32px;">
                            notifications
                        </span>
                        <div id="notification_badge">
                            1
                        </div>
                    </div>
                    <div class="hover_pointer" id="profile_container">
                        
                    </div>
                </div>
            </div>
        </div>
        <div id="starting_container" class="flex flex_vertical_center flex_horizontal_center">
            <div id="starting_box">
                <div id="logo_box">
                    
                </div>
                <div id="start_button" class="hover_pointer flex flex_vertical_center flex_horizontal_center">
                    <span class="material-symbols-outlined" style="margin-right: 8px">
                        forum
                    </span>
                    <div style="position: relative;">
                        모르는 사람과 대화하기
                    </div>
                </div>
            </div>
        </div>
        <div id="information_container">
            <div id="information_box">
                <div id="waiting_information_box" class="flex flex_vertical_center" style="justify-content: end;">
                    <div>현재 대화를 기다리는 사람이 10명 있어요.</div>
                    <div id="get_waiting_people_button" class="hover_pointer" @click="get_waiting_people_button_click">둘러보기</div>
                </div>


            </div>
        </div>
        <div id="footer_space"></div>
        <div id="footer" class="flex flex_vertical_center flex_horizontal_center">
            <div id="footer_box" class="flex">
                <div class="flex flex_horizontal_center footer_content" style="flex-direction: column;">
                    <a href='https://okane-on-cliff.tistory.com/238' target='_blank'><div class="underline hover_pointer">개인 정보 처리 방침</div></a>
                    <div>대표자 : Okane</div>
                    <div>Email : Okanekudasai6@gmail.com</div>
                </div>
                <div id="footer_box_vertical_line"></div>
                <div class="flex flex_horizontal_center footer_content" style="flex-direction: column;">
                    <div class="underline hover_pointer">About Mannayo</div>
                    <div class="flex flex_vertical_center"><img src="@/img/git-hub-reverse.png" alt="" style="width: 20px; margin-right: 6px;"><span class="underline hover_pointer">Source Code</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        let vh = window.innerHeight * 0.01;
        console.log(this.$refs)
        this.$refs.main_page_container.style.setProperty('--vh', `${vh}px`);
    },
    methods: {
        get_waiting_people_button_click: () => {
            alert("눌렸음");
        }
    }
}
</script>
<style scoped>
/* 모바일 */
@media (max-width: 576px) { 
    #information_box {
        margin: 30px 10px;
    }
}

#main_page_container {
    min-height:calc(var(--vh, 1vh) * 100);
    position: relative;
}

#nav_bar {
    background-color: brown;
    height: 60px;
}

#nav_bar_box {
    justify-content: space-between;
    height: 100%;
    margin: 0 40px;

}

#notification_badge {
    width: 18px;
    height: 18px;
    background: blue;
    position: absolute;
    top: 0;
    left: -2px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
}

#profile_container {
    height: 38px;
    width: 38px;
    background: white;
    border-radius: 40px;
}

#starting_container {
    height: 600px;
    background-color: bisque;
}

#logo_box {
    width: 65vw;
    max-width: 350px;
    aspect-ratio: 1 / 1;
    border-radius: 300px;
    background-color: white;
    margin: 0 auto;
}

#start_button {
    margin: 30px auto 0;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    color: white;
    background: linear-gradient(173deg, rgba(52,67,180,1) 0%, rgba(126,120,219,1) 100%);
}

#information_box {
    border: dashed;
    max-width: 1000px;
    width: 90%;
    height: 500px;
    margin: 30px auto;
}

#footer_space {
    height: 150px;
}

#footer {
    width: 100%;
    height: 150px;
    background-color: rgb(56, 56, 56);
    position: absolute;
    bottom: 0;
}

#footer_box_vertical_line {
    width: 1px;
    background-color: white;
    height: 100px;
    margin: 0 30px;
}

.footer_content div {
    margin: 5px;
    color: white;
}

#get_waiting_people_button {
    margin-left: 15px;
    padding: 10px 25px;
    background-color: blue;
    color: white;
    border-radius: 30px;
}
</style>