import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faBed, faChartLine, faPerson, faAdjust } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

let icons = [faSun, faBed, faChartLine, faPerson, faAdjust]

for (let icon of icons) {
  library.add(icon)
}

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
