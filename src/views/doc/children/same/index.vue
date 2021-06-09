<template>
  <div class="container-same" v-html="docCurrentPath"></div>
</template>
<script lang="ts">
import { computed } from '@vue/runtime-core'
import { useStore } from '~/store'

export default {
  async setup() {
    const store = useStore()
    const docCurrentPath = computed(() => store.state.doc.docCurrentPath)
    return {
      docCurrentPath,
    }
  },
}
</script>
