<template>
  <IonTabs ref="ionTabs">
    <!-- <ion-tab tab="home">
      <Home />
    </ion-tab>
    <keep-alive>
      <router-view />
    </keep-alive> -->

      <Home />

    <ion-tab tab="settings">
      <Settings />
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="home">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="settings">
          <ion-label>About</ion-label>
          <ion-icon name="settings"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </IonTabs>
</template>

<script>
import Home from '@/views/tabs/Home.vue'
import Settings from '@/views/tabs/Settings.vue'

const HOME_TAB_LINK = '/tabs/home'
const SETTINGS_TAB_LINK = '/tabs/settings'

export default {
  name: 'TabsIndex',
  components: {
    Home,
    Settings,
  },
  methods: {
    switchToHomeTab() {
      this.$router.push(HOME_TAB_LINK)
    },
    switchToSettingsTab() {
      this.$router.push(SETTINGS_TAB_LINK)
    },
  },
  created() {
    console.log('created tabs wrapper')
  },
  mounted() {
    console.log('mounted tabs wrapper')
  },
  destroyed() {
    console.log('destroyed tabs wrapper')
  },
}
</script>
