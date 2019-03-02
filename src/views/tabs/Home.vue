<template>
  <ion-tab tab="home" :routes="['tabs.home', 'tabs.home2']">
    <ion-content>
      <router-view/>
      <p :key="i" v-for="(n, i) in numbers">{{ n }}</p>
    </ion-content>
  </ion-tab>
</template>

<script>
export default {
  name: 'TabsHome',
  data: function() {
    return {
      numbers: [],
    }
  },
  created() {

    for (var i of [...Array(1000).keys()]) {
      this.numbers[i] = Math.round(Math.random() * 10)
    }
    console.log('created home tab', this.numbers)
  },
  mounted() {
    console.log('mounted home tab')
  },
  destroyed() {
    console.log('destroyed home tab')
  },
}
</script>
