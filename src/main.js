import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//Tutaj wypisywać wszystkie ikony których będę używał
import { faRoadLock } from '@fortawesome/free-solid-svg-icons'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main.css'

library.add(faRoadLock)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
