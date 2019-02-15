// Base dependencies
import Vue from 'vue'
import { IonicVueRouter } from '@modus/ionic-vue'
import Home from '@/views/Home.vue'

import { default as HomeTabs } from '@/views/tabs/Home.vue'

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
    { path: '/loading', component: () => import('@/views/Loading.vue') },
    { path: '/menu', component: () => import('@/views/Menu.vue') },
    { path: '/modal', component: () => import('@/views/Modal.vue') },
    {
      path: '/tabs',
      component: () => import('@/views/tabs/index.vue'),
      children: [
        // { path: 'home', name: 'tabs.home', component: HomeTabs },
        { path: 'home', name: 'tabs.home' },
        { path: 'home2', name: 'tabs.home2', component: { template: '<h1>home2</h1>' }},
        // { path: 'home' },
        // { path: 'home', component: HomeTabs },
        // { path: 'home/qwe', components: {} },
        { path: 'settings', name: 'tabs.settings' },
        // { path: 'settings', components: {} },
        { path: 'settings/asd', name: 'tabs.settings.asd', component: { template: '<h1>asdasdasd</h1>' }
        // { path: 'settings/asd', component: { template: '<h1>asdasdasd</h1>' }
        },
      ],
    },
  ],
})
