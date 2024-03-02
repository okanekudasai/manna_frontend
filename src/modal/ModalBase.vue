<template>
    <div id="modal_container" class="flex flex_vertical_center flex_horizontal_center" ref="modal_container" @click="exit_modal()">
        <router-view @click="stop_propagation()"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vh:0,
        }
    },
    created() {
        window.addEventListener('resize', this.setScreenSize);
    },
    mounted() {
        this.setScreenSize();

    },
    methods: {
        exit_modal() {
            this.$router.back();
        },
        stop_propagation() {
            event.stopPropagation();
        },
        setScreenSize() {
            this.vh = window.innerHeight * 0.01 + 'px';
        }
    }
}
</script>

<style scoped>
/* 모바일 */
#modal_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:calc(v-bind(vh) * 100);
    background: rgba(0, 0, 0, 0.671);
    z-index: 1000001;
}
</style>
