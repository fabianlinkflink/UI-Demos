import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
import './style.css'
import router from './router'
import App from '@/views/App.vue'

const app =createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
