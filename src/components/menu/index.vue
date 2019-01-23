<template>
  <ion-menu :side="side" :menu-id="menuId" :content-id="contentId" :type="type">
    <ion-header> 
      <ion-toolbar :color="color">
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-menu>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Default' },
    side: { type: String, default: 'start' },
    menuId: { type: String, default: undefined },
    contentId: { type: String, default: undefined },
    color: { type: String, default: 'primary' },
    type: { type: String, default: undefined },
  },
  methods: {
    closeMenu() {
      this.$emit('close')
    },
  },
}
</script>

<style>
</style>
