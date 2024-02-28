
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSocketStore = defineStore('socket', () => {
    let conn = ref({});
    return { conn }
});
