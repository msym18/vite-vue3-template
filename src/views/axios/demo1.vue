<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../../utils/request/index'

export default defineComponent({
  setup() {
    axios
      .get('/users/XPoet1')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>

<style lang="scss" scoped></style>
