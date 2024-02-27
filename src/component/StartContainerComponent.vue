<template lang="">
    <div>
        <div id="starting_container" class="flex flex_vertical_center flex_horizontal_center">
            <div id="starting_box">

                <div id="logo_box">
                    
                </div>
                
                <div id="start_button" class="hover_pointer flex flex_vertical_center flex_horizontal_center" @click=open_modal>
                    <span class="material-symbols-outlined" style="margin-right: 8px">
                        forum
                    </span>
                    <div style="position: relative;">
                        모르는 사람과 대화하기
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        open_modal() {
            this.$router.push("/mainPage/modal/startDialog");
        }
    }
}
</script>
<style scoped>
#starting_container {
    height: 600px;
    background-color: bisque;
    position: relative;
}

#logo_box {
    width: 65vw;
    max-width: 350px;
    aspect-ratio: 1 / 1;
    border-radius: 300px;
    background-color: white;
    margin: 0 auto;
}

#start_button {
    margin: 30px auto 0;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    color: white;
    background: linear-gradient(173deg, rgba(52,67,180,1) 0%, rgba(126,120,219,1) 100%);
}


</style>
