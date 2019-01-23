<template>
  <div>
    <app-menu menu-id="first-menu" content-id="menu-page" type="push">
      <div>Content 1</div>
    </app-menu>
    <app-menu menu-id="second-menu" content-id="menu-page" side="end" type="overlay">
      <div>Content 2</div>
    </app-menu>
    <app-menu menu-id="third-menu" content-id="menu-page" side="end" type="reveal">
      <div>Content 3</div>
    </app-menu>
    <IonVuePage :title="'Menu'" id="menu-page">
      <ion-button @click="openMenu('first')">First</ion-button>
      <ion-button @click="openMenu('second')">Second</ion-button>
      <ion-button @click="openMenu('third')">Third</ion-button>
    </IonVuePage>
  </div>
</template>

<script>
import Menu from '@/components/menu/index.vue'

export default {
  name: 'Menu',
  components: { 'app-menu': Menu },
  methods: {
    openMenu(menu) {
      this.$ionic.menuController.enable(true, `${menu}-menu`);
      this.$ionic.menuController.open(`${menu}-menu`);
    },
  },
}
</script>
