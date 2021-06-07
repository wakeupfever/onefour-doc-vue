<template>
  <div class="container">
    <header class="header" @click="handleTest">Doc</header>
    <div class="content">
      <aside class="aside">
        <UseDocMenu />
      </aside>
      <router-view class="main" v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </router-view>
    </div>
  </div>
</template>
<script lang="ts">
// import { useStore } from '~/store/index'
import { UseDocMenu } from '~/views/doc/compoSables/useDocAnalyze'

export default {
  components: {
    UseDocMenu,
  },
  setup() {},
  methods: {},
}
</script>

<style lang="scss">
@import url('./compoSables/useDocAnalyze.scss');

.container {
  .header {
    padding: 12px 24px;
    border-bottom: 1px solid rgba(60, 60, 67, 0.12);
    display: flex;
    align-items: center;
  }
  .content {
    display: flex;
    width: 100%;
    .aside {
      width: 320px;
      z-index: 10;
      margin: 0;
      top: 3.6rem;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      border-right: 1px solid #eaecef;
      overflow-y: auto;
    }
    .main {
      flex: 1;
    }
  }
}
</style>
