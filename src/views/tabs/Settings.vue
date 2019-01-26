<template>
  <ion-content>
    <p :key="i" v-for="(n, i) in numbers">{{ n }}</p>
    <ion-vue-router />
  </ion-content>
</template>

<script>
export default {
  data: function() {
    return {
      numbers: [Math.round(Math.random() * 10), Math.round(Math.random() * 10)],
    }
  },
  created() {
    console.log('created settings tab')
  },
  mounted() {
    console.log('mounted settings tab')
  },
  destroyed() {
    console.log('destroyed settings tab')
  },
}
</script>
