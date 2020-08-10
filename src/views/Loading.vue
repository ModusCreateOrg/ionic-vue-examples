<template>
  <IonVuePage :title="'Loading'">
    <ion-button @click="presentLoading">Show Loading</ion-button>
    <br />
    <ion-button @click="presentLoadingWithOptions">Show Loading</ion-button>
  </IonVuePage>
</template>

<script>
import { loadingController } from '@ionic/core'
export default {
  props: {
    timeout: { type: Number, default: 1000 },
  },
  methods: {
    presentLoading() {
      return loadingController
        .create({
          message: 'Loading',
          duration: this.timeout,
        })
        .then(l => {
          setTimeout(function() {
            l.dismiss()
          }, this.timeout)
          return l.present()
        })
    },
    presentLoadingWithOptions() {
      return loadingController
        .create({
          spinner: null,
          duration: this.timeout,
          message: 'Please wait...',
          translucent: true,
          cssClass: 'custom-class custom-loading',
        })
        .then(l => {
          setTimeout(function() {
            l.dismiss()
          }, this.timeout)
          return l.present()
        })
    },
  },
}
</script>
