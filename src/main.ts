import { createApp } from 'vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import './style.scss'
import App from './App.vue'
const app = createApp(App)
app.use( VueSplide );

// app.use(router)
app.mount('#app')