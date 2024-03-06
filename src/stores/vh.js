
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVhStore = defineStore('vh', () => {
    let vh = ref('')
    return { vh }
});
