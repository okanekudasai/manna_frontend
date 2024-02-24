<template lang="">
    <div>
        <div id="information_container">
            <div id="information_box">
                <RecommendPeopleComponent />
                <FeedComponent />
            </div>
        </div>
    </div>
</template>
<script>
import RecommendPeopleComponent from './RecommendPeopleComponent.vue';
import FeedComponent from './FeedComponent.vue';

export default {
    components: {
        RecommendPeopleComponent,
        FeedComponent,
    },
    data() {
        return {
            recomment_people: {

            }
        }
    },
}
</script>
<style scoped>

/* 모바일 */
@media (max-width: 576px) { 
    #information_box {
        margin: 30px 0;
    }
}

@media (min-width: 576px) {
    #information_box {
        width: 90%;
        margin: 30px auto;
    }
}

#information_box {
    border: dashed;
    max-width: 1000px;
}

</style>