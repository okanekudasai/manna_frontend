
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyInfoStore = defineStore('myInfo', () => {
    let myInfo = ref({})
    return { myInfo }
});
