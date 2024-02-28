import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', () => {
    let general = ref({})
    return { general }
});
