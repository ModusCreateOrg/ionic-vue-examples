<template>
    <ion-content>
      <p :key="i" v-for="(n, i) in numbers">
      <span @click="$router.push('settings/asd')">{{ n }}</span>
      </p>
      <router-view name="settings-routes"/>
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
