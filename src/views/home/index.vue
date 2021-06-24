<template>
  <!-- https://wx.emspost.com.cn/jsxfs/M00/00/69/rBwBTWDS-ImAOHyQAACxyHaMjRc619.jpg -->
  <div
    class="content"
    :style="{
      backgroundImage: `url(${imgPath})`,
    }"
  >
    <div class="main">
      <div class="search"></div>
      <div class="select-list">
        <div class="select-item"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from '@vue/runtime-core'
import useImg from '~/components/useImg'
export default {
  async setup() {
    const { status, data } = await useImg()
    const imgPath = ref(null)
    if (status === 200) {
      const [item] = data
      imgPath.value = item.src.bigSrc
    }
    return {
      imgPath,
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
