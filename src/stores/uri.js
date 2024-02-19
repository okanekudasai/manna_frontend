
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUriStore = defineStore('uri', () => {
    let uri = ref('')
    function setUri(s) {
        uri.value = s;
    }
    return { uri, setUri }
});
