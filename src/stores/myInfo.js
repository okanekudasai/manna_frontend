
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyInfoStore = defineStore('myInfo', () => {
    let myInfo = ref({})
    function setMyInfo(s) {
        console.log("수행됨");
        myInfo.value = s;
    }
    return { myInfo, setMyInfo }
});
