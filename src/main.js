// Base dependencies
import Vue from 'vue'
import Ionic from '@modus/ionic-vue'
import router from '@/router'

// Ionic core styles and theming
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'

// Import IonVuePage component
import IonVuePage from '@/components/IonVuePage.vue'

// Enable the ionic-vue plugin
Vue.use(Ionic)

// Register as global component to be used as boilerplate
Vue.component('IonVuePage', IonVuePage)

// Create a new Vue instance
new Vue({
  router,
}).$mount('#app')
