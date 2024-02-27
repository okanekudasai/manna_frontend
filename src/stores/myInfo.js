
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMyInfoStore = defineStore('myInfo', () => {
    let myInfo = ref({});
    let pending = ref(false);
    let keepLogin = ref(false);
    return { myInfo, pending, keepLogin }
});
