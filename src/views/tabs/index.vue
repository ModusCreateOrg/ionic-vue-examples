<template>
  <ion-tabs ref="ionTabs">
    <ion-tab tab="home">
      <Home />
    </ion-tab>

    <ion-tab tab="settings">
      <ion-vue-router name="settings-tab" />
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" @click="switchToHomeTab">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
        <ion-badge>6</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="settings" @click="switchToSettingsTab">
        <ion-label>About</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script>
const HOME_TAB_LINK = '/tabs'
const SETTINGS_TAB_LINK = '/tabs/settings'

export default {
  components: {
    Home: () => import('@/views/tabs/Home.vue'),
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
