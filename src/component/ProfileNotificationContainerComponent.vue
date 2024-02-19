<template>
    <div>
        <div id="profile_notification_container" class="flex flex_vertical_center">
            <div class="hover_pointer" style="position:relative; margin-right: 20px;">
                <span class="material-symbols-outlined" style="font-size: 32px;">
                    notifications
                </span>
                <div id="notification_badge">
                    1
                </div>
            </div>
            <div class="hover_pointer" id="profile_container">

            </div>
        </div>
    </div>
</template>
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
}

</style>

