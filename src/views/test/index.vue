<template>
  <div>123456</div>
</template>
<script lang="ts">
import { inject } from '@vue/runtime-core'
export default {
  setup() {
    const a = inject('a')
  },
}
</script>
