<template>
    <div id="modal_container" class="flex flex_vertical_center flex_horizontal_center" ref="modal_container" @click="exit_modal()">
        <router-view @click="stop_propagation()"></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        let vh = window.innerHeight * 0.01;
        this.$refs.modal_container.style.setProperty('--vh', `${vh}px`);
    },
    methods: {
        exit_modal() {
            this.$router.back();
        },
        stop_propagation() {
            event.stopPropagation();
        }
    }
}
</script>

<style scoped>
#modal_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:calc(var(--vh, 1vh) * 100);
    background: rgba(0, 0, 0, 0.671);
    z-index: 1000;
}
</style>
