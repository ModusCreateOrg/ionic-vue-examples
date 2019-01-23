<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">{{ title }}</ion-title>
        <ion-icon @click="close" slot="end" size="large" name="close" />
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      {{ content }}
      <br />
      <ion-button @click="closeMe">Close Me!</ion-button>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: { type: String, default: 'Super Modal' },
    closeMe: { type: Function, default: () => {} },
  },
  data() {
    return {
      content: 'Content',
    }
  },
  methods: {
    close() {
      this.$parent.$emit('close', { foo: 'bar' })
    },
  },
}
</script>
