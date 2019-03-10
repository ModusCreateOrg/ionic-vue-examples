<template>
  <IonVuePage :title="'Popover'">
    <ion-button @click="openPopover('md', $event)">Open Popover (md)</ion-button>
    <br />
    <ion-button @click="openPopover('ios', $event)">Open Popover (ios)</ion-button>
  </IonVuePage>
</template>

<script>
export default {
  name: 'Popover',
  mounted() {
    this.$on('close', () => {
      this.$ionic.popoverController.dismiss()
    })
  },
  methods: {
    openPopover(mode, event) {
      return this.$ionic.popoverController
        .create({
          component: () => import('@/components/popover/index.vue'),
          componentProps: {
            parent: this,
            data: {
              content: 'New Content',
            },
            propsData: {
              title: 'New title',
              closeMe: () => {
                this.$ionic.popoverController.dismiss()
              },
            },
          },
          event,
          mode,
        })
        .then(m => m.present())
    },
  },
}
</script>
