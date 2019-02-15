<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      <slot />
    </ion-content>
    <ion-footer>
      <div class="footer-text">Carefully crafted by</div>
      <a href="https://labs.moduscreate.com" target="_blank">
        <img src="@/images/modus-labs-logo.svg" class="modus-labs-logo" alt="Modus Labs Logo" />
      </a>
    </ion-footer>
  </ion-page>
</template>

<script>
export default {
  name: 'IonVuePage',
  props: {
    title: { type: String, default: '' },
    showBackButton: { type: Boolean, default: true },
  },
}
</script>

<style>
.footer-text {
  font-size: 80%;
  margin: 10px 0;
  text-align: center;
}
.modus-labs-logo {
  display: block;
  margin: 0 auto 10px auto;
  width: 9.6825rem;
}
p {
  margin: 42px;
  font-size: 20px;
}
</style>
