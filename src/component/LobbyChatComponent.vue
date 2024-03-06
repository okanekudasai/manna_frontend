<template>
    <div>
        <ModalBackground @close_modal="close_modal()"></ModalBackground>
        <div id="content_container" class="flex" style="flex-direction: column;">
            <div class="flex">
                <div class="hover_pointer modal_type flex flex_vertical_center flex_horizontal_center" @click="modal_chat()">
                    채팅
                </div>
                <div class="hover_pointer modal_type flex flex_vertical_center flex_horizontal_center" @click="modal_people()">
                    대기실
                </div>
            </div>
            <div v-if="modal_type_chat" class="main_content_box">
                <div style="position: absolute; bottom: 0; width: 100%; border: dashed; padding: 0 10px; height: auto;" class="flex">
                    <textarea id="chat_textarea" type="text" @keydown="ggg()" ref="ta"></textarea>
                </div>
            </div>
            <div v-if="modal_type_people" class="main_content_box">
                sefsef
            </div>
        </div>
    </div>
</template>

<script>
import ModalBackground from '@/modal/ModalBackground.vue'
import { useVhStore } from '@/stores/vh';

export default {
    props: {
        base_height: String(),
        base_margin: String(),
    },
    data() {
        return {
            vh: useVhStore().vh,
            modal_type_chat: true,
            modal_type_people: false,
        }
    },
    components: {
        ModalBackground,
    },
    mounted() {
        useVhStore().$subscribe((mutation, state) => {
            this.vh = mutation.events.newValue
        })
    },
    methods: {
        close_modal() {
            this.$emit('close_lobby_chat_modal');
        },
        modal_chat() {
            this.modal_type_chat = true;
            this.modal_type_people = false;
        },
        modal_people() {
            this.modal_type_chat = false;
            this.modal_type_people = true;
        },
        ggg() {
            console.log("ggege");
            console.log(this.$refs.ta.scrollHeight)
        }
    }
}
</script>

<style scoped>

/* 모바일 */
@media (max-width: 576px) { 
    #content_container {
        width: 100%;
    }
}
@media (min-width: 576px) { 
    #content_container {
        max-width: 100%;
        width: 600px;
    }
}


#content_container {
    position: fixed;
    top: calc(v-bind(base_height) + v-bind(base_margin) * 2);
    height: calc(v-bind(vh) * 100 - (v-bind(base_height) + v-bind(base_margin) * 2) - var(--nav-bar-height));
    background-color: rgb(250, 250, 250);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 4px 12px 4px rgba(0, 0, 0, 0.185);
    padding: 35px 10px;
}

.modal_type {
    width: 50%;
    border: dashed;
    /* text-align: center; */
    height: 50px;
}

.main_content_box {
    border: dashed;
    flex-grow: 1;
    position: relative;
}

#chat_textarea {
    width: 60%;
    flex-grow: 1;
    resize: none;
}
</style>
