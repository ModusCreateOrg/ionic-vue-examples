<template>
  <IonVuePage :title="'Modal'">
    <ion-button @click="openModal">Open Modal</ion-button>
  </IonVuePage>
</template>

<script>
import Modal from '@/components/modal/index.vue'

export default {
  name: 'Modal',
  methods: {
    openModal() {
      return this.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
            },
          },
        })
        .then(m => m.present())
    },
  },
}
</script>
