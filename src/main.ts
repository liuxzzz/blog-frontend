import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const pinia = createPinia()

import App from './App.vue'
const app = createApp(App)

app.use(pinia)

app.use(Antd)

app.use(router)

app.mount('#app')
