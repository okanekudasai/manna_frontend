<template lang="">
    <div>
        <div id="waiting_people_icon" class="hover_pointer flex flex_vertical_center flex_horizontal_center" @click="get_waiting_people_button_click">
            <img class="" src="@/img/group.svg" alt="" style="width: 30px;">
            
            <div class="waiting_people_badge flex flex_vertical_center flex_horizontal_center" :class="{'small_font': new_message_count >= 100}">
                {{ (new_message_count >= 100) ? '+99' : new_message_count }}
            </div>
        </div>
        <!-- <div id="waiting_people_message" v-if="socket.people_list.length > 0"> -->
        <div id="waiting_people_message" :class="{'size_down_Y': hide_waiting_people_number}">
            <div>{{ socket.people_list.length }}명의 사람이 대화를</div>
            <div>기다리고 있어요</div>
        </div>
    </div>
</template>

<script>
import { useSocketStore } from '@/stores/socket';

export default {
    data() {
        return {
            hide_waiting_people_number: true,
            new_message_count: 22,
            socket: useSocketStore()
        }
    },
    watch: {
        socket(newValue, oldValue) {
            console.log("변화감지!")
        }
    },
    created() {
        this.hide_waiting_people_number = false;
        setTimeout(() => {
            this.hide_waiting_people_number = true;
        }, 500000)
        
    },
    mounted() {
        this.socket.$subscribe((mutation, state) => {
            console.log(mutation);
            console.log(state);
        })
    },
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
    position: fixed;
    width: 175px;
    top: 10px;
    left: 66px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    font-size: 0.85em;
    border-radius: 10px;
    border: solid rgba(0, 0, 0, 0.091)
    /* box-shadow: 0 2px 8px 2px rgba(0,0,0,0.2); */
}

.waiting_people_badge {
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
    
.small_font {
    font-size: 9px;
}

#waiting_people_message {
    transition: all 0.1s;
}

.size_down_Y {
    transform: scaleY(0);
}
</style>