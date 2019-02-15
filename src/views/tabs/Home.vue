<template>
    <ion-content>
      <p :key="i" v-for="(n, i) in numbers">{{ n }}</p>
    </ion-content>
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
    console.log('created home tab')

    for (var i of [...Array(1000).keys()]) {
      this.numbers[i] = Math.round(Math.random() * 10)
    }
  },
  mounted() {
    console.log('mounted home tab')
  },
  destroyed() {
    console.log('destroyed home tab')
  },
}
</script>
