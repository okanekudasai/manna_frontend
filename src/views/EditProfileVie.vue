<template>
    <div>
        정보수정 페이지
    </div>
</template>

<script>
import { useUriStore } from '@/stores/uri'

export default {
    setup() {
        const store = useUriStore();
        store.uri = "editProfilePage"
    }
}
</script>

<style scoped>
</style>
