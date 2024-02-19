<template lang="">
    <div>
        <div id="nav_bar">
            <div class="flex flex_vertical_center" id="nav_bar_box">
                <div class="flex">
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
                    <div style="position:relative">
                        <span class="material-symbols-outlined" style="font-size: 32px;">
                            notifications
                        </span>
                        <div id="notification_badge">
                            1
                        </div>
                    </div>
                    <div id="profile_container">
                        
                    </div>
                </div>
            </div>
        </div>
        <div id=starting_container>
            
        </div>
        <div>
            정보바
        </div>
        <div>
            푸터
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
        top: 0; left: -2px;
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
        max-height: 80%;

        background-color: bisque;
    }
</style>