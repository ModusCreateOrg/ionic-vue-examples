// Base dependencies
import Vue from 'vue'
import Ionic from '@modus/ionic-vue'
import router from '@/router'

// Ionic core styles and theming
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

// Enable the ionic-vue plugin
Vue.use(Ionic)

// Create a new Vue instance
new Vue({
  router,
}).$mount('#app')
