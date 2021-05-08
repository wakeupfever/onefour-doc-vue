# Vue-Router 实现原理以及应用场景

## 一、概念

通过url变化，更新视图但不重新请求页面，是前端路由核心之一，目前在客户端有两种方式。

1. hash - 利用url中的hash('#')
2. history - 利用 h5 window.history 的api进行操作

我们在配置 router的时候是通过mode这个属性来控制不同类型的路由的模式，默认 hash 模式

```
<!-- 官方 -->
let mode = options.mode || 'hash'
```

***

```
const route = {
  mode: 'history' | 'hash' | 'abstract'
  ...
}
```

## 二、实现方式

1. 初始化

```
<!-- 官方 -->
export default class VueRouter {
  ...
  constructor (options: RouterOptions = {}) {
     // 默认 hash 模式
    let mode = options.mode || 'hash'
    // 如果是 history && 不包含window & ua && fallback !== false，这个时候就会转成 hash 模式
    this.fallback =
      mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    // 没有window 服务端渲染（node），会被转成 abstract 
    if (!inBrowser) {
      mode = 'abstract'
    }
    this.mode = mode

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
  ...
}

```

2. mode
    + 默认hash
    + history，如果浏览器不支持 history api，则采用hash
    + 服务端环境下，采用abstract（Node环境）
