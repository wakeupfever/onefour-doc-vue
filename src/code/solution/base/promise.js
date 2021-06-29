const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>'),
    )
  }
  if (x instanceof PromiseFns) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

export class PromiseFns {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }

  // promise 的状态
  status = PENDING

  // 成功之后的值
  value = null

  // 失败之后的原因
  reason = null

  // 存储成功回调函数
  onFulfilledCallback = []

  // 存储失败回调函数
  onRejectedCallback = []

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.status = reason
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    const promise = new PromiseFns((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          const x = onFulfilled(this.value)
          resolvePromise(promise, x, resolve, reject)
        })
      } else if (this.status === REJECTED) {
        onRejected(this.value)
      } else if (this.status === PENDING) {
        this.onFulfilledCallback.push(onFulfilled)
        this.onRejectedCallback.push(onRejected)
      }
    })
    return promise
  }
}

console.log(PromiseFns)
