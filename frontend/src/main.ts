import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(MotionPlugin)
app.mount('#app')