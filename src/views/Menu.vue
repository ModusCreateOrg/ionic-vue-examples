<template>
  <div>
    <Menu title="Reveal" side="start" type="reveal" menu-id="reveal" content-id="menu-page" />
    <Menu title="Left" side="start" menu-id="first" />
    <Menu title="Custom" side="start" menu-id="custom" class="my-custom-menu" color="tertiary" />
    <Menu title="Push" side="end" type="push" />

    <IonVuePage :title="'Menu'" id="menu-page">
      <ion-button @click="openLeftMenu">Open left menu</ion-button>
      <br />
      <ion-button @click="openCustomMenu">Open custom menu</ion-button>
      <br />
      <ion-button @click="openRevealMenu">Open reveal menu</ion-button>
      <br />
      <ion-button @click="openPushMenu">Open push menu</ion-button>
    </IonVuePage>
  </div>
</template>

<script>
export default {
  components: {
    Menu: () => import('@/components/menu/index.vue'),
  },
  mounted() {
    this.$on('close', data => {
      this.$ionic.menuController.close(data.menuId)
    })
  },
  methods: {
    openLeftMenu() {
      this.$ionic.menuController.enable(true, 'first')
      this.$ionic.menuController.open('first')
    },
    openCustomMenu() {
      this.$ionic.menuController.enable(true, 'custom')
      this.$ionic.menuController.open('custom')
    },
    openRevealMenu() {
      this.$ionic.menuController.enable(true, 'reveal')
      this.$ionic.menuController.open('reveal')
    },
    openPushMenu() {
      this.$ionic.menuController.open('end')
    },
  },
}
</script>

<style>
.my-custom-menu {
  --width: 500px;
}
</style>
