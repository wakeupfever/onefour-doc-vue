# 模块化

## IIFE模式：匿名函数自调用（闭包）

1. 作用：数据是私有的，外部只能通过暴露的方法操作
2. 编码：将数据和行为封装到一个函数内部，通过给 window 添加属性来向外暴露接口
3. 问题：当前模块依赖另外一个模块

```
  ;(function (window) {
    let val = 1

    function foo() {
      console.log(`foo()${val}`)
    }

    function bar() {
      console.log(`bar${val}`)
      otherFun()
    }

    function otherFun() {
      console.log(`otherFun()`)
    }

    window.fooModule = { foo, bar }
  })(window)
```
## IIFE模式增强：引入依赖

```
  ;(function (window, $) {
    let val = 1

    function foo() {
      console.log(`foo()${val}`)
      $('body').css('color', 'red')
    }

    function bar() {
      console.log(`bar${val}`)
      otherFun()
    }

    function otherFun() {
      console.log(`otherFun()`)
    }

    window.fooModule = { foo, bar }
  })(window, JQuery)
```

## 模块化的意义

1. 避免命名冲冲突，减少命名空间污染
2. 更好的根据功能分模块，按需加载
3. 更高复用性
4. 可维护性

但是如果使用 IIFE 这种模式来进行开发，会有一些小问题。当项目过大的时候，我们分离的模块过多的时候，难免会存在依赖性，这个时候就很容易因为依赖关系导致加载先后顺序出错，变得将会难以维护，而且一个页面还会请求多个js文件。但是这些问题都可以通过模块化规范来解决。也就是现在 commonjs, AMD, ES6, CMD。


## CommonJS

### 描述

这部分规范来源于Node。每个文件就是一个独立的模块，且有自己的作用域，在一个文件里面定义的变量、函数、类都是私有的，对其他文件不可见。在服务端模块加载是运行时同步加载，但在客户端模块是提前编译打包处理的。

### 特点

1. 所有代码都是运行模块作用域，不会软全局作用域。
2. 模块可以多次加载，但是只会第一次加载时运行一次，结果会被缓存，以后再加载直接读取缓存结果，如果要再次运行，必须清楚缓存。
3. 模块加载的顺序，按照其代码中出现的顺序

### 基本语法

1. 导出模块：module.exports = xxx
2. 引用模块：require(xxx), 第三方模块，xxx 为模块名字，自定义模块 xxx 为模块文件路径
3. 注解： CommmonJs规范规定，每个模块内部，module 变量代表当前模块，这个变量是一个对象，exports（module.exports）属性是对外的接口，包含当前模块所暴露的所有属性。加载某个模块，其实是加载该模块的 module.exports属性

