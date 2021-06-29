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
import { PromiseFns } from '../../../src/code/solution/base/promise.js'
export default {
  async setup() {
    const promise = new PromiseFns((resolve, reject) => {
      resolve('success')
    })
    const p1 = promise.then((value) => {
      console.log(1)
      console.log('resolve', value)
      return p1
    })

    // 运行的时候会走reject
    p1.then(
      (value) => {
        console.log(2)
        console.log('resolve', value)
      },
      (reason) => {
        console.log(3)
        console.log(reason.message)
      },
    )
  },
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
