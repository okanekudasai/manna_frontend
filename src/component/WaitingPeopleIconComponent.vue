<template lang="">
    <div>
        <div id="waiting_people_icon" class="hover_pointer flex flex_vertical_center flex_horizontal_center" @click="get_waiting_people_button_click">
            <img src="@/img/group.svg" alt="" style="width: 30px;">
            <div id="waiting_people_message">
                <div style="margin-bottom: 4px;">1022명의 사람이 대화를</div>
                <div>기다리고 있어요</div>
            </div>
            <div id="waiting_people_badge" class="flex flex_vertical_center flex_horizontal_center">
                2
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        get_waiting_people_button_click: () => {
            alert("눌렸음");
        }
    }
}
</script>
<style scoped>
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
    
</style>