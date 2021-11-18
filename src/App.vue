<template>
  <keep-alive :include="['/home']">
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
})
</script>

<style lang="scss">
@import url('./assets/stylus/common/index.scss');

#app {
  height: 100vh;
}
</style>
