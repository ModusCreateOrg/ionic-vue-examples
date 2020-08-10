<template>
  <IonVuePage :title="'Popover'">
    <ion-button @click="openPopover('md', $event)">Open Popover (md)</ion-button>
    <br />
    <ion-button @click="openPopover('ios', $event)">Open Popover (ios)</ion-button>
    <PopoverContent
      ref="popoverContent"
      v-show="isOpen"
      title="My popover"
      :closeMe="closePopover"
      @close="closePopover"
    />
  </IonVuePage>
</template>

<script>
import { popoverController } from '@ionic/core'
import PopoverContent from '@/components/popover/index.vue'
export default {
  name: 'Popover',
  components: {
    PopoverContent,
  },
  data() {
    return {
      isOpen: false,
      popover: null,
    }
  },
  mounted() {
    this.$on('close', () => {
      this.closePopover()
    })
  },
  methods: {
    closePopover() {
      popoverController.dismiss()
    },
    async openPopover(mode, event) {
      this.popover = await popoverController.create({
        component: this.$refs.popoverContent.$el,
        event,
        mode,
      })
      this.isOpen = true
      this.popover.present()
    },
  },
}
</script>
