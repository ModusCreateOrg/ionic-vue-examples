<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">{{ title }}</ion-title>
        <ion-icon @click="close" slot="end" size="large" name="close" />
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      {{ content }}
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  methods: {
    close() {
      this.$ionic.modalController.dismiss()
    },
  },
}
</script>
