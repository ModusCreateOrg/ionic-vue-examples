<template>
  <ion-menu :side="side" :menu-id="menuId" :type="type" :content-id="contentId">
    <ion-header>
      <ion-toolbar :color="color">
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
      <ion-button @click="closeModal">Close me</ion-button>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Menu' },
    side: { type: String, default: 'start' },
    menuId: { type: String, default: undefined },
    contentId: { type: String, default: undefined },
    type: { type: String, default: undefined },
    color: { type: String, default: 'primary' },
  },
  methods: {
    closeModal() {
      this.$parent.$emit('close', {
        menuId: this.menuId,
        side: this.side,
      })
    },
  },
}
</script>
