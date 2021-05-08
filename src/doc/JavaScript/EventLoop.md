# JavaScript EventLoop

 众所周知，前端是单线程语言。既然是单线程也就意味着，我们只能一个任务一个任务走下去，但是再执行的时候，我们不可能一直在那里等待，这样体验会很差。所以这个时候产生了另外一种结果，就是我先不管你这个处理结果，我在继续往下走。所以这里就产生了区别。我们把这种区别叫做异步任务，有了异步任务，自然也有同步任务。所以接下来就先简单说说这里的区别

## 同步任务（synchronous）

```
const a = () => console.log(1)
const b = () => console.log(2)
const c = () => console.log(3)

a()
b()
c()
```

输出结果时，会按照执行顺序依次输出 1,2,3，这里的每一行执行都是等待上一行执行完毕之后再输出结果。

## 异步任务（asynchronous）

- Event
- setTimeout、setInterval
- XMLHttpRequest|ajax
- Promise
- async await

异步任务在执行的时候又分为宏任务和微任务

### 宏任务（macro task）
- Event
- setTimeout、setInterval
- XMLHttpRequest|ajax

### 微任务（macro task]）
- Promise
- async await

我们已实际输出结果来演示效果

```
const output = () => {
  console.log(1)
  setTimeout(() => {
    console.log(3)
  }, 0)
  Promise.resolve().then(res => {
    console.log(2)
  })
  return new Promise((resolve, reject) => {
    resolve(4)
  })
  console.log(5)
}
output().then(r => {
  console.log(r)
})
```

结果只会是1,2,4

JavaScript代码块在执行的时候，主线程形成了执行栈，执行同步任务，当同步任务全都执行完了之后，便会从异步任务队列中取出任务优先级高的放到执行栈执行，然后再一次循环这个动作，最后直到执行栈和任务队列都没有任务执行。