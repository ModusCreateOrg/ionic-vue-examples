// Base dependencies
import Vue from 'vue'
import { IonicVueRouter } from '@modus/ionic-vue'
import Home from '@/views/Home.vue'

// Enable the ionic-vue router plugin
Vue.use(IonicVueRouter)

// Create a new IonicVueRouter instance
// Define and export our routes
export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/action-sheet', component: () => import('@/views/ActionSheet.vue') },
    { path: '/alert', component: () => import('@/views/Alert.vue') },
    { path: '/modal', component: () => import('@/views/Modal.vue') },
  ],
})
