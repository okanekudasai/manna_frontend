<template>
    <div>
        게시판
    </div>
</template>

<script>
import { useUriStore } from '@/stores/uri'

export default {
    setup() {
        const store = useUriStore();
        store.uri = "bulletinBoardPage";
    }
}
</script>

<style scoped>
</style>
