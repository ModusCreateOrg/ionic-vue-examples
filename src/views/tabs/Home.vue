<template>
  <ion-tab tab="home">
    <ion-content>
      <p :key="i" v-for="(n, i) in numbers">{{ n }}</p>
    </ion-content>
  </ion-tab>
</template>

<script>
export default {
  name: 'TabsHome',
  data: function() {
    return {
      numbers: [Math.round(Math.random() * 10), Math.round(Math.random() * 10)],
    }
  },
  created() {
    console.log('created home tab')
  },
  mounted() {
    console.log('mounted home tab')
  },
  destroyed() {
    console.log('destroyed home tab')
  },
}
</script>
