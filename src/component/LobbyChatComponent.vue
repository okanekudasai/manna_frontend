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
            <div v-if="modal_type_chat" class="main_content_box flex" style="flex-direction: column;">
                <div style="flex-grow: 1; border:dashed;">
                    sefaef
                </div>
                <div style="border: dashed; padding: 0 10px; align-items: end;" class="flex">
                    <div style="border: dashed; margin-bottom: 10px;" ref="attach_button" class="flex flex_vertical_center">
                        <span class="material-symbols-outlined">
                            attach_file
                        </span>
                    </div>
                    <textarea id="chat_textarea" type="text" v-model="input_lobby_chat" ref="lobby_chat_textarea" rows=1 @focusin="setVhIn()"  @focusout="setVhOut()"></textarea>
                    <div style="border: dashed; margin-bottom: 10px;" ref="send_button">
                        <span class="material-symbols-outlined">
                            send
                        </span>
                    </div>
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
            input_lobby_chat: '',
        }
    },
    components: {
        ModalBackground,
    },
    watch: {
        input_lobby_chat(newValue, oldValue) {
            this.setTextAreaHeight();
            
        }
    },
    mounted() {
        useVhStore().$subscribe((mutation, state) => {
            console.log(this.vh);
            this.vh = useVhStore().vh;
        });

        this.modal_chat();
        this.$refs.lobby_chat_textarea.style.height = 'auto'
        this.$refs.lobby_chat_textarea.style.height = this.$refs.lobby_chat_textarea.scrollHeight + "px"
        this.$refs.send_button.style.height = this.$refs.lobby_chat_textarea.scrollHeight + "px";
        this.$refs.attach_button.style.height = this.$refs.lobby_chat_textarea.scrollHeight + "px";

    },
    methods: {
        close_modal() {
            this.$emit('close_lobby_chat_modal');
        },
        modal_chat() {
            this.modal_type_chat = true;
            this.modal_type_people = false;

            console.log(this.vh);
        },
        modal_people() {
            this.modal_type_chat = false;
            this.modal_type_people = true;
        },
        setTextAreaHeight() {
            console.log(this.$refs.lobby_chat_textarea.style.height);
            this.$refs.lobby_chat_textarea.style.height = 'auto'
            this.$refs.lobby_chat_textarea.style.height = this.$refs.lobby_chat_textarea.scrollHeight + "px"
        },
        setVhIn() {
            setTimeout(() => {
                useVhStore().vh = window.visualViewport.height * 0.01 + 'px';
                document.querySelector("body").style.height = window.visualViewport.height + 'px';
                document.querySelector("body").style.overflow = "hidden"
            }, 500)
        },
        setVhOut() {
            setTimeout(() => {
                useVhStore().vh = window.visualViewport.height * 0.01 + 'px';
            }, 500)
        }
    }
}
</script>

<style scoped>

/* 모바일 */
@media (max-width: 576px) { 
    #content_container {
        width: 100%;
        height: calc(v-bind(vh) * 100 - (v-bind(base_height) + v-bind(base_margin) * 2));
        /* bottom: 0; */
        z-index: 1000000001;
        padding: 35px 10px 0px;
    }
}
@media (min-width: 576px) { 
    #content_container {
        max-width: 100%;
        width: 600px;
        height: calc(v-bind(vh) * 100 - (v-bind(base_height) + v-bind(base_margin) * 2) - var(--nav-bar-height));
        /* bottom: var(--nav-bar-height); */
        padding: 35px 10px;
        z-index: 2;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
}


#content_container {
    position: fixed;
    top: calc(v-bind(base_height) + v-bind(base_margin) * 2);
    background-color: rgb(250, 250, 250);
    box-shadow: 0 4px 12px 4px rgba(0, 0, 0, 0.185);
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
    flex-grow: 1;
    resize: none;
    font-size: 1.2em;
    display: block;
    margin: 10px;
    max-height: 100px;
    /* height: 1.2em; */
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

}


#chat_textarea:focus {
    outline: none;
}
</style>
