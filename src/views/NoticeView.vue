<template>
    <div>
        공지
    </div>
</template>

<script>
import { useUriStore } from '@/stores/uri'

export default {
    setup() {
        const store = useUriStore();
        store.uri = "noticePage"
    }
}
</script>

<style scoped>
</style>
