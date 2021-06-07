<template>
  <div class="container-same">{{ test }}</div>
</template>
<script lang="ts">
import { toRefs, reactive, watch } from '@vue/runtime-core'
import { useStore } from '~/store'
// import { mapGetters } from 'vuex'

export default {
  async setup() {
    const store = useStore()

    const state = reactive({
      test: store.getters['doc/getDocCurrentPath'],
      value: '',
    })

    // const testAVC = computed(() => store.getters['doc/getDocCurrentPath'])
    console.log(state.test)
    const testAVC = watch(state.test, (val) => {
      console.log(val)
    })

    return {
      ...toRefs(state),
      testAVC,
    }
  },
}
</script>
