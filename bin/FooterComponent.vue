<template lang="">
    <div>
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
}
</script>
<style lang="">

/* 모바일 */
@media (max-width: 576px) { 
    #information_box {
        margin: 30px 10px;
    }
    #footer_box {
        flex-direction: column;
    }
    #footer_box_vertical_line {
        display: none;
    }
    #footer_space {
        height: 200px;
    }
    #footer {
        height: 200px;
    }
}

@media (min-width: 576px) {
    #footer_space {
        height: 150px;
    }
    #footer {
        height: 150px;
    }
}
#footer {
    width: 100%;
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
</style>