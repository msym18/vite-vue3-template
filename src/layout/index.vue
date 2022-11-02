<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './main.vue'
export default defineComponent({
  name: 'layout',
  components: {
    Main
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
