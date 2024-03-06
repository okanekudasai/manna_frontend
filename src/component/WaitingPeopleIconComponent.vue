<template lang="">
    <div id="waiting_people_box" class="flex flex_vertical_center">
        <div id="waiting_people_icon" class="hover_pointer flex flex_vertical_center flex_horizontal_center" @click="get_waiting_people_button_click()">
            <img class="" src="@/img/group.svg" alt="" style="width: 30px;">
            
            <div class="waiting_people_badge flex flex_vertical_center flex_horizontal_center" :class="{'small_font': new_message_count >= 100}">
                {{ (socket.people_list.length >= 100) ? '+99' : socket.people_list.length }}
            </div>
        </div>
        <div id="waiting_people_message" :class="{'size_down_Y': hide_waiting_people_number}">
            <div>{{ socket.people_list.length }}명의 사람이 대화를</div>
            <div>기다리고 있어요</div>
        </div>
    </div>
    <LobbyChatComponent :base_height="icon_height" :base_margin="icon_margin" v-if="show_lobby_chat_modal" @close_lobby_chat_modal="get_waiting_people_button_click()"/>
</template>

<script>
import LobbyChatComponent from '@/component/LobbyChatComponent.vue';
import { useSocketStore } from '@/stores/socket';

export default {
    components: {
        LobbyChatComponent,
    },
    data() {
        return {
            hide_waiting_people_number: true,
            new_message_count: 22,
            socket: useSocketStore(),
            icon_height: "45px",
            icon_margin: "12px",
            show_lobby_chat_modal: true,
        }
    },
    created() {
        setTimeout(() => {
            this.hide_waiting_people_number = false;
            setTimeout(() => {
                this.hide_waiting_people_number = true;
            }, 5000)
        }, 300)
        
    },
    mounted() {
        this.socket.$subscribe((mutation, state) => {
            console.log(mutation);
            console.log(state);
        })
    },
    methods: {
        get_waiting_people_button_click() {
            this.show_lobby_chat_modal = !this.show_lobby_chat_modal;
        }
    }
}
</script>
<style scoped>
#waiting_people_box {
    position: fixed;
    top: v-bind(icon_margin);
    left: v-bind(icon_margin);
}

#waiting_people_icon {
    height: v-bind(icon_height);
    aspect-ratio: 1/1;
    border-radius: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 8px 2px rgba(0,0,0,0.2);
    position: relative;
}

#waiting_people_message {
    margin-left: 10px;
    width: 175px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    font-size: 0.85em;
    border-radius: 10px;
    border: solid rgba(0, 0, 0, 0.091);
    transition: all 0.1s;
    z-index: 10000;
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


.size_down_Y {
    transform: scaleY(0);
}
</style>