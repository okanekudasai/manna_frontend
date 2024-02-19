<template lang="">
    <div>
        <div id="information_container">
            <div id="information_box">
                <div id="recommend_people_container">
                    <div id="recommend_people_box" class="flex flex_vertical_center">
                        <div v-for="people in dummy_people" class="recommeded_people_card">
                            {{people}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            dummy_people: [
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                },
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                },
                {
                    email: 'lsss',
                    profile: 'dsfefse',
                    name: 'gogogogo',
                    age: 16,
                    sex: 'male',
                    city: 'Seoul',
                    nation: 'Korea',
                    hobby: [
                        '드라마', '그림', '유튜브'
                    ]
                }
            ]
        }
    },
}
</script>
<style scoped>

/* 모바일 */
@media (max-width: 576px) { 
    #information_box {
        margin: 30px 10px;
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
    height: 500px;
    max-width: 1000px;
}

</style>