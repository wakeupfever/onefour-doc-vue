<template>
  <!-- https://wx.emspost.com.cn/jsxfs/M00/00/69/rBwBTWDS-ImAOHyQAACxyHaMjRc619.jpg -->
  <div
    class="content"
    :style="{
      backgroundImage: `url(./16953.webp)`,
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
export default {
  async setup() {},
}
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .main {
    color: white;
  }
}
</style>
