<template lang="">
    <div id="main_page_container" ref="main_page_container">
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
                <div id="recommend_people_container">
                    <div id="recommend_people_box" class="flex flex_vertical_center">
                        <div v-for="people in dummy_people" class="recommeded_people_card">
                            {{people}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="waiting_people_icon" class="hover_pointer flex flex_vertical_center flex_horizontal_center">
            <span class="material-symbols-outlined" style="font-size: 28px">
                group
            </span>
            <div id="waiting_people_message">
                <div style="margin-bottom: 4px;">1022명의 사람이 대화를</div>
                <div>기다리고 있어요</div>
            </div>
            <div id="waiting_people_badge" class="flex flex_vertical_center flex_horizontal_center">
                2
            </div>
        </div>
        
        <div id="profile_notification_container" class="flex flex_vertical_center">
            <div class="hover_pointer" style="position:relative; margin-right: 20px;">
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
        <div id="nav_bar_space"></div>
        <div id="nav_bar">
            <div class="flex flex_vertical_center" id="nav_bar_box">
                <div class="flex">
                    <div>
                        홈
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
    data() {
        return {
            dummy_people: [
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                },
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                },
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                }
            ]
        }
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
@media (min-width: 576px) {
    #information_box {
        width: 90%;
        margin: 30px auto;
    }
}

#main_page_container {
    min-height:calc(var(--vh, 1vh) * 100);
    position: relative;
}

#nav_bar_space {height: var(--nav-bar-height);}

#nav_bar {
    background-color: rgb(244, 244, 244);
    height: var(--nav-bar-height);
    position: fixed;
    width: 100%;
    bottom: 0;
    box-shadow: 0 -3px 8px 2px rgba(0, 0, 0, 0.08);
}

#nav_bar_box {
    justify-content: space-between;
    height: 100%;
    margin: 0 40px;

}

#profile_notification_container {
    position: fixed;
    top: 12px;
    right: 12px;
    border: dashed;
}

#notification_badge {
    width: 18px;
    height: 18px;
    background: blue;
    position: absolute;
    top: 0;
    right: -3px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
}

#profile_container {
    height: 45px;
    width: 45px;
    background: white;
    border-radius: 40px;
}

#starting_container {
    height: 600px;
    background-color: bisque;
    position: relative;
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
    height: 500px;
    max-width: 1000px;
}


#waiting_people_icon {
    width: 45px;
    height: 45px;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 8px 2px rgba(0,0,0,0.2);
    position: fixed;
    top: 12px;
    left: 12px;
}

#waiting_people_message {
    position:absolute;
    width: 175px;
    left: 60px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    font-size: 0.85em;
    border-radius: 10px;
    border: solid rgba(0, 0, 0, 0.091)
    /* box-shadow: 0 2px 8px 2px rgba(0,0,0,0.2); */
}

#waiting_people_badge {
    position:absolute;
    font-size: 12px;
    width: 20px;
    height: 20px;
    background-color: rgb(144, 144, 227);
    color: white;
    border-radius: 20px;
    top: 0;
    right: -5px;
}

.recommeded_people_card {
    width: 200px
}

</style>