import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// axios를 모든 컴포넌트에서 사용하기 위해 쳤음
import axios from 'axios'
const app = createApp(App)
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$header = {
    headers:{"Content-Type": "application/x-www-form-urlencoded"}
}

app.use(createPinia())
app.use(router)

app.mount('#app')
