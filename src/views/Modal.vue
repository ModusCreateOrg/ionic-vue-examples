<template>
  <IonVuePage :title="'Modal'">
    <ion-button @click="openModal">Open Modal</ion-button>
  </IonVuePage>
</template>

<script>
export default {
  name: 'Modal',
  mounted() {
    this.$on('close', () => {
      this.$ionic.modalController.dismiss()
    })
  },
  methods: {
    openModal() {
      return this.$ionic.modalController
        .create({
          component: () => import('@/components/modal/index.vue'),
          componentProps: {
            parent: this,
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
              closeMe: () => {
                this.$ionic.modalController.dismiss()
              },
            },
          },
        })
        .then(m => m.present())
    },
  },
}
</script>
