<template>
    <div id="container" @click="close_modal()">
    </div>
</template>

<script>
import { useVhStore } from '@/stores/vh';

export default {
    data() {
        return {
            vh: useVhStore().vh,
        }
    },
    mounted() {
        useVhStore().$subscribe((mutation, state) => {
            this.vh = mutation.events.newValue
        })
    },
    methods: {
        close_modal() {
            this.$emit('close_modal');
        }
    }
}
</script>

<style scoped>
#container {
    position: fixed;
    top: 0;
    left: 0;
    height: calc(v-bind(vh) * 100);
    width: 100vw;
}
</style>
