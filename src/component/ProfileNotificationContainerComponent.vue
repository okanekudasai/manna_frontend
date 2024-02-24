<template>
    <div :class="{ hide: store.uri=='welcomePage' }">
        <div id="profile_notification_container" class="flex flex_vertical_center">
            <div class="hover_pointer" style="position:relative; margin-right: 20px;">
                <img src="@/img/bell.svg" alt="" style="width: 32px;">
                <div id="notification_badge">
                    1
                </div>
            </div>
            <div class="hover_pointer" id="profile_container">
                
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUriStore } from '@/stores/uri'
const store = useUriStore();
</script>

<script>
export default {
    
}
</script>
<style scoped>
    
#profile_notification_container {
    position: fixed;
    top: 12px;
    right: 12px;
}

#notification_badge {
    width: 18px;
    height: 18px;
    background: blue;
    position: absolute;
    top: 0;
    right: -3px;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size: 12px;
}

#profile_container {
    height: 45px;
    width: 45px;
    background: white;
    border-radius: 40px;
    box-shadow: 0 2px 4px 1px rgba(0,0,0,0.1);
}

</style>

