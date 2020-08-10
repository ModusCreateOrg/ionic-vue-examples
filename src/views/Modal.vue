<template>
  <IonVuePage :title="'Modal'">
    <ion-button @click="openModal">Open Modal</ion-button>
    <ModalContent
      ref="modalContent"
      v-show="isOpen"
      title="My Modal"
      :closeMe="closeModal"
      @close="closeModal"
    />
  </IonVuePage>
</template>

<script>
import { modalController } from '@ionic/core'
import ModalContent from '@/components/modal/index.vue'
export default {
  name: 'Modal',
  components: {
    ModalContent,
  },
  data() {
    return {
      isOpen: false,
      modal: null,
    }
  },
  methods: {
    async createModal() {
      this.modal = await modalController.create({
        component: this.$refs.modalContent.$el,
      })
    },
    async openModal() {
      await this.createModal()
      this.isOpen = true
      this.modal.present()
    },
    closeModal() {
      this.modal.dismiss()
    },
  },
}
</script>
