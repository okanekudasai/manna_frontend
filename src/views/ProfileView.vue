<template>
    <div>
        프로필
    </div>
</template>

<script>
import { useUriStore } from '@/stores/uri'

export default {
    setup() {
        const store = useUriStore();
        store.uri = "profilePage";
    }
}
</script>

<style scoped>

</style>
