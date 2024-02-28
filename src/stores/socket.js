
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSocketStore = defineStore('socket', () => {
    let conn = ref({});
    let people_list = ref([]);
    return { conn, people_list }
});
